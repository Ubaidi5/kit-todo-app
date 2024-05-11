import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";

const todos = [
  {
    title: "Create component",
    status: "completed",
  },
  {
    title: "Pass props into component",
    status: "pending",
  },
  {
    title: "Pass props as children",
    status: "pending",
  },
  {
    title: "Create UI for todo app",
    status: "pending",
  },
];

function App() {
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            width: "70%",
            margin: "12px auto",
          }}
        >
          <Input width={300} placeholder="Add some text" />
          <Button bgcolor="blue" color="white" />
        </div>

        <div style={{ width: "70%", margin: "12px auto" }}>
          <List todos={todos} />
        </div>

        <footer
          style={{
            backgroundColor: "#f1f1f1",
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 32px",
          }}
        >
          <p>3 items left</p>
          <div style={{ display: "flex", gap: 16 }}>
            <p>All</p>
            <p>Todo</p>
            <p>Completed</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
