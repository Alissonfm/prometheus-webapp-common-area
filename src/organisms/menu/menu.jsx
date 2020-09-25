import { Badge, IconButton, MenuList } from '@material-ui/core';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import _map from 'lodash/map';
import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Avatar } from '../../molecules';
import './menu.scss';

const MENU_TREE = [
  { to: '/dashboard', counter: 0, label: <img src="../../assets/img/logo-icon-white.png" alt="prometheus-logo" /> },
  { to: '/profile', counter: 0, label: 'Perfil' },
  { to: '/requests', counter: 4, label: 'Solicitações' },
  { to: '/activities', counter: 0, label: 'Atividades' },
];

const MenuLink = ({ to, counter, label }) => {
  const activeLink = useRouteMatch({ path: to });
  const linkClasses = `menu-link ${activeLink ? 'activePage' : ''}`;
  const content = counter ? <Badge className='badge' badgeContent={counter}>{label}</Badge> : label;

  return (
    <Link className={linkClasses} to={to}>{content}</Link>
  );
}

const Menu = ({ sidebarToggle }) => {

  const avatarProps = {
    className: 'menu--avatar',
    theme: 'light',
    name: 'Augusto Lima',
    role: 'Professor e Coordenador',
    imageSrc: '../../assets/img/user-test.jpg',
    action: <IconButton onClick={sidebarToggle}><FormatAlignRightIcon /></IconButton>
  };

  return (
    <div className="menu">
      <MenuList className="nav-list">
        {_map(MENU_TREE, (menuItemData) => <MenuLink {...menuItemData} />)}
      </MenuList>

      <Avatar {...avatarProps} />
    </div>
  );
}

export default Menu;