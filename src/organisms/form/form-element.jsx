import React from 'react';
import _map from 'lodash/map';

import { TextField, MenuItem } from '@material-ui/core';
import { InputFile } from '../../atoms'; 

import './form.scss';

const TextAreaField = (props) => <TextField {...props} variant="outlined" label={props.label} multiline />;

const SelectField = (props) => {
    const { options } = props;
    const optionComponents = _map(options, ({name, value}) => <MenuItem key={`${name}-${Math.random}`} value={value}>{name}</MenuItem>);
    return <TextField {...props} variant="outlined" label={props.label} select><MenuItem value=''>Selecionar...</MenuItem>{optionComponents}</TextField>;
};

const FIELD_COMPONENTS = {
    text: (props) => <TextField {...props} variant="outlined" label={props.label} />,
    textarea: TextAreaField,
    select: SelectField,
    file: InputFile,
};

const FormField = (props) => {
    const { fieldtype, value } = props;
    const Component = FIELD_COMPONENTS[fieldtype || 'text'];
    return <Component {...props} value={value} />;
};

const FormElement = (props) => {

    const { handleSubmit, handleChange, fields, values, className } = props;
    const formClasses = `custom-form ${className || ''}`;
    const formFields = _map(fields, (field) => <FormField {...field} key={`${field.name}-${Math.random}`} onChange={handleChange} value={values[field.name]} />);

    return <form onSubmit={handleSubmit} className={formClasses}>{formFields}</form>;
};

export default FormElement;