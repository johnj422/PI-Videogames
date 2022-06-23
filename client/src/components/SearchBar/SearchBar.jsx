import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllVideogames, searchVG } from '../../redux/actions';
import s from './SearchBar.module.css'

export default function SearchBar({setCurrentPage}) {

    const [name, setName] = useState('')
    const dispatch = useDispatch();

    function handleInputChange(event) {
        event.preventDefault()
        //console.log(event.target.value)
        setName(event.target.value)
    }
    //console.log(name)
    function handleSubmit(click) {
        if(!name) {
            alert('Please type a Videogame Name')
        }
        click.preventDefault()
        //console.log('videogames')
        dispatch(searchVG(name));
        setName('')
        setCurrentPage(1)
    
    }


  return (

    <div className={s.design}>
        <input 
            className={s.input}
            value={name}
            type="text" 
            placeholder='Search for a Videogame' 
            onChange={(e) => handleInputChange(e)}
        />
        <button onClick={(c) => handleSubmit(c)}>
			Search
        </button>
    </div>
  )
}
