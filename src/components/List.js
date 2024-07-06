import { FaRegTrashCan } from "react-icons/fa6";
import { Button, Row, Col } from "antd";
import moment from "moment";

const List = (props) => {
  const { todos, markAsComplete, deleteTodo, delete_loading } = props;

  let currentIndex = -1;
  console.log({ delete_loading, currentIndex });
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <Row align={"middle"} justify="space-between">
            <Col>
              <p>{todo.title}</p>
            </Col>

            <Col>
              <p style={{ flexShrink: 0 }}>
                {todo.completed == false ? (
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
                    currentIndex = index;
                    deleteTodo(index);
                  }}
                  danger
                  loading={delete_loading && currentIndex === index}
                >
                  <FaRegTrashCan />
                </Button>
              </p>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default List;
