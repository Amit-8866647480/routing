import React from 'react'
import { Header } from '../common/Header'
import './Contact.css';
import logo from '../contact us.jpg';
// import { Blogs } from './Blogs';


export function Contact() {
  return (
    <div>
      <Header />
      {/* <Blogs/> */}
      <div className='contact'>
        <div className='inner-contact'>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}
