import './Navbar.css';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre, getAllVideogames, getGenresDB } from '../../redux/actions';
import { useEffect } from 'react';


function Navbar ({setCurrentPage}){
    const dispatch = useDispatch();
    const vgGenres = useSelector((state) => state.genres);
    //console.log(vgGenres.map(g => g.name))
    useEffect(() => {
        dispatch(getGenresDB())
    }, [dispatch])

    function click (){
        dispatch(getAllVideogames())
        //console.log('Click en Home')
    }
    function handleVgFilteredByGenre (e){
        console.log(e.target.value)
        dispatch(filterByGenre(e.target.value))
        setCurrentPage(1);
    }
    var URLactual = window.location.href;
    
    return (
        
        <nav className='nav'>
            <div className='topNav'>
                <div className='logo'>
                    
                    <Link to='/home' onClick={(c) => click(c)}>
                        {/* <h1 className='title'>Videogames APP</h1> */}
                        <img src='https://i.postimg.cc/VLSDXTgR/Play.png' alt="LogoIMG" />
                       
                    </Link>
                </div>
                <div className={URLactual.includes('detail')? 'displayNone' : 'search'}>
                   <SearchBar 
                    setCurrentPage={setCurrentPage}
                    />
                </div>
                <div className='create'>
                    <Link to='/create'>
                        <img src="https://i.postimg.cc/GhGKtDq3/Play-2.png" alt="IMG Create" />
                    </Link>
                </div>
               
        
            </div>
            
           
            <div className= {URLactual.includes('detail')? 'displayNone' : 'bottom-nav'}>
                <div >
                    <select 
                        name="Genre" 
                        id="1"
                        onChange={(e) => handleVgFilteredByGenre(e)}
                        >
                        <option value='All'>--All--</option>
                        {vgGenres?.map(g => 
                        <option value={g.name}>{g.name}</option>
                        )}
                  
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