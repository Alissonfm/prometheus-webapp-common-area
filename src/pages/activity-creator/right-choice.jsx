import React from 'react';

import { v4 as uuidV4 } from 'uuid';
import _map from 'lodash/map';
import _filter from 'lodash/filter';

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

const RightChoice = ({answers=[Object.assign({}, BLANK_CHOICE)], handleAdd, handleRemove, handleUpdate}) => {

    const [choicesArr, updateChoicesArr] = React.useState(answers);

    const removeChoice = (choice) => { 
        console.log("Remove this choice: ", choice);
        handleRemove(choice);
    };
    
    const addChoice = () => handleAdd(BLANK_CHOICE);

    
    const setAsAnswer = (answer) => {
        answer.isAnswer = !answer.isAnswer;
        console.log("Set as answer newState: ", answer);
        handleUpdate(answer);
    };

    const mapedChoices = _map(choicesArr, (choice, index) => {
        const choiceProps = {
            ...choice,
            key: choice.id,
            isLast: (choicesArr.length - (index + 1)) == 0,
            addChoice, 
            handleRemove: () => removeChoice(choice), 
            setAsAnswer: () => setAsAnswer(choice)
        };

        return <Choice {...choiceProps} />;
    });

    return <div className='right-choices-wrapper'><h4>Alternativas:</h4>{mapedChoices}</div>;
}

export default RightChoice;