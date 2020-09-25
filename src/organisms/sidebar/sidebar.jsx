import * as React from 'react';
import { Avatar } from '../../molecules';
import './sidebar.scss';


const Sidebar = ({ toggle }) => {

  const AvatarProps = {
    theme: 'light',
    name: 'Augusto Lima',
    role: 'Professor e Coordenador',
    imageSrc: '../../assets/img/user-test.jpg',
    // action: <IconButton onClick={toggle}><FormatAlignRightIcon /></IconButton>
  };

  return (
    <div className="wrapper">
      <div className="header">
        <Avatar {...AvatarProps} />
      </div>
      <div className="content">
        Sidebar
      </div>
    </div>
  );
}

export default Sidebar;