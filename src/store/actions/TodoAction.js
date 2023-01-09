export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";


export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data
})

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: index
})

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    payload: index
})

export const editTodo = (text,index) => ({
    type: EDIT_TODO,
    payload: {text:text,index:index}
})