import { Habit } from './components/Habti'
import { Header } from './components/Header'
import './App.css'
import { TableDays } from './components/TableDays'

export function App() {
  return (
    <div className="App">
      {/* <Habit text='Meu pau' num={10} /> */}
      <div className='content'>
        <Header />
        <TableDays />
      </div>
    </div>
  )
}
