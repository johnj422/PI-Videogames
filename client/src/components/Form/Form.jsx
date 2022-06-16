import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './Form.module.css';
import Navbar from '../Navbar/Navbar'
import { useState } from 'react';
import { createVG } from '../../redux/actions';

export function validate (input){
    
    let regex = {
        name: /^[\w -]+$/,
        description: /^[a-zA-ZÀ-ÿ0-9\s]{2,50}$/, //Solo letras y números
        rating: /^([0-4]{1}(\.\d{1,2})?|5(.0{1,2})?)$/,
        background_image: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\∑.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    } 
    

    let errors = {};
    
    if(!input.name) {
        errors.name = 'Name is required'
    }else if(!regex.name.test(input.name)){
        errors.name = 'Invalid Name'
    }
    if(!input.description) {
        errors.description = 'Description is required'
    }else if(!regex.description.test(input.description)){
        errors.description = 'Do not use special characters'
    }
    if(!input.rating) {
        errors.rating = 'Rating is required'
    }else if(!regex.rating.test(input.rating)){
        errors.rating = 'Rating Values between 1.0-5.0'
    }
    if(input.genres.length >3 ) {
        errors.genres = 'Max 3'
    }else if(input.genres.length === 0){
        errors.genres = 'At least 1 Genre is required'
    }
    if(input.platforms.length >3 ) {
        errors.platforms = 'Max 3'
    }else if(input.platforms.length === 0){
        errors.platforms = 'At least 1 Platform is required'
    }
    if(!input.background_image) {
        errors.background_image = 'Please load an image from URL'
    }else if(!regex.background_image.test(input.background_image)){
        errors.background_image = 'Please use a valid URL'
    }
    
    //console.log(errors)
    return errors;
}
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
    const [ errors, setErrors ] = useState({});
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
        setErrors(validate({...input, [e.target.name]: e.target.value}))
    } 
    const handleInputAdd = function (e) {
        setInput({...input, [e.target.name]: !input.genres.includes(e.target.value) ? 
            [...input.genres, e.target.value] : input.genres.filter(g => g !== e.target.value)});
        } 
    const handleInputAddPlat = function (e) {
        setInput({...input, [e.target.name]: !input.platforms.includes(e.target.value) ? 
            [...input.platforms, e.target.value] : input.platforms.filter(p => p !== e.target.value)});
        
        } 
    const handleSubmit = function (e){
        e.preventDefault()
        dispatch(createVG(input))
    }
      

  return (
    <div className={s.generalContainer}>
        <Navbar />
            <div className={s.formContainer}>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <label htmlFor='name'>Name</label>
                    <input 
                        className={errors.name && s.errors}
                        onfocus="this.value=''"
                        type="text" 
                        name='name' 
                        value={input.name}
                        onChange={handleInputChange}
                        placeholder="Your game's name"/>
                        {errors.name && <label className={s.errors_label}>{errors.name}</label>}
                        
                    <label htmlFor='description'>Description</label>
                    <input 
                        className={errors.description && s.errors}
                        type="text" 
                        name='description'
                        value={input.description}
                        onChange={handleInputChange}
                        placeholder="Your game's description" />
                        {errors.description && <label className={s.errors_label}>{errors.description}</label>} 
                    <label htmlFor='released'>Released</label>
                    <input 
                        type="date" 
                        name='released' 
                        min='2000-01-01'
                        max='2022-12-31'
                        value={input.released}
                        onChange={handleInputChange}/>
                        {errors.date && (<p>{errors.date}</p>)}
                    <label htmlFor='rating'>Rating</label>
                    <input 
                        className={errors.rating && s.errors}
                        type="number" 
                        step="any"
                        name='rating' 
                        value={input.rating}
                        onChange={handleInputChange}
                        min='1' 
                        max='5'
                        placeholder="From 1.0 to 5.0"/>
                        {errors.rating && <label className={s.errors_label}>{errors.rating}</label>} 
                    <fieldset className={s.genresField} htmlFor='genres'>
                        <legend
                            className={errors.genres && s.errors}
                            >Genres</legend>
                            <div className={s.checkList}>
                                {genres?.map(g => 
                                    <p><input 
                                    className={errors.genres && s.errors}
                                    type='checkbox' 
                                    name='genres'
                                    value={g.name}
                                    onChange={handleInputAdd}
                                    ></input>{g.name}</p>)}  
                                       
                            </div>
                                <p>{errors.genres && <label className={s.errors_label}>{errors.genres}</label>}</p> 
                    </fieldset>
                    <fieldset className={s.platformsField} htmlFor='platforms'>
                        <legend
                            className={errors.genres && s.errors}
                        >Platforms</legend> 
                    <div className={s.checkListPlatform}>
                        {sortedPlatforms?.map(p => 
                            <p><input 
                                className={errors.genres && s.errors}
                                type='checkbox' 
                                name='platforms'
                                value={p}
                                onChange={handleInputAddPlat}
                                ></input>{p}</p>)}
                            
                    </div>
                    <p>{errors.platforms && <label className={s.errors_label}>{errors.platforms}</label>} </p>
                    </fieldset>

                    <label htmlFor='background_image'>Image</label>
                    <input 
                        className={errors.genres && s.errors}
                        type="text" 
                        name='background_image' 
                        value={input.background_image}
                        onChange={handleInputChange}
                        placeholder="https://yourimageurl.com/image.jpeg or png"/>
                        {errors.background_image && <label className={s.errors_label}>{errors.background_image}</label>}
                    <button type='submit'>Create Videogame</button>
                </form>
            </div>
        
    </div>
  )
}
