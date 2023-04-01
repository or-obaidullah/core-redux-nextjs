import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstant"

const initialTodoState = {
    todos: [],
    isloading: false,
    error: null
}

const todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isloading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isloading: false,
                todos: action.payload,
                error: null
            }
        case GET_TODOS_FAILED:
            return {
                isloading: false,
                todos: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default todosReducer;