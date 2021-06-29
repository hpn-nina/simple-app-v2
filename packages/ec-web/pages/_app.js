
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/components/pagination/pagination.min.css";
import 'swiper/swiper.scss';
import React, { createContext } from 'react';
import Header from '../../ec-web/components/Header';
import Footer from '../../ec-web/components/Footer';
import Head from 'next/head';
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import { getConfig } from 'next/config'
import fetch from 'isomorphic-unfetch'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import Router from 'next/router'
import { parseCookies } from "nookies";
import ContextWrapper from "../context/ContextWrapper";

const theme = {
  breakpoints: [
    '40em', '52em', '64em',
  ],
  colors: {
    primary: 'rgb(225,126,166)',
    secondary: "#FBD2D7",
    text: '#000',
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256,
  ],
}

export const GlobalContext = createContext({});

function redirectUser(ctx, location){
  if(ctx.req) {
    ctx.res.writeHead(302, {location: location});
    ctx.res.end();

  }
  else{
    Router.push(location);
  }
}

export default function App({ Component, pageProps, categoriesItems, userProfile, jwt }) {
  const { global } = pageProps;

  return (
    <>
      <DefaultSeo {...SEO}/>
      <ThemeProvider theme={theme}>
        
        <div className="grid-container">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,300;1,400;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> 
        </Head>
        <GlobalContext.Provider value={global}>
        <ContextWrapper categoriesItems={categoriesItems} userProfile={userProfile} jwt={jwt}>
        <Header/>
        <Component {...pageProps} />
        </ContextWrapper>
        
        
        </GlobalContext.Provider>
        <Footer />
      </div>
    </ThemeProvider>

    </>
  );
}


// const { publicRuntimeConfig } = getConfig();
// console.log(publicRuntimeConfig.API_URL)

App.getInitialProps = async ({ Component, ctx }) => {
  const { API_URL } = process.env;
  let pageProps = {};
  const jwt =  parseCookies(ctx).jwt;
  const user = parseCookies(ctx).user;

  const res = await fetch(`${API_URL}/categories`);
  const categoriesItems = await res.json();

  const res2 = await fetch(`${API_URL}/profiles/?user._id=${user}`)
  const userProfile = await res2.json();

  if(Component.getInitialProps){
    pageProps = await Compononent.getInitialProps(ctx)
  }

  if(!jwt){
    if (ctx.pathname === "/users" || ctx.pathname === "/admin"){
      redirectUser(ctx, "/login");
    }
  }

  return { 
    pageProps,
    categoriesItems,
    userProfile, jwt
  }
}