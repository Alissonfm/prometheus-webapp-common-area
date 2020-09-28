import { Avatar as MatAvatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import './avatar.scss';

const Avatar = ({ className, name, description, action, imageSrc, size, theme }) => {
  const avatarClasses = `avatar ${theme || 'dark'} ${className}`;
  const imageClasses = `image ${size || ''}`;
  const aboutClasses = `about ${size || ''}`;

  return (
    <div className={avatarClasses}>
      <div className='profile'>
        <MatAvatar className={imageClasses} src={imageSrc} alt="Imagem de perfil" />
        <div className={aboutClasses}>
          {!!name && <h4>{name}</h4>}
          {!!description && <span>{description}</span>}
        </div>
      </div>
      {!!action && <div className="action">{action}</div>}
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  action: PropTypes.any,
  imageSrc: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
}

export default Avatar;