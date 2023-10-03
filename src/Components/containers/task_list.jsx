import React from "react";
import { LEVELS } from "../../models/level.enums";
import {Task} from "../../models/task.class"
import TaskComponent from "../pure/task";


const TaskList=()=>{
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);
    return(<div>
       <div>


          Your Task: 
       </div>
       {/*  */}
       {console.log(defaultTask)}
       <TaskComponent task={defaultTask}></TaskComponent>
    </div>)
}

export default TaskList