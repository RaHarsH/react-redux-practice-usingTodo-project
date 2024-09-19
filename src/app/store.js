// this is a very important file whenever you are setting up using redux
// this is a single source of truth so keep only one store.js fileand keep all the slices here

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/TodoSlice'


export const store = configureStore({
    reducer: todoReducer
})