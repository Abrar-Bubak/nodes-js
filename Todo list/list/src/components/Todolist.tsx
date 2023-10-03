'use client'
import { useEffect, useState } from 'react';
import './Todolist.css';

const Todolist = () => {
  const [todolist,setTodolist]=useState <any[]>([])
  const [title, setTitle] = useState('');
  const [loading,setLoading] =useState (false);
 
  useEffect(()=> {
    const apiUrl='http://localhost:8000/todolist';

    setLoading(true);
    fetch(apiUrl,{
      method:'Get'
    })
    .then(response => response.json())
    .then(data => {
      setTodolist(data);
      setLoading(false)
    })
    .catch(error =>
      setLoading(false)
      );
    
  },[])




  const addTask = () => {
   

    if (title.length > 0) {
      const task = {  name: title, isCompleted: false };

      const apiUrl='http://localhost:8000/todolist';

      setLoading(true);
      fetch(apiUrl,{
        method: 'POST', 
        headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(todolist)
    

      })
      .then(response => response.json())
      .then(data => {
        setTodolist(data);
        setLoading(false)
      })
      .catch(error =>
        setLoading(false)
        );

      setTodolist((prev) => {
        return [...prev, task];
      });
      setTitle('');
    } else {
      alert('Please enter the Task');
    }
  };

const updateTask = (id:any) => {
    setTodolist(prev =>{
        return prev.map (task => {
            if (task.id == id){
                return{...task, isCompleted: !task.isCompleted};
            }
            else {
                return task;
            }});
        })
    }


  

  return (
    <>
      <div id="myDIV" className="header">
        <h2 style={{ margin: '5px' }}>My To Do List</h2>
        <input
          type="text"
       
          placeholder="Title..."
          value={title} // Add this line to bind the input value to the 'title' state
          onChange={(e) => setTitle(e.target.value)} // Add this line to update 'title' state when input changes
        />
        <span className="addBtn" onClick={() => addTask()}>
          Add
        </span>
      </div>

      <ul id="myUL">
        {todolist.map((task, key) => (
          <li
            key={key}
            className={task.isCompleted ? 'checked' : ''}
            onClick={()=> updateTask(task.id)}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
