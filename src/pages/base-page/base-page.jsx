import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { Menu, Sidebar } from '../../organisms';
import RouterTree from '../../router';
import './base-page.scss';


const BasePage = (props) => {

  const [isSidebarOpened, sidebarToggle] = useState(false);
  const [dynamicClasses, updateClasses] = useState({ drawer: 'drawer teste', container: 'container' });

  const toggle = () => {
    sidebarToggle(!isSidebarOpened);

    !isSidebarOpened ?
      updateClasses({ drawer: 'drawer teste in', container: 'container retreat' }) :
      updateClasses({ drawer: 'drawer teste', container: 'container' });
  };

  return (
    <div className="page">
      <Menu sidebarToggle={toggle} />

      <div className='content'>

        <Container className={dynamicClasses.container} maxWidth='md'>
          <RouterTree />
        </Container>

        <div className={dynamicClasses.drawer}>
          <Sidebar toggle={toggle} />
        </div>

      </div>
    </div>
  );
};

export default BasePage;