import React from 'react';

import _map from 'lodash/map';

import { 
    Paper, 
    TextField, 
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Icon,
    Avatar as MuiAvatar,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { Button } from '../../atoms';

import { ACTIVITIES_TYPES, ACTIVITIES_STATUS } from '../../helpers/system';

import './activities.scss';

import ACTIVITIES from './activities-mock';

const RowActions = ({request}) => {

    return (<>
        <IconButton onClick={() => console.log("Abrir a requisição: ", request)} aria-label="Ver detalhes da requisição">
            <SearchIcon />
        </IconButton>
        <IconButton onClick={() => console.log("Apagar a requisição: ", request)} aria-label="Deletar solicitação">
            <DeleteOutlineIcon />
        </IconButton>
    </>);
};

const TableRows = () => _map(ACTIVITIES, (row) => {
    const { id, title, type, date, grade, status } = row;
    const { displayText, icon } = ACTIVITIES_TYPES[type];
    const { statusText, statusStyle } = ACTIVITIES_STATUS[status];
    const requestClasses = `activity ${statusStyle}`;

    return (
        <TableRow key={id} className={requestClasses}>
            <TableCell><div>
                <MuiAvatar><Icon>{icon}</Icon></MuiAvatar>
            </div></TableCell>
            <TableCell><div>{title}</div></TableCell>
            <TableCell><div>{displayText}</div></TableCell>
            <TableCell><div>{date}</div></TableCell>
            <TableCell><div>{grade}</div></TableCell>
            <TableCell className='activity-cell'><div><FiberManualRecordIcon className='activity-icon' fontSize="small" /> {statusText}</div></TableCell>
            <TableCell><div><RowActions request={row} /></div></TableCell>
        </TableRow>
    );
});

const Activities = (props) => {

    return (
        <div className="activities-page page">

            <div className='page-header'>
                <h2 className="page-title">Atividades</h2>
                <div className='page-header-actions'>
                    <Button to='/new-activity' variant='link'><Icon>add</Icon> Nova atividade</Button>
                    <TextField className='activity-filter' label='Filtrar por: ' value='' select variant='outlined'>
                        <MenuItem value='status'>Status</MenuItem>
                        <MenuItem value='type'>Tipo</MenuItem>
                    </TextField>
                </div>
            </div>

            <div className='page-content'>
                <TableContainer>
                        <Table className="activities-table" aria-label="Lista de solicitações">
                            <TableHead className="table-head">
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Título</TableCell>
                                    <TableCell>Tipo</TableCell>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Turma</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRows />
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        </div>
    );
};

export default Activities;