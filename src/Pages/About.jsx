import React from 'react'
import { Header } from '../common/Header'
import './About.css';
import logo from '../Aboutus.jpg';
import Footer from '../common/Footer';


export function About() {
  return (
    <div>
      <Header />
      <div className='about'>
        <div className='inner-about'>
		  <img src={logo} alt="" />
        </div>
      </div>
		<h1>About Us Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae alias quam reiciendis dicta architecto doloremque cum nulla at quibusdam temporibus libero facilis, obcaecati rerum porro voluptatibus consectetur aperiam ea!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae alias quam reiciendis dicta architecto doloremque cum nulla at quibusdam temporibus libero facilis, obcaecati rerum porro voluptatibus consectetur aperiam ea!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae alias quam reiciendis dicta architecto doloremque cum nulla at quibusdam temporibus libero facilis, obcaecati rerum porro voluptatibus consectetur aperiam ea!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae alias quam reiciendis dicta architecto doloremque cum nulla at quibusdam temporibus libero facilis, obcaecati rerum porro voluptatibus consectetur aperiam ea!
    </p>
		<Footer/>
    </div>
  )
}
