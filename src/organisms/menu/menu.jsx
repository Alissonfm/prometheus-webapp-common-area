import { IconButton, MenuItem, MenuList } from '@material-ui/core';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import _map from 'lodash/map';
import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './menu.scss';

const MENU_TREE = [
  { to: '/dashboard', label: () => <img src="../../assets/img/logo-icon-white.png" alt="prometheus-logo" /> },
  { to: '/profile', label: 'Perfil' },
  { to: '/requests', label: 'Solicitações' },
  { to: '/activities', label: 'Atividades' },
];

const MenuLink = ({ to, label }) => {
  const activeLink = useRouteMatch({ path: to });

  return (
    <Link className={activeLink ? 'activePage' : ''} to={to}>
      <MenuItem>{label}</MenuItem>
    </Link>
  );
}

const Menu = ({ sidebarToggle }) => {

  return (
    <div className="menu">
      <MenuList className="nav-list">
        {_map(MENU_TREE, (menuItemData) => <MenuLink {...menuItemData} />)}
      </MenuList>

      <IconButton onClick={sidebarToggle}><FormatAlignRightIcon /></IconButton>

    </div>
  );
}

export default Menu;