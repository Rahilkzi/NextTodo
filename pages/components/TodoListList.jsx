import { List, Affix, Typography, Button, Space } from 'antd';
import TodoStore from "../store/TodoStore";
import { observer } from "mobx-react-lite";


const { Title } = Typography;



const TodoList = () => {
  const data = TodoStore.todos.map(({ id, title, completed }) => {
    return (
      <>

        <Space size={70} direction='horizonta'>
          {completed ?

            <Title type="secondary" delete level={5}> {title}</Title>
            // <Typography.Text > Dome</Typography.Text> 
            :
            <Title level={5}> {title}  </Title>}



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

        </Space>
      </>



    )
  })
  console.log(data)
  return (
    <>
      <List
        locale={{
          emptyText: "There's nothing to do :(",
        }}
        size="large"
        header={<div>ToDo</div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item> {item} </List.Item>

        }
      />
    </>
  );
}

export default observer(TodoList);