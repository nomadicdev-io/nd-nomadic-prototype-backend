import express from "express";

// Controllers
import { getAllDestinations, getDestinationDetails, createDestination, updateDestination, deleteDestination } from "../controllers/destinations.controller.js";

// Routers
const router = express.Router();

router.route('/').get(getAllDestinations);
router.route('/:id').get(getDestinationDetails);
router.route('/').post(createDestination);
router.route('/').patch(updateDestination);
router.route('/').delete(deleteDestination);

export default router;