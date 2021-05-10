import React from "react"
import {Link} from 'gatsby'
import Header from '../components/header'

const Home = () => {
  return (<div style={{
      color: `purple`,
      fontSize: `72`
  }}>
    <Link to='/contact'>Contact</Link>
    <Header headerText="Hi Mike" anotherProp='valueHere' propThree="wootowwt"/>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt=""/>
  </div>)
}

export default Home
