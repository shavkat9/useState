import React, { useState} from 'react';
import { v4 } from 'uuid';


const TodoList = (evt) =>{
    const [taskText, setTaskText ] = useState("");
    const [list, setList] = useState([]);


    const newTodo = {
        id:v4(),
     
    }
    const onSubmit = (evt) => {
        setList([...list, {name: taskText, completed: false}]);
        evt.target.value = null
    }
    return (
    <div>
      <input type="text"
      value={taskText} 
      onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={onSubmit}>Add Tasks</button>
      {list && list.map((item) => (
      <p
      onClick={() => {
        const tasks = list.filter((ele) => ele.name !== item.name);
        tasks.push({ name: item.name, completed: !item.completed });
        setList(tasks)

        }}
         >
        {item.name}
        </p>
        ))}
    </div>
    );
};
export default TodoList;
