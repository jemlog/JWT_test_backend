import express from 'express'
import jwt from 'jsonwebtoken'
const router = express.Router()

type User = {
  email: string,
  password: string
}

type loginError = {
  code: number,
  result: string 
}

let users: User[] = [
  {email: 'jemin3161@naver.com', password: '12345'}
]



//  
router.post('/login', (req,res,next)=> {
     
  const {email, password} = req.body;
  console.log(password)
  const exUser = users.find(user=> user.email === email)
  if(exUser)
  {
    if(exUser.password !== password)
    {
      return res.send(`invalid password ${password}`)
    }
    // 로그인 성공 후 token 생성 
    const token = jwt.sign({email : 'jemin'},'jemin',{issuer : 'jemin', expiresIn : '15s'})
     
    return res.status(200).json({message : 'login Success', token})
  }
  else
  {
    return res.send(`invalid email ${email}`)
  }
})

router.get('/me', (req:express.Request,res)=> {

  const authHeader = req.headers.authorization
  if(authHeader && authHeader.startsWith('Bearer'))
  {
    const token = authHeader.split(' ')[1]
    try{
      const decoded = jwt.verify(token,'jemin')
    return res.json({code : 200, message : decoded})
    }
    catch(error: any)
    {  
      if(error.name === "TokenExpiredError")
      {
        return res.json({code : 400, message : '만료된 토큰입니다 재발급이 필요합니다.'})
      }
      else
      {
        return res.json({code : 304, message : '토큰 위조의 위험이 있습니다.'})
      }}}
  else{
    return res.json({code : 403, message: '로그인 되지 않은 유저입니다.'})
  }})


export default router;