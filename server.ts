
//step 1
// import packages and create variable that we use later
//import express
import express, { Request, Response, json } from 'express'

import carRouter from './routes/carRoutes'

// import mongoose and connect the function
// install mongoose in the terminal

import { connect } from 'mongoose';

// Create a connection to mongodb

connect('mongodb://localhost:27017//saraleepark')

// use variable app to work with express
const app = express()
// decide a port for this app
const port = 8000

//step 2
//use middleware
app.use(json());

//step 3
app.get('/', (req: Request, res: Response) => {

    res.send("yes this is working")
})

//step 4
// This server has to start by listening to the port

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
