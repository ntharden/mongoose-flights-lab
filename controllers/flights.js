import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(movie => {
    res.redirect(`/flights`)
  })
  .catch(err => {
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    console.log(flights)
    res.render("flights/index", {
      flights,
      title: "All Flights",
    })
  })
}

export {
  newFlight as new,
  create,
  index
}