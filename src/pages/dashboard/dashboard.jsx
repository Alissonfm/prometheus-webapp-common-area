import React from 'react';

import { TeacherDashboard } from './components';

import './dashboard.scss';

const DASHBOARDS = {
    teacher: TeacherDashboard,
};

const Dashboard = (props) => {
    console.log("Dashboard props: ", props);

    const [dashboardType, toggleType] = React.useState('teacher');
    const Component = DASHBOARDS[dashboardType];

    return (
        <div className='dashboard-wrapper'>
            <Component {...props} />
        </div>
    );
}

export default Dashboard;