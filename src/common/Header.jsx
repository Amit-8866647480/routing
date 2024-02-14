import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
   return (
      <>
         <div className='header'>
            <div className='container'>
               <img src="https://mistry.store/images/logo.svg" width={200} height={50} />
               <div className='nav'>
                  <ul type='none'>
                     <li> <Link to={'/'}>Home</Link></li>
                     <li> <Link to={'/about-us'}>About Us</Link></li>
                     <li> <Link to={'/course'}>PDF Catalog</Link></li>
                     <li> <Link to={'/contact-us'}>Contact Us</Link></li>
                     <li> <Link to={'/contact-us'}>Blogs</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}
