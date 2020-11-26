import React from 'react';

import _map from 'lodash/map';

import { Widget } from '../../../molecules';

import '../dashboard.scss';

const graphData = {
    title: 'Turma 1000',
    icon: 'transfer_within_a_station',
    actions: [{ onClick: () => console.log("action graph"), content: 'Ver detalhes da turma', icon: 'search' }],
    type: 'doughnut',
    data: {
        datasets: [{ data: [ 20, 10 ], backgroundColor: [ '#ff9100', '#00ecd4' ] }],
        labels: [ 'Media de presença', 'Abaixo da média' ],
        metric: '%',
    },
    options: {
        legend: { display: false },
        responsive: true,
        aspectRatio: 1,
        cutoutPercentage: 75,
    }
};

const widgets_sizes = {
    0: 'widget--small',
    1: 'widget--medium',
    2: 'widget--full'
};

const mock_widgets_teacher = [
    { type: 'welcome', transparent: true, user: {type: 'Professor'}, size: 1 },
    { type: 'messages', size: 0, count: '07' },
    { type: 'graphs', size: 2, title: 'Estatísticas dos alunos', icon: 'bar_chart', graphs: [graphData, graphData] }
];

const TeacherDashboard = (props) => {

    const { widgets } = props;
    const widgetsPreState = widgets ? mock_widgets_teacher.concat(widgets) : mock_widgets_teacher;

    const [widgetsState, updateWidgets] = React.useState(widgetsPreState);

    const mappedWidget = _map(widgetsState, ({ size, ...widget}) => { 
        const className = `dashboard-widget ${widgets_sizes[size || 0]}`;
        return <Widget {...widget} className={className} />
    });

    return <div className='teacher widget-grid'>{mappedWidget}</div>;
}

export default TeacherDashboard;