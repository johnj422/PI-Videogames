import React from 'react'
import './Card.css'

export default function Card(props) {

  return (
    <div className='card'>
        <div className='img-container'>
          <img src={props.image} alt="videogame image" />
        </div>
        <h3 className='name'>{props.name}</h3>
       <div className='genre-container'>
          {props.genres?.slice(0,4).map(g => 
          <div className='genre-bg'>
            <p className='genre-text'>{g.name}</p>
          </div> 
          )}
        </div>
    </div>
  )
}
