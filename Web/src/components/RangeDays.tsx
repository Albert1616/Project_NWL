import dayjs from "dayjs"

export function RangeDays(){
    const fistDay = dayjs().startOf('year');
    const today = new Date();

    const days = []
    let compareDate = fistDay;

    while(compareDate.isBefore(today)){
        days.push(compareDate.toDate())
        compareDate = compareDate.add(1,'day');
    }
    
    return (
        days
    )
} 