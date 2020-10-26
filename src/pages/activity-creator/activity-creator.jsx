import React from 'react';

import { Paper } from '@material-ui/core';

import { Button } from '../../atoms';

import './activity-creator.scss';

const ActivityCreator = (props) => {

    return (
        <div className='activity-creator page'>
            
            <div className='page-header'>
                <h2 className='page-title'>
                    Nova atividade/avaliação
                </h2>

                <Button variant='link' to='/activities'> Voltar para lista de atividades </Button>
            </div>

            <Paper className='page-content' elevation={0}>

            </Paper>
        </div>
    );
}

export default ActivityCreator;