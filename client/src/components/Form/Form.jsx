import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Form.css';
import Navbar from '../Navbar/Navbar'
import { useState } from 'react';
import { createVG } from '../../redux/actions';


export default function Form() {
    let genres = useSelector((state) => state.genres);


    const dispatch = useDispatch()
    const platforms = [
		'PC',
		'PlayStation 5',
		'PlayStation 4',
		'Xbox One',
		'Xbox Series S/X',
		'Nintendo Switch',
		'iOS',
		'Android',
		'Nintendo 3DS',
		'Nintendo DS',
		'macOS',
		'Linux',
		'Xbox 360',
		'PlayStation 3',
		'PlayStation 2',
		'PS Vita',
		'PSP',
		'Wii U',
		'Wii',
		'GameCube',
		'Nintendo 64',
		'SNES',
		'NES',
		'Atari 7800',
		'Atari 5200',
		'Atari 2600',
		'Genesis',
		'SEGA Saturn',
		'SEGA CD',
		'SEGA 32X',
		'Dreamcast',
		'3DO',
		'Jaguar',
		'Game Gear',
		'Neo Geo',
        'Xbox',
	];
    const sortedPlatforms = platforms.sort((a,b) => a.toLowerCase() > b.toLowerCase())
    //console.log(sortedPlatforms)
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: 1,
        genres: [],
        platforms: [],
        background_image: '',
    });
    //console.log(input)
    const handleInputChange = function (e) {
        //console.log(e.target.value)
        setInput({...input, [e.target.name]: e.target.value});
    } 
    const handleInputAdd = function (e) {
        setInput({...input, [e.target.name]: [...input.genres, e.target.value]});
    } 
    const handleInputAddPlat = function (e) {
        setInput({...input, [e.target.name]: [...input.platforms, e.target.value]});
    } 
    const handleSubmit = function (e){
        e.preventDefault()
        dispatch(createVG(input))
    }


  return (
    <div className='general-container'>
        <Navbar />
            <div className='form-container'>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type="text" 
                        name='name' 
                        value={input.name}
                        onChange={handleInputChange}
                        placeholder="Your game's name" />
                    <label htmlFor='description'>Description</label>
                    <input 
                        type="text" 
                        name='description'
                        value={input.description}
                        onChange={handleInputChange}
                        placeholder="Your game's description" />
                    <label htmlFor='released'>Released</label>
                    <input 
                        type="text" 
                        name='released' 
                        value={input.released}
                        onChange={handleInputChange}
                        placeholder="YYYY/MM/DD" />
                    <label htmlFor='rating'>Rating</label>
                    <input 
                        type="number" 
                        name='rating' 
                        value={input.rating}
                        onChange={handleInputChange}
                        min='1' 
                        max='5'
                        placeholder="From 1 to 5"/>
                    <fieldset className='genres-field' htmlFor='genres'>
                        <legend>Genres</legend> 
                            <div className='check-list'>
                                {genres?.map(g => 
                                    <p><input 
                                    type='checkbox' 
                                    name='genres'
                                    value={g.name}
                                    onChange={handleInputAdd}
                                    ></input>{g.name}</p>)}             
                            </div>
                    </fieldset>
                    <fieldset className='platforms-field' htmlFor='platforms'>
                        <legend>Platforms</legend> 
                    <div className='check-list platform-field'>
                        {sortedPlatforms?.map(p => 
                            <p><input 
                                type='checkbox' 
                                name='platforms'
                                value={p}
                                onChange={handleInputAddPlat}
                                ></input>{p}</p>)}
                    </div>
                    </fieldset>

                    <label htmlFor='background_image'>Image</label>
                    <input 
                        type="text" 
                        name='background_image' 
                        value={input.background_image}
                        onChange={handleInputChange}
                        placeholder="https://yourimageurl.com/image.jpeg or png"/>
                    <button type='submit'>Create Videogame</button>
                </form>
            </div>
        
    </div>
  )
}
