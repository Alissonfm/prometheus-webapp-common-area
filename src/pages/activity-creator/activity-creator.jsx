import React from 'react';

import { Paper, Divider, TextField, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import { Button } from '../../atoms';
import { Form } from '../../organisms';

import QuestionCreator from './question-creator';

import './activity-creator.scss';

const GRADES_MOCK = [
    { name: 'T100', value : 'T100'},
    { name: 'T200', value : 'T200'},
    { name: 'T300', value : 'T300'},
];

const FORM_CONFIG = [
    { name: 'title', label: 'Nome: ', required: true, fieldtype: 'text', initialValue: 'Lore ipsum'},
    { name: 'deadline', label: 'Data limite: ', required: true, fieldtype: 'date',  initialValue: '01/01/2021'},
    { name: 'grade', label: 'Para a turma: ', required: true,  fieldtype: 'select', options: GRADES_MOCK },
    { name: 'questions', label: 'Questôes a serem resolvidas: ', required: true, type: 'text', fieldtype: ''},
];

const SmallDialog = ({ opened, data, handleClose }) => {
    if (!opened) return null;

    console.log("Small dialog data: ", data);

    const { label, value, onChange } = data;
    
    let fieldValue = Object.assign("", value);

    const handleConfirm = () => {onChange(fieldValue); handleClose();}; 

    return (
        <Dialog open>
            <DialogTitle id="form-dialog-title">{label}</DialogTitle>
            <DialogContent>
                <TextField {...data} value='' value={fieldValue} onChange={($event) => console.log("Field value: ", $event.target.value)} />
            </DialogContent>
            <DialogActions><Button onClick={handleConfirm} color="primary">Ok</Button></DialogActions>
        </Dialog>
    );
};

const CustomForm = (props) => {

    console.log("Custom form props: ", props);

    const { values, setFieldValue, unregisterField, getFieldMeta, getFieldHelpers } = props;
    const { title, deadline, grade, questions } = values;

    console.log("getFieldMeta", getFieldMeta('title'));
    console.log("getFieldHelpers", getFieldHelpers('title'));

    const handleFieldChange = (field, newValue) => setFieldValue(field, newValue, false);
    const handleTitleChange = ($event) => handleFieldChange('title', $event.target.value);
    const handleDeadlineChange = ($event) => handleFieldChange('deadline', $event.target.value);
    const titleEditConfig = { name: 'title', label: 'Título', variant: 'outlined', type: 'text', onChange: handleTitleChange };
    const deadlineEditConfig = { name: 'deadline', label: 'Data limite', variant: 'outlined', type: 'date', onChange: handleDeadlineChange };
  
    const [smallDialog, updateSmallDialog] = React.useState({ opened: false, data: null});
    const toggleSmallDialogVisibility = () => updateSmallDialog(oldState => ({ opened: !oldState.opened, data: null }));
    const editTitle = () => updateSmallDialog((oldState) => ({ opened: !oldState.opened, data: titleEditConfig }));
    const editDeadline = () => updateSmallDialog((oldState) => ({ opened: !oldState.opened, data: deadlineEditConfig}));

    const newQuestion = () => {console.log('New blank question')};
    const duplicateQuestion = () => {console.log('Remove this question')};
    const removeQuestion = () => {console.log('Duplicate this question')};

    return (
        <div className='mirror-form-wrapper'>

            <SmallDialog {...smallDialog} handleClose={toggleSmallDialogVisibility} />

            <div className='mirror-form-header'>
                <div>
                    <small>Título: </small>
                    <h4>{title}<IconButton aria-label='Editar título' onClick={editTitle}><CreateIcon /></IconButton></h4>
                </div>
                <div>
                    <small>Data limite: </small>
                    <h4>{deadline}<IconButton aria-label='Editar data' onClick={editDeadline}><CreateIcon /></IconButton></h4>
                </div>
            </div>

            <div className='mirror-form-content'>
                <QuestionCreator />
            </div>

            <div className='mirror-form-foot'>
                
                <Button>Nova Questão</Button>

                <div className='btns--align-right'>
                    <Button color='cancel'>Cancelar</Button>
                    <Button>Salvar</Button>
                </div>
            </div>

        </div>
    );
};

const ActivityCreator = (props) => {

    const handleSubmit = ($event) => { $event.preventDefault(); console.log("Submit do formulário: ", $event.target);}
    
    const formProps = {
        fields: FORM_CONFIG,
        customBody: true,
        handleSubmit,
        children: (props) => <CustomForm {...props} />,
    };

    return (
        <div className='activity-creator page'>
            
            <div className='page-header'>
                <h2 className='page-title'>
                    Nova atividade/avaliação
                </h2>

                <Button variant='link' to='/activities'> Voltar para lista de atividades </Button>
            </div>

            <Paper className='page-content' elevation={0}><Form {...formProps} /></Paper>
        </div>
    );
}

export default ActivityCreator;