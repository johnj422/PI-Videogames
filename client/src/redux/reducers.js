import { 
    GET_ALL_VIDEOGAMES, 
    GET_VG_DETAILS, 
    SEARCH_VG, 
    GET_GENRES, 
    FILTER_BY_GENRE, 
    FILTER_BY_DB_OR_API } from "./actions.js";


const initialState = {
    videogames: [],
    vgDetail: {},
    searched: [],
    genres: [],
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
                alert ('No result found');
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
        

        default:
        return state;
    }
}

