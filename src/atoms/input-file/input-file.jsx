import React from 'react';

import _map from 'lodash/map';

import { TextField, Chip, Icon, Avatar } from '@material-ui/core';

import { Button } from '../';

import './input-file.scss';


const fileType = (extension) => {
    const type = {
        'png': 'crop_original',
        'jpg': 'crop_original',
        'pdf': 'picture_as_pdf',
        'default': 'attachment',
    };
    return <Icon>{type[extension] || type.default}</Icon>
}

const ButtonTrigger = () => {
    return <Button click={() => console.log("Button trigger")} ><Icon>add</Icon> Adicionar Arquivo</Button>
}

const InputTrigger = (props) => {
    const { value } = props;
    return <TextField value={value} label='Anexos' />
}

const FilePreview = (props) => {

    const { handleDelete } = props;

    const chipProps = {
        label: 'File preview',
        onDelete: handleDelete,
        avatar: <Avatar alt="Prévia de anexo">{fileType('png')}</Avatar>
    };

    return <Chip {...chipProps} />;
}

const VARIANT_TYPES = {
    'button': ButtonTrigger,
    'input': InputTrigger,
};

const InputFile = (props) => {

    const { variant, className } = props;
    const wrapperClasses = `input-file-wrapper ${className || ''}`;
    const files = [];
    const PickTrigger = VARIANT_TYPES[variant || 'button'];
    const handleDelete = (file) => files.splice(files.indexOf(file), 1);

    return (
        <div className={wrapperClasses}>

            <input hidden type='file' value={files} onChange={() => console.log("Files changed: ", files)} />

            <PickTrigger value={files} />
            
            <div className="file-list">
                {_map(files, (file) => <FilePreview {...file} handleDelete={handleDelete} /> )}
            </div>

        </div>    
    );
};

export default InputFile;