import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';

interface Habitdayprops {
    amount: number,
    amountCompleted:number
}


export function HabitDay(props: Habitdayprops){
    const amountPercent = Math.round((props.amountCompleted/props.amount)*100)


    return (
        <Popover.Root>
            <Popover.Trigger 
            className={clsx('w-10 h-10 bg-zinc-600 border-zinc-600 rounded-[4px]',{
                'bg-violet-800 border-violet-800': amountPercent >= 80,
                'bg-violet-700 border-violet-700': amountPercent >= 60 && amountPercent < 80,
                'bg-violet-600 border-violet-600': amountPercent >= 40 && amountPercent < 60,
                'bg-violet-500 border-violet-500': amountPercent >= 20 && amountPercent < 40,
                'bg-violet-400 border-violet-400': amountPercent >= 0 && amountPercent < 20,
                'bg-zinc-600 border-zinc-600': amountPercent === 0,
            })}
            ></Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className='p-6 flex flex-col 
                bg-zinc-900 min-w-[320px] rounded-2xl'>
                <span className='font-semibold text-zinc-400'>Sábado</span>
                <span className='mt-2 font-extrabold leading-tight text-3xl'>15/02</span>

                <ProgressBar progress={amountPercent}/>
                <Popover.Arrow height={10} width={10} className='fill-zinc-900'/>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
        
    )
}