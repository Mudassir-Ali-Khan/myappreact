import React, { useState } from "react";
import TrashSvg from "./TrashSvg";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(todos);

  const addTodo = () => {
    // Shallow copy and deep copy
    // shallow copy memory address => same memory address
    // deep copy => different memory address, diffrent values
    const newTodo = [...todos];
    newTodo.push(text);
    setTodos(newTodo);
    setText("");
  };

  const deleteTodo = (index) => {
    // const newTodos = [];
    // for (let i = 0; i < todos.length; i++) {
    //   if (i !== index) {
    //     ['Hello', '2', '3']
    //     newTodos.push(todos[i]);
    //   }
    // }
    const newTodos = todos.filter((item, ind) => {
      return index !== ind;
    });
    setTodos(newTodos);
  };

  return (
    <main className="bg-dark text-light d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <style>{`
            ::placeholder {
                color: gray !important;
            }
        `}</style>
      <div className="rounded-3 px-3 py-5" style={{ width: "40rem", backgroundColor: "#1E1E1E" }}>
        <h2 className="text-center">TODO</h2>
        <div className="d-flex gap-3 mt-5">
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            className="form-control text-light"
            placeholder="Enter a task"
            style={{ backgroundColor: "#2C2C2C" }}
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Add
          </button>
        </div>
        {todos.length === 0 && <p className="text-center text-danger mt-3">No Todos</p>}
        {todos.map((todo, index) => {
          return (
            <div key={index}>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <span>{todo}</span>
                <button
                  className="btn"
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  <TrashSvg />
                </button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Todo;
