import { GET_ALL_VIDEOGAMES, GET_VG_DETAILS } from "./actions.js";


const initialState = {
    videogames: [],
    vgDetail: {}
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
            default:
            return state;
    }
}

