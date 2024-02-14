import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <Link to={'/'}> Home  </Link>
      <Link to={'/about-us'}>About</Link> 
    </div>
  )
}
