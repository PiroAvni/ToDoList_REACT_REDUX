import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts";
import { TodoProvider } from "../../contexts/TodoContext";
import { TodoForm, TodoList } from "../../components";
import "./style.css";


function index() {
  
  const { user } = useAuth();

  return (
    <>
      <header>{user} Todo List</header>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default index;