import React from 'react';

import _map from 'lodash/map';

import { Card, CardActionArea, CardContent, Chip } from '@material-ui/core';

import './launcher.scss';

const GradeCard = (props) => {
    const { name, content, contentType, onClick } = props;

    const ContentPreview = () => {
        if(/table/.test(contentType)) return null;
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

export default CardGrid;