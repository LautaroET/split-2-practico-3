import { obtenerTodosLosSuperHeroesService } from '../services/superheroesService.mjs';
import { renderizarListaSuperheroes } from '../views/responseView.mjs';

export async function obtenerTodosLosSuperHeroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperHeroesService();
        res.json(renderizarListaSuperheroes(superheroes));
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}
