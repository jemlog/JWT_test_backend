import express, { ErrorRequestHandler } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import cors from 'cors'
import AuthRouter from './router/auth'
import IndexRouter from './router/index'
import { sequelize } from './models';
import helmet from 'helmet'
import hpp from 'hpp'
const app = express()
app.set('port',process.env.PORT || 3005)
if(process.env.NODE_ENV === 'production')
{
  app.use(morgan('combined'))
  app.use(helmet({contentSecurityPolicy : false}))
  app.use(hpp())
}
else
{
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors({origin : true}))


// routing
app.use('/auth', AuthRouter)
app.use('/', IndexRouter)


// db connect
sequelize.sync({force : true}).then(()=>{
  console.log('postgres connected!')
}).catch(error=> {
  console.error(error)
})


app.use((req,res,next)=>{
  next(new Error('invalid uri'))
})


const errorHandler: ErrorRequestHandler = (err,req,res,next) => {};

app.use(errorHandler)

app.listen(app.get('port'), ()=> {
  console.log('server start...')
})