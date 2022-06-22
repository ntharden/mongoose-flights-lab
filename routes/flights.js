import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

router.get('/index', flightsCtrl.index)

// GET users listing
router.get('/new', flightsCtrl.new)

// POST localhost:3000/movies
router.post('/', flightsCtrl.create)

router.get('/:id', flightsCtrl.show)

router.delete('/:id', flightsCtrl.delete)

router.get("/:id/edit", flightsCtrl.edit)

router.put("/:id", flightsCtrl.update)

export {
  router
}
