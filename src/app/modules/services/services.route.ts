import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './services.validation';
import { ServiceControllers } from './services.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ServiceValidation.createServiceValidationSchema),
  ServiceControllers.createService,
);

router.get('/:id', ServiceControllers.getSingleService);

router.patch(
  '/:id',
  validateRequest(ServiceValidation.updateServiceValidationSchema),
  ServiceControllers.updateService,
);

router.get('/', ServiceControllers.getAllServices);

router.delete('/:id', ServiceControllers.deleteService);

export const ServiceRoutes = router;
