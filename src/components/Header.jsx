import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Panier from './SVG/Panier'

export default function Header() {
  const PanierCount = useSelector(state => state.panier.length)
  return (
    <div className='header'>
      <header>
        <Link to="/" className="logo">Store.</Link>
        <nav>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li> <Link to="/new">New</Link></li>
            <li> <Link to="/products">Products</Link></li>
          </ul>
            <p><Link to="/panier" className='panier' data-count={PanierCount > 0 ? PanierCount : ''}><Panier /></Link></p>
        </nav>
      </header>
    </div>
  )
}
