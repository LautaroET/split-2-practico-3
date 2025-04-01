import superHero from '../models/SuperHero.mjs';
import {obtenerSuperheroePorId,obtenerTodosLosSuperheroes,buscarSuperheroesPorAtributo,obtenerSuperheroesMayoresDe30} from '../services/superheroesService.mjs';
import {renderizarSuperheroe,renderizarListaSuperheroes} from '../views/responseView.mjs'
export async function obtenerSuperHeroePorIdController(req,res) {
    try {
        const {id} = req.params;
        const superheroe = await obtenerSuperHeroePorId(id);
        if(!superheroe){
            return res.status(404).send({mensaje:'Superheroe no Encontrado'});
        }
        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({mensaje:'Error al obtener el superheroe',error:error.mensaje})
    }
}
export async function obtenerTodosLosSuperHeroesController(req,res) {
    try {
        const superheroes = await obtenerTodosLosSuperHeroes(superheroes);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({mensaje:'Error a obtener SuperHeroe',error:error.mensaje});
    }
}
export async function buscarSuperHeroesPorAtributosController(req,res) {
    try {
        const {atributo,valor} = req.params;
        const superheroe = await buscarSuperHeroesPorAtributos(atributo,valor);
        if(superheroes.length===0){
            return res.status(404).send(
                {
                    mensaje:'No se encontraron super heroe con ese atributo'
                }
            )
        }
        const superheroeFormateado = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({mensaje:'Error a buscar los super heroes',error:error.mensaje});
    }
}
export async function obtenerSuperHeroesMayoresDe30Controller(req,res) {
    try {
        const superheroes = await obtenerSuperHeroesMayoresDe30();
        if(superheroes.length===0){
            return res.status(404).send({
                mensaje:'No se encontraron superheroes mayor de 30 años'
            })
        }
        const superheroeFormateado = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({mensaje:'Error a obtener superheroes mayores a 30',error:error.mensaje});
    }
}