import React from 'react';

import { v4 as uuidV4 } from 'uuid';
import _map from 'lodash/map';
import _filter from 'lodash/filter';

import { IconButton, Icon, TextField } from '@material-ui/core'; 

import './activity-creator.scss';

const BLANK_CHOICE = {
    id: uuidV4(),
    text: '',
    isAnswer: false,
    handleAdd: void null, 
    handleRemove: void null, 
    setAsAnswer: void null
};

const Choice = (props) => {
    const { text, isLast, isAnswer, handleRemove, handleAdd, setAsAnswer } = props;
    const choiceClasses = isAnswer ? 'choice answer' : 'choice';

    return (
        <div className={choiceClasses}>
            <TextField placeholder='Digite aqui a alternativa...' variant='outlined' type='text' value={text} />
            <IconButton onClick={setAsAnswer} aria-label='Marcar como alternativa correta'><Icon>edit</Icon></IconButton>
            <IconButton onClick={handleRemove} aria-label='Remover esta alternativa'><Icon>delete_outline</Icon></IconButton>
            { isLast && <IconButton onClick={handleAdd} aria-label='Adicoinar alternativa em branco'><Icon>add</Icon></IconButton>}
        </div>
    );
}

const RightChoice = (props) => {

    const { choices } = props;
    const [choicesArr, updateChoicesArr] = React.useState((choices || [Object.assign({}, BLANK_CHOICE)]));

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
            const newState = _map(
                oldState,
                choice => {
                    choice.id === answer.id ? choice.isAnswer = true : choice.isAnswer = false;
                    return choice;
                }
            );
            console.log("Set as answer newState: ", newState);
            return newState;
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

export default RightChoice;