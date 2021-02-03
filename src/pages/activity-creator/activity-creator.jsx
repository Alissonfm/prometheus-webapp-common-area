import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from 'react-redux';
import { activitiesReducer } from '../../store/reducers';

import { v4 as uuidV4 } from 'uuid';
import _map from 'lodash/map';
import _find from 'lodash/find';
import _filter from 'lodash/filter';
import _keys from 'lodash/keys';
import _values from 'lodash/values';

import Moment from 'moment';
import 'moment/locale/pt-br';
import MomentUtils from '@date-io/moment';

import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Paper, Icon, TextField, MenuItem } from '@material-ui/core';

import { Button } from '../../atoms';
import QuestionCreator from './question-creator';

import { ACTIVITIES_TYPES } from '../../helpers/system';

import './activity-creator.scss';

const GRADES_MOCK = [
    { name: 'T100', value : 'T100'},
    { name: 'T200', value : 'T200'},
    { name: 'T300', value : 'T300'},
];

const BLANK_QUESTION = {
    id: uuidV4(),
    title: 'Lore ipsum',
    type: '',
    answers: [],
};

const ACTIVITY_MOCK = { title: 'Lore ipsum', postdate: '01/01/2021', deadline: '01/01/2021', grade: 'T300', type: 'list', questions: []};

const QuestionList = ({questions, ...props}) => {
    if (!questions) return null;
    return _map(questions, question => <QuestionCreator {...question} {...props} key={question.id} />);
};

const ActivityCreator = (props) => {
    Moment.locale('pt-br');
    const HistoryState = useHistory();
    const STORE = useStore();
    const { activities } = STORE.getState();
    const [activity, updateActivity] = React.useState(activities.selected || { ...ACTIVITY_MOCK, id: uuidV4() });
    
    console.log("")
    
    const { questions, title, postdate, deadline, grade, type } = activity;

    const newQuestion = () => updateActivity(({questions, ...oldState}) => {
        const newQuestion = Object.assign({}, {...BLANK_QUESTION, id: uuidV4()});
        const newState = questions ? [newQuestion].concat(questions) : [newQuestion];
        return { ...oldState, questions: newState };
    });

    const updateQuestion = (targetQuestion) => {
        updateActivity(({questions, ...activity}) => {
            const newQuestions = _filter(questions, ({id}) => id !== targetQuestion.id);
            newQuestions.push(targetQuestion);
            return {...activity, questions: newQuestions};
        });
    };

    const duplicateQuestion = (targetQuestion) => {
        updateActivity(({questions, ...oldState}) => {
            const mirrorQuestion = Object.assign({}, {...targetQuestion, id: uuidV4()});
            const stateRef = questions.indexOf(_find(questions, ({id}) => id === targetQuestion.id));
            questions.splice(stateRef, 1, targetQuestion, mirrorQuestion);
            return { ...oldState, questions: questions };
        });
    };

    const removeQuestion = (targetQuestion) => { 
        updateActivity(({questions, ...oldState}) => {
            const newState =  _filter(questions, (question) => question.id !== targetQuestion.id);
            return { ...oldState, questions: newState };
        })
    };

    const updateTitle = ($event) => updateActivity((currentState) => ({...currentState, title: $event.target.value}));
    const updatePostdate = ($event) => updateActivity((currentState) => ({...currentState, postdate: $event.format()}));
    const updateDeadline = ($event) => updateActivity((currentState) => ({...currentState, deadline: $event.format()}));
    const updateGrade = ($event) => updateActivity((currentState) => ({...currentState, grade: $event.target.value}));
    const updateType = ($event) => updateActivity((currentState) => ({...currentState, type: $event.target.value}));

    const loadActivitySelector = () => {
        const keys = _keys(ACTIVITIES_TYPES);
        const values = _values(ACTIVITIES_TYPES);
        return _map(values, ({displayText}, index) => <MenuItem key={uuidV4()} value={keys[index]}>{displayText}</MenuItem>);
    };


    const createNewActivity = () => {console.log("Criar uma nova atividade: ")};
    const updateSelectedActivity = () => {console.log("Atualizar uma atividade: ")};

    const saveAction = !!activities.selected ? updateActivity : updateSelectedActivity;

    const backToList = () => {
        const listenner = STORE.subscribe(() => { listenner(); HistoryState.goBack(); });
        STORE.dispatch(activitiesReducer.actions.clearSelected());
    };

    return (
        <div className='activity-creator page'>
            
            <div className='page-header'>
                <h2 className='page-title'>
                    Nova atividade
                </h2>
                <Button aria-label='Voltar à lista' onClick={backToList} title='Voltar para a lista de atividades'> <Icon>arrow_back</Icon> Voltar </Button>
            </div>

            <Paper className='page-content mirror-form-wrapper' elevation={0}>

                <div className='mirror-form-header'>
                    <div>
                        <small>Título: </small>
                        <TextField variant='outlined' defaultValue={title} onBlur={updateTitle} />
                    </div>
                    <div>
                        <small>Data de publicação: </small>
                        <MuiPickersUtilsProvider libInstance={Moment} utils={MomentUtils} locale='pt-br' >
                            <DatePicker disableToolbar variant="dialog" inputVariant="outlined" value={postdate} format='DD [de] MMMM [de] yyyy' onChange={updatePostdate} />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div>
                        <small>Data limite: </small>
                        <MuiPickersUtilsProvider libInstance={Moment} utils={MomentUtils} locale='pt-br' >
                            <DatePicker disableToolbar variant="dialog" inputVariant="outlined" value={deadline} format='DD [de] MMMM [de] yyyy' onChange={updateDeadline} />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div>
                        <small>Turma: </small>
                        <TextField variant='outlined' value={grade} select onChange={updateGrade} >
                            {_map(GRADES_MOCK, ({name, value}) => <MenuItem value={value}>{name}</MenuItem>)}
                        </TextField>
                    </div>
                    <div>
                        <small>Tipo: </small>
                        <TextField variant='outlined' value={type} select onChange={updateType}>{loadActivitySelector()}</TextField>
                    </div>
                </div>

                <div className='mirror-form-content'>
                    <QuestionList questions={questions} handleDuplicate={duplicateQuestion} handleRemove={removeQuestion} handleUpdate={updateQuestion} />
                </div>

                <div className='mirror-form-foot'>
                    
                    <Button onClick={newQuestion}>Nova Questão</Button>

                    <div className='btns--align-right'>
                        <Button onClick={saveAction} aria-label='Salvar atividade'>Salvar</Button>
                    </div>
                </div>

            </Paper>
        </div>
    );
}

export default ActivityCreator;