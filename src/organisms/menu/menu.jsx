import { Badge, IconButton, MenuList } from '@material-ui/core';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import _map from 'lodash/map';
import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Avatar, MenuDataContextSelector } from '../../molecules';
import './menu.scss';

const MENU_TREE = [
  { to: '/', counter: 0, matchExact: true, label: <img style={{ maxWidth: '40px' }} src="../../assets/img/logo-icon-white.png" alt="prometheus-logo" /> },
  { to: '/profile', counter: 0, label: 'Perfil' },
  { to: '/requests', counter: 0, label: 'Solicitações' },
  { to: '/activities', counter: 0, label: 'Atividades' },
  { to: '/launcher', counter: 0, label: 'Lançamentos' },
  // { to: '/learning', counter: 0, label: 'Aprendizado' }
];

const MenuLink = ({ to, matchExact, counter, label }) => {
  const activeLink = useRouteMatch({ path: to, exact: matchExact });
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
    description: 'Professor e Coordenador',
    imageSrc: '../../assets/img/user-test.jpg',
    action: <IconButton onClick={sidebarToggle}><FormatAlignRightIcon /></IconButton>
  };

  return (
    <div className="menu">
      <MenuList className="nav-list">
        {_map(MENU_TREE, (menuItemData) => <MenuLink {...menuItemData} />)}
      </MenuList>
      <div className="right-wrapper">
        <MenuDataContextSelector />
        <Avatar {...avatarProps} />
      </div>
    </div>
  );
}

export default Menu;