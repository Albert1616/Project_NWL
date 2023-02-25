import LogoHabit from '../assets/Group 2.svg'
import './componets_css/Header.css'
import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';
import { FormNewHabit } from './FormNewHabit';


export function Header() {
    return (
        <div className='header'>
            <img src={LogoHabit} alt="Logo" />
            <Dialog.Root>
                <Dialog.Trigger className='flex justify-between items-center border border-violet-500 rounded-lg bg-transparent gap-3 px-3 py-4' >
                    <Plus color='rgb(128, 19, 230)' />
                    Criar novo hábito
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
                    <Dialog.Content
                        className='absolute bg-zinc-900 border rounded-xl w-full max-w-md top-1/2 
                    left-1/2 p-10 -translate-x-1/2 -translate-y-1/2'>
                        <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
                            <X size={20} aria-label='Fechar modal' />
                        </Dialog.Close>

                        <Dialog.Title className='text-3xl leading-tight font-extrabold'>
                            Criar novo hábito
                        </Dialog.Title>

                        <FormNewHabit />
                        
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}