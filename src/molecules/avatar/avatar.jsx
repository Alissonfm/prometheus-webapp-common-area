import { Avatar as MatAvatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import './avatar.scss';

const Avatar = ({ className, name, role, action, imageSrc, theme }) => {
  const avatarClasses = `avatar ${theme || 'dark'} ${className}`;

  return (
    <div className={avatarClasses}>
      <div className='profile'>
        <MatAvatar className='image' src={imageSrc} alt="Imagem de perfil" />
        <div className='about'>
          {name && <h4>{name}</h4>}
          {role && <span>{role}</span>}
        </div>
      </div>
      { action && <div className="action">{action}</div>}
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  action: PropTypes.object,
  imageSrc: PropTypes.string,
  theme: PropTypes.string,
}

export default Avatar;