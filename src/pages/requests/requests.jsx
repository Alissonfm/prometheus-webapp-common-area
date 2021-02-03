import React, { useState } from 'react';

import { useStore } from 'react-redux';

import _map from 'lodash/map';
import _concat from 'lodash/concat';

import {
    Paper, 
    TextField, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { Button as Btn } from '../../atoms';
import { Avatar } from '../../molecules';

import './requests.scss';
import NewRequestDialog from './new-request-dialog';
import { REQUESTS } from './requests-mock.js';

import { REQUEST_STATUS, REQUEST_TYPES } from '../../helpers/system';


const RequestActions = ({request}) => {

    return (<>
        <IconButton onClick={() => console.log("Abrir a requisição: ", request)} aria-label="Ver detalhes da requisição">
            <SearchIcon />
        </IconButton>
        <IconButton onClick={() => console.log("Apagar a requisição: ", request)} aria-label="Deletar solicitação">
            <DeleteOutlineIcon />
        </IconButton>
    </>);
};

const TableRows = ({data}) => _map(data, (row) => {

    const { id, requester, assingment, grade, date, status, type } = row;
    const displayType = REQUEST_TYPES[type];
    const { statusText, statusStyle } = REQUEST_STATUS[status];
    const requestClasses = `request ${statusStyle}`;

    return (
        <TableRow key={id} className={requestClasses}>
            <TableCell component="th" scope="row">
                <Avatar {...requester} />
            </TableCell>
            <TableCell>{grade}</TableCell>
            <TableCell>{displayType}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{assingment}</TableCell>
            <TableCell className='status-cell'><FiberManualRecordIcon className='status-icon' fontSize="small" /> {statusText}</TableCell>
            <TableCell><RequestActions request={row} /></TableCell>
        </TableRow>
    );
});

const Requests = (props) => {

    const STORE = useStore().getState().requests;
    console.log("Requests store: ", STORE);

    const [openDialog, toggleDialogDisplay] = useState(false);

    const [requests, updateRequests] = useState(STORE);

    const searchRequest = ($event) => {
        $event.preventDefault();
        console.log("Trying to search for: ", $event);
    }

    const handleDialogStatus = () => toggleDialogDisplay(!openDialog);

    const handleAdd = (newRequest) => updateRequests((currentRequests) => _concat(currentRequests, [newRequest]));

    return (

        <div className="request-page page">

            <NewRequestDialog open={openDialog} handleClose={handleDialogStatus} handleAdd={handleAdd} />
            
            <div className="page-header">
                <h2 className="title">Solicitações</h2>
                <Btn onClick={handleDialogStatus}>Nova Solicitação</Btn>
            </div>

            <Paper className="page-content" elevation={0}>
                <div className="request-search">
                    <form onSubmit={searchRequest} noValidate={true} autoComplete="off">
                        <div>
                            <FormControl variant="outlined">
                                <TextField className="search-term-input" id="outlined-basic" name="terms" label="Procurar por requisição:"  variant="outlined" />
                            </FormControl>

                            <Btn className="search-button" type="submit"><SearchIcon /> <span className="button-text">Pesquisar</span></Btn>
                        </div>

                        <FormControl className="filter-selector" variant="outlined">
                            <InputLabel id="ordenar-requisicoes-label">Ordenar por:</InputLabel>
                            <Select
                            labelId="ordenar-requisicoes-label"
                            label="Ordenar por:"
                            name="filter"
                            
                            >
                                <MenuItem value="teste">Teste de filtro</MenuItem>
                            </Select>
                    
                        </FormControl>
                    </form>
                </div>

                <TableContainer>
                    <Table className="requests-table" aria-label="Lista de solicitações">
                        <TableHead className="table-head">
                            <TableRow>
                                <TableCell>Solicitante</TableCell>
                                <TableCell>Turma</TableCell>
                                <TableCell>Tipo</TableCell>
                                <TableCell>Data</TableCell>
                                <TableCell>Atribuição</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRows data={requests} />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
};

export default Requests;