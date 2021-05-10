import React from 'react'
import {Link} from 'gatsby'
import Header from '../components/header'

const Contact = () => {
  return (<div style={{
      color: `teal`
  }}>
    <Link to='/'>Home</Link>
    <Header headerText='Contact'/>
    <p>send us a message!</p>
  </div>)
}

export default Contact
