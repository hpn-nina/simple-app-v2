import React from 'react';
import Navigation from '../Navigation';
import './style.module.css';
import Link from 'next/link'
import PropTypes from 'prop-types';



{/*export default function Header({ user, onLogin, onLogout, onCreateAccount }) {
    return (
        <header>
                <div className = "row">
                    <a className="navbar-brand" id='logo' href="#">simple</a>
                    <div>
                        {user ? (
                            <Button size="small" onClick={onLogout} label="Log out" />
                            ) : (
                            <>
                            <Button size="small" onClick={onLogin} label="Log in" />
                            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
                            </>
                        )}
                    </div>
                </div>
                <Navigation/>
        </header>
    )
}
*/}

export default function Header({user, onLogin, onLogout}) {
    return (
      <header className="u-header u-valign-top-xl u-white u-header" id="sec-e6c0" data-animation-name data-animation-duration={0} data-animation-delay={0} data-animation-direction><div className="u-clearfix u-expanded-width u-grey-5 u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-size-16 u-size-60-md u-layout-cell-1">
                <div className="u-container-layout u-valign-middle-md u-valign-middle-sm u-container-layout-1">
                  <p className="u-align-center u-text u-text-default-lg u-text-default-md u-text-default-sm u-text-default-xl u-text-1">Chào mừng bạn đến với SIMPLE!</p>
                </div>
              </div>
              <div className="u-container-style u-layout-cell u-size-18-sm u-size-18-xs u-size-29-lg u-size-29-xl u-size-60-md u-layout-cell-2">
                <div className="u-container-layout u-valign-middle-md u-valign-middle-sm u-container-layout-2">
                  <a href="#" className="u-align-center-md u-align-center-sm u-align-center-xs u-align-right-lg u-align-right-xl u-btn u-button-style u-custom-font u-font-raleway u-none u-text-custom-color-1 u-text-hover-custom-color-2 u-btn-1"><span className="u-icon u-text-palette-2-base"><svg className="u-svg-content" viewBox="0 0 511.334 511.334" style={{width: '1em', height: '1em'}}><path d="m506.887 114.74c-3.979-5.097-10.086-8.076-16.553-8.076h-399.808l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123h-42.667c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468l23.018 256.439c.005.302-.01.599.007.903.047.806.152 1.594.286 2.37l.842 9.376c.016.177.034.354.055.529 2.552 22.11 13.851 41.267 30.19 54.21-8.466 10.812-13.532 24.407-13.532 39.172 0 35.106 28.561 63.667 63.666 63.667 35.106 0 63.667-28.561 63.667-63.667 0-7.605-1.345-14.9-3.801-21.667h114.936c-2.457 6.767-3.801 14.062-3.801 21.667 0 35.106 28.561 63.667 63.667 63.667s63.667-28.561 63.667-63.667-28.561-63.667-63.667-63.667h-234.526c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724c9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c1.567-6.272.158-12.918-3.821-18.016z" /></svg><img /></span>&nbsp;Giỏ hàng
                  </a>
                </div>
              </div>
              <div className="u-container-style u-layout-cell u-size-15-lg u-size-15-xl u-size-16-sm u-size-16-xs u-size-60-md u-layout-cell-3">
                <div className="u-container-layout u-valign-top-lg u-valign-top-xl u-container-layout-3">
                  <div className="u-align-center-md u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-xl u-container-style u-custom-color-33 u-group u-radius-10 u-shape-round u-group-1">
                    <div className="u-container-layout u-container-layout-4">
                      <div className="u-image u-image-circle u-image-1" alt="true" data-image-width={1536} data-image-height={1541} />
                      <p className="u-custom-font u-font-raleway u-text u-text-2">Hi! Lâm Thành Tín</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><h2 className="u-text u-text-3" data-animation-name="bounceIn" data-animation-duration={1000} data-animation-delay={0} data-animation-direction>
          <a className="u-active-none u-btn u-btn-round u-button-style u-custom-font u-font-raleway u-gradient u-hover-none u-none u-radius-10 u-text-active-white u-text-hover-white u-text-white u-btn-2" id='logo' href="#" data-animation-name="fadeIn" data-animation-duration={1000} data-animation-delay={0} data-animation-direction="Down">SIMPLE</a>
        </h2><nav className="u-dropdown-icon u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div className="menu-collapse" style={{fontSize: '1.125rem', letterSpacing: '0px', fontWeight: 500}}>
            <a className="u-button-style u-custom-active-color u-custom-border-radius u-custom-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-text-shadow u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
              <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger" /></svg>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" style={{width: '16px', height: '16px'}}><rect y={1} width={16} height={2} /><rect y={7} width={16} height={2} /><rect y={13} width={16} height={2} />
                  </symbol>
                </defs></svg>
            </a>
          </div>
          <div className="u-custom-menu u-nav-container">
            <ul className="u-custom-font u-heading-font u-nav u-unstyled u-nav-1"><li className="u-nav-item"><a className="u-active-palette-2-light-2 u-border-2 u-border-hover-white u-border-white u-button-style u-hover-custom-color-39 u-nav-link u-radius-11 u-text-active-white u-text-grey-50 u-text-hover-custom-color-2 u-white" href="#" style={{padding: '10px 20px'}}>HOME</a>
              </li><li className="u-nav-item"><a className="u-active-palette-2-light-2 u-border-2 u-border-hover-white u-border-white u-button-style u-hover-custom-color-39 u-nav-link u-radius-11 u-text-active-white u-text-grey-50 u-text-hover-custom-color-2 u-white" href="Khám-phá.html" style={{padding: '10px 20px'}}>Khám phá</a><div className="u-nav-popup"><ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link u-white">Graphic &amp; design</a>
                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-white">Lifestyle</a>
                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-white">Gaming</a>
                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-white">Programming &amp; tech</a>
                    </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-white">Writing &amp; translation</a>
                    </li></ul>
                </div>
              </li><li className="u-nav-item"><a className="u-active-palette-2-light-2 u-border-2 u-border-hover-white u-border-white u-button-style u-hover-custom-color-39 u-nav-link u-radius-11 u-text-active-white u-text-grey-50 u-text-hover-custom-color-2 u-white" href="#" style={{padding: '10px 20px'}}>Về chúng tôi</a>
              </li></ul>
          </div>
          <div className="u-custom-menu u-nav-container-collapse">
            <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div className="u-sidenav-overflow">
                <div className="u-menu-close" />
                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-3"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="#" style={{padding: '10px 20px'}}>Home</a>
                  </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="Khám-phá.html" style={{padding: '10px 20px'}}>Khám phá</a><div className="u-nav-popup"><ul className="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-4"><li className="u-nav-item"><a className="u-button-style u-nav-link">Graphic &amp; design</a>
                        </li><li className="u-nav-item"><a className="u-button-style u-nav-link">Lifestyle</a>
                        </li><li className="u-nav-item"><a className="u-button-style u-nav-link">Gaming</a>
                        </li><li className="u-nav-item"><a className="u-button-style u-nav-link">Programming &amp; tech</a>
                        </li><li className="u-nav-item"><a className="u-button-style u-nav-link">Writing &amp; translation</a>
                        </li></ul>
                    </div>
                  </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="#" style={{padding: '10px 20px'}}>Về chúng tôi</a>
                  </li></ul>
              </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
          </div>
        </nav>
        <style jsx>
          {`
            #logo{
              font-family: Azonix;
            }
          `}
        </style>
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
  };
  
Header.defaultProps = {
    user: null,
};