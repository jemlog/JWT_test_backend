import express from 'express'
import Cloth from '../models/cloth'

export async function createCloth(req:express.Request,res: express.Response,next: express.NextFunction){

  const {kind, length, color} = req.body;
  try{
      const cloth = await Cloth.create({kind, length, color})
      res.status(201).json({code : 201, message : "you success!"})
  }
  catch(error)
  {
    next(error);
  }
}

export async function getCloth(req:express.Request,res: express.Response,next: express.NextFunction){

  try{
     const cloth = await Cloth.findAll({})
     res.status(200).json({code : 200, cloth})
  }
  catch(error)
  {
    next(error);
  }
}