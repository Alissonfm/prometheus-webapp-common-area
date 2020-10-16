import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import _reduce from 'lodash/reduce';

import FormElement from './form-element';

const extractFieldNames = (fields) => _reduce(fields, (accumulator, {name, initialValue}) => ({...accumulator, [name]: initialValue || '' }), {});

const Form = (props) => {

    const {fields, validateRules, handleSubmit, className} = props;

    const formikConfig = {
        initialValues: extractFieldNames(fields),
        onSubmit: handleSubmit,
        validate: validateRules,
        children: (props) => <FormElement {...props} fields={fields} className={className} />,
    };

    return <Formik {...formikConfig} />;
};

Form.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
        required: PropTypes.bool,
        type: PropTypes.string,
        fieldtype: PropTypes.string,
        initialValue: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
        })),
    })),
    validateRules: PropTypes.arrayOf(PropTypes.func),
    handleSubmit: PropTypes.func,
};

export default Form;