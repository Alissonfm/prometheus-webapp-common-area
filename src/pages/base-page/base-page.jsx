import { Container, Drawer } from '@material-ui/core';
import React, { useState } from 'react';
import { Menu, Sidebar } from '../../organisms';
import RouterTree from '../../router';
import './base-page.scss';


const BasePage = (props) => {

  const [isSidebarOpened, sidebarToggle] = useState(false);
  const toggle = () => sidebarToggle(!isSidebarOpened);

  return (
    <div className="page">

      <Menu sidebarToggle={toggle} />

      <div className="content">

        <Container maxWidth='md'>
          <RouterTree />
        </Container>

        <Drawer className="drawer" variant="persistent" anchor="right" open={isSidebarOpened}>
          <Sidebar />
        </Drawer>

      </div>
    </div>
  );
};

export default BasePage;