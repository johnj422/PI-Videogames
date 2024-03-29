import { 
    GET_ALL_VIDEOGAMES, 
    GET_VG_DETAILS, 
    SEARCH_VG, 
    GET_GENRES, 
    FILTER_BY_GENRE, 
    FILTER_BY_DB_OR_API,
    SORT_BY_RATING,
    SORT_BY_NAME,
    CREATE_VG,
    RESET_DETAIL,
    RESET_CARDS,
    LOADER,
    RESET_CREATE } from "./actions.js";


const initialState = {
    videogames: [],
    vgDetail: {},
    searched: [],
    genres: [],
    newVG: {},
    loader: false,
}



export default function reducer(state = initialState, action){ 
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                videogames: action.payload
            }
        
        
        case GET_VG_DETAILS:
            return{
                ...state,
                vgDetail: action.payload
            }
        case SEARCH_VG:
            if(action.payload.error){
                alert(action.payload.error)
                return state;
            }
            return{
                ...state,
                videogames: action.payload
            }
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload
            }
        case FILTER_BY_GENRE:
            if(action.payload.length === 0) {
                alert ('No results found');
                return state;
            }
            return{
                ...state,
                videogames: action.payload
            }
        case FILTER_BY_DB_OR_API:
            if (action.payload.length === 0){
                alert ('No result found');
                return state;
            }
            return{
                ...state,
                videogames: action.payload
            }
        case SORT_BY_RATING:
            return{

             ...state,
            videogames: action.payload
            }
        case SORT_BY_NAME:
            return{

             ...state,
            videogames: action.payload
            }
        case CREATE_VG:
            if(action.payload.error){
                alert(action.payload.error)
                return state;
            }
            return{
                
                ...state,
                newVG: action.payload
            }
        case RESET_DETAIL:
            return{
                ...state,
                vgDetail: action.payload
            }
        case RESET_CARDS:
            return{
                ...state,
                videogames: action.payload
            }
        case RESET_CREATE:
            return{
                ...state,
                newVG: action.payload
            }
        case LOADER:
            return{
                ...state,
                loader: action.payload 
            }

        default:
        return state;
    }
}

