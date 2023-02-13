import fastify from "fastify";
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors';

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);


app.get('/home',async ()=>{
    const habit = await prisma.habit.findMany();

    return habit;
})

app.listen({
    port:3333,
}).then(() =>{
    console.log("Server is running")
}).catch(() =>{
    console.log( "Erro no servidor")
})