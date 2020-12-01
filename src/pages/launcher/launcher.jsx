import React from 'react';

import _map from 'lodash/map';

import { ButtonGroup, Button as MuiButton, Card, CardActionArea, CardContent, Chip, Paper, Icon,} from '@material-ui/core';
import { Button } from '../../atoms';


import LauncherTable from './table';

import './launcher.scss';

import { BASE_LEVEL } from './mocks';


const CARD_COLORS = [
    'bg--blue',
    'bg--yellow',
    'bg--green',
    'bg--orange',
    'bg--purple',
];

// Na visao do alune, mostrar direto suas matérias e ao abrir mostrar seu desempenho nesta

const GradeCard = (props) => {
    const { name, content, contentType, onClick } = props;

    const ContentPreview = () => {
        if(contentType === 'table') return null;
        return (
            <div className='subject-grid'>
                {_map(content, ({name, icon}) => <Chip className='subject-chip' label={name} icon={icon} />)}
            </div>
        );
    }

    return (
        <div className='card-wrapper'>
            <Card className='card grade-card' elevation={2} >
                <CardActionArea onClick={onClick}>
                    <CardContent>
                        <h3>{name}</h3>
                        <ContentPreview />
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

const CardGrid = ({content, openNewLevel}) => {
    const cards = _map(content, (card) => <GradeCard key={card.id} {...card} onClick={() => openNewLevel(card)} />); 
    return (
        <div className='content-grid'>
            {cards}
        </div>
    );
}

const CONTENT_TYPE = {
    card: CardGrid,
    table: LauncherTable,
};

const ContentComponent = ({content, contentType, ...props}) => {
    if (!content) return null;
    const Component = CONTENT_TYPE[contentType || 'card'];
    return <Component content={content} contentType={contentType} {...props} />;
}

const LauncherLevel = (props) => {
    // console.log("Launcher level props:", props);
    const [sublevel, manageSublevel] = React.useState(null);
    const [classes, toggleClasses] = React.useState({content: 'level-content', sublevel: 'sub-level hidde'});

    const openNewLevel = (newLevel) => {
        console.log("new level: ", newLevel); 
        manageSublevel(() => newLevel); 
        toggleClasses(() => ({content: 'level-content hidde', sublevel: 'sub-level'}))
    };

    const backOneLevel = () => {
        toggleClasses(() => ({content: 'level-content visible', sublevel: 'sub-level hidde'}));
        setTimeout(() => manageSublevel(() => null), 550);
    };

    const { name, className, content, contentType, path, baseLevel, onBackLevel} = props;
    const levelClasses = `level ${className||''}`;
    const currentPath = !!path ? path.concat([name]) : [name];
    const Content = CONTENT_TYPE[contentType || 'card'];
    const contentCards =  content ? _map(content, (card) => <Content key={card.id} {...card} onClick={() => openNewLevel(card)} />) : '';
    const mapPath = _map(currentPath, (segment) => <span>{segment}</span>);

    return (
        <Paper className={levelClasses} elevation={0} data-show-sublevel={!!sublevel}>
            <div className={classes.content}>
                <h3 className='level-header'>
                    <div className='level-path'>{mapPath}</div>
                    <Button data-show-button={!baseLevel} onClick={onBackLevel}><Icon>arrow_back</Icon> Voltar</Button> 
                </h3>
                <ContentComponent content={content} contentType={contentType} openNewLevel={openNewLevel} />
            </div>
            <div className={classes.sublevel}>
                {sublevel && <LauncherLevel baseLevel={false} path={currentPath} onBackLevel={backOneLevel} {...sublevel} />}
            </div>
        </Paper>
    );
}

const Launcher = (props) => {
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

export default Launcher;