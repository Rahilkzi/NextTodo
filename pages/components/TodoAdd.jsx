import React, { useContext, useState } from "react"
import TodoStore from "../stores/TodoStore"
import { observer } from "mobx-react-lite"
import { Button, Input, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons';



const AddTodo = () => {
  const [title, setTitle] = useState("")
  const todoStore = useContext(TodoStore)
  const hasDate = title ? true : false;
  // const { addTodo } = todoStore

  return (
    <>

      <Space>
        <div className="form-group">
   
    
  
          <Input
            onPressEnter={_ => {
              TodoStore.addTodo({
                title: title,
                completed: false,
              })
              setTitle("")
            }}
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
           disabled={!hasDate}
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