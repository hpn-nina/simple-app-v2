import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <div className="grid-container">
      <Header
        onLogin={(...p) => {
          console.log('-- on login:', p);
        }}
        onLogout={(...p) => {
          console.log('-- on logout:', p);
        }}
        onCreateAccount={(...p) => {
          console.log('-- on create account:', p);
        }}
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}