import React from 'react';

import { CircularProgress } from '@material-ui/core';

import './loader.scss';

const Loader = (props) => {
    console.log("Loader props", props);
    const { isLoading = false, className, text } = props;

    const [loading, toggleLoading] = React.useState(isLoading);

    if (!loading) return null;

    const loaderClasses = `loader-wrapper ${className}`;

    return (
        <div className={loaderClasses}>
            <span className='loader-spinner'>
                <CircularProgress />
            </span>
            {text && <span className='loader-text'>{text}</span>}
        </div>
    );
}

export default Loader;