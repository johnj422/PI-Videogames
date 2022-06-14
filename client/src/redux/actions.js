export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const GET_VG_DETAILS = 'GET_VG_DETAILS'
export const SEARCH_VG = 'SEARCH_VG'
export const GET_GENRES = 'GET_GENRES' 
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'

export function getAllVideogames(){
    let url = 'http://localhost:3001/videogames'
    return function (dispatch) {
        return fetch(url)
        .then(res => res.json())
        .then(json => {
        dispatch({type: GET_ALL_VIDEOGAMES, payload: json})
        })
        .catch(error => console.warn(error))
    } 
}
export function getVgDetail(id){
    let url = `http://localhost:3001/videogames/${id}`
    return async function (dispatch) {
        return await fetch(url)
        .then(res => res.json())
        .then(json => {
        dispatch({type: GET_VG_DETAILS, payload: json})
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