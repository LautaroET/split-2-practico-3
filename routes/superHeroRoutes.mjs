import express from 'express';
import { obtenerTodosLosSuperHeroesController } from '../controllers/superheroesControllers.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);

export default router;

