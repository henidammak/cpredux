import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../redux/actions/TaskActions";
import EditTask from "../EditTask/EditTask";
import './TaskItem.css'
const TaskItem = ({el}) => {
  const dispatch = useDispatch()
  
  return (
    <div className='task'>
      <div className={el.isDone? 'done': null}>
       {el.task}
      </div>
      <button onClick={()=>dispatch( deleteTask(el.id))}>delete</button>
      <button onClick={()=>dispatch( completeTask(el.id))}>{el.isDone ? 'undo' : 'complete'}</button>
      
      <EditTask el={el}/>
    </div>
  );
};

export default TaskItem;
