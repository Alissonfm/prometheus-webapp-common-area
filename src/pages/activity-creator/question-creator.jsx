import React from 'react';

import _map from 'lodash/map';

import { Button, TextField, MenuItem } from '@material-ui/core';

import RightChoice from './right-choice';

import './activity-creator.scss';

const MultipleChoices = () => {
    return (
        <div>MultipleChoices</div>
    )
};
const TrueOfFalse = () => {
    return (
        <div>TrueOfFalse</div>
    )
};
const Relational = () => {
    return (
        <div>Relational</div>
    )
};

const QUESTION_TYPE = {
    open: { value: 'open', name: 'Questão aberta', component: () => null },
    multipleChoices: { value: 'multipleChoices', name: 'Múltipla escolha', component: MultipleChoices },
    rightChoice: { value: 'rightChoice', name: 'Marcar a alternativa correta', component: RightChoice },
    trueorfalse: { value: 'trueorfalse', name: 'Marcar como verdadeiro ou falso', component: TrueOfFalse },
    relational: { value: 'relational', name: 'Relacione as colunas da esquerda e direita', component: Relational },
};

const QuestionAnswer = ({type, ...props}) => {
    if (!type) return null;
    const Component = QUESTION_TYPE[type].component;
    return <Component {...props} />
}

const QuestionCreator = (props) => {

    const { type, handleDuplicate, handleRemove } = props;

    const [selectedType, toggleType] = React.useState(type || '');
    const handleTypeChange = ($event) => toggleType(() => $event.target.value);

    const mapQuestionsType = () => _map(QUESTION_TYPE, (type) => <MenuItem key={`type-${type.value}`} value={type.value}>{type.name}</MenuItem> );

    return (
        <div className='question-wrapper'>

            <div className='question-header'>
                <div className='question-title'>
                    <h4 className='tip'>Pergunta ou título: </h4>
                    <TextField variant='outlined' value='' />
                </div>
                <div className='question-type'>
                    <h4 className='tip'>Tipo: </h4>
                    <TextField variant='outlined' select value={selectedType} onChange={handleTypeChange}>
                        {mapQuestionsType()}
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