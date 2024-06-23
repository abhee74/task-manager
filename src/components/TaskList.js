import React from 'react';

function TaskList({ tasks, setSelectedTask, deleteTask }) {
  if (!(tasks && tasks.length && tasks.map))
    {
        return <>Task not found!</>
        
    }
    return (
    <div className="list-group">
      {tasks && tasks.length && tasks.map && tasks?.map(task => (
        <div key={task.id} className="list-group-item">
          <h5>{task.title}</h5>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <button onClick={() => setSelectedTask(task)} className="btn btn-info mr-2">View</button>
          <button onClick={() => deleteTask(task._id)} className="btn btn-danger">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
