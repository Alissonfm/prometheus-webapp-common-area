import _map from 'lodash/map';
import React from 'react';
import { Avatar } from '../../..';
import './widget-activities.scss';

const Message = ({ id, content, myMessage }) => {
  const messageClasses = `message ${myMessage ? 'mine' : ''}`;

  return (
    <div key={id} style={{ order: id }} className={messageClasses}>
      {content}
    </div>
  );
}

const ActivityConversation = ({ messages }) => {
  if (!messages || messages.length === 0) return null;

  const formatMessages = _map(messages, (msg) => <Message {...msg} />)

  return (
    <div className="activity-messages">

      {formatMessages}
    </div>
  );
}

const Activity = ({ status, description, person, messages }) => {
  person.action = status === 'done' ? person.action : null;
  person.description = description;

  return (
    <div className="activity">
      <Avatar {...person} />
      <ActivityConversation messages={messages} />
    </div>
  );
}

const WidgetActivities = ({ content }) => {
  const activities = _map(content, (activity) => <Activity {...activity} />);

  return (
    <div className="widget-activities-wrapper">
      {activities}
    </div>
  );
}

export default WidgetActivities;