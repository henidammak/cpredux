import React from 'react'
import './App.css'
import AddTask from './Components/AddTask/AddTask'
import TaskList from './Components/TaskList/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css'
import FilterTask from './Components/FilterTask/FilterTask'



function App  () {
    return (
        <div className="app">
            <h1 className='title'>todo app</h1>
            <AddTask/>
            <FilterTask/>
            
            <TaskList/>
            
        </div>
    )
}

export default App



