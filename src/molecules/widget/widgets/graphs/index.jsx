import React from 'react';

import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import _map from 'lodash/map';

import { Graph } from '../../../../atoms';

import './graphs.scss';

const Graphs = ({ graphs }) => {
    const mappedGraphs = _map(graphs, (graphConfig) => <Graph key={uuidv4()} {...graphConfig} />);
    return <div className='graphs-widget-wrapper'>{mappedGraphs}</div>;
};

Graphs.propType = {
    graphs: PropTypes.array,
};

export default Graphs;