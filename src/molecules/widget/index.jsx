import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Paper } from '@material-ui/core';
import { WidgetActivities, Welcome, Messages, Graphs } from './widgets';
import './widget.scss';

const WIDGET_TYPES = {
  'activity': WidgetActivities,
  'welcome': Welcome,
  'graphs': Graphs,
  'messages': Messages,
}

const Widget = ({ type, title, icon, elevation, transparent, className, ...props }) => {
  const Component = WIDGET_TYPES[type];
  const widgetClasses = `widget ${transparent && 'transparent'} ${className}`;

  if (!Component) return null;

  const WHeader = () => {
    if(!icon && !title) return null;
    return (
      <h4 className="widget-title" >
        { icon && <Icon>{icon}</Icon> }
        { title && title}
      </h4>
    );
  }

  return (
    <Paper elevation={elevation || 0} className={widgetClasses}>
      <WHeader />
      <Component {...props} />
    </Paper>
  );
}

Widget.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  elevation: PropTypes.number,
  transparent: PropTypes.bool,
  className: PropTypes.string,
  content: PropTypes.any,
};

export default Widget;