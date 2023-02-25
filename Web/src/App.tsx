import { Habit } from './components/Habti'
import '../src/styles/global.css';
import { Header } from './components/Header'
import './App.css'
import { TableDays } from './components/TableDays'

export function App() {
  return (
    <div className="App">
      <div className='content'>
        <Header />
        <TableDays />
      </div>
    </div>
  )
}
