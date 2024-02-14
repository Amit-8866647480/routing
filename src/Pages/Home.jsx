import React from 'react'
import { Header } from '../common/Header'
import './Home.css';
import logo from '../Home.jpg';
import Footer from '../common/Footer';

export function Home() {
  return (
    <div>
        <Header/>
    <div className='home'>
        <div className='inner'>
          <img src={logo} alt="" />
        </div>
    </div>
    <h1>About Us</h1>
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
