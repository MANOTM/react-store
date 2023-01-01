import React from 'react'
import { Link } from 'react-router-dom';
import home1 from '../data/images/home1.png'
import home2 from '../data/images/home2.png' 
import Right from './SVG/Right';

export default function Home() {
  return (
    <section className='home'>
      <div className="homeSection">
        <div className="text">
          <h1>New Clothing <br /> Collection</h1>
          <p>The new collection of clothing from the best brands this year</p>
          <Link to="/new" className="explore">Explore <i><Right /></i></Link>
        </div>
        <div className="homeImgs">
          <img src={home1} alt="" />
          <img src={home2} alt="" />
        </div>
      </div>
    </section>
  );
}
