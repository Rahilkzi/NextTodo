import TodoStore from "../store/TodoStore";
import { observer } from "mobx-react-lite";
import { Space, Button, Typography, Table } from "antd";

const { Title } = Typography;

const columns = [
  {
    title: 'Completed',
    dataIndex: 'completed',
    key: 'completed',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  }
]



const TodoList = () => {
  const data = TodoStore.todos.map(({ id, title, completed }) => {
    return (
      {
        key: (id),
        completed: (completed ? <Title type="secondary" delete level={5}> {title}</Title> : <Title level={5}> {title}  </Title>),
        action:
          <>
            <Button
              className="btn btn-sm btn-info"
              onClick={() => TodoStore.completeTodo(id)}
            >
              Toggle
            </Button>

            <Button
              className="btn btn-sm btn-danger"
              onClick={() => TodoStore.deleteTodo(id)}
            >
              Remove
            </Button>
          </>
      }
    )
  })

  return (

    <Table columns={columns}
      dataSource={data} />

  )
}
export default observer(TodoList);

