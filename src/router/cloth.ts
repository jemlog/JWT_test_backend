import express from 'express'
import * as ClothController from '../controller/cloth'
const router = express.Router()


// create cloth 
router.post('/', ClothController.createCloth)

// get cloth 
router.get('/', ClothController.getCloth)



export default router;
