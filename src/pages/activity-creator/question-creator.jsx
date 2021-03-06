import React from 'react';

import { v4 as uuidV4 } from 'uuid';
import _filter from 'lodash/filter';
import _find from 'lodash/find';
import _map from 'lodash/map';

import { Button, TextField, MenuItem } from '@material-ui/core';

import RightChoice from './right-choice';
import TrueOrFalse from './true-or-false';
import Relational from './relational';

import './activity-creator.scss';

const QUESTION_TYPE = {
    open: { value: 'open', name: 'Questão aberta', component: () => null },
    rightChoice: { value: 'rightChoice', name: 'Marcar a alternativa correta', component: RightChoice },
    trueorfalse: { value: 'trueorfalse', name: 'Marcar como verdadeiro ou falso', component: TrueOrFalse },
    relational: { value: 'relational', name: 'Relacione as colunas da esquerda e direita', component: Relational },
};

const QuestionAnswer = ({type, ...props}) => {
    if (!type) return null;
    const Component = QUESTION_TYPE[type].component;
    return <Component {...props} />
}

const QuestionCreator = ({ handleUpdate, handleDuplicate, handleRemove, ...props }) => {

    console.log("Question creator props: ", props);

    const [question, updateQuestion] = React.useState({...props});
    const { title, type, answers } = question;

    // update question on Activity state
    const saveQuestion = () => updateQuestion(question);
    const duplicateQuestion = () => handleDuplicate(question);
    const removeQuestion = () => handleRemove(question);

    // update question by the currente refence.
    const changeTitle = ($event) => {
        console.log("Change title event: ", $event.target.value);
        updateQuestion({...question, title: $event.target.value});
    };

    const changeType = ($event) => {
        console.log("Change type event: ", $event.target.value);
        updateQuestion({ ...question, type: $event.target.value, answers: []});
    };

    const addAnswer = (newAnswer) => {
        // console.log('New answer: ', newAnswer);
        const { answers, ...oldState } = question;
        const newArray = [Object.assign({}, {...newAnswer, id: uuidV4()})].concat(answers);
        // console.log("New answers array state:", newArray);
        updateQuestion(() => ({...oldState, answers: newArray}));
    };

    const removeAnswer = (target) => {
        console.log("Answer to remove: ", target);
        const { answers, ...oldState } = question;
        const newArray = _filter(answers, ({id}) => id !== target.id);
        updateQuestion(() => ({...oldState, answers: newArray}));
    };

    const updateAnswer = (target) => {
        console.log('Answer to update: ', target);
        const { answers, ...oldState } = question;
        const stateRef = _find(answers, ({id}) => id === target.id);
        const index = answers.indexOf(stateRef);
        // console.log("Before update splice: ", answers);
        answers.splice(index, 1, target);
        // console.log("Afters update splice: ", answers);
        updateQuestion(() => ({...oldState, answers: answers}));
    };

    const updateAllAnswers = (updatedAnswers) => {
        console.log("All updated answers: ", updatedAnswers);
        const {answers, ...oldState} = question;
        updateQuestion(() => ({ ...oldState, answers: updatedAnswers}));
    }

    const mapQuestionsType = () => _map(QUESTION_TYPE, (type) => <MenuItem key={`type-${type.value}`} value={type.value}>{type.name}</MenuItem> );

    const questionAnswerProps = { type, answers, handleAdd: addAnswer, handleRemove: removeAnswer, handleUpdate: updateAnswer, handleUpdateAll: updateAllAnswers };

    return (
        <div className='question-wrapper'>

            <div className='question-header'>
                <div className='question-title'>
                    <h4 className='tip'>Pergunta ou título: </h4>
                    <TextField name='title' variant='outlined' defaultValue={title} onChange={changeTitle} />
                </div>
                <div className='question-type'>
                    <h4 className='tip'>Tipo: </h4>
                    <TextField name='type' variant='outlined' select value={type} defaultValue={type} onChange={changeType}>
                        {mapQuestionsType()}
                    </TextField>
                </div>
            </div>

            <QuestionAnswer {...questionAnswerProps} />

            <div className='question-actions'>
                <Button onClick={saveQuestion}> Salvar </Button>
                <Button onClick={duplicateQuestion}> Duplicar </Button>
                <Button onClick={removeQuestion}> Remover </Button>
            </div>
        </div>
    );
}

export default QuestionCreator;