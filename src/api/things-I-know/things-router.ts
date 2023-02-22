import express from 'express';
import {
  createThingController,
  deleteThingsByIdController,
  getThingsByIdController,
  getThingsController,
  updateThingsByIdController,
} from './things-controllers.js';

const router = express.Router();

router.route('/').get(getThingsController).post(createThingController);

router
  .route('/:id')
  .get(getThingsByIdController)
  .patch(updateThingsByIdController)
  .delete(deleteThingsByIdController);

export default router;
