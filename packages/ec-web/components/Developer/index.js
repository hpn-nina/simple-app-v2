import React from 'react'
import PropTypes from 'prop-types'
import './style.module.css'

const Developer = (props) => {
    const { name, description, src } = props;
    return (
        <div className='developer-card'>
            <img src = {src} className='medium' alt={name}></img>
            <h1 className='developer-name'>{name}</h1>
            <div className = 'developer-description'>{description}</div>
        </div>
    );
};

Developer.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
};

Developer.defaultProps = {
    name: 'None',
    src:'/',
    description:'This is default'
};

export default Developer;