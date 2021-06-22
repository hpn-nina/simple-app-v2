
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/components/pagination/pagination.min.css";
import 'swiper/swiper.scss';
import React, { createContext } from 'react';
import Header from '../../ec-web/components/Header';
import Footer from '../../ec-web/components/Footer';
import StrapiClient from '../../ec-web/lib/strapi-client';
import axios from 'axios';
import Head from 'next/head';


export const GlobalContext = createContext({});

export default function App({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <div className="grid-container">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,300;1,400;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> 
      </Head>
      <GlobalContext.Provider value={global}>
      <Header
        onLogout={(...p) => {
          console.log('-- on logout:', p);
        }
        }
        onCreateAccount={(...p) => {
          console.log('-- on create acc:', p);
        }
        }
        onLogin={(...p) => {
          console.log('-- on login:', p);
        }
        }
        user='NULL'
      />
      <Component {...pageProps} />
      
      </GlobalContext.Provider>
      <Footer />
      <style jsx global>
        {`
          html, body{
            font-family: 'Playfair Display', sans-serif;
          }
        `}
      </style>
    </div>
  );
}