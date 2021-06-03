import React from 'react';

import './style.module.css';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export default function FindForm({}){
    return(
        <div className="u-form u-form-1">
        <form action="#" method="POST" className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form" style={{padding: '15px'}} source="custom">
          <div className="u-form-group u-form-name">
            <input type="text" placeholder="Nhập việc cần tìm..." id="name-558c" name="find" className="u-border-1 u-border-white u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-white u-input-1" required />
          </div>
          <div className="u-form-group u-form-submit">
            <Button primary='true' label='TÌM VIỆC'/>
            <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
          </div>
          <div className="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
          <div className="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
          <input type="hidden" defaultValue name="recaptchaResponse" />
        </form>
      </div>
    )
}