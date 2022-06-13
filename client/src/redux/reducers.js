import { GET_ALL_VIDEOGAMES, GET_VG_DETAILS, SEARCH_VG } from "./actions.js";


const initialState = {
    videogames: [],
    vgDetail: {},
    searched: [],
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
        default:
        return state;
    }
}

