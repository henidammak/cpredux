import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/actions/TaskActions'

const AddTask = () => {
    const dispatch = useDispatch()
    const [text, settext] = useState("")
    const add =()=>{
        dispatch(addTask({id:Math.random(),task:text,isDone:false}))
    }
    return (
        <div className='add'>
            <input type="text" 
            value={text}
            onChange={(e)=>settext(e.target.value)}/>
            <button onClick={add} >Add</button>
        </div>
    )
}

export default AddTask
