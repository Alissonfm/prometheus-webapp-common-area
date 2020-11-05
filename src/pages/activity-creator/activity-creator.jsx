import React from 'react';

import { v4 as uuidV4 } from 'uuid';
import _map from 'lodash/map';
import _find from 'lodash/find';
import _filter from 'lodash/filter';

import { Paper, TextField, Icon, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import { Button } from '../../atoms';
import QuestionCreator from './question-creator';

import './activity-creator.scss';

const BLANK_QUESTION = {
    id: uuidV4(),
    title: 'Lore ipsum',
    type: '',
    answers: [],
};

const GRADES_MOCK = [
    { name: 'T100', value : 'T100'},
    { name: 'T200', value : 'T200'},
    { name: 'T300', value : 'T300'},
];

const ACTIVITY_MOCK = { title: 'Lore ipsum', deadline: '01/01/2021', grade: 'T300'};

const SmallDialog = ({ opened, data, handleClose }) => {

    const [dialogState, updateDialogState] = React.useState({...data});

    if (!opened) return null;

    console.log("Small dialog data: ", data);
    const { title, deadline, grade } = dialogState;
    const changeTitle = ($event) => updateDialogState({...dialogState, title: $event.target.value});
    const changeDeadline = ($event) => updateDialogState({...dialogState, deadline: $event.target.value});
    const changeGrade = ($event) => updateDialogState({...dialogState, grade: $event.target.value});
    const onCloseDialog = () => handleClose(dialogState);

    return (
        <Dialog open>
            <DialogTitle id="form-dialog-title">Configurações principais da Atividade: </DialogTitle>
            <DialogContent className='activity-creator-small-dialog-content'>
                <TextField label='Título:' variant='outlined' defaultValue={title} onChage={changeTitle} />
                <TextField label='Data de entrega limite:' variant='outlined' defaultValue={deadline} type='date' onChange={changeDeadline} />
                <TextField label='Turma detinada:' variant='outlined' defaultValue={grade} select onChange={changeGrade} >
                    {_map(GRADES_MOCK, ({name, value}) => <MenuItem value={value}>{name}</MenuItem>)}
                </TextField>
            </DialogContent>
            <DialogActions><Button onClick={onCloseDialog} color="primary">Ok</Button></DialogActions>
        </Dialog>
    );
};

const QuestionList = ({questions, ...props}) => {
    if (!questions) return null;
    return _map(questions, question => <QuestionCreator {...question} {...props} key={question.id} />);
};

const ActivityCreator = (props) => {

    const [activity, updateActivity] = React.useState({ ...ACTIVITY_MOCK, id: uuidV4() });
    const [smallDialog, updateSmallDialog] = React.useState({ opened: false, data: null});

    const { title, deadline, grade, questions} = activity;

    const openSmallDialog = () => updateSmallDialog(oldState => ({ opened: !oldState.opened, data: { title, deadline, grade} }));
    const closeSmallDialog = () => updateSmallDialog(oldState => ({ opened: !oldState.opened, data: null }));

    const updateFromSmalldialog = (newData) => {
        // console.log("Data from small dialog: ", newData);
        const { title, deadline, grade } = newData;
        updateActivity((oldState) => ({ ...oldState, title, deadline, grade }));
        closeSmallDialog();
    };

    const newQuestion = () => updateActivity(({questions, ...oldState}) => {
        // console.log("Old state: ", questions);
        const newQuestion = Object.assign({}, {...BLANK_QUESTION, id: uuidV4()});
        const newState = questions ? [newQuestion].concat(questions) : [newQuestion];
        // console.log("New state: ", newState);
        return { ...oldState, questions: newState };
    });

    const updateQuestion = (targetQuestion) => {
        // console.log("Save terget question: ", targetQuestion);
        // console.log("Old questions: ", activity.questions);
        updateActivity(({questions, ...activity}) => {
            const newQuestions = _filter(questions, ({id}) => id !== targetQuestion.id);
            // console.log("NewQuestions: ", newQuestions);
            newQuestions.push(targetQuestion);
            return {...activity, questions: newQuestions};
        });
    };

    const duplicateQuestion = (targetQuestion) => {
        // console.log('Duplicate this question: ', targetQuestion);
        updateActivity(({questions, ...oldState}) => {
            const mirrorQuestion = Object.assign({}, {...targetQuestion, id: uuidV4()});
            const stateRef = questions.indexOf(_find(questions, ({id}) => id === targetQuestion.id));
            // console.log("Before duplicate slice: ", questions);
            questions.splice(stateRef, 1, targetQuestion, mirrorQuestion);
            // console.log("After duplicate slice: ", questions);
            return { ...oldState, questions: questions };
            // const newState = [copiedQuestion].concat(questions);
            // return { ...oldState, questions: newState };
        });
    };

    const removeQuestion = (targetQuestion) => { 
        // console.log('Remove this question: ', targetQuestion);
        updateActivity(({questions, ...oldState}) => {
            const newState =  _filter(questions, (question) => question.id != targetQuestion.id);
            return { ...oldState, questions: newState };
        })
    };

    return (
        <div className='activity-creator page'>
            
            <div className='page-header'>
                <h2 className='page-title'>
                    Nova atividade
                </h2>

                <Button variant='link' to='/activities' title='Voltar para a lista de atividades'> <Icon>arrow_back</Icon> Lista </Button>
            </div>

            <Paper className='page-content mirror-form-wrapper' elevation={0}>

                <SmallDialog {...smallDialog} handleClose={updateFromSmalldialog} />

                <div className='mirror-form-header'>
                    <div>
                        <small>Título: </small>
                        <h4>{title}<IconButton aria-label='Editar título' onClick={openSmallDialog}><CreateIcon /></IconButton></h4>
                    </div>
                    <div>
                        <small>Data limite: </small>
                        <h4>{deadline}<IconButton aria-label='Editar data' onClick={openSmallDialog}><CreateIcon /></IconButton></h4>
                    </div>
                    <div>
                        <small>Turma: </small>
                        <h4>{grade}<IconButton aria-label='Editar turma' onClick={openSmallDialog}><CreateIcon /></IconButton></h4>
                    </div>
                </div>

                <div className='mirror-form-content'>
                    <QuestionList questions={questions} handleDuplicate={duplicateQuestion} handleRemove={removeQuestion} handleUpdate={updateQuestion} />
                </div>

                <div className='mirror-form-foot'>
                    
                    <Button onClick={newQuestion}>Nova Questão</Button>

                    <div className='btns--align-right'>
                        <Button color='cancel'>Cancelar</Button>
                        <Button>Salvar</Button>
                    </div>
                </div>

            </Paper>
        </div>
    );
}

export default ActivityCreator;