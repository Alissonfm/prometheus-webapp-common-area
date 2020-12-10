import React from 'react';

import { Button as MuiButton, ButtonGroup } from '@material-ui/core';

import './style.scss';

const LearningTree = () => null;
const Creator = () => null;

const Component = (props) => {
    console.log("Learning props: ", props);

    const [vision, toggleVision] = React.useState('view');
    const onToggleVision = () => { toggleVision((currentVision) => (currentVision === 'view' ? 'creator' : 'view')); console.log("Trocar de visão para: ", vision) };
    const [isLoading, toggleLoading] = React.useState(true);
    const onToggleLoading = () => toggleLoading((previousState) => !previousState);

    return (
        <div className='page learning'>
            <div className='page-header'>
                <h2 className='page-title'> Aprendizado </h2>
                <ButtonGroup className='vision-toggler' size="large" aria-label="Clique para criar/editar">
                    <MuiButton data-selected={vision} onClick={onToggleVision}>Ver tarefas</MuiButton>
                    <MuiButton data-selected={vision} onClick={onToggleVision}>Criar</MuiButton>
                </ButtonGroup>
            </div>

            <div className='page-content' data-vision={vision}>
                <LearningTree />
                <Creator />
            </div>

        </div>
    );
}

const Learning = (props) => React.useMemo( () => <Component {...props} />, []);

export default Learning;