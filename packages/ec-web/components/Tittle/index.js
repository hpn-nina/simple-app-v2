import React from 'react';
import './style.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export default function Tittle({tittle}){
    return(
        <div>
            <h1 className="u-align-center u-custom-font u-font-raleway u-text u-title u-text-1">
            {tittle}
            </h1>
        </div>
    )
}

Tittle.propTypes = {
    tittle: PropTypes.string,
  };
  
Tittle.defaultProps = {
    tittle: 'Chỉnh sửa tittle...',
};