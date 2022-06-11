import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar (){
    return (
        
        <nav className='nav'>
            <div className='topNav'>
                <div className='logo'>
                    
                    <Link to='/home'>
                        {/* <h1 className='title'>Videogames APP</h1> */}
                        <img src='https://i.postimg.cc/VLSDXTgR/Play.png' alt="LogoIMG" />
                       
                    </Link>
                </div>
                <div>
                    <input type="text" placeholder='Search for a Videogame' />
                    <button>Search</button>
                </div>
                <div className='create'>
                    <Link to='/create'>
                        <img src="https://i.postimg.cc/GhGKtDq3/Play-2.png" alt="IMG Create" />
                    </Link>
                </div>
               
        
            </div>
            
           
            <div className='bottom-nav'>
                <div >
                    <select name="Genre" id="1">
                        <option value="selection">Filter Gengre</option>
                        <option value="action">Action</option>
                        <option value="rpg">RPG</option>
                        <option value="board">Board</option>
                    </select>
                    <select name="Videogames" id="2">
                        <option value="selection">Filter Videogames</option>
                        <option value="existent">Existent</option>
                        <option value="created">Created</option>
                    </select>
                </div>
            
                <div className='sort'>
                    <select name="Rating" id="3">
                        <option value="selection">Rating Order</option>
                        <option value="greater">Greater Rating</option>
                        <option value="lower">Lower Rating</option>
                    </select>
                    <select name="Alphabetical" id="4">
                        <option value="alphabetical">Alphabetical Order</option>
                        <option value="ascendent">A-Z</option>
                        <option value="descendent">Z-A</option>
                    </select>
                </div>
            </div>
            
           
        </nav>
    )
}

export default Navbar;