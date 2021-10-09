import express from 'express'
import { tokenTest } from '../middleware/auth'


const router = express.Router()

router.get('/hello', tokenTest, (req,res)=> {
  res.json({code : 200, message : '나는 접속된 유저입니다.', success : true})
})


export default router;