import React from 'react';
import { Link } from 'react-router-dom';
import { Button as MuiButton } from '@material-ui/core';

import './button.scss';

const TYPES = {
  'default': 'contained',
  'text': '',
  'link': 'link'
};

const COLORS = {
  'primary': 'bg--primary',
  'secondary': 'bg--secondary',
  'accent': 'bg--accent',
  'success': 'bg--success',
  'warn': 'bg--warn',
  'cancel': 'bg--cancel',
};

const ButtonAsLink = ({ to, children, ...buttonProps }) => <Link className='clear--underscore' to={to}><MuiButton {...buttonProps}>{children}</MuiButton></Link>;

const Button = ({ variant, type, color, className, onClick, children, ...props }) => {
  const buttonType = TYPES[variant || 'default'];
  const buttonColor = COLORS[color || 'primary'];
  const buttonClasses = `custom-button ${buttonColor} ${className || ''}`;

  const buttonProps = {
    type, 
    onClick: onClick || null,
    variant: buttonType, 
    className: buttonClasses, 
    disableElevation: true,
    ...props,
  };

  if(buttonType == 'link') return <ButtonAsLink {...buttonProps}>{children}</ButtonAsLink>;

  return <MuiButton {...buttonProps}>{children}</MuiButton>
}

export default Button;