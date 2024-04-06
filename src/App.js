//import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";


function App() {
  return (
    <div className="App">
        <h1>График типа Pie</h1>
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Задача', 'Часов в день'],
          ['Работа', 11],
          ['Еда', 2],
          ['Дорога', 2],
          ['Телевизор', 2],
          ['Сон', 7],
        ]}
        options={{
          title: 'Мои ежедневные занятия',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}

export default App;
