import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

const superHeroRepo = new SuperHeroRepository();

export async function obtenerTodosLosSuperHeroesService() {
    return await superHeroRepo.obtenerTodos();
}

