import React from 'react';

import Link from 'next/link'
import PropTypes from 'prop-types';
import Logo from '../Logo/index';
import { Button } from '../button';
import StrapiClient from '../../lib/strapi-client';
import NavLink from '../NavLink';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.user= props.user;
    this.onLogout = props.onLogout;
    this.onLogin = props.onLogin;
    this.onRegister = props.onRegister;
    this.state={
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount(){
    fetch(`${process.env.API_URL}/categories`)
    .then(res=>res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded:true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded:true,
          error
        })
      }
    )
  }
  render()
  {
    const { error, isLoaded, items } = this.state;
    const { user } = this.user;
    const { onLogout } = this.onLogout;
    //const { onLogin } = this.onLogin;
    //const { onRegister } = this.onRegister;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
    return <header className='popup'>
    <div className='header'>
      <Logo id='logo'></Logo>
      <div id='headerEnd'>
      {
        user ? (
            <>
              <div>Hi, {user.username}</div>
              <Button size='small' onClick={onLogout} label='Log out'/>
            </>
        ) : (
          <>
            <a href='/login' className='btn btn-primary'>Log In</a>
            <a href='/register' className='btn btn-secondary'>Register</a>
          </>
        )
      }
      
      </div>
    </div>
    <nav className='nav'>
      <Swiper
            spaceBetween={70}
            slidesPerView={5} spaceBetween={30} 
            navigation
            className='mySwipper'
            scrollbar={{ draggable: true }}
            
        >
        {
          items.map(item => <SwiperSlide><NavLink key={item._id} link={item} className='nav-link'></NavLink></SwiperSlide>)
        }
        </Swiper>
    </nav>
    <style jsx>
      {`
      header.popup{
        transform: translate3d(0, 0%, 0);
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
        background: none;
        border-radius: 10px;
        width: 100%;

        :after{
          content: "";
          width: 20px;
          height: 20px;
          transform: rotate(-45deg);
          background: #fff;
          position: absolute;
          box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.5);
          z-index: -1;
          bottom: -10px;
          left: calc(50% - 10px);
        }
      }
      .header{
            display: grid;
            grid-template-columns: 1fr auto;
            width: 100%;
            height: auto;
            #logo{
                display: inline;
              }
            #headerEnd{
              margin: 5px;
              right: 0px;
              > *{
                margin: 5px;
              }
            }
            border-bottom: 1px solid #CDCDCD;
          }
          
          .nav{
            margin-bottom: 5%;
            margin-top: 2%;
          }
          
      `}
    </style>
  </header>
    }
  }
}



Header.propTypes = {
    user: PropTypes.shape({}),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
    navList: PropTypes.object,
  };
  
Header.defaultProps = {
    user: null,
};
export default Header;