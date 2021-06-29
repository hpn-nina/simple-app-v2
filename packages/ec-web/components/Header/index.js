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
import { destroyCookie } from 'nookies';
import { useContext } from 'react'
import HeaderContext from '../../context/HeaderContext';
import Router from 'next/router';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function Header (props) {
  const { categoriesItems, userProfile } = useContext(HeaderContext);
  const user=userProfile[0];
  async function handleLogout(){
    console.log('Logging out');
    destroyCookie(null, 'jwt', {
      path: '/'
    })
    destroyCookie(null,'user', {
      path: '/'
    })
    Router.push('/');
    alert('Thoat thanh cong');
  }
  return (
    <header className='popup'>
    <div className='header'>
      <Logo id='logo'></Logo>
      <div id='headerEnd'>
      {
        user ? (
            <>
              <div id='headerEndPart'>
                
              <DropdownButton id="dropdown-split-basic" variants='info' title={'Hi, ' + user.name}>
                <Dropdown.Item href="/users">Thông tin người dùng</Dropdown.Item>
                <Dropdown.Item href="/users/jobs">Quản lý công việc</Dropdown.Item>
                <Dropdown.Item href="/users/dashboard">Bảng điều khiển</Dropdown.Item>
                <Dropdown.Item href="/users/message">Tin nhắn</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item><button type='button' onClick = {() => handleLogout()} className='btn btn-secondary'>Log Out</button></Dropdown.Item>
              </DropdownButton>
                
              </div>
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
          categoriesItems ? (categoriesItems.map(item => <SwiperSlide><NavLink key={item._id} link={item} name={null} className='nav-link'></NavLink></SwiperSlide>)) : <div></div>
        }
        <SwiperSlide><NavLink name="About" name_link="/aboutUs"></NavLink></SwiperSlide>
        <SwiperSlide><NavLink name="Find Job" name_link="/jobs/seekingJob"></NavLink></SwiperSlide>
        </Swiper>
    </nav>
    <style jsx>
      {`
      #dropdown-split-basic{
        
      }
      .btn.btn-secondary{
        background-color: var(--main-color);
      }
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
          header{
            z-index: 2;
          }
      `}
    </style>
  </header>
    )
}

export default Header;