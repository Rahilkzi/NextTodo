import TodoStore from "../store/TodoStore";
import { observer } from "mobx-react-lite";
import { Button } from "antd";

const TodoList = observer(() => {
  // const todoStore = useContext(TodoStore)
  // const { todos } = todoStore

  return (
    <>

      <div className="row">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Completed</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {TodoStore.todos.map(({ id, title, completed }) => (
              <tr key={id}>
                <td>{completed ? "✅" : ""}</td>
                <td>{title}</td>
                <td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
})

export default (TodoList);
