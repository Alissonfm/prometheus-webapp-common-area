import { Button as MuiButton } from '@material-ui/core';
import React from 'react';
import './button.scss';

const TYPES = {
  'default': 'contained'
};

const COLORS = {
  'primary': 'bg--primary',
  'secondary': 'bg--secondary',
  'accent': 'bg--accent',
  'success': 'bg--success',
  'warn': 'bg--warn'
};

const Button = ({ type, color, className, click, children }) => {
  const buttonType = TYPES[type || 'default'];
  const buttonColor = COLORS[color || 'primary'];
  const buttonClasses = `custom-button ${buttonColor} ${className || ''}`;

  return <MuiButton variant={buttonType} className={buttonClasses} onClick={click} disableElevation>{children}</MuiButton>
}

export default Button;