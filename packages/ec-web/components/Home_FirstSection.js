import React from "react";

class Home_FirstSection extends React.Component {
  render() {
    return (
      <section
        className="u-clearfix u-custom-color-1 u-section-1"
        id="sec-9709"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-align-center u-custom-font u-font-raleway u-text u-title u-text-1">
            Việc làm cập nhật hàng ngày,
            <br />
            tìm việc ngay!
          </h1>
          <div className="u-form u-form-1">
            <form
              action="#"
              method="POST"
              className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
              style={{
                padding: "15px"
              }}
              source="custom"
            >
              <div className="u-form-group u-form-name">
                <label
                  htmlFor="name-558c"
                  className="u-form-control-hidden u-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="design logos"
                  id="name-558c"
                  name="find"
                  className="u-border-1 u-border-white u-custom-font u-font-raleway u-input u-input-rectangle u-radius-10 u-white u-input-1"
                  required
                />
              </div>
              <div className="u-form-group u-form-submit">
                <a
                  href="#"
                  className="u-active-custom-color-35 u-btn u-btn-round u-btn-submit u-button-style u-custom-color-5 u-custom-font u-font-raleway u-hover-custom-color-34 u-radius-14 u-btn-1"
                >
                  TÌM VIỆC
                </a>
                <input
                  type="submit"
                  defaultValue="submit"
                  className="u-form-control-hidden"
                />
              </div>
              <div className="u-form-send-message u-form-send-success">
                Thank you! Your message has been sent.
              </div>
              <div className="u-form-send-error u-form-send-message">
                Unable to send your message. Please fix errors then try again.
              </div>
              <input type="hidden" defaultValue name="recaptchaResponse" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Home_FirstSection;
