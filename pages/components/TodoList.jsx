import TodoStore from "../store/TodoStore";
import { observer } from "mobx-react-lite";
import { Button, Typography, Table } from "antd";
import { CheckCircleTwoTone, RedoOutlined, CheckOutlined, DeleteTwoTone } from '@ant-design/icons';




const { Title } = Typography;

const columns = [
  {
    className: 'title',
    title: 'TodoTask',
    dataIndex: 'task',
    key: 'task'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    className: 'Action'
  }
]



const TodoList = () => {
  const data = TodoStore.todos.map(({ id, title, completed }) => {
    return (
      {
        key: (id),
        task: (completed ?


          <Title className="checked" delete level={5}>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            {title}
          </Title>

          : <Title level={5}> {title}  </Title>),
        action:
          <>
            <div className="button-ant">

              {completed ?
                <Button
                  className="btn btn-sm btn-info"
                  onClick={() => TodoStore.completeTodo(id)}
                >
                  <RedoOutlined />
                </Button>
                : <Button
                  className="btn btn-sm btn-info"
                  onClick={() => TodoStore.completeTodo(id)}
                >
                  <CheckOutlined />
                </Button>}

              <Button
                className="btn btn-sm btn-danger"
                onClick={() => TodoStore.deleteTodo(id)}
              >
                <DeleteTwoTone twoToneColor='#cf1322' />
              </Button>
            </div>

          </>
      }
    )
  })

  return (

    <Table pagination={{ pageSize: 6 }} columns={columns}
      dataSource={data} />

  )
}
export default observer(TodoList);




// <Button
//   className="btn btn-sm btn-info"
//   onClick={() => TodoStore.completeTodo(id)}
// >
//   Toggle
// </Button>