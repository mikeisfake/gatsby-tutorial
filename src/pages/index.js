import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'

// export default function Home() {
//   return <div style={{ color: `purple`, fontSize: `72px` }}>Hello Gatsby!</div>
// }

const Home = () => {
  return(
    <div style={{ color: `purple` }}>
      <Link to='/contact'>Contact</Link>
      <Header headerText="Hi Mike" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}

export default Home
