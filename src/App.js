import React, {useState} from 'react';
import TodoList from './components/Header/TodoList';


function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        < TodoList />
      </header>
    </div>
  );
}
export default App;
