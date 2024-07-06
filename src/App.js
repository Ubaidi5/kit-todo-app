import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import { Button } from "antd";
import List from "./components/List";
import { useLocalStorage } from "./hooks/useLoaclStorage";
import { useAPI } from "./hooks/useAPI";
import { useDispatch, useSelector } from "react-redux";
import { todo_action } from "./app/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todo);
  const [_, setTodos] = useState([]);
  const [type, setType] = useState("all");
  const [error, setError] = useState("");
  const [delete_loading, toggle_delete_loading] = useState(false);
  const [myName, setMyName] = useLocalStorage("", "my_name");

  const [fetch_function, loading] = useAPI(() =>
    fetch("https://jsonplaceholder.typicode.com/todos")
  );

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

    setError("");
    dispatch(todo_action.add_todo({ title: newTodo, status: "pending" }));

    setNewTodo("");

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  async function deleteTodo(index) {
    try {
      dispatch(todo_action.delete_todo(index));
    } catch (err) {
      console.log("Error in Delete function", err);
    } finally {
      toggle_delete_loading(false);
    }
  }

  function markAsComplete(index) {
    todos[index].status = "completed";
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const pending_task = todos.filter((t) => {
    return t.completed == false;
  });

  const filtered_tasks = todos.filter((todo) => {
    if (type === "all") {
      return true;
    } else if (type === "pending" && todo.completed == false) {
      return true;
    } else if (type === "completed" && todo.completed === true) {
      return true;
    }
    return false;
  });

  function getAllTodos() {
    fetch_function()
      .then((res) => res.json())
      .then((data) => {
        let first_ten = data.splice(0, 9);
        dispatch(todo_action.store_all_todos(first_ten));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  useEffect(() => {
    getAllTodos();
  }, []);

  const [newTodo, setNewTodo] = useState("");

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
            <Button onClick={addTodo}>Add todo</Button>
          </div>
          {error ? <p>{error}</p> : null}
        </div>
        <div style={{ width: "70%", margin: "12px auto" }}>
          {loading ? (
            <div>
              <p>Loading...</p>
            </div>
          ) : (
            <List
              todos={filtered_tasks}
              markAsComplete={markAsComplete}
              deleteTodo={deleteTodo}
              delete_loading={delete_loading}
            />
          )}
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
