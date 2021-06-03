import Head from 'next/head'
import '../main.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'



export default function App(props) {
    return (
        <Router>
            <div className = "grid-container">
                <Header/>
                <main className="site-main">

                <Route path="/"></Route>
        
                </main>
                <Footer/>
            </div>
        </Router>
    )
}
