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

const ButtonTrigger = ({onClick}) => <Button onClick={onClick} ><Icon>add</Icon> Adicionar Anexo</Button>;

const InputTrigger = ({ value, onClick }) => <TextField onClick={onClick} value={value} label='Anexos' />;

const VARIANT_TYPES = { 'button': ButtonTrigger, 'input': InputTrigger };

const FilePreview = ({files, handleDelete}) => {

    if ( !files || !files.length ) return null;

    const fileToChip = (file) => {
        console.log("File for preview: ", file);

        const chipProps = {
            key: `${file.size}-${file.lastModified}`,
            label: file.name,
            onDelete: () => handleDelete(file),
            icon: fileType(file.type.split('/')[1]),
            className: 'file-preview-chip',
            // avatar: <Avatar alt="Prévia de anexo" />
        };
        return <Chip {...chipProps} />;
    }

    return (
        <div className="file-list">
            <h4>Arquivo(s) selecionado(s): </h4>
            {_map(files, fileToChip)}
        </div>
    );
}

const InputFile = (props) => {
    const { variant, className } = props;
    const [files, updateFiles] = React.useState([]);

    const Trigger = VARIANT_TYPES[variant || 'button'];
    const wrapperClasses = `input-file-wrapper ${className || ''}`;
    const baseInputRef = React.createRef();

    const openSelectFileWindow = () => baseInputRef.current.click();
    
    const handleDelete = (file) => updateFiles((state) => {
        const newState = [].concat(state); 
        newState.splice(newState.indexOf(file), 1); 
        return newState
    });

    const handleAddFiles = ($event) => {
        const newFiles = $event.target.files;
        updateFiles((files) => {
            const newState = [].concat(files);
            for(let i=0; i < newFiles.length; i++) newState.push(newFiles[i]);
            return newState;
        });
    };

    return (
        <div className={wrapperClasses}>
            <input hidden multiple type='file' ref={baseInputRef} onChange={handleAddFiles} />
            <Trigger onClick={openSelectFileWindow} value={files} />
            <FilePreview files={files} handleDelete={handleDelete} />
        </div>    
    );
};

export default InputFile;