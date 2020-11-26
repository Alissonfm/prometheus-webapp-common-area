import React from 'react';

import { Icon, Button } from '@material-ui/core';

import './messages.scss';

const Messages = (props) => {

    const { count } = props
    const buttonClick = () => console.log("Ver todas as mensagens, evt no clique do botão");

    return (
        <div className='messages-wrapper'>
            <span className='icon'><Icon>forum</Icon></span>
            <h4>Mensagens</h4>
            <div className='messages-count'> {count} mensagens não lidas</div>
            <Button className='act-button' onClick={buttonClick}>Ver todas as mensagens</Button>
        </div>
    );
};

export default Messages;