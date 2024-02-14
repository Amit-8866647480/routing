import React from 'react'
import { Header } from '../common/Header'
// import './Blogs.css';
import './Contact.css';
import logo from '../contact us.jpg';


export function Blogs() {
   return (
      <div>
         <Header />
         <div className='contact'>
            <div className='inner-contact'>
               <img src={logo} alt="" />
            </div>
         </div>
      </div>
   )
}
