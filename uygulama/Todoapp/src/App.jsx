import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
 //propslarla taşınıma güzel örnek

  const [todos, setTodos] = useState([]);  // bunu ilk önce todocreate fonksiyonunu todo create companeantine akaraak işlemlerimizie başlaık

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {  //eşit değilse bulamadık id ile eşleşeni döndürüyoruz
        return todo;
      }
      return newTodo;  // eşit olduğunda new todoyu ekleiyoruz düzenenmiş veriyi
    })

    setTodos([...updatedTodos]);
  }


  console.log(todos);

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App
