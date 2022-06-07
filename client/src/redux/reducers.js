const initialState = {
    videogames: []
}



function reducer(state, action){
    switch(action.type) {
        case 'GET_ALL_GAMES':
            return{
                ...state
            }
            default:
                return state
    }
}

export default reducer;