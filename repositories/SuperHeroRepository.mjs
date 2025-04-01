import SuperHero from '../models/SuperHero.mjs'; 
import IRepository from './IRepository.mjs'; 
class SuperHeroRepository extends IRepository { 
    async obtenerPorId(id) { 
        return awaitSuperHero.findById(id); 
    } 
    async obtenerTodos () { 
        return await SuperHero.find({}); 
    } 
    async buscarPorAtributo(atributo, valor) { 
        const consulta = { [atributo]: valor };
        return await SuperHero.find(consulta);
    } 
    async obtenerMayoresDe30() { 
        return await SuperHero.find({ edad: { $gt: 30 } });
    } 
} 
export default new SuperHeroRepository();