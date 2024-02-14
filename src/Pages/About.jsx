import React from 'react'
import { Header } from '../common/Header'
import './About.css';

export  function About() {
  return (
    <div>
        <Header/>
        <div className='about'>
            <div className='inner-about'>
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat iste nihil error. Adipisci excepturi rem odit, esse perspiciatis accusantium similique debitis necessitatibus minima aperiam numquam vel. Placeat, eligendi consequuntur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam itaque, ducimus animi, inventore quod consequuntur soluta, cum maiores corporis atque nam quis repellat maxime. Consectetur mollitia doloremque aut nobis.</p>
                <p>Gourav Haryanvi</p>
            </div>
        </div>
    </div>
  )
}
