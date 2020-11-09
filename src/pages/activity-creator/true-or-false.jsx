import React from 'react';

import _map from 'lodash/map';
import { v4 as uuidv4 } from 'uuid';

import Choice from './choice';

import './activity-creator.scss';

const BLANK_CHOICE = {
    id: uuidv4(),
    text: '',
    isAnswer: false,
};

const TrueOrFalse = (props) => {
    console.log('True of false props', props);
    const {answers, handleAdd, handleRemove, handleUpdate} = props;

    React.useEffect(() => {
        if(answers.length <= 0) {
            handleAdd(BLANK_CHOICE)
        }
    }, [answers]);

    const addChoice = () => handleAdd(BLANK_CHOICE);
    const removeChoice = (choice) => handleRemove(choice);
    const updateText = (newText, choice) => { choice.text = newText; handleUpdate(choice) };
    
    const toggleTrueOrFalse = (choice) => {
        choice.isAnswer = !choice.isAnswer;
        handleUpdate(choice);
    }

    const mapedAnswers = _map(answers, (answer, index) => {
        console.log("answers.length", answers.length);
        console.log("index", index);
        console.log("answers.length - index", (answers.length - index));
        const choiceProps = {
            ...answer,
            key: answer.id,
            isLast: (answers.length - (index + 1)) === 0,
            addChoice: addChoice,
            updateChoiceContent: (newText) => updateText(newText, answer),
            removeChoice: () => removeChoice(answer),
            setAsAnswer: () => toggleTrueOrFalse(answer),
        };

        return <Choice {...choiceProps} />
    });

    return (
        <div className='true-or-false-wrapper'><h4>Sentenças:</h4>{mapedAnswers}</div>
    );
};

export default TrueOrFalse;