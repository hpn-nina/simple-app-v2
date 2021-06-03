import React from 'react';
import './style.module.css';
import PropTypes from 'prop-types';


export const NoteCPN = (props) => { const { Headline, DayTime, Content } = props
    return (
        <div class="u-align-left-xs u-blog-post u-container-style u-radius-10 u-repeater-item u-shape-round u-white u-repeater-item-1">
              <div class="u-container-layout u-similar-container u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1">
                <h4 class="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-blog-control u-text u-text-2">
                  <a class="u-post-header-link">{Headline}</a>
                </h4>
                <div class="u-blog-control u-metadata u-text-grey-40 u-metadata-1">
                  <span class="u-meta-date u-meta-icon">{DayTime}</span>
                  <span class="u-meta-edit u-meta-icon">Edit</span>
                </div>
                <p class="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-blog-control u-post-content u-text u-text-3">{Content}</p>
            </div>
        </div>
    )
};

NoteCPN.propTypes = {
    Headline: PropTypes.string.isRequired,
    DayTime: PropTypes.string,
    Content: PropTypes.string,
    onClick: PropTypes.func,
};

NoteCPN.defaultProps = {
    onClick: undefined,
    DayTime: '31/05/2021',
    Content: 'Click to edit note...',
}
