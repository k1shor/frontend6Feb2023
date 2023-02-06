const initialData = {
    count: 100,
    data: 500
}
/*
... -> rest operator/spread operator
        preserves the previous state 
        */

// const counterReducer = (state={count:0}, action) => {
const counterReducer = (state=initialData, action) => {
    switch(action.type){
        case "INCREASE_COUNT":
            return {...state, count: ++state.count}

        case "DECREASE_COUNT":
            return {...state, count: --state.count}

        case "RESET_COUNT":
            return {...state, count: 0}
        
        case "INCREASE_DATA":
            return {...state, data: state.data+50}

        case "DECREASE_DATA":
            return {...state, data: state.data-50}

        case "RESET_DATA":
            return {...state, data: 0}
    

        default :
            return state
    }
}

export default counterReducer