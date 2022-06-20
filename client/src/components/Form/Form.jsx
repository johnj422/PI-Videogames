import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createVG, resetCreate } from '../../redux/actions';
import Navbar from '../Navbar/Navbar'
import s from './Form.module.css';
import Card from '../Card/Card'

export function validate (input){
    
    let regex = {
        name: /^[\w -]+$/,
        description: /^[a-zA-ZÀ-ÿ0-9\s]{2,50}$/, //Solo letras y números
        rating: /^([0-4]{1}(\.\d{1,2})?|5(.0{1,2})?)$/,
        background_image: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
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
    if(!input.released) {
        errors.released = 'Date is required'
    }
    if(input.genres.length === 0){
        errors.genres = 'At least 1 Genre is required'
    }
    if(input.platforms.length === 0){
        errors.platforms = 'At least 1 Platform is required'
    }
    if(!input.background_image) {
        errors.background_image = 'Please load an image from URL'
    }else if(!regex.background_image.test(input.background_image)){
        errors.background_image = 'Please use a valid URL'
    }
    return errors;
}
export default function Form() {
    let genres = useSelector((state) => state.genres);
    
    const myRef = useRef(null)
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
    const [ button, setButton ] = useState(true)

    const sortedPlatforms = platforms.sort((a,b) => a.toLowerCase() > b.toLowerCase())
    //console.log(sortedPlatforms)
    const [ errors, setErrors ] = useState({});
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: null,
        genres: [],
        platforms: [],
        background_image: ''
    });
    //console.log(input)
    useEffect(() => {
      if (
        errors.name || 
        errors.description ||
        errors.released ||
        errors.rating ||
        errors.genres||
        errors.platforms ||
        errors.background_image
        ) {
            setButton(true)
        }else(
            setButton(false)
        )
        return () => {
            dispatch(resetCreate())
          }
        
    },[errors, input])
   
    
    
    const handleInputChange = function (e) {
        //console.log(e.target.value)
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input, 
            [e.target.name]: e.target.value
        }))
    } 
    // const handleInputAdd = function (e) {
    //     setInput({...input, [e.target.name]: !input.genres.includes(e.target.value) ? 
    //         [...input.genres, e.target.value] : input.genres.filter(g => g !== e.target.value)});
           
    //     } 
    const handleInputAdd = (e) => {
        setInput({
            ...input, 
            [e.target.name]: e.target.checked ? 
            [...input.genres, e.target.value] : 
            input.genres.filter(g => g !== e.target.value)
        });

        setErrors(validate({
            ...input, 
            [e.target.name]: e.target.value
        }))
        } 
    const handleInputAddPlat = function (e) {
        setInput({
            ...input, 
            [e.target.name]: e.target.checked ? 
            [...input.platforms, e.target.value] : 
            input.platforms.filter(p => p !== e.target.value)});

        setErrors(validate({
            ...input, 
            [e.target.name]: e.target.value
        }))
            
        } 
    const handleSubmit = function (e){
        e.preventDefault()
        dispatch(createVG(input))
        setInput({
            name: '',
            description: '',
            released: '',
            rating: null,
            genres: [],
            platforms: [],
            background_image: ''
        })
    }
    
    function genresToShowPreview(){
        let genreObj = input.genres.map(g => {
            let obj = {name: g}
            return obj
        })
        return genreObj
    }
    
      

  return (
    <div className={s.generalContainer}>
        <Navbar />
            <div>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className={s.leftContainer}>
                            <div className={s.leftContainerInput}>
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
                            </div>
                            <div className={s.leftContainerInput}>
                                <label htmlFor='released'>Released</label>
                                    <input 
                                        className={errors.released && s.errors}
                                        type="date" 
                                        name='released' 
                                        min='2000-01-01'
                                        max='2022-12-31'
                                        value={input.released}
                                        onChange={handleInputChange}/>
                                        {errors.released && <label className={s.errors_label}>{errors.released}</label>}
                            </div>
                            <div className={s.leftContainerInput}>
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
                            </div>
                            <div className={s.genresChecklistContainer}>
                                    <fieldset className={s.genresField} htmlFor='genres'>
                                        <legend
                                            className={errors.genres && s.errors}
                                            >Genres</legend>
                                            <div className={s.checkListGenres}>
                                                {genres?.map(g => 
                                                    <p><input 
                                                    className={errors.genres && s.errors}
                                                    type='checkbox' 
                                                    name='genres'
                                                    value={g.name}
                                                    onChange={(e) =>handleInputAdd(e)}
                                                    ></input>{g.name}</p>)}  
                                                    
                                            </div>
                                                <p>{!errors.genres? '':(errors.genres && <label className={s.errors_label}>{errors.genres}</label>)}</p> 
                                    </fieldset>
                            </div>
                    </div>
                    <div className={s.centerContainer}>
                        <div className={s.centerContainerInput}>
                            <label htmlFor='background_image'>Image</label>
                            <input 
                                className={errors.background_image && s.errors}
                                type="text" 
                                name='background_image' 
                                value={input.background_image}
                                onChange={handleInputChange}
                                placeholder="https://yourimageurl.com/image.jpeg or png"/>
                                {errors.background_image && <label className={s.errors_label}>{errors.background_image}</label>}
                        </div>
                        <div className={s.centerContainerInput}>
                                    <label htmlFor='description'>Description</label>
                                        <textarea 
                                            className={errors.description && s.errors}
                                            name='description'
                                            value={input.description}
                                            onChange={handleInputChange}
                                            placeholder="Your game's description" />
                                            {errors.description && <label className={s.errors_label}>{errors.description}</label>} 
                        </div>
                        <div className={s.platformsChecklistContainer}>
                            <fieldset className={s.platformsField} htmlFor='platforms'>
                                <legend
                                        className={errors.platforms && s.errors}
                                    >Platforms</legend> 
                                    <div className={s.checkListPlatform}>
                                        {sortedPlatforms?.map(p => 
                                            <p><input 
                                                className={errors.platforms && s.errors}
                                                type='checkbox' 
                                                name='platforms'
                                                value={p}
                                                onChange={handleInputAddPlat}
                                                ></input>{p}</p>)}
                                        
                                </div>
                            </fieldset>
                                <p>{errors.platforms && <label className={s.errors_label}>{errors.platforms}</label>} </p>
                        </div>

                    </div>
                    <div className={s.rightContainer}>
                        <div className={s.previewContainer}>
                            <Card 
                                image={input.background_image}
                                name={input.name}
                                genres={genresToShowPreview()}
                            />
                        </div>
                        <button 
                        type='submit'
                        className={ button ? s.submitDis : s.submit} 
                        
                        >Create Videogame</button>
                    </div>
                </form>                               
            </div>       
    </div>
  )
}
