import React, { useState } from 'react';

const TaskPage = () => {
  const [cardForm, showForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const toggleCardForm = () => {
    showForm(!cardForm);
  };
  return (
    <div className="container my-4">
      <div className=" bg-light py-2">
        <div className="row">
          <div className="col-md-2">
            <button className=".btn btn-success m-3" onClick={toggleCardForm}>
              +
            </button>
          </div>
          <div className="col-md-10 ">
            <h2 className="display-4 text-center text-uppercase">
              Task Management
            </h2>
          </div>
        </div>
        {toggleCardForm && (
          <form>
            <div className="form-group">
              <label htmlFor="taskTitle">Title</label>
              <input
                type="text"
                className="form-control"
                id="taskTitle"
                placeholder="Enter Task Title"
                onChange={onTitleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="taskDescription">Description</label>
              <input
                type="textarea"
                className="form-control"
                id="taskDescription"
                placeholder="Enter Task Description"
                onChange={onDescriptionChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TaskPage;
