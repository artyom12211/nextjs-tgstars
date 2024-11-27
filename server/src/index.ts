import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import TgService from "./services/tg.service";
import tgRouter from "./routers/tg.router";

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3001

app.get('', (req: Request, res: Response) => {
    res.send("Express Typescript Server")
})

app.use(cors())

app.use('/tg', tgRouter)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

const bot = TgService.getInstance()
bot.start()