import express from 'express'
import jwt, { TokenExpiredError } from 'jsonwebtoken'

export function tokenTest(req:express.Request,res:express.Response,next:express.NextFunction){
  const authHeader = req.headers.authorization
  if(authHeader && authHeader.startsWith('Bearer'))
  {
    const token = authHeader.split(' ')[1]
    try{
      const decoded = jwt.verify(token,'jemin')
    return next()
    }
    catch(error: any)
    {  
      if(error.name === "TokenExpiredError")
      {
        return res.status(401).json({code : 400, message : '만료된 토큰입니다 재발급이 필요합니다.', success : false})
      }
      else
      {
        return res.status(401).json({code : 304, message : '토큰 위조의 위험이 있습니다.',success : false})
      }}}
  else
  {
    return res.status(401).json({code : 403, message: '로그인 되지 않은 유저입니다.',success : false})
 }}
