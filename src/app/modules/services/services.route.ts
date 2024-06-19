import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './services.validation';
import { ServiceControllers } from './services.controller';

const router = express.Router();

router.post(
  '/services',
  validateRequest(ServiceValidation.createServiceValidationSchema),
  ServiceControllers.createService,
);

router.get('/services/:id', ServiceControllers.getSingleService);

router.patch(
  '/services/:id',
  validateRequest(ServiceValidation.updateServiceValidationSchema),
  ServiceControllers.updateService,
);

router.get('/services', ServiceControllers.getAllServices);

router.delete('/services/:id', ServiceControllers.deleteService);

export const ServiceRoutes = router;
