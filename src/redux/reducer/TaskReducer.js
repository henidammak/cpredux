import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK, FILTER_TASK1 } from "../types";

const initialeState = {
  tasks: [
    { id: 1, task: "learn css",isDone:true },
    { id: 2, task: "learn html",isDone:true  },
    { id: 3, task: "learn Api",isDone:false },
  ],
};
const taskReducer =(state=initialeState,action)=>{
    switch (action.type) {
        case ADD_TASK:
            return{...state,tasks:[...state.tasks , action.payload]};
            case DELETE_TASK:
                return{...state,tasks:state.tasks.filter((el)=> el.id !== action.payload)}
            case COMPLETE_TASK:
                return{...state,tasks:state.tasks.map((el)=>el.id === action.payload ? {...el, isDone:!el.isDone}: el )}
            case EDIT_TASK:
                return{...state,tasks:state.tasks.map((el)=>el.id === action.payload.id ? {...el, task:action.payload.newValue}: el )}
                case FILTER_TASK:
                    return{
                        ...state,tasks:state.tasks.filter((el)=> !el.isDone  )
                        
                    }
                    case FILTER_TASK1:
                    return{
                        ...state,tasks:state.tasks.filter((el)=> el.isDone  )
                        
                    }
                    
        default:
           return state;
    }
}
export default taskReducer