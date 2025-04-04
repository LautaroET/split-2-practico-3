import IRepository from './IRepository.mjs';
import SuperHero from '../models/SuperHero.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerTodos() {
        try {
            return await SuperHero.find();
        } catch (error) {
            throw new Error('Error al obtener los superhéroes: ' + error.message);
        }
    }
}

export default SuperHeroRepository;
