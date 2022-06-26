import React, { useContext, useState } from "react"
import TodoStore from "../store/TodoStore"
import { observer } from "mobx-react-lite"
import { v4 as uuidv4 } from "uuid";
import { Button, Input, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons';



const AddTodo = () => {
  const [title, setTitle] = useState("")
  const todoStore = useContext(TodoStore)
  // const { addTodo } = todoStore

  return (
    <>
      {/* <div className="alert alert-primary">
        <div className="d-inline col-4">
          Total items: &nbsp;
          <span className="badge badge-info">{.info}</span>
        </div>
        <div className="d-inline col-4">
          Finished items: &nbsp;
          <span className="badge badge-info">{TodoStore.completed}</span>
        </div>
        <div className="d-inline col-4">
          Unfinished items: &nbsp;
          <span className="badge badge-info">{TodoStore.notCompleted}</span>
        </div>
      </div> */}
      <Space>
        <div className="form-group">
          {/* <input className="form-control" type="text" value={text} placeholder="Todo title..." 
        onChange={t => setText(t)} defaultValue={text} 
      /> */}
          <Input
            showCount maxLength={20}
            className="form-control"
            type="text"
            value={title}
            placeholder="Enter Task..."
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">

          <Button type="primary"
            className="btn btn-primary"
            onClick={_ => {
              TodoStore.addTodo({
                title: title,
                completed: false,
              })
              setTitle("")
            }}
          >
            <PlusOutlined />
            Add Todo
          </Button>
        </div>
      </Space>
    </>
  )
}

export default observer(AddTodo)