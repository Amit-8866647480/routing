import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
   return (
      <>
         <div className='head'>
            <div className='container'>
               <img src='https://lawpreptutorialpatna.com/wp-content/themes/lawpreps/images/logo.svg' width={200} height={50} />
               <div className='nav'>
                  <ul type='none'>
                     <li> <Link to={'/'}>Home</Link></li>
                     <li> <Link to={'/about-us'}>About us</Link></li>
                     <li> <Link to={'/course'}>Courses</Link></li>
                     <li> <Link to={'/contact-us'}>Contact us</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}
