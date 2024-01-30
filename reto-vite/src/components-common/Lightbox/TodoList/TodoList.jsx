// import React, { useState } from 'react';
// import "./TodoList.css";

// const TodoList = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Buy groceries', completed: false },
//     { id: 2, text: 'Do laundry', completed: false },
//     { id: 3, text: 'Walk the dog', completed: false }
//   ]);

//   const toggleTodo = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       {todos.map(todo => (
//         <div key={todo.id}>
//           <input
//             type="checkbox"
//             className='todo-checkbox'
//             checked={todo.completed}
//             onChange={() => toggleTodo(todo.id)}
//           />
//           <span>{todo.text}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TodoList;

// ==================================原本寫好的================================================
// import React from 'react';
// import "./TodoList.css";

// const TodoList = () => {
//   return (
    // <div className='check-wrap'>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>毛巾</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>手帕</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>水壺</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>登山杖</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>帽子</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>換洗衣物</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>行動電源</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>行動電源</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>行動電源</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>行動電源</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>行動電源</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>行動電源</span>
    //   </label>
    //   <label>
    //     <input type="checkbox" value="confirm" />
    //     <span>行動電源</span>
    //   </label>
    // </div>
//   );
// };

// export default TodoList;

// ================嘗試中==================================================

import React from 'react';
import './TodoList.css';

const TodoList = ({ items }) => {
  return (
    <div className='check-wrap'>
      {items.map((item, index) => (
        <label key={index}>
          <input type="checkbox" value="confirm" />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
};

export default TodoList;