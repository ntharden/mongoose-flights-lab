import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const flightSchema = new Schema({
  airline: String, // validations: enum to include 'American,' 'Southwest,' & 'United'
  airport: String, // validations: enum to include 'AUS,' 'DFW,' 'DEN,' 'LAX,' & 'SAN'
  flightNo: Number, // validations: RequiredBetween 10 and 9999
  departs: Date,
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}