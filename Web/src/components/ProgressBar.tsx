interface PropsBar{
    progress: Number,
}

export function ProgressBar(props: PropsBar){
    return (
        <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
            <div
            role='progressbar'
            aria-label="Barra de progresso de hábitos"
            aria-valuenow={75}
            className='h-3 rounded-xl bg-violet-600'
            style={{width: `${props.progress}%`}}
            />
        </div>
    )
}