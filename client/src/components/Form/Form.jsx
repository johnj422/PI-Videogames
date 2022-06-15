import React from 'react'
import { useSelector } from 'react-redux'
import './Form.css';

import Navbar from '../Navbar/Navbar'

export default function Form() {
    let genres = useSelector((state) => state.genres);
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
		'Nintendo DSi',
		'macOS',
		'Linux',
		'Xbox 360',
		'Xbox',
		'PlayStation 3',
		'PlayStation 2',
		'PlayStation',
		'PS Vita',
		'PSP',
		'Wii U',
		'Wii',
		'GameCube',
		'Nintendo 64',
		'Game Boy Advance',
		'Game Boy Color',
		'Game Boy',
		'SNES',
		'NES',
		'Classic Macintosh',
		'Apple II',
		'Commodore / Amiga',
		'Atari 7800',
		'Atari 5200',
		'Atari 2600',
		'Atari Flashback',
		'Atari 8-bit',
		'Atari ST',
		'Atari Lynx',
		'Atari XEGS',
		'Genesis',
		'SEGA Saturn',
		'SEGA CD',
		'SEGA 32X',
		'SEGA Master System',
		'Dreamcast',
		'3DO',
		'Jaguar',
		'Game Gear',
		'Neo Geo',
	];

  return (
    <div className='general-container'>
        <Navbar />
            <div className='form-container'>
                <form action="">
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='Name' placeholder="Your game's name" />
                    <label htmlFor='description'>Description</label>
                    <input type="text" name='Description'placeholder="Your game's description" />
                    <label htmlFor='released'>Released</label>
                    <input type="released" name='Released' placeholder="YYYY/MM/DD" />
                    <label htmlFor='rating'>Rating</label>
                    <input type="number" name='Rating' min='1' max='5'placeholder="From 1 to 5"/>
                    <fieldset className='genres-field' htmlFor='genres'>
                        <legend>Genres</legend> 
                    <div className='check-list'>
                        {genres?.map(g => 
                            <p><input type='checkbox' value={g.name}></input>{g.name}</p>)}
                    </div>
                    </fieldset>
                    <fieldset className='platforms-field' htmlFor='platforms'>
                        <legend>Platforms</legend> 
                    <div className='check-list platform-field'>
                        {platforms?.map(p => 
                            <p><input type='checkbox' value={p}></input>{p}</p>)}
                    </div>
                    </fieldset>

                    <label htmlFor='background_image'>Image</label>
                    <input type="text" name='Image' placeholder="https://yourimageurl.com"/>
                    <button>Create Videogame</button>

                
                </form>
            </div>
        
    </div>
  )
}
