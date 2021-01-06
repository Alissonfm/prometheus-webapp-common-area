import React from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import _map from 'lodash/map'
import _reduce from 'lodash/reduce'
import Chart from 'chart.js';
import { Paper, Icon } from '@material-ui/core';

import { Button } from '../../atoms';

import './graph.scss';

const GraphTitle = ({title, icon}) => {
    if (!title && !icon) return null;

    return (
        <h5 className='graph-title'>
            { icon && <Icon>{icon}</Icon> }
            { title && title }
        </h5>
    );
}

const GraphLegends = ({graphData}) => {
    const { labels, datasets, metric } = graphData.data;
    const { data, backgroundColor } = datasets[0];
    const totalValue = _reduce(data, (value, accumulator) => (accumulator + value), 0);

    return _map(labels, (label, index) => {
        const value = ((data[index] * 100) / totalValue).toFixed(2);
        const color = backgroundColor[index];

        return (
            <div key={uuidv4()} className='graph-legend' >
                <span className='graph-legend-color' style={{backgroundColor: color}}></span>
                <span className='graph-legend-content'>{label}</span>
                <span className='graph-legend-value' data-metric={metric}>{value}</span>
            </div>
        );
    });
}

const GraphActions = ({ actions }) => {
    if(!actions || actions.length < 1) return null;

    return _map(actions, (action) => {
        const { content, icon, onClick, className, ...buttonProps} = action;
        const buttonClasses = `graph-action ${className}`;

        return (
            <Button key={uuidv4()} className={buttonClasses} onClick={onClick} {...buttonProps}>
                { icon && <Icon>{icon}</Icon> }
                { content }
            </Button>
        ); 
    });
}

const Graph = (props) => {
    const { title, icon, className, actions, ...graphConfig } = props;

    const graphClasses = `graph ${className||''}`;
    const graphId = uuidv4();

    React.useEffect(() => {
        const canvasElement = document.getElementById(graphId).getContext("2d");
        new Chart(canvasElement, {...graphConfig});
    }, [graphId, graphConfig]);

    return  (
        <Paper className='graph-wrapper' elevation={0}>
            <GraphTitle title={title} icon={icon} />
            <div className='graph-data'>
                <div className='graph-container'>
                    <canvas className={graphClasses} id={graphId}></canvas>
                </div>
                <div className='graph-side-info'>
                    <GraphLegends graphData={graphConfig} />
                    <GraphActions actions={actions} />
                </div>
            </div>
        </Paper>
    );
}

Graph.prototype = {
    actions: PropTypes.array,
    className: PropTypes.string,
    type: PropTypes.string,
    data: PropTypes.object,
    options: PropTypes.object,
};

export default Graph;