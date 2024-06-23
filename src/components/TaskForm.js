import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTask({ title, description, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
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
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
