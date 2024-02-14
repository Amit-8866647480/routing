import React from 'react'
import { Header } from '../common/Header'
import './Pdfcatalog.css';
import logo from '../PDF catalog.jpg';


export function Pdfcatalog() {
  return (
    <div>
      <Header />
      <div className='course'>
        <div className='inner-course'>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}
