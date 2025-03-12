import express from 'express'
import {obtenerSuperHeroePorIdController,obtenerTodosLosSuperHeroesController,buscarSuperHeroesPorAtributosController,obtenerSuperHeroesMayoresDe30Controller} from '../controllers/superheroesController.mjs'
const router = express.Router();
router.get('/heroes',obtenerTodosLosSuperHeroesController);
router.get('/heroes/:id',obtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:valor',buscarSuperHeroesPorAtributosController);
router.get('/heroes/mayores-30',obtenerSuperHeroesMayoresDe30Controller);
export default router;