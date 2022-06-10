export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';


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