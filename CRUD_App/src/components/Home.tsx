import React, { useState } from 'react'
import { ITask, PageEnum, demoTasks } from './Task.type';
import TaskList from './TaskList';
import AddTask from './AddTask';
import UpdateTask from './UpdateTask';

const Home = () => {
    const [taskList, setTaskList] = useState( 
        demoTasks as ITask[] 
    );

    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToUpdate, setDataToUpdate] = useState({} as ITask);

    // For Add New Task Button on Home Page
    const handleAddBtnClick = () => {
        setShownPage(PageEnum.add)
    }

    //For Back Btn Handle on Add New Task Page
    const showListPage = () => {
        setShownPage(PageEnum.list);
    };

    //CREATE  New Task Button on Add New Task Page
    const createNewTask = (data: ITask) => {
        setTaskList([...taskList, data]);
    };

    // DELETE Button
    const deleteTask = (data: ITask) => {
        // To Index from array i,e taskList
        // Splice that
        // Update new record
        const indexToDelete = taskList.indexOf(data);
        const tempList = [...taskList];

        tempList.splice(indexToDelete, 1);
        setTaskList(tempList);
    };

    // UPDATE
    const updateTask = (data: ITask)  =>{

        setShownPage(PageEnum.update);
        setDataToUpdate(data);
    }

    const updateData = (data: ITask) =>{
        const filteredData = taskList.filter((x) => x.id === data.id)[0];
        const indexOfRecord = taskList.indexOf(filteredData);
        const tempData = [...taskList];
        tempData[indexOfRecord] = data;
        setTaskList(tempData);
    }

    return (
        <>
            <header className='d-flex justify-content-center bg-secondary text-white py-3'>
                <h1>Task Management App</h1>
            </header>
            <section className='section-content'>
                {shownPage=== PageEnum.list && (
                    <>
                        <input className="btn btn-warning my-5" type="button" value="Add New Task" onClick={handleAddBtnClick}/>
                        <TaskList list={taskList} handleDelete={deleteTask} handleUpdate={updateTask} />
                    </>
                )}

                {shownPage === PageEnum.add && (
                    <AddTask 
                        handleBackBtn={showListPage} 
                        handleAddTaskSubmitBtn={createNewTask} 
                    />
                )}

                {/* For Update */}
                {shownPage === PageEnum.update && (
                    <UpdateTask
                        data={dataToUpdate}
                        handleBackBtn={showListPage}
                        handleUpdateBtn={updateData}
                    />
                )}
                  
            </section>
        </>
    )
}

export default Home;