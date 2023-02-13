interface Habitprops {
    text: String;
    num?:number
}

export function Habit(props: Habitprops) {
    return (
        <div>
            <p>{props.text}</p>
            <p>{props.num}</p>
        </div>
    )
} 