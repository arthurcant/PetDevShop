import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express'
import path from 'path';
import mainRoutes from './routers/index'

dotenv.config()

const app = express()

app.set("view engine", "mustache")
app.set("views", path.join(__dirname, "views"))
app.engine("mustache", mustache())

app.use(express.static(path.join(__dirname, '..public')))

app.use(mainRoutes)

app.use((req:Request, res:Response) => {
    res.render('page/404')
});

app.listen(80)
