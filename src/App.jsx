import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

const App = () => {
  return (
    <>
    <h1 className='text-5xl'>Learn about react-redux & redux-toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App