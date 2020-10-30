import React from 'react';

import { Button, TextField, MenuItem } from '@material-ui/core';

import './activity-creator.scss';

const OpenQuestion = () => {
    return (
        <div>Open</div>
    )
};
const MultipleChoices = () => {
    return (
        <div>MultipleChoices</div>
    )
};
const RightChoice = () => {
    return (
        <div>RightChoice</div>
    )
};

const QUESTION_TYPE = {
    open: OpenQuestion,
    multipleChoices: MultipleChoices,
    rightChoice: RightChoice,
};


const QuestionAnswer = ({type, ...props}) => {
    if (!type) return null;
    const Component = QUESTION_TYPE[type];
    return <Component {...props} />
}

const QuestionCreator = (props) => {

    const { type, handleDuplicate, handleRemove } = props;

    const [selectedType, toggleType] = React.useState(type || '');
    const handleTypeChange = ($event) => toggleType(() => $event.target.value);

    return (
        <div className='question-wrapper'>

            <div className='question-header'>
                <div className='question-title'>
                    <h4 className='tip'>Pergunta: </h4>
                    <TextField variant='outlined' value='' />
                </div>
                <div className='question-type'>
                    <h4 className='tip'>Tipo: </h4>
                    <TextField variant='outlined' select value={selectedType} onChange={handleTypeChange}>
                        <MenuItem value=''>Selecione um tipo...</MenuItem>
                        <MenuItem value='open'>Questão aberta</MenuItem>
                        <MenuItem value='multipleChoices'>Múltipla escolha</MenuItem>
                        <MenuItem value='rightChoice'>Marcar a alternativa correta</MenuItem>
                    </TextField>
                </div>
            </div>

            <QuestionAnswer type={selectedType} />

            <div className='question-actions'>
                <Button onClick={handleDuplicate}> Duplicar </Button>
                <Button onClick={handleRemove}> Remover </Button>
            </div>
        </div>
    );
}

export default QuestionCreator;