import React from 'react'; 
import { useLocation, useHistory } from 'react-router-dom'; 
import { useStore } from 'react-redux';
import { activitiesReducer } from '../../store/reducers'; 

import Moment from 'moment';
import 'moment/locale/pt-br';

import _sortBy from 'lodash/sortBy';
import _map from 'lodash/map';
import _filter from 'lodash/filter';

import { 
    Avatar as MuiAvatar,
    FormControl,
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
    InputLabel,
    Select,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DoneIcon from '@material-ui/icons/Done';
import SearchIcon from '@material-ui/icons/Search';

import { Button as Btn } from '../../atoms';

import { ACTIVITIES_TYPES, ACTIVITIES_STATUS } from '../../helpers/system';

import './activities.scss';

// import ACTIVITIES from './activities-mock';
import activities from '../../store/mock/activities';

const RowActions = ({request, isStudent, onEdit}) => {

    return (<>
        { isStudent ? (
            <IconButton onClick={() => console.log("Abrir a atividade: ", request)} aria-label="Abrir a atividade">
                <SearchIcon />
            </IconButton> 
        ) : (
            <IconButton onClick={onEdit} aria-label="Editar a atividade">
                <EditIcon />
            </IconButton>
        )}

        <IconButton onClick={() => console.log("Apagar a atividade: ", request)} aria-label="Deletar solicitação">
            <DeleteOutlineIcon />
        </IconButton>
    </>);
}

const TableRows = ({data, filterParam, isStudent, STORE, lm, hm}) => _map(data, (row) => {
    const { id, title, type, postdate, grade, status } = row;
    const { displayText, icon } = ACTIVITIES_TYPES[type];
    const { statusText, statusStyle } = ACTIVITIES_STATUS[status];
    const requestClasses = `activity ${statusStyle}`;
    const regex = new RegExp(filterParam, 'gi');
    const showRow = !regex.test(title);

    if (showRow) return void null;

    const selectRow = () => { 
        const autoNavigate = STORE.subscribe(() => {autoNavigate(); hm.push('/new-activity');});
        STORE.dispatch(activitiesReducer.actions.selectActivity(row))
    };

    return (
        <TableRow key={id} className={requestClasses}>
            <TableCell><div>
                <MuiAvatar><Icon>{icon}</Icon></MuiAvatar>
            </div></TableCell>
            <TableCell><div>{title}</div></TableCell>
            <TableCell><div>{displayText}</div></TableCell>
            <TableCell><div>{postdate}</div></TableCell>
            <TableCell><div>{grade}</div></TableCell>
            <TableCell className='activity-cell'><div><FiberManualRecordIcon className='activity-icon' fontSize="small" /> {statusText}</div></TableCell>
            <TableCell><div><RowActions request={row} isStudent={isStudent} onEdit={selectRow} /></div></TableCell>
        </TableRow>
    );
});

const Activities = (props) => {
    
    Moment.locale('pt-br');
    
    const STORE = useStore();

    const lm = useLocation();
    const hm = useHistory();

    const { activities, user } = STORE.getState();
    console.log("all store: ", STORE);
    console.log("all store: ", activities);
    console.log("all store: ", user);

    const isStudent = user.userType === 'student'; 

    const bkp_activities = _sortBy(activities.all, ({date}) => { 
        const dt = Moment(date); 
        console.log("new Date(date).getTime(): ", date, dt.valueOf()); 
        return dt.valueOf();
    }, ['desc']);

    const [tableState, manageState] = React.useState({ activities: bkp_activities, filterParam: '', orderBy: 'date'});
    
    const sortBy = (data, param) => _sortBy(data, (item) => { console.log("item, param: ", item[param], item); return item[param] }, ['desc']);
    

    const onFormSubmit = ($event) => {
        $event.preventDefault();
        const { filterParam, orderBy } = $event.target;
        const hasChanges = filterParam.value !== tableState.filterParam || orderBy.value !== tableState.orderBy;
        if (!hasChanges) return void null;
        manageState((currentState) => ({ activities: sortBy(currentState.activities, orderBy.value), filterParam: filterParam.value, orderBy: orderBy.value }));
    };

    // const resetForm = () => manageState((currentState) => ({activities: currentState.activities, filterParam: '', orderBy: 'date'}));
    
    return (
        <div className='page activities-page'>
            <div className='page-header'>
                <h2 className="page-title">Atividades</h2>
                <div className='page-header-actions'>
                    <Btn to='/new-activity' variant='link'><AddIcon /> Nova atividade</Btn>
                </div>
            </div>

            <div className='page-content'>

                <div className="activity-search">
                    <h3>Buscar e ordernar</h3>
                    <form onSubmit={onFormSubmit} noValidate={true} autoComplete="off">
                        <FormControl variant="outlined">
                            <TextField className="search-term-input" name="filterParam" label="Procurar pelo título" defaultValue={tableState.filterParam} variant="outlined" />
                        </FormControl>
                        
                        <FormControl className="filter-selector" variant="outlined">
                            <InputLabel id="ordenar-requisicoes-label">Ordenar por</InputLabel>
                            <Select labelId="ordenar-requisicoes-label" aria-label="Ordenar por:" name="orderBy" defaultValue={tableState.orderBy}>
                                <MenuItem value="date">Data de publicação</MenuItem>
                                <MenuItem value="title">Pelo título</MenuItem>
                            </Select>
                        </FormControl>

                        <div className='form-actions'>
                            <Btn type="submit"><DoneIcon /> <span className="button-text"> Aplicar</span></Btn>
                            {/* { !!tableState.filterParam && (<Btn onClick={resetForm}><ClearIcon /> <span className="button-text"> Desfazer</span></Btn>) }  */}
                        </div>
                    </form>
                </div>

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
                            <TableRows data={tableState.activities} filterParam={tableState.filterParam} isStudent={isStudent} STORE={STORE} lm={lm} hm={hm} />
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Activities;