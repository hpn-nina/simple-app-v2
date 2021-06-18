import React from 'react';

import Link from 'next/link'
import PropTypes from 'prop-types';
import Logo from '../Logo/index';
import { Button } from '../button';
import StrapiClient from '../../lib/strapi-client';
import NavLink from '../NavLink';
import axios from 'axios';



const Header = ({ user, onLogout, error, data }) => {
  if (error){
    return <div>An error occured: {error.message}</div>;
  }
  return (
      <header>
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
          `}
        </style>
      </header>
    )
}
Header.getInitialProps =async ctx =>{
  try
  {
    const res = await axios.get('http://localhost:1337/categories');
    const navList = res.data;
    console.log(navList);
    return { navList };
  } catch(error){
    return { error };
  }
};

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