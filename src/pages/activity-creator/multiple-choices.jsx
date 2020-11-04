import React from 'react';

import { v4 as uuidV4 } from 'uuid';
import _find from 'lodash/find';
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

const MultipleChoices = (props) => {

    const { answers } = props;
    const [choicesArr, updateChoicesArr] = React.useState((answers || [Object.assign({}, BLANK_CHOICE)]));

    const handleRemove = (choice) => {
        console.log("Remove this choice: ", choice);
        updateChoicesArr( oldState => {
            const newState = _filter(oldState, ({id}) => id != choice.id);
            console.log('New state: ', newState);
            return newState;
        });
    };
    
    const handleAdd = () => { 
        updateChoicesArr(oldState => [
            Object.assign(
                {}, 
                {...BLANK_CHOICE, id: uuidV4()}
            )
        ].concat(oldState)); 
        console.log("Add blank choice: ", choicesArr);
    };
    
    const setAsAnswer = (answer) => {
        updateChoicesArr(oldState => {
            return _map(oldState, (choice) => {
                if (choice.id === answer.id) choice.isAnswer = !choice.isAnswer;
                return choice;
            });
        });
    };

    const mapedChoices = _map(choicesArr, (choice, index) => {
        const choiceProps = {
            ...choice,
            key: choice.id,
            isLast: (choicesArr.length - (index + 1)) == 0,
            handleAdd, 
            handleRemove: () => handleRemove(choice), 
            setAsAnswer: () => setAsAnswer(choice)
        };

        return <Choice {...choiceProps} />;
    });

    return <div className='right-choices-wrapper'><h4>Alternativas:</h4>{mapedChoices}</div>;

}

export default MultipleChoices;