import { Link } from 'react-router-dom'
import React from 'react'
import './Landing.css'

export default function Landing() {
  return (
    <div className='landing'>
            <div className='stage'>
              <Link to='/home'>
                  <button className='btn'>Videogames Info APP</button>
              </Link>
            </div>
    </div>
    
  )
}



