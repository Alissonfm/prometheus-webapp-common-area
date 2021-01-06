import React from 'react';

import { v4 as uuidV4 } from 'uuid';
import _map from 'lodash/map';

import Choice from './choice';

import './activity-creator.scss';

const BLANK_CHOICE = {
    id: uuidV4(),
    text: '',
    isAnswer: false,
    handleAdd: void null, 
    handleRemove: void null, 
    setAsAnswer: void null
};

const MultipleChoices = ({answers, handleAdd, handleRemove, handleUpdate}) => {

    React.useEffect(() => {
        if(answers.length <= 0) {
            handleAdd(BLANK_CHOICE)
        }
    }, [answers, handleAdd]);

    const addChoice = () => handleAdd(BLANK_CHOICE);
    const removeChoice = (choice) => handleRemove(choice);
    
    const setAsAnswer = (answer) => {
        answer.isAnswer = !answer.isAnswer;
        handleUpdate(answer);
    };

    const updateText = (newText, choice) => {
        choice.text = newText;
        handleUpdate(choice)
    };

    const mapedChoices = _map(answers, (choice, index) => {
        const choiceProps = {
            ...choice,
            key: choice.id,
            isLast: (answers.length - (index + 1)) === 0,
            addChoice,
            handleRemove: () => removeChoice(choice), 
            setAsAnswer: () => setAsAnswer(choice),
            updateChoiceContent: (newText) => updateText(newText, choice)
        };

        return <Choice {...choiceProps} />;
    });

    return <div className='right-choices-wrapper'><h4>Alternativas:</h4>{mapedChoices}</div>;

}

export default MultipleChoices;