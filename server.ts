

//step 1
// import packages and create variable that we use later
//import express
import express, { Request, Response, json } from 'express'

import carRouter from './routes/carRoutes'
// Import all the methods from carController file
import {getCars, createCar} from './routes/db/models/carController'



// import mongoose and connect the function
// install mongoose in the terminal

import { connect } from 'mongoose';

// Create a connection to mongodb


connect('mongodb://127.0.0.1:27017/saral')


// use variable app to work with express
const app = express()
// decide a port for this app
const port = 8000
//step 2
//use middleware
app.use(json());
// Use router in the server

app.use('/car', carRouter);

//step 3
app.get('/', (req: Request, res: Response) => {

    res.send("yes this is working")
})


//Get cars from the "/car" route

app.get('/car', async (req: Request, res: Response) => {
    const cars = await getCars()

    res.json(cars)
})
/* This route is listening to a POST request at port 8000 by "/car" endpoint and
use createCar function to create a new car product with the data that will be sent in the req.body request.
Make sure to define a function for createCar and import it in the server file*/
app.post('/car', async (req:Request, res:Response) => {
    const newCar = req.body
    const createdCar = await createCar(newCar)
    res.json(createdCar)
})
//step 4
// This server has to start by listening to the port

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
