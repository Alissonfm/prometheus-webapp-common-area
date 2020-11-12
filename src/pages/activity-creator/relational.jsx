import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import _map from 'lodash/map';

import {
    Icon,
    IconButton,
    MenuItem,
    Table, 
    TableBody,
    TableCell, 
    TableContainer,
    TableRow,
    TextField,
} from '@material-ui/core';

import './activity-creator.scss';

const INDICATORS = ['a','b','c','d','e','f'];

const BLANK_ROW = {
    id: uuidv4(),
    left: {
        text: '',
        id: '',
    },
    right: {
        text: '',
        answer: '',
        input: '',
    },
}

{/* <IconButton onClick={setAsAnswer} aria-label={buttonHelpers.setAnswer} title={buttonHelpers.setAnswer}><Icon>{setAsAnswerIcon}</Icon></IconButton>
<IconButton onClick={handleRemove} aria-label={buttonHelpers.remove} title={buttonHelpers.remove}><Icon>delete_outline</Icon></IconButton>
{ isLast && <IconButton onClick={addChoice} aria-label={buttonHelpers.add} title={buttonHelpers.add}><Icon>add</Icon></IconButton>} */}

// Trocar a lógica do professor informar a resposta da coluna direita, pois, eles já estão na mesma coluna, construi esse 'embaralhamento' na visão do aluno.
// Remover a trava lógica da quantidade de colunas, permitir que o professor defina quantas vão aparecer para o alune.

const TableRows = (props) => {
    console.log("Table row: ", props);

    const { left, right, key, isLast, indicator, availableIndicator, addRow, removeRow, updateLeftText, updateRightText, setRightAnswer } = props;
    const showAddButton = isLast && (availableIndicator.length < 6);

    const btnProps = {
        add: {
            'aria-label': 'Remover esta linha',
            onClick: addRow,
        },
        remove: {
            'aria-label': 'Adicionar mais uma linha',
            onClick: removeRow,
        }
    };

    const changeLeft = ($event) => updateLeftText($event.target.value);
    const changeRight = ($event) => updateRightText($event.target.value);

    const changeRightAnswer = ($event) => {
        console.log('$event.target.value', $event.target.value);
        console.log('$event.value', $event.value);
        setRightAnswer($event.target.value) 
    };

    return (
        <TableRow key={key}>

            <TableCell className='left-cell'>
                <span>{indicator}</span>
                <TextField variant='outlined' label='Texto' defaultValue={left.text} onChange={changeLeft} />
            </TableCell>

            <TableCell className='right-cell'>
                <TextField variant='outlined' label='Texto' defaultValue={right.text} onChange={changeRight} />
                <TextField select label='Correto' title='Selecione o item correspondente da coluna esquerda' variant='outlined' defaultValue={right.answer} onChange={changeRightAnswer}>
                    {_map(availableIndicator, (item) => <MenuItem key={uuidv4()} value={item}>{item}</MenuItem>)}
                </TextField>
            </TableCell>

            <TableCell className='action-cell'>
                <IconButton {...btnProps.remove}><Icon>delete_outline</Icon></IconButton>
                { showAddButton && <IconButton {...btnProps.add}><Icon>add</Icon></IconButton> }
            </TableCell>

        </TableRow>
    );
}

const Relational = (props) => {

    const {answers, handleAdd, handleRemove, handleUpdate} = props;

    React.useEffect(() => {
        if(answers.length <= 0) {
            handleAdd(BLANK_ROW)
        }
    }, [answers]);


    const addRow = () => handleAdd(BLANK_ROW);
    const removeRow = (row) => handleRemove(row);

    const updateLeftText = (newText, row) => {
        row.left.text = newText;
        handleUpdate(row);
    };

    const updateRightText = (newText, row) => {
        row.right.text = newText;
        handleUpdate(row);
    };

    const setRightAnswer = (newAnswer, row) => {
        row.right.answer = newAnswer;
        handleUpdate(row);
    }

    const mappedRows = _map(answers, (row, index) => {
        const rowProps = {
            ...row,
            key: row.id,
            isLast: (answers.length - (index + 1)) == 0,
            indicator: INDICATORS[index],
            availableIndicator: INDICATORS.slice(0, answers.length),
            addRow,
            removeRow: () => removeRow(row), 
            updateLeftText: (newText) => updateLeftText(newText, row),
            updateRightText: (newText) => updateRightText(newText, row),
            setRightAnswer: (newAnswer) => setRightAnswer(newAnswer, row)
        };

        return <TableRows {...rowProps} />;
    });


    return (
        <TableContainer className="relational-wrapper">
            <h4>Colunas: </h4>
            <Table aria-label="Relaciona a coluna da esquerda com a direita">
                <TableBody>{mappedRows}</TableBody>
            </Table>
        </TableContainer>
    );
};

export default Relational;