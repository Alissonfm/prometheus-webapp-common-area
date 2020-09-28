import PropTypes from 'prop-types';
import React from 'react';
import './widget.scss';
import { WidgetActivities } from './widgets';

const WIDGET_TYPES = {
  'activity': WidgetActivities,
}

const Widget = ({ type, title, content }) => {
  const Component = WIDGET_TYPES[type];

  if (!Component) return null;

  return (
    <div className="widget">
      <h4 className="widget-title">{title}</h4>
      <Component content={content} />
    </div>
  );
}

Widget.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
};

export default Widget;