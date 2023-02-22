import LogoHabit from '../assets/Group 2.svg'
import './componets_css/Header.css'
import {Plus} from 'phosphor-react'
 
export function Header() {
    return (
        <div className='header'>
            <img src={LogoHabit} alt="Logo" />
            <button><Plus color='rgb(128, 19, 230)' className='icon_button'/>Criar novo hábito</button>
        </div>
    )
}