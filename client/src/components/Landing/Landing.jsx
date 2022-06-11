import { Link } from 'react-router-dom'
import React from 'react'
import './Landing.css'

export default function Landing() {
  return (
    <div className='landing'>
        <Link to='/home'>
            <div className='button'>
                <button >Videogames</button>
            </div>
        </Link>
    </div>
    
  )
}



