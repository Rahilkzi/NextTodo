import TodoStore from "../stores/TodoStore";
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
                  size="large"
                  className="btn btn-lg btn-info"
                  onClick={() => TodoStore.completeTodo(id)}
                >
                  <RedoOutlined />
                </Button>
                : <Button
                  size="large"
                  className="btn btn-lg btn-info"
                  onClick={() => TodoStore.completeTodo(id)}
                >
                  <CheckOutlined />
                </Button>}

              <Button
                size="large"
                className="btn btn-lg btn-danger"
                onClick={() => TodoStore.deleteTodo(id)}
              >
                <DeleteTwoTone style={{}} twoToneColor='#cf1322' />
              </Button>
            </div>

          </>
      }
    )
  })

  return (

    <Table pagination={{ pageSize:200, position: [] }} columns={columns}
      dataSource={data} />

  )
}
export default observer(TodoList);

