// This file handles all our different routes with our cars
//import express,  because we are going to work with routes that includes in their library

import express, { Request, Response } from 'express'


// Router will be used with express

const router = express.Router()

// Create a handle for routes

router.get('/', (req: Request, res: Response) => {
    res.send('Get cars')
})


export default router;
