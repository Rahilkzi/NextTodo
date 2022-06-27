import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import { Affix, Card, Layout, Col, Row, Space } from 'antd';

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
  );
  // var datetime = new Date();
  // console.log(datetime);
  // document.getElementByClass("time").textContent = datetime; //it will print on html page
}

export default App;
