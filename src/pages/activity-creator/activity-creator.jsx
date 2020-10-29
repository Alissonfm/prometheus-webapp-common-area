import React from 'react';

import { Paper, Divider, TextField, IconButton, Dialog } from '@material-ui/core';

import { Button } from '../../atoms';
import { Form } from '../../organisms';

import './activity-creator.scss';

const GRADES_MOCK = [
    { name: 'T100', value : 'T100'},
    { name: 'T200', value : 'T200'},
    { name: 'T300', value : 'T300'},
];

const FORM_CONFIG = [
    { name: 'title', label: 'Nome: ', required: true, type: 'text', fieldtype: '', initialValue: 'Lore ipsum'},
    { name: 'deadline', label: 'Data limite: ', required: true, type: 'date', fieldtype: '',  initialValue: '01/01/2021'},
    { name: 'grade', label: 'Para a turma: ', required: true, type: 'text', fieldtype: 'select', options: GRADES_MOCK },
    { name: 'questions', label: 'Questôes a serem resolvidas: ', required: true, type: 'text', fieldtype: ''},
];

const SmallDialog = ({ opened, data }) => {
    
    if (!opened) return null;

    const { name, valaue } = data;
    
    return (
        <Dialog open>
            <Form fields={data} />
        </Dialog>
    );
};

const CustomForm = (props) => {
    console.log("Custom form props: ", props);
    const { values } = props;
    const { title, deadline, grade, questions } = values;
  
    const [smallDialog, updateSmallDialog] = React.useState({ opened: false, data: null});

    const toggleSmallDialogVisibility = () => updateSmallDialog(oldState => ({ opened: !oldState.opened}));
    const editTitle = () => updateSmallDialog(() => ({ data: { name: 'title', label: 'Título', initalValue: title, fieldtype: 'text' } }));
    const editDeadline = () => updateSmallDialog(() => ({ data: { name: 'deadline', label: 'Data limite', initalValue: deadline, fieldtype: 'number' } }));

    return (
        <div className='mirror-form-wrapper'>

            <SmallDialog {...smallDialog} />

            <div className='mirror-form-header'>
                <div>
                    <small>Título: </small>
                    <h4>{title} <IconButton></IconButton></h4>
                </div>
                <div>
                    <small>Data limite: </small>
                    <h4>{deadline}</h4>
                </div>
            </div>

            <Divider />

            <div className='mirror-form-content'>

            </div>

            <Divider />

            <div className='mirror-form-foot'>

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
        children: CustomForm,
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