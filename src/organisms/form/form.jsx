import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import _reduce from 'lodash/reduce';

import FormElement from './form-element';

const extractFieldNames = (fields) => _reduce(fields, (accumulator, {name, initialValue}) => ({...accumulator, [name]: initialValue || '' }), {});

const Form = (props) => {

    const {fields, validateRules, handleSubmit, className, customBody, children} = props;

    const defaultForm = (props) => <FormElement {...props} fields={fields} className={className} />;

    const formikConfig = {
        initialValues: extractFieldNames(fields),
        onSubmit: handleSubmit,
        validate: validateRules,
        children: customBody ? children : defaultForm,
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
        initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
        options: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
        })),
        className: PropTypes.string,
    })),
    validateRules: PropTypes.arrayOf(PropTypes.func),
    handleSubmit: PropTypes.func,
    customBody: PropTypes.bool,
};

export default Form;