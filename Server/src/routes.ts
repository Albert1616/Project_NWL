import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from 'zod';
import dayjs from 'dayjs'

export async function AppRoute(app: FastifyInstance) {
    app.post('/habits', async (request) => {
        const CreateHabits = z.object({
            name: z.string(),
            HabitsWeekDays: z.array(z.number().min(0).max(6))
        })

        const { name, HabitsWeekDays } = CreateHabits.parse(request.body)
        const today = dayjs().startOf('day').toDate();

        await prisma.habit.create({
            data: {
                name,
                data_create: today,
                habitweekdays: {
                    create: HabitsWeekDays.map(habitweek => {
                        return {
                            week_day: habitweek,
                        }
                    })
                }
            }
        })
    })

    app.get('/day', async (request) => {
        const GetDay = z.object({
            date: z.coerce.date()
        })

        const { date } = GetDay.parse(request.query);
        const WeekDay = dayjs(date).get('day');

        const PossibleHabits = await prisma.habit.findMany({
            where: {
                data_create: {
                    lte: date,
                },
                habitweekdays: {
                    some: {
                        week_day: WeekDay
                    }
                }
            }
        })

        const CompletedHabits = await prisma.days.findFirst({
            where: {
                date: date,
            },
            include: {
                dayHabits: true,
            }
        })

        const showHabit = CompletedHabits?.dayHabits.map(day => {
            return day.id_habit;
        })

        if (showHabit?.length !== 0) {
            return {
                PossibleHabits,
                showHabit,
            }
        } else {
            return { PossibleHabits }
        }


    })

    app.patch('/habits/:id/toggle', async (request) => {
        const CheckHabitComplete = z.object({
            id: z.string().uuid()
        })

        const { id } = CheckHabitComplete.parse(request.params);
        const today = dayjs().startOf('day').toDate();

        let Days = await prisma.days.findUnique({
            where: {
                date: today
            }
        })

        if (!Days) {
            Days = await prisma.days.create({
                data: {
                    date: today
                }
            })
        }

        const HabitDay = await prisma.dayHabit.findUnique({
            where: {
                id_day_id_habit: {
                    id_day: Days.id,
                    id_habit: id
                }
            }
        })

        if (HabitDay) {
            await prisma.dayHabit.delete({
                where: {
                    id_day_id_habit: {
                        id_day: Days.id,
                        id_habit: id
                    }
                }
            })
        } else {
            await prisma.dayHabit.create({
                data: {
                    id_day: Days.id,
                    id_habit: id
                }
            })
        }
    })

    app.get('/DetailsDay', async (request) => {
        const Detail = await prisma.$queryRaw`
        SELECT 
        D.id, 
        D.date,
        (
            SELECT  cast(count(*) as float)
            FROM Day_habit HD WHERE HD.id_day = D.id
        )as CompletedHabits,
        (
            SELECT cast(count(*) as float)
            FROM habit_week_days HW
            WHERE HW.week_day = cast (strftime('%w',D.date/1000.0,'unixepoch') as int)
        )as PossibleHabits FROM days D;
        `
        return Detail
    })
}