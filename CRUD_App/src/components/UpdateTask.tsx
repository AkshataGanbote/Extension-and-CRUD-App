import React, { useState } from 'react';
import { ITask } from './Task.type';

type Props = {
    data : ITask;
    handleBackBtn: () => void;
    handleUpdateBtn: (data: ITask) => void;
};

const UpdateTask = (props : Props) => {
    const { data, handleBackBtn, handleUpdateBtn } = props;
    const [task, setTask] = useState(data.taskName);

    const handleAddTaskChange = (event : any) => {
        setTask(event.target.value);
    }
    
    const handleUpdateSubmit = (event : any) => {
        event.preventDefault();
        const updatedData : ITask = {
          id: data.id,
          taskName: task,
        }
        handleUpdateBtn(updatedData);
        handleBackBtn(); // TO return to home page after clicking
    }


    return (
        <div className='form container' style={{textAlign: 'center'}}>
            <div  className='container my-4'>
                <h3>Add New Task</h3>
            </div>
            <form onSubmit={handleUpdateSubmit}>
                <div className='container my-3'>
                <label>Enter Task : </label>
                <input type="text" value={task} onChange={handleAddTaskChange} style={{height: '30px', margin: '5px'}} required />
                </div>
                <div>
                
                <input className="btn btn-success mx-1" type="submit" value='Update' />
                <input className="btn btn-primary mx-1" type="button" value ='Back' onClick={handleBackBtn} />
                </div>
            </form>
        </div>
  )
}

export default UpdateTask