export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const GET_VG_DETAILS = 'GET_VG_DETAILS'
export const SEARCH_VG = 'SEARCH_VG'

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