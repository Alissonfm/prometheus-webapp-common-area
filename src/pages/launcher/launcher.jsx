import React from 'react';

import _map from 'lodash/map';

import { ButtonGroup, Button as MuiButton, Paper, Icon} from '@material-ui/core';
import { Button } from '../../atoms';


import CardGrid from './card';
import PointTable from './point-table';
import PresenceTable from './presence-table';

import './launcher.scss';

import { BASE_LEVEL } from './mocks';

// Na visao do alune, mostrar direto suas matérias e ao abrir mostrar seu desempenho nesta

const CONTENT_TYPE = {
    card: CardGrid,
    'point-table': PointTable,
    'presence-table': PresenceTable
};

const ContentComponent = ({content, contentType, ...props}) => {
    if (!content) return null;
    const Component = CONTENT_TYPE[contentType || 'card'];
    return <Component content={content} contentType={contentType} {...props} />;
}

const LauncherLevelComponent = (props) => {
    // console.log("Launcher level props:", props);
    const [sublevel, manageSublevel] = React.useState(null);
    const [classes, toggleClasses] = React.useState({content: 'level-content', sublevel: 'sub-level hidde'});
    const [viewEditContent, toggleContentDisplay] = React.useState('view');

    const openNewLevel = (newLevel) => {
        console.log("new level: ", newLevel); 
        manageSublevel(() => newLevel); 
        toggleClasses(() => ({content: 'level-content hidde', sublevel: 'sub-level'}))
    };

    const backOneLevel = () => {
        toggleClasses(() => ({content: 'level-content visible', sublevel: 'sub-level hidde'}));
        setTimeout(() => manageSublevel(() => null), 550);
    };

    const changeContentDisplayType = () => toggleContentDisplay(() => viewEditContent === 'view' ? 'edit' : 'view');

    const { name, className, content, contentType, contentEditable, path, baseLevel, onBackLevel} = props;
    const levelClasses = `level ${className||''}`;
    const currentPath = !!path ? path.concat([name]) : [name];
    const editViewButton = viewEditContent === 'view' ? (<><Icon>edit</Icon> Lançar</>) : (<><Icon>check</Icon> Salvar</>);
    const Content = CONTENT_TYPE[contentType || 'card'];
    // const mapPath = _map(currentPath, (segment) => <span>{segment}</span>);
    const mapPath = (path) => path.length <= 1 ? <span>{path[0]}</span> : <><span>{path[0]}</span>{mapPath(path.slice(1))}</>;

    return (
        <Paper className={levelClasses} elevation={0} data-show-sublevel={!!sublevel}>
            <div className={classes.content}>
                <h3 className='level-header'>
                    <div className='level-path'>{mapPath(currentPath)}</div>
                    <div className='level-actions'>
                        <Button data-show-button={!baseLevel} onClick={onBackLevel}><Icon>arrow_back</Icon> Voltar</Button> 
                        { contentEditable && <Button data-show-button onClick={changeContentDisplayType}>{editViewButton}</Button> }
                    </div>
                </h3>
                <ContentComponent content={content} contentType={contentType} openNewLevel={openNewLevel} viewEditContent={viewEditContent} />
            </div>
            <div className={classes.sublevel}>
                {sublevel && <LauncherLevel baseLevel={false} path={currentPath} onBackLevel={backOneLevel} {...sublevel} />}
            </div>
        </Paper>
    );
}

const LauncherLevel = (props) => React.useMemo(() => <LauncherLevelComponent {...props} />, []);

const LauncherComponent = (props) => {
    const [launcher, toggleLauncher] = React.useState('presence');
    const onToggleLauncher = () => { toggleLauncher((previous) => (previous === 'presence' ? 'points' : 'presence')); console.log("Switch launcher: ", launcher) };
    const [isLoading, toggleLoading] = React.useState(true);
    const onToggleLoading = () => toggleLoading((previousState) => !previousState);

    const [presence, points] = BASE_LEVEL;

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
                <LauncherLevel {...presence} baseLevel={true} />
                <LauncherLevel {...points} baseLevel={true} />
            </div>
        </div>
    );
}

const Launcher = (props) => React.useMemo(() => <LauncherComponent {...props} />, []);

export default Launcher;