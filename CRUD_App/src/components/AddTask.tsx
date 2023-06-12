import React, { useState } from 'react';
import { ITask} from './Task.type';

type Props = {
  handleBackBtn: () => void;
  handleAddTaskSubmitBtn: (data: ITask) => void;
};

const AddTask = (props : Props) => {
  const [task, setTask] = useState("");

  const {handleBackBtn, handleAddTaskSubmitBtn} = props;

  const handleAddTaskChange = (event : any) => {
    setTask(event.target.value);
  }

  // Clicking on Add Button
  const handleAddTaskBtn = (event : any) => {
    event.preventDefault();
    const data : ITask = {
      id: new Date().toJSON().toString(),
      taskName: task,
    }
    handleAddTaskSubmitBtn(data);
    handleBackBtn(); // TO return to home page after clicking
  }


  return (
    <div className='form container' style={{textAlign: 'center'}}>
      <div  className='container my-4'>
        <h3>Add New Task</h3>
      </div>
      <form onSubmit={handleAddTaskBtn}>
        <div className='container my-3'>
          <label>Enter Task : </label>
          <input type="text" value={task} onChange={handleAddTaskChange} style={{height: '30px', margin: '5px'}} required />
        </div>
        <div>
          
          <input className="btn btn-success mx-1" type="submit" value='Add' />
          <input className="btn btn-primary mx-1" type="button" value ='Back' onClick={handleBackBtn} />
        </div>
      </form>
    </div>
  )
}

export default AddTask