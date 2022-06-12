export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const GET_VG_DETAILS = 'GET_VG_DETAILS'

export function getAllVideogames(){
    let url = 'http://localhost:3001/videogames'
    return function (dispatch) {
        return fetch(url)
        .then(res => res.json())
        .then(json => {
        dispatch({type: GET_ALL_VIDEOGAMES, payload: json})
        })
        //.catch(error => console.warn(error))
    } 
}
export function getVgDetail(id){
    let url = `http://localhost:3001/videogames/${id}`
    return function (dispatch) {
        return fetch(url)
        .then(res => res.json())
        .then(json => {
        dispatch({type: GET_VG_DETAILS, payload: json})
        })
        //.catch(error => console.warn(error))
    } 
}