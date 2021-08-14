import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK, FILTER_TASK1 } from "../types"

export const addTask = (payload) => ({
    type:ADD_TASK ,
    payload
})
export const completeTask = (payload) => ({
    type: COMPLETE_TASK,
    payload
})
export const editTask = (id,newValue) => ({
    type: EDIT_TASK,
    payload:{id,newValue}
})
export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload
})
export const filterTask = (payload) => ({
    type: FILTER_TASK,
    payload
})
export const filterTask1 = (payload) => ({
    type: FILTER_TASK1,
    payload
})






