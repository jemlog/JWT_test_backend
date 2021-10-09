import express, { ErrorRequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import morgan from 'morgan'
import cors from 'cors'
import AuthRouter from './router/auth'
import IndexRouter from './router/index'
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors({origin : true}))
app.use('/token', AuthRouter)
app.use('/', IndexRouter)

app.use((req,res,next)=>{
  next(new Error('invalid uri'))
})

const errorHandler: ErrorRequestHandler = (err,req,res,next) => {};

app.use(errorHandler)

app.listen(3001, ()=> {
  console.log('server start...')
})