import React from 'react';

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

const RequestDetailsDialog = ({open, handleClose}) => {

    // const newRequest = !!requestData;
    const RTkeys = _keys(REQUEST_TYPES);
    const RTvalues = _values(REQUEST_TYPES);

    const formProps = {
        fields: [
            {name: 'type', label: 'Tipo de solicitação', fieldtype: 'select', required: true, options: _map(RTkeys, (key, index) => ({name: RTvalues[index], value: key}))},
            {name: 'subject', label: 'Assunto', fieldtype: 'text', required: true},
            {name: 'description', label: 'Descrição', fieldtype: 'textarea', required: true},
            {name: 'attachment', label: 'Anexo', fieldtype: 'file'}
        ],
        handleSubmit: (event) => { event.preventDefault(); console.log("Submitting form: ", event)},
        className: 'request-form'
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Nos conte do que você precisa!</DialogTitle>
            <DialogContent>
                <Form {...formProps} />
            </DialogContent>
            <DialogActions
            >
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RequestDetailsDialog;