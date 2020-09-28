import _map from 'lodash/map';
import * as React from 'react';
import { Widget } from '../../molecules';
import WDG from './mock';
import './sidebar.scss';


const Sidebar = (props) => {

  return (
    <div className="sidebar-content">
      {_map(WDG, (wid) => <Widget {...wid} />)}
    </div>
  );
}

export default Sidebar;