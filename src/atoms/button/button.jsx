import { Button as MuiButton } from '@material-ui/core';
import React from 'react';
import './button.scss';

const TYPES = {
  'default': 'contained',
  'text': '',
};

const COLORS = {
  'primary': 'bg--primary',
  'secondary': 'bg--secondary',
  'accent': 'bg--accent',
  'success': 'bg--success',
  'warn': 'bg--warn'
};

const Button = ({ variant, type, color, className, click, children }) => {
  const buttonType = TYPES[variant || 'default'];
  const buttonColor = COLORS[color || 'primary'];
  const buttonClasses = `custom-button ${buttonColor} ${className || ''}`;

  return <MuiButton type={type} variant={buttonType} className={buttonClasses} onClick={click} disableElevation>{children}</MuiButton>
}

export default Button;