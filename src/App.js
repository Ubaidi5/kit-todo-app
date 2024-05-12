import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState("all");
  const [error, setError] = useState("");

  function addTodo() {
    if (newTodo === "") {
      setError("Please add some task");
      return;
    }

    const is_exist = todos.filter((todo) => todo.title === newTodo);

    if (is_exist.length > 0) {
      setError("This task already exist");
      return;
    }

    setError(false);
    todos.push({
      title: newTodo,
      status: "pending",
    });
    setTodos([...todos]);
    setNewTodo("");

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function markAsComplete(index) {
    todos[index].status = "completed";
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const pending_task = todos.filter((t) => {
    return t.status == "pending";
  });

  const filtered_tasks = todos.filter((todo) => {
    if (type === "all") {
      return true;
    } else if (type === "pending" && todo.status === "pending") {
      return true;
    } else if (type === "completed" && todo.status === "completed") {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const my_todos = localStorage.getItem("todos");
    console.log({ my_todos });
    const parsed_todos = JSON.parse(my_todos);
    setTodos(parsed_todos || []);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 32 }}>React Todo App</h1>
      <div
        style={{
          width: 700,
          margin: "32px auto",
          border: "1px solid #dcdcdc",
          borderRadius: 4,
        }}
      >
        <h2 style={{ textAlign: "center" }}>THINGS TO DO</h2>
        <hr style={{ width: "70%", margin: "12px auto" }} />

        <div style={{ width: "70%", margin: "12px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <Input
              width={300}
              placeholder="Add some text"
              value={newTodo}
              onChange={(value) => setNewTodo(value)}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  addTodo();
                }
              }}
            />
            <Button bgcolor="blue" color="white" onClick={addTodo}>
              Add todo
            </Button>
          </div>
          {error ? <p>{error}</p> : null}
        </div>
        <div style={{ width: "70%", margin: "12px auto" }}>
          <List
            todos={filtered_tasks}
            markAsComplete={markAsComplete}
            deleteTodo={deleteTodo}
          />
        </div>

        <footer
          style={{
            backgroundColor: "#f1f1f1",
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 32px",
          }}
        >
          <p>{pending_task.length} items left</p>
          <div style={{ display: "flex", gap: 16 }}>
            <p
              style={{
                cursor: "pointer",
                color: type === "all" ? "green" : "#000",
              }}
              onClick={() => {
                setType("all");
              }}
            >
              All
            </p>
            <p
              style={{
                cursor: "pointer",
                color: type === "pending" ? "green" : "#000",
              }}
              onClick={() => {
                setType("pending");
              }}
            >
              Todo
            </p>
            <p
              style={{
                cursor: "pointer",
                color: type === "completed" ? "green" : "#000",
              }}
              onClick={() => {
                setType("completed");
              }}
            >
              Completed
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
