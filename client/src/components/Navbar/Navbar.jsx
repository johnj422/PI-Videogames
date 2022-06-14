import './Navbar.css';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { filterByDb, filterByGenre, getAllVideogames, getGenresDB, sortByRating, sortByName } from '../../redux/actions';
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
        //console.log(e.target.value)
        dispatch(filterByGenre(e.target.value))
        setCurrentPage(1);
    }
    function handleVgFilteredByDBorApi (e){
        //console.log(e.target.value)
        dispatch(filterByDb(e.target.value))
        setCurrentPage(1);
    }
    function handleSortByRating (e){
        //console.log(e.target.value)
        dispatch(sortByRating(e.target.value))
        setCurrentPage(1);
    }
    function handleSortByName (e){
        console.log(e.target.value)
        dispatch(sortByName(e.target.value))
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
                <div className='custom-select'>
                <div >
                    <select 
                        name="Genre" 
                        id="1"
                        onChange={(e) => handleVgFilteredByGenre(e)}
                        >
                        <option disabled value='none'>GENRES</option>
                        <option value='All'>All Genres</option>
                        {vgGenres?.map(g => 
                        <option value={g.name}>{g.name}</option>
                        )}
                
                    </select>
                </div>
                <div>
                    <select 
                        name="Videogames" 
                        id="2"
                        onChange={(e) => handleVgFilteredByDBorApi(e)}
                        >
                        <option disabled value='none'>VIDEOGAMES</option>
                        <option value="All">All Databases</option>
                        <option value="existent">Existent</option>
                        <option value="created">Created</option>
                    </select>
                </div>
            
                <div>
                    <select 
                        name="Rating" 
                        id="3"
                        onChange={(e) => handleSortByRating(e)}
                        >
                        <option value="none">--None--</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
                <div>
                    <select
                        name="Alphabetical" 
                        id="4"
                        onChange={(e) => handleSortByName(e)}
                        >
                        <option value="none">--None--</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">descending</option>
                    </select>
                </div>
            </div>
            </div>
           
        </nav>
    )
}

export default Navbar;