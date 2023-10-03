import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

//Las props puedes ser datos primitios con String numeros , datos complejos objetos clases y tambien funciones
const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2>Nombre:{task.name}</h2>
      <h2>Description{task.description}</h2>
      <h2>Level: {task.level}</h2>
      <h5>this Task is: {task.completed ? "Completed" : "Pending"}</h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};

export default TaskComponent;
