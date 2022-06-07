import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar (){
    return (
        
        <nav className='nav'>
            <Link to='/home'>
                <h1 className='title'>Videogames</h1>
            </Link>
            <Link to='/create'>
            <h1 className='title'>Create Videogame</h1>
            </Link>
        </nav>
    )
}

export default Navbar;