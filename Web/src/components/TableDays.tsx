import './componets_css/TableDays.css';
import { HabitDay } from './HabitDay';
import { Habit } from './Habti';
import { RangeDays } from './RangeDays';

const days = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S',
]

const RangeGenerateDays = RangeDays();
const TotalDays = 18*7;
const RestDays = TotalDays - RangeGenerateDays.length;

export function TableDays() {
    return (
        <div className="table">
            <div className="days">
                {days.map((day,i) => {
                    return (
                    <div className="day" key={`${days}-${i}`}>{day}</div>
                    )
                })}
            </div>

            <div className='table_habit'>
                {RangeGenerateDays.map(day =>{
                    return (
                    <HabitDay 
                    amount={5} 
                    amountCompleted={Math.round(Math.random() * 5)}
                    />)
                })}

                {RestDays > 0 && Array.from({length:RestDays}).map(day =>{
                    return <div className='rest_habit'></div>
                })}
            </div>
        </div>
    )
}