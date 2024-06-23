import React, { useState, useEffect } from 'react';

function TaskDetail({ task, updateTask }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
  }, [task]);

  const handleSubmit = e => {
    e.preventDefault();
    updateTask({ id: task._id, title, description, dueDate });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input type="date" className="form-control" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Update Task</button>
    </form>
  );
}

export default TaskDetail;
