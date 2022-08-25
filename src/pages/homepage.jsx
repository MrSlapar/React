import { useState } from "react";
import Card from "../components/Card";
import AddTodoModal from "../components/modals/AddTodoModal";
import { useSelector } from "react-redux";

function Homepage() {
const todos = useSelector(state => state.todo.todoData)

  return (
    <>
      <div className="row">
        {todos.map(todo => (
          <Card key={todo.ident} {...todo} />
        ))}
      </div>
      <AddTodoModal />
    </>
  );
}

export default Homepage;