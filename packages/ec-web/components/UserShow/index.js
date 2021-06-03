import React from 'react';
import urlImage from 'D:/Uit/HK4/Web/simple-app/packages/ec-web/public/LamThanhTin_image.jpg'
import './style.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button';


export const UserShow = (props) => { const { Name, UserType, PicSrc } = props
    return (
        <div className="u-layout">
        <div className="u-layout-row">
          <div className="u-container-style u-layout-cell u-size-1-md u-size-1-sm u-size-1-xs u-size-15-lg u-size-21-xl u-layout-cell-4">
            <div className="u-container-layout u-valign-top-lg u-valign-top-xl u-container-layout-5">
              <div className="u-align-center u-hidden-xs u-image u-image-circle u-image-1" alt="" data-image-width={1536} data-image-height={1541} />
            </div>
          </div>
          <div className="u-align-center-md u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-size-39-xl u-size-45-lg u-size-59-md u-size-59-sm u-size-59-xs u-layout-cell-5">
            <div className="u-container-layout u-container-layout-6">
              <h4 className="u-hidden-xs u-text u-text-black u-text-3">{Name}</h4>
              <Button label={UserType} primary='true'/>
            </div>
          </div>
        </div>
      </div>
    )
};

UserShow.propTypes = {
    Name: PropTypes.string,
    UserType: PropTypes.string,
    PicSrc: PropTypes.string,
};

UserShow.defaultProps = {
    Name: 'User name',
    UserType: 'SELLER',
    PicSrc: '#',
}
