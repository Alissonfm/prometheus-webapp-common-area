import React from 'react';

import _map from 'lodash/map';
import _filter from 'lodash/filter';

import Choice from './choice';

import './activity-creator.scss';

const BLANK_CHOICE = {
    text: '',
    isAnswer: false,
    handleAdd: void null, 
    handleRemove: void null, 
    setAsAnswer: void null
};

const RightChoice = ({answers, handleAdd, handleRemove, handleUpdate, handleUpdateAll}) => {

    console.log("Right choice inital props: ", answers);

    React.useEffect(() => {
        if(answers.length <= 0 ) { 
            handleAdd(BLANK_CHOICE)
        }
    }, [answers]);

    const addChoice = () => handleAdd(BLANK_CHOICE);
    const removeChoice = (choice) => handleRemove(choice);
    
    const setAsAnswer = (target) => {        
        const updatedAnswers = _map(answers, (answer) => {
            answer.id === target.id ? answer.isAnswer = !answer.isAnswer : answer.isAnswer = false;
            return answer;
        });
        handleUpdateAll(updatedAnswers);
    };

    const updateChoiceContent = (answer, newText) => {
        console.log("updateChoiceContent: ", answer);
        console.log("updateChoiceContent: ", newText);
        answer.text = newText;
        handleUpdate(answer);
    }

    const mapedChoices = _map(answers, (choice, index) => {
        const choiceProps = {
            ...choice,
            key: choice.id,
            isLast: (answers.length - (index + 1)) == 0,
            addChoice, 
            handleRemove: () => removeChoice(choice), 
            setAsAnswer: () => setAsAnswer(choice),
            updateChoiceContent: (text) => updateChoiceContent(choice, text),
        };

        return <Choice {...choiceProps} />;
    });

    return <div className='right-choices-wrapper'><h4>Alternativas:</h4>{mapedChoices}</div>;
}

export default RightChoice;