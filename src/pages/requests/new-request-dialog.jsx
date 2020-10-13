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
    MenuItem,
    TextField
} from '@material-ui/core';

import { InputFile } from '../../atoms';

import { REQUEST_TYPES } from '../../helpers/system';

const SelectItens = () => {
    const keys = _keys(REQUEST_TYPES);
    const values = _values(REQUEST_TYPES);
    return _map(keys, (key, index) => <MenuItem value={key}>{values[index]}</MenuItem>);
};


const RequestDetailsDialog = ({open, handleClose, requestData}) => {

    const newRequest = !!requestData;

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Nos conte do que você precisa!</DialogTitle>
            <DialogContent>
                <form className="new-request-form">
                    <Select name='type' labelId="request-type" id="request-type" label='Selecione um tipo de solicitação' value={age} >
                        <SelectItens />
                    </Select>
                    <TextField name='subject' label='Assunto' />
                    <TextField name='description' label='Descrição' multiline />
                    <InputFile />
                </form>
            </DialogContent>
            <DialogActions>
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