import React from 'react';
import PropTypes from 'prop-types';
import './style.module.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export const FlatButton = (props) => {const { label, link} = props
  return (
    <a href={link} class="u-align-center-xs u-btn u-button-style u-custom-color-16 u-hover-custom-color-3 u-btn-2">{label}</a>
  )
}

export const FlatButtonIndexed = (props) => {const {label, link}= props
  return (
    <a href={link} class="u-align-center-sm u-align-center-xs u-btn u-button-style u-custom-color-18 u-hover-custom-color-3 u-btn-1">{label}</a>
  )
}

FlatButton.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
}

FlatButtonIndexed.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
}

FlatButton.defaultProps = {
  label: 'Button',
  link: '#',
}

FlatButtonIndexed.defaultProps = {
  label: 'Button',
  link: '#',
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
