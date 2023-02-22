import fastify from "fastify";
import cors from '@fastify/cors';
import { AppRoute } from "./routes";

const app = fastify();

app.register(cors);
app.register(AppRoute);

app.listen({
    port:3333,
}).then(() =>{
    console.log("Server is running")
}).catch(() =>{
    console.log("Error in conection")
})