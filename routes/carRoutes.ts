// This file handles all our different routes with our cars
//import express,  because we are going to work with routes that includes in their library

import express, { Request, Response } from 'express'
import { createCar } from './db/models/carController'
// import car controllers/models with its methods



// Router will be used with express

const router = express.Router()

// Create a handle for routes

router.get('/', (req: Request, res: Response) => {
    res.send('Get cars')
})



// Create a post method to the server

router.post('/car', async (req: Request, res: Response) => {
    const createdCar = await createCar(req.body)
    res.status(201).json(createdCar)
 })
export default router;
