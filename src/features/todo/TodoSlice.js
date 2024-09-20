import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [ { id: 1, text: "Hello World" } ]
}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // remove the todo based on the id
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
           const {id, text} = action.payload
           const todo = state.todos.find(todo => todo.id === id)

           if(todo) {
            todo.text = text
           }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = TodoSlice.actions

export default TodoSlice.reducer