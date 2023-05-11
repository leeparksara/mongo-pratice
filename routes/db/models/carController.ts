// Import our carmodel that we exported from carSchema.ts file
// to work with our collection, insert in data and so on
import CarModel, { carType } from "./carSchema";

// Make a different functions that can handle all the methods we using
// Get, Post, Put , Delet
export const createCar = async (Car: carType) => {
    const newCar = new CarModel(Car)

    await newCar.save()
    return newCar
 }

// Create a function to bring our creatd cars

export const getCars = async () => {
    const Cars = await CarModel.find()

    return Cars;
}

 // const newCar = creates a new instant of CarModel with the given Car-Object
 // await newCar.save == saves the new car in the database with help of save method
 // return new car returns a new car
 // This function can be used to add new car in the datavase by sending in a car object
 // with the new characters
