import React from 'react';
import _map from 'lodash/map';

import { TextField, MenuItem } from '@material-ui/core';
// import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { InputFile } from '../../atoms'; 

import './form.scss';

const SelectField = (props) => {
    const { options } = props;
    const optionComponents = _map(options, ({name, value}) => <MenuItem key={`${name}-${Math.random}`} value={value}>{name}</MenuItem>);
    return <TextField {...props} variant="outlined" select><MenuItem value=''>Selecionar...</MenuItem>{optionComponents}</TextField>;
};

const FIELD_COMPONENTS = {
    text: (props) => <TextField {...props} type='text' variant="outlined" />,
    textarea: (props) => <TextField {...props} type='textarea' variant="outlined" multiline />,
    select: SelectField,
    file: InputFile,
    date: (props) => <TextField {...props} label='' vairant='outlined' type='date' form />,
    time: (props) => <TextField {...props} label='' vairant='outlined' type='time' />,
    datetime: (props) => <TextField {...props} label='' vairant='outlined' type='datetime-local' />,
    number: (props) => <TextField {...props} vairant='outlined' type='number'/>
};

const FormField = (props) => {
    const { fieldtype, value } = props;
    const Component = FIELD_COMPONENTS[fieldtype || 'text'];
    return <Component {...props} value={value} />;
};

const FormElement = (props) => {
    console.log("Form elemnt props: ", props);
    const { handleSubmit, handleChange, fields, values, className } = props;
    const formClasses = `custom-form ${className || ''}`;
    const formFields = _map(fields, (field) => <FormField {...field} key={`${field.name}-${Math.random}`} onChange={handleChange} value={values[field.name]} />);

    return <form onSubmit={handleSubmit} className={formClasses}>{formFields}</form>;
};

export default FormElement;