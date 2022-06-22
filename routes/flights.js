import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET users listing
router.get('/new', flightsCtrl.new)

// POST localhost:3000/movies
router.post('/', flightsCtrl.create)

router.get('/index', flightsCtrl.index)

export {
  router
}
