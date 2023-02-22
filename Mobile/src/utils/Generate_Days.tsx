import dayjs from 'dayjs';

export function Generate_Days(){
const fist_day = dayjs().startOf('year');
const Today = new Date();

const days = [];
let Aux_days = fist_day;

while(Aux_days.isBefore(Today)){
    days.push(Aux_days.toDate());
    Aux_days = Aux_days.add(1,'day');
}

return days
}