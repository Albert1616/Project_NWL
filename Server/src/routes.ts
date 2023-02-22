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

        const showHabit = CompletedHabits?.dayHabits.map(day =>{
            return day.id_habit;
        })

        return {
            PossibleHabits,
            showHabit,
        }
    })
}