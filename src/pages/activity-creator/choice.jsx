import React from 'react';

import { IconButton, Icon, TextField } from '@material-ui/core'; 

import './activity-creator.scss';

const Choice = (props) => {
    const { isLast, isAnswer, handleRemove, addChoice, setAsAnswer, updateChoiceContent } = props;
    let { text } = props;
    const choiceClasses = isAnswer ? 'choice answer' : 'choice';
    const setAsAnswerIcon = isAnswer ? 'highlight_off' : 'done_all';

    const buttonHelpers = {
        setAnswer: 'Marcar/Desmarcar como alternativa correta',
        remove: 'Remover esta alternativa',
        add: 'Adicoinar alternativa em branco'
    };

    const handleChange = ($event) => { console.log('Alternative content: ', $event.target.value); updateChoiceContent($event.target.value)};

    return (
        <div className={choiceClasses}>
            <TextField placeholder='Digite aqui a alternativa...' variant='outlined' type='text' defaultValue={text} onChange={handleChange} />
            <IconButton onClick={setAsAnswer} aria-label={buttonHelpers.setAnswer} title={buttonHelpers.setAnswer}><Icon>{setAsAnswerIcon}</Icon></IconButton>
            <IconButton onClick={handleRemove} aria-label={buttonHelpers.remove} title={buttonHelpers.remove}><Icon>delete_outline</Icon></IconButton>
            { isLast && <IconButton onClick={addChoice} aria-label={buttonHelpers.add} title={buttonHelpers.add}><Icon>add</Icon></IconButton>}
        </div>
    );
}

export default Choice;