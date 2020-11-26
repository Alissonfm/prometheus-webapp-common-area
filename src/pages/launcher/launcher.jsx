import React from 'react';

import _map from 'lodash/map';

import { ButtonGroup, Button as MuiButton, Card, CardActionArea, CardContent, Chip, Paper, Icon,} from '@material-ui/core';
import { Button } from '../../atoms';

import './launcher.scss';

import { BASE_LEVEL } from './mocks';


// Na visao do alune, mostrar direto suas matérias e ao abrir mostrar seu desempenho nesta

const GradeCard = (props) => {
    // console.log("Grade card props: ", props);
    const { name, content, onClick } = props;

    const mappedSubjects = _map(content, ({name, icon}) => <Chip className='subject-chip' label={name} icon={icon} />);

    return (
        <div className='card-wrapper'>
            <Card className='card grade-card'>
                <CardActionArea onClick={onClick}>
                    <CardContent>
                        <h3>{name}</h3>
                        <div className='subject-grid'>{mappedSubjects}</div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

const LauncherLevel = (props) => {
    // console.log("Launcher level props:", props);
    const [sublevel, manageSublevel] = React.useState(null);

    const { name, className, content, path, baseLevel, onBackLevel} = props;
    const levelClasses = `level ${className||''}`;
    
    console.log("Received path: ", path);
    const currentPath = !!path ? path.concat([name]) : [name];
    console.log("Current path: ", currentPath);

    const openNewLevel = (newLevel) => { console.log("new level: ", newLevel); manageSublevel(() => newLevel)} ;
    const backOneLevel = () => manageSublevel(() => null);

    const contentCards =  content ? _map(content, (card) => <GradeCard key={card.id} {...card} onClick={() => openNewLevel(card)} />) : '';
    const mapPath = _map(currentPath, (segment) => <span>{segment}</span>);
    console.log("mapPath: ", mapPath);

    return (
        <Paper className={levelClasses} elevation={0} data-show-sublevel={!!sublevel}>
            <div className='level-content'>
                <h3 className='level-header'>
                    <span className='level-path'>{mapPath}</span>
                    <Button data-show-button={!baseLevel} onClick={onBackLevel}><Icon>arrow_back</Icon> Voltar</Button> 
                </h3>
                <div className='content-grid'>
                    {contentCards}
                </div>
            </div>
            <div className='sub-level'>
                {sublevel && <LauncherLevel baseLevel={false} path={currentPath} onBackLevel={backOneLevel} {...sublevel} />}
            </div>
        </Paper>
    );
}

const Launcher = (props) => {
    const [launcher, toggleLauncher] = React.useState('presence');
    const onToggleLauncher = () => { toggleLauncher((previous) => (previous === 'presence' ? 'points' : 'presence')); console.log("Switch launcher: ", launcher) };

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

export default Launcher;