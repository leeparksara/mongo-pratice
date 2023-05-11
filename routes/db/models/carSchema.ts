//import Schema and models function from mongoose

import { Schema, model } from 'mongoose'


// Because of Typescript we need to work wth interface, it decides the data type
// We export it
//


export interface carType{
    model: string,
    brand:string
}

// Create Schema (same as table in SQL)

const schema = new Schema<carType>({
    model: { type: String, required: true },
    brand: {type: String, required:true}
})



// explain that this is a mongoose model

const carModel = model <carType> ('Car', schema)


export default carModel
