const List = (props) => {
  const { todos } = props;
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{todo.title}</p>
            <p>{todo.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
