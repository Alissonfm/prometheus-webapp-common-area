import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { Loader } from '../../atoms';
import { Menu, Sidebar } from '../../organisms';
import RouterTree from '../../router';
import './base-page.scss';


const BasePage = (props) => {

  const [isSidebarOpened, sidebarToggle] = useState(false);
  const toggle = () => sidebarToggle((previousState) => !previousState);

  return (
    <div className="base-page">
      <Menu sidebarToggle={toggle} />

      <div className='base-content' data-show-sidebar={isSidebarOpened}>

        <div className='container'>
          <Loader />
          <RouterTree />
        </div>

        <div className='drawer'>
          <Sidebar toggle={toggle} />
        </div>

      </div>
    </div>
  );
};

export default BasePage;