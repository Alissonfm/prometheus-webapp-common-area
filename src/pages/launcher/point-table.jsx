import React from 'react';

import { v4 as uuidv4 } from 'uuid'; 
import _map from 'lodash/map';
import _sortBy from 'lodash/sortBy';
import _reverse from 'lodash/reverse';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TextField from '@material-ui/core/TextField';

import './launcher.scss';

// é possível que a escola bloqueie os lançamentos em determinados momentos;

const CTableHeader = ({columns, sortBy, selectedColumn, direction}) => {

    const mappedColumns = _map(columns, (text, index) => {
        const isActiveColumn = selectedColumn === index;
        const newDirection = direction === 'asc' ? 'desc' : 'asc';
        const onClickToSort = () => isActiveColumn ? sortBy(index, newDirection) : sortBy(index, direction);

        return (
            <TableCell key={uuidv4()}>
                <TableSortLabel active={isActiveColumn} direction={direction} onClick={onClickToSort}>
                    {/* {isActiveColumn && 'Ordenador por: '} */}
                    {text}
                </TableSortLabel>
            </TableCell>
        );
    });

    return <TableHead className='launcher-table-header sticky'><TableRow>{mappedColumns}</TableRow></TableHead>;
}

const EditTableBody = ({data, onFieldChange}) => {
    // const mapCells = (cells) => cells.length <= 1 ? <TextField defaultValue={cells[0]} /> : <><TextField defaultValue={cells[0]} />{mapCells(cells.slice(1))}</>;
    // const mapRows = (rows) => rows.length <= 1 ? <TableRow>{mapCells(rows[0])}</TableRow> : <><TableRow>{mapCells(rows[0])}</TableRow>{mapRows(rows.slice(1))}</>;

    const mappedRows = _map(data, 
        (row, rowIndex) => {
            return (<TableRow key={uuidv4()}>{_map(row, 
                (cell, cellIndex) => (
                    <TableCell key={uuidv4()}>
                        <TextField variant='outlined' defaultValue={cell} onBlur={($event) => onFieldChange($event.target.value, rowIndex, cellIndex)} />
                    </TableCell>
                )
            )}</TableRow>);
        }
    );

    return <TableBody className='editing'>{mappedRows}</TableBody>;
}

const ViewTableBody = ({data}) => {
    const mapCells = (cells) => cells.length <= 1 ? <TableCell>{cells[0]}</TableCell> : <><TableCell>{cells[0]}</TableCell>{mapCells(cells.slice(1))}</>;
    const mapRows = (rows) => rows.length <= 1 ? <TableRow>{mapCells(rows[0])}</TableRow> : <><TableRow>{mapCells(rows[0])}</TableRow>{mapRows(rows.slice(1))}</>;
    return <TableBody>{mapRows(data)}</TableBody>;
}

const PointTable = ({ content, viewEditContent }) => {

    console.log("Launcher Table props: ", content);
    const { columns, data } = content;

    const [state, updateState] = React.useState({data: data, sortBy: 0, direction: 'asc'});

    //empty state
    if(!data) return null;

    const BODY_TYPE = { 'view': ViewTableBody, 'edit': EditTableBody };

    const onFieldChange = (newValue, x, y) => {
        const { data } = state;
        if (!data[x][y] || (newValue === data[x][y])) return null;
        data[x][y] = newValue;
        updateState((currentState) => ({...currentState, data: data}));
    };

    const sortData = (newIndex, newDirection) => {
        const sortFuncion = () => _sortBy(state.data, [(row) => /^\d/g.test(row[newIndex]) ? new Number(row[newIndex]) : row[newIndex]]);
        const sortedData = newDirection === 'asc' ? sortFuncion() : _reverse(sortFuncion());
        updateState(({display}) => ({ data: sortedData, sortBy: newIndex, direction: newDirection, display }));
    }

    const sortBy = (newIndex, newDirection) => {(data.sortBy !== newIndex) && sortData(newIndex, newDirection)};
    const BodyComponent = BODY_TYPE[viewEditContent || 'view'];

    return (
        <TableContainer className='launcher-table-wrapper'>
            <Table stickyHeader data-columns-count={columns.length}>
                <CTableHeader sortBy={sortBy} columns={columns} selectedColumn={state.sortBy} direction={state.direction} />
                <BodyComponent data={state.data} onFieldChange={onFieldChange} />
            </Table>
        </TableContainer>
    );
}

export default PointTable;