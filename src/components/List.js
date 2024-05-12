import { FaRegTrashCan } from "react-icons/fa6";
import Button from "./Button";

const List = (props) => {
  const { todos, markAsComplete, deleteTodo } = props;
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>{todo.title}</p>

            <p>
              {todo.status == "pending" ? (
                <Button
                  onClick={() => {
                    markAsComplete(index);
                  }}
                >
                  Pending
                </Button>
              ) : (
                <span style={{ color: "green" }}>Completed</span>
              )}
              <Button
                bgcolor="red"
                style={{ marginLeft: 12, borderRadius: 50 }}
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                <FaRegTrashCan />
              </Button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
