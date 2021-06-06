import Home_FirstSection from '../components/Home_FirstSection'
import Home_SecondSection from '../components/Home_SecondSection'
import Home_ThirdSection from '../components/Home_ThirdSection'

import Posts from './posts'

export default function Home(props) {
    return (
      <div className="container">
        <Home_FirstSection/>
        <Home_SecondSection/>
        <Home_ThirdSection/>
        <Posts/>
      </div>
    )
  }
