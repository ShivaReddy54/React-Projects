import React, { useState } from "react";

function Todo(){
    const [task, setTask] = useState(['eat breakfast']);
    const [newtask, setNewtask] = useState("");

    function inpt(e){
        setNewtask(e.target.value);
    }
    function addTask(){
        if(newtask.trim() !== ""){
            setTask(prev => [...prev, newtask]);
            setNewtask("");
        }
    }
    function removeTask(index){
        const updated = task.filter((ele, i) => i != index);

        setTask(updated);
    }
    function up(index){
        if(index > 0){
            const updated = [...task];

            [updated[index], updated[index-1]] = [updated[index-1], updated[index]]; // swapping
            setTask(updated);
        }
    }
    function down(index){
        if(index < task.length - 1){
            const updated = [...task];

            [updated[index], updated[index+1]] = [updated[index+1], updated[index]]; // swapping
            setTask(updated);
        }
    }

    return(
        <>
            <div id="todo-list">
                <h1> To Do List </h1>
                <div>
                    <input type="text" placeholder="Enter a task" value={newtask} onChange={inpt} />
                    <button id="add-btn" onClick={addTask}> Add </button>
                </div>

                <ol>
                    {task.map((ele, i) => <li key={i}> 
                        <span id="text">{ele}</span>
                        <button id="delete-btn" onClick={() => removeTask(i)}>Delete</button>
                        <button id="move-btn" onClick={() => up(i)}>👆</button>
                        <button id="move-btn" onClick={() => down(i)}>👇</button>
                    </li>)}
                </ol>
            </div>
        </>
    );
}

export default Todo;