import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import _map from 'lodash/map';

import

import './activity-creator.scss';

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

const Relational = (props) => {

    const {answers, handleAdd, handleRemove, handleUpdate} = props;

    return (
        <div className='relational-wrapper'>
            <ColumnsHandler {} />
        </div>
    );
};

export default Relational;