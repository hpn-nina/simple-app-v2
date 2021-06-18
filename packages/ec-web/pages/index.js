import Home_FirstSection from '../components/Home_FirstSection'
import Home_SecondSection from '../components/Home_SecondSection'
import Home_ThirdSection from '../components/Home_ThirdSection'
import Head from 'next/head'
//import Posts from './posts'

export default function Home(props) {
    return (
      <div className="container">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> 
        </Head>
        <Home_FirstSection/>
        <Home_SecondSection/>
        <Home_ThirdSection/>
        
      </div>
    )
  }
