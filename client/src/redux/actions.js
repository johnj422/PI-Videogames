export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const GET_VG_DETAILS = 'GET_VG_DETAILS'
export const SEARCH_VG = 'SEARCH_VG'
export const GET_GENRES = 'GET_GENRES' 
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const FILTER_BY_DB_OR_API = 'FILTER_BY_DB_OR_API'
export const SORT_BY_RATING = 'SORT_BY_RATING'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const CREATE_VG = 'CREATE_VG'
export const RESET_DETAIL = 'RESET_DETAIL'
export const RESET_CARDS = 'RESET_CARDS'
export const RESET_CREATE = 'RESET_CREATE'
export const LOADER = 'LOADER'


export function getAllVideogames(){
    let url = 'http://localhost:3001/videogames'
    return function (dispatch) {
        dispatch({type: LOADER, payload:true})
        return fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch({type: GET_ALL_VIDEOGAMES, payload: json})
            
            dispatch({type: LOADER, payload:false})
        })
        .catch(error => console.warn(error))
    } 
}
export function getVgDetail(id){
    let url = `http://localhost:3001/videogames/${id}`
    return async function (dispatch) {
        dispatch({type: LOADER, payload:true})
        return await fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch({type: GET_VG_DETAILS, payload: json})
            dispatch({type: LOADER, payload:false})
        })
        .catch(error => console.warn(error))
    } 
}
export function searchVG(name){
    let url = `http://localhost:3001/videogames?name=${name}`
    return async function (dispatch) {
        return await fetch(url)
        .then(res => res.json())
        .then(json => {
        dispatch({type: SEARCH_VG, payload: json})
        })
        .catch(error => console.warn(error))
    } 
}
export function getGenresDB(){
    let url = `http://localhost:3001/genres`
    return async function (dispatch) {
        return await fetch(url)
        .then(res => res.json())
        .then(json => {
        dispatch({type: GET_GENRES, payload: json})
        })
        .catch(error => console.warn(error))
    } 
}

export function filterByGenre(genre){
    let url = 'http://localhost:3001/videogames'
    return async function (dispatch) {
        return await fetch(url)
        .then(res => res.json())
        .then(json => {
            let vgFiltered = json.filter(vg => vg.genres.filter(g => g.name === genre).length )            
            //console.log(json.map(g => g.genres.map(ge => ge.name === genre)))
            //console.log(vgFiltered)
        dispatch({type: FILTER_BY_GENRE, payload: genre === 'All' ? json : vgFiltered})
        })
        .catch(error => console.warn(error))
    } 
}
export function filterByDb(value){
    let url = 'http://localhost:3001/videogames'
    return async function (dispatch) {
        return await fetch(url)
        .then(res => res.json())
        .then(json => {
        if (value === 'created' || value === 'All') {
            let vgFiltered = json.filter(vg => vg.id.toString().length > 30 )            

            dispatch({type: FILTER_BY_DB_OR_API, payload: value === 'All' ? json : vgFiltered})
        
        }
        if (value === 'existent'){                
            let vgApiFiltered = json.filter(vg => vg.id.toString().length < 10 )            

            dispatch({type: FILTER_BY_DB_OR_API, payload: vgApiFiltered})
        }
        })
        .catch(error => console.warn(error))
    } 
}
export function sortByRating(value){
    let url = 'http://localhost:3001/videogames'
    return async function (dispatch) {
        return await fetch(url)
        .then(res => res.json())
        .then(json => {
        if (value === 'none') {
            dispatch({type: SORT_BY_RATING, payload:json})
        }
        if (value === 'ascending') {
            let vgSortedAsc = json.sort((a,b) =>  (a.rating-b.rating))            
            //console.log(vgSortedAsc)
            dispatch({type: SORT_BY_RATING, payload: vgSortedAsc})
        
        }
        if (value === 'descending'){                
            let vgSortedDec = json.sort((a,b) =>  (b.rating-a.rating))            
            //console.log(vgSortedDec)
            dispatch({type: SORT_BY_RATING, payload: vgSortedDec})
        }
        })
        //.catch(error => console.warn(error))
    } 
}
export function sortByName(value){
    let url = 'http://localhost:3001/videogames'
    return async function (dispatch) {
        return await fetch(url)
        .then(res => res.json())
        .then(json => {
        if (value === 'none') {
            
            dispatch({type: SORT_BY_NAME, payload:json})
        }
        if (value === 'ascending') {
            let vgSortedAsc = json.sort((a,b) =>  
            (a.name.toLowerCase() === b.name.toLowerCase() ? 0 
            : a.name.toLowerCase() > b.name.toLowerCase() ? 1 
            : -1))   
              
            //console.log(vgSortedAsc)
            dispatch({type: SORT_BY_NAME, payload: vgSortedAsc})
        
        }
        if (value === 'descending'){                
            let vgSortedDec = json.sort((a,b) =>  
            (b.name.toLowerCase() === a.name.toLowerCase() ? 0 
            : b.name.toLowerCase() > a.name.toLowerCase() ? 1 
            : -1))             
            //console.log(vgSortedDec)
            dispatch({type: SORT_BY_NAME, payload: vgSortedDec})
        }
        })
        //.catch(error => console.warn(error))
    } 
}
export function createVG (obj) {
    let url = 'http://localhost:3001/videogames'
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }
    return async function(dispatch) {
        return await fetch (url, options)
        .then(res => res.json())
        .then(json => (
            dispatch({type: CREATE_VG, payload: json})
            .then(alert(json))
          
            ))
    .catch(error => console.log(error))
    }
}
export function resetDetail (){ 
    return {
        type: RESET_DETAIL,
        payload: {}
    }
}
export function resetCards (){
    return {
        type: RESET_CARDS,
        payload: []
    }
}
export function resetCreate (){
    return {
        type: RESET_CREATE,
        payload: []
    }
}