import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'





export default function Pagination(props) {



  return (
    <div>
        <h1>Pagina: {props.currentPage}</h1>
        Pagination
        <button onClick={props.prevHandler}>Prev</button>
        <button onClick={props.nextHandler}>Next</button>
        {props.videogames.map(vg => 
            <p>{vg.name}</p>
            )}
    </div>
  )
}
