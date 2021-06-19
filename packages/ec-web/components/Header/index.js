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
    fetch("http://localhost:1337/categories")
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
    return <header>
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
            <a href='/logIn' className='btn btn-primary'>Log In</a>
            <a href='/register' className='btn btn-secondary'>Register</a>
          </>
        )
      }
      
      </div>
    </div>
    <nav className='nav'>
      <Swiper
            spaceBetween={70}
            slidesPerView={5} centeredSlides={true} spaceBetween={30} 
            navigation
            className='mySwipper'
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
        {
          items.map(item => <SwiperSlide><NavLink key={item._id} link={item} className='nav-link'></NavLink></SwiperSlide>)
        }
        </Swiper>
    </nav>
    <style jsx>
      {`
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
          }
          .nav{
            margin-bottom: 2%;
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