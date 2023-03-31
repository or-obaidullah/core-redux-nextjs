import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants"

// state - count: 0
const initialCounterState = {
    count:0,
    numberOfStudents: 5
}



//creating reducer - do accept state,action 
const counterReducer = (state=initialCounterState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count +1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count -1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
    
        default:
            return state;
    }
}

export default counterReducer;