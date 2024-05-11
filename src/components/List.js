const List = (props) => {
  const { todos, markAsComplete } = props;
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
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
