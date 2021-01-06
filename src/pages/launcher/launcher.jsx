import React from 'react';

import {  v4 as uuidv4 } from 'uuid';

import { ButtonGroup, Button as MuiButton, Paper, Icon} from '@material-ui/core';
import { Button } from '../../atoms';

import PointTable from './point-table';
import PresenceTable from './presence-table';

import './launcher.scss';

// Na visao do alune, mostrar direto suas matérias e ao abrir mostrar seu desempenho nesta

const point_data = [
    [ 'Amanda Ribeiro', '7.0', '6.5', '7', '0', '0' ],
    [ 'Carlos José', '5.0', '8', '2', '0', '0' ],
    [ 'Jessica Silva', '10', '4', '0', '0', '0' ],
    [ 'Marco Antônio', '2.0', '7', '3', '0', '0' ],
    [ 'Lucas Caetano', '3.0', '7', '8', '0', '0' ],
    [ 'Ana Maria', '9.0', '6', '10', '0', '0' ],
    [ 'Washington Nunes', '1.0', '7', '9.5', '0', '0' ],
    [ 'Marco Paulo', '4.0', '3', '7.3', '0', '0' ],
    [ 'Fabio Alves', '6.7', '9', '6.7', '0', '0' ],
    [ 'Elisa Ricardo', '3.0', '5', '4.9', '0', '0' ],
    [ 'Júlia Nunes', '6.0', '9', '8.7', '0', '0' ],
    [ 'Michele Ribeiro', '5.0', '7', '6.9', '0', '0' ],
];

const presence_data = [
    [ 'Amanda Ribeiro', '1', '1', '1', '0', '0' ],
    [ 'Carlos José', '1', '1', '1', '0', '0' ],
    [ 'Jessica Silva', '1', '1', '0', '0', '0' ],
    [ 'Marco Antônio', '1', '1', '1', '0', '0' ],
    [ 'Lucas Caetano', '1', '1', '1', '0', '0' ],
    [ 'Ana Maria', '1', '1', '1', '0', '0' ],
    [ 'Washington Nunes', '1', '1', '1', '0', '0' ],
    [ 'Marco Paulo', '1', '1', '1', '0', '0' ],
    [ 'Fabio Alves', '1', '1', '1', '0', '0' ],
    [ 'Elisa Ricardo', '1', '1', '1', '0', '0' ],
    [ 'Júlia Nunes', '1', '1', '1', '0', '0' ],
    [ 'Michele Ribeiro', '1', '7', '1', '0', '0' ],
];

const MOCK_DATA = [
    {
        id: uuidv4(),
        name: 'Presença',
        columns: ['Nome'],
        content: presence_data,
    },
    {
        id: uuidv4(),
        name: 'Notas',
        columns: ['Nome', 'Trabalhos', 'Prova 1', 'Prova 2', 'Recuperação', 'Total'],
        content: point_data,
    }
];

const CONTENT_TYPE = {
    'point-table': PointTable,
    'presence-table': PresenceTable
};

const LauncherLevelComponent = (props) => {

    console.log("Launcher level component: ", props);

    const [viewEditContent, toggleContentDisplay] = React.useState('view');
    const changeContentDisplayType = () => toggleContentDisplay(() => viewEditContent === 'view' ? 'edit' : 'view');

    const { name, className, content, columns, contentType} = props;
    const levelClasses = `level ${className||''}`;
    const editViewButton = viewEditContent === 'view' ? (<><Icon>edit</Icon> Lançar</>) : (<><Icon>check</Icon> Salvar</>);
    const ContentComponent = CONTENT_TYPE[contentType];

    return (
        <Paper className={levelClasses} elevation={0}>
            <div className='level-content'>
                <h3 className='level-header'>
                    <div className='level-path'>{name}</div>
                    <Button data-show-button onClick={changeContentDisplayType}>{editViewButton}</Button>
                </h3>
                <ContentComponent content={content} columns={columns} viewEditContent={viewEditContent} />
            </div>
        </Paper>
    );
}

const LauncherLevel = (props) => React.useMemo(() => <LauncherLevelComponent {...props} />, [props]);

const LauncherComponent = (props) => {
    const [launcher, toggleLauncher] = React.useState('presence');
    const onToggleLauncher = () => { toggleLauncher((previous) => (previous === 'presence' ? 'points' : 'presence')); console.log("Switch launcher: ", launcher) };
    // const [isLoading, toggleLoading] = React.useState(true);
    // const onToggleLoading = () => toggleLoading((previousState) => !previousState);

    const [presence, points] = MOCK_DATA;

    return (
        <div className='page launcher'>
            <div className='page-header'>
                <h2 className='page-title'> Lançador </h2>
                <ButtonGroup className='launcher-toggler' size="large" aria-label="Troque o mecanismo de lançamento">
                    <MuiButton data-selected={launcher} onClick={onToggleLauncher}>Presença</MuiButton>
                    <MuiButton data-selected={launcher} onClick={onToggleLauncher}>Notas</MuiButton>
                </ButtonGroup>
            </div>

            <div className='page-content' data-current-launcher={launcher}>
                <LauncherLevel {...presence} baseLevel={true} contentType='presence-table' className='presenche-launcher' />
                <LauncherLevel {...points} baseLevel={true} contentType='point-table' className='point-launcher' />
            </div>
        </div>
    );
}

const Launcher = (props) => React.useMemo(() => <LauncherComponent {...props} />, [props]);

export default Launcher;