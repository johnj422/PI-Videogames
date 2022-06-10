import { GET_ALL_VIDEOGAMES } from "./actions.js";


const initialState = {
    videogames: [],
    
}



export default function reducer(state = initialState, action){ 
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                videogames: action.payload
            }
        default:
            return state;

    }
}

