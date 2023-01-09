import {ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO} from "../actions/TodoAction";


const initialState = {
    todos: [],
};

export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(action)
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.payload,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            console.log(action)
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        console.log(index, " ", action.payload)
                        return {
                            ...todo,
                            completed: !todo.completed,
                        };
                    }
                    return todo;
                }),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload),

            }
        case EDIT_TODO:
            console.log(action)
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload.index) {
                        return {
                            ...todo,
                            text: action.payload.text,
                        };
                    }
                    return todo;
                }),
            };

        default:
            return state

    }
}