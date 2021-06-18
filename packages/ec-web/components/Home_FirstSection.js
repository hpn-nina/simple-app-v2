import React from "react";


class Home_FirstSection extends React.Component {
  render() {
    return (
      <section
        className="u-clearfix u-custom-color-1 u-section-1"
        id="sec-9709"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
            <div className='title'>Cần tìm người? Hãy đến với chúng tôi</div>
            <div className="input-group">
              <input type="search" className="form-control rounded" placeholder="logo design" aria-label="logo design"
                aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary">Tìm kiếm</button>
            </div>
        </div>
        <style jsx>
          {`
              section#sec-9709{
                font-family: Georgia, sans-serif;
                padding: 20px;
                .title{
                  text-align: center;
                  font-size: 3.5rem;
                  font-weight: 700;
                  margin: 20px;
                  display: block;
                }
                .input-group{
                  width: 80%;
                  margin: 5px;
                  .form-control.rounded{
                    align-items: center;
                  }
                }
              }
          `}
        </style>
      </section>
    );
  }
}

export default Home_FirstSection;
