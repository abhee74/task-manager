import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTask = task => {
    axios.post('/api/tasks', task)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error(error));
  };

  const updateTask = updatedTask => {
    axios.put(`/api/tasks/${updatedTask.id}`, updatedTask)
      .then(response => {
        const updatedTasks = tasks.map(task =>
          task._id === updatedTask.id ? response.data : task
        );
        setTasks(updatedTasks);
      })
      .catch(error => console.error(error));
  };

  const deleteTask = taskId => {
    axios.delete(`/api/tasks/${taskId}`)
      .then(() => {
        const updatedTasks = tasks.filter(task => task._id !== taskId);
        setTasks(updatedTasks);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h1 className="my-4">Task List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} setSelectedTask={setSelectedTask} deleteTask={deleteTask} />
      {selectedTask && <TaskDetail task={selectedTask} updateTask={updateTask} />}
    </div>
  );
}

export default App;
