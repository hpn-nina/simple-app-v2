import React from 'react';
import Navigation from '../Navigation';
import './style.module.css';
import Link from 'next/link'
import PropTypes from 'prop-types';
import Logo from '../Logo/index';
import { Button } from '../button'

const client = new StrapiClient();

export const getStaticProps = async () =>{
  const allNavLink = await client.fetch('/categories');
  return {
    props: {
      NavLinkList: allNavLink
    }
  }
}

export default function Header({user, onLogin, onLogout,onCreateAccount}) {
    return (
      <header>
        <div className='header'>
          <Logo></Logo>
          {
            user ? (
                <>
                  <Button size='small' onClick={onLogout} label='Log out'/>
                </>
            ) : (
              <>
                <Button size="small" onClick={onLogin} label="Log in" />
                <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
              </>
            )
          }
        </div>
        <nav>

        </nav>
        <style jsx>
          {`
              header{
                display: block;
                width: 100%;
                height: auto;
                .header{
                  display: flex;
                  content-align: sretch;
                  >*{
                    flex: 1;
                  }
                  Logo{
                    flex: 2;
                  }
                }
                nav{

                }
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