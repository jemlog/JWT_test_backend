import express from 'express'



const router = express.Router()

router.get('/hello', (req,res)=> {
  res.json({code : 200, message : '나는 접속된 유저입니다.', success : true})
})


export default router;