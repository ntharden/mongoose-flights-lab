import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render("flights/index", {
      flights,
      title: "All Flights",
    })
  })
}

export {
  newFlight as new,
  index
}