import React from 'react'
import { ITask } from './Task.type'

type Props = {
    list : ITask[];
    handleDelete: (data: ITask) => void;
    handleUpdate : (data: ITask) => void;
}


const TaskList = (props: Props) => {
    const {list, handleDelete, handleUpdate} = props;
  return (
    <div className='px-5'>
        <table className="table table-bordered px-4">
            <thead className='table-primary'>
                <tr>
                    <th scope="col">Tasks</th>
                    {/* <th scope="col">Last</th> */}
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            {list.map((task) =>{
                console.log(task);
                return (
                    <tbody key={task.id} >
                        {/* Key Added to body and tr both  */}
                        <tr key={task.id}>
                            <td>{task.taskName}</td>
                            {/* <td>Otto</td> */}
                            <td>
                                <div>
                                    <input className="btn btn-success mx-1" type="button" value="Update" onClick = {()=> handleUpdate(task)} />
                                    <input className="btn btn-danger mx-1" type="button" value="Delete" onClick={() => handleDelete(task)}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
    </div>
  )
}

export default TaskList;