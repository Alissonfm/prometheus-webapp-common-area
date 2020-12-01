import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import './launcher.scss';

import EnhancedTable from './table-example';

const LauncherTable = (props) => {
    console.log("Launcher Table props: ", props);
    const { columns, data } = props;

    return (<>
        <EnhancedTable />
        <Paper className='launcher-table-wrapper' elevation={2}>
            <Table>

            </Table>
        </Paper>

    </>);
}

export default LauncherTable;