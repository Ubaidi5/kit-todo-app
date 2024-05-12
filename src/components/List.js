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
                <button
                  onClick={() => {
                    markAsComplete(index);
                  }}
                >
                  Pending
                </button>
              ) : (
                <span style={{ color: "green" }}>Completed</span>
              )}
              <button
                style={{ marginLeft: 12 }}
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                delete
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
