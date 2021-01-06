import React from 'react';

import { Icon } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

import { Button } from '../../../../atoms';

import './welcome.scss';

const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const Welcome = (props) => {
    console.log("Welcome props: ", props);
    const { user } = props;
    const dateObj = new Date();
    const today = (<span>Hoje é dia <strong>{dateObj.getDate()} de {MONTHS[dateObj.getMonth()]}</strong> de {dateObj.getFullYear()}</span>);

    return (
        <div className='welcome-wrap'>
            <div className='left-side'>
                <h2>Bem-vindo, {user.type}.</h2>
                <h4><Icon>event</Icon>{today}</h4>

                <div className='welcome-actions'>
                    <Button aria-label='Criar atividade'><AddBoxOutlinedIcon /> Agendar nova atividade</Button>
                    <Button aria-label='Ver atividades' color='light'><BookOutlinedIcon /> Ver todas as atividades</Button>
                </div>
            </div>
            <div className='right-side'>
                <img src='./assets/img/teacher-welcome2.png' aria-label='Avatar de professores' alt='Avatar de boas vindas!' />
            </div>
        </div>
    );
};

export default Welcome;