import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import _map from 'lodash/map';
import _keys from 'lodash/keys';
import _values from 'lodash/values';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@material-ui/core';

import { Form } from '../../organisms';

import { REQUEST_TYPES } from '../../helpers/system';

import './requests.scss';

//MOCK
import { avatarProps } from './requests-mock';
const GRADES = [
    {name: 'T100'},
    {name: 'T200'},
    {name: 'T300'},
];

const getDate = () => {
    const dt = new Date();
    const day = dt.getDay() < 10 ? `0${dt.getDay()}` : dt.getDay();
    const month = dt.getMonth < 9 ? `0${dt.getMonth()+1}` : dt.getMonth()+1;
    const year = dt.getFullYear();

    return `${day}/${month}/${year}`;
}

const RequestDetailsDialog = ({open, handleClose, handleAdd}) => {

    // const newRequest = !!requestData;
    const RTkeys = _keys(REQUEST_TYPES);
    const RTvalues = _values(REQUEST_TYPES);

    const normalizeRequest = (request) => {
        
        return {
            ...request,
            requester: avatarProps,
            id: `T4000-${Math.random()}`, 
            date: getDate(),
            assingment: 'Alune', 
            status: 'open'
        };
    };

    const handleSubmit = ($event) => { 
        console.log("Submitting form: ", $event);
        handleAdd(normalizeRequest($event));
    };

    const formProps = {
        fields: [
            {name: 'type', label: 'Tipo de solicitação', fieldtype: 'select', required: true, options: _map(RTkeys, (key, index) => ({name: RTvalues[index], value: key}))},
            {name: 'grade', label: 'Turma', fieldtype: 'select', required: true, options: GRADES},
            {name: 'subject', label: 'Assunto', fieldtype: 'text', required: true},
            {name: 'description', label: 'Descrição', fieldtype: 'textarea', required: true},
            {name: 'attachment', label: 'Anexo', fieldtype: 'file'}
        ],
        handleSubmit: handleSubmit,
        actions: [
            {content: 'Cancelar', onClick: handleClose, color: 'primary' },
            {content: 'Enviar', type: 'submit', color: 'primary' },
        ],
        className: 'request-form'
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Nos conte do que você precisa!</DialogTitle>
            <DialogContent>
                <Form {...formProps} />
            </DialogContent>
        </Dialog>
    );
};

export default RequestDetailsDialog;