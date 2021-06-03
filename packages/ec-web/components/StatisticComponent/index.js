import React from 'react';
import './style.module.css';
import PropTypes from 'prop-types';


export const StatisticCPN = (props) => { const { Solieu, Mota, textcolor1, textcolor2, BGColor } = props
    return (
        <div className="u-container-style u-layout-cell u-radius-10 u-shape-round u-size-15 u-size-30-md u-layout-cell-6" ref={(el) => { if (el) {el.style.setProperty('background-color', BGColor, 'important')}}}>
            <div className="u-container-layout u-container-layout-7">
                <h4 className="u-align-center-sm u-align-center-xs u-text u-text-default u-text-4" style={{color:textcolor1}}>{Solieu}</h4>
                <h5 className="u-align-center-sm u-align-center-xs u-text u-text-5" style={{color:textcolor2}}>{Mota}</h5>
            </div>
        </div>
    )
};

StatisticCPN.propTypes = {
    Solieu: PropTypes.string,
    Mota: PropTypes.string,
    textcolor1: PropTypes.string,
    textcolor2: PropTypes.string,
    BGColor: PropTypes.string,
    onClick: PropTypes.func,
};

StatisticCPN.defaultProps = {
    onClick: undefined,
    Solieu: '0',
    Mota: 'Nhập mô tả...',
    textcolor1: 'white',
    textcolor2: '#654a55',
    BGColor: '#e892b4',
}
