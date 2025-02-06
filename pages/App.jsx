import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import {  Card, Col, Row} from 'antd';


function App() {
  return (
    <>
    <Row style={{ paddingTop: 120 }}>
      <Col span={12} offset={6}>
        <Card title="TODO LIST" style={{ width: 700 }}>
          <div className="App">
            <TodoAdd />

            <TodoList />
          </div>
        </Card>
      </Col>
    </Row>

    </>
  )
}

export default App;
