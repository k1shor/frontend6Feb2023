const initialData = {
    game: "Basketball",
    player: "jordan"
}

const gameReducer = (state=initialData, action) => {
    switch(action.type){
        case "UPDATE_GAME":
            return {...state,game: action.payload}
        case "UPDATE_PLAYER":
            return {...state,player: action.payload}

        default:
            return state
    }
}

export default gameReducer