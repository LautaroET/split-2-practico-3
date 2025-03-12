import mongoose from "mongoose";
import { type } from "os";
const superheroeSchema = new mongoose.Schema({
    nombreSuperHeroe : {type:String,require:true},
    nombreReal:{type:String,require:true},
    edad : {type:Number,min:0},
    planetaOrigen:{type:String,default:'Desconocido'},
    debilidad:String,
    poderes:[String],
    aliados:[String],
    enemigos:[String],
    creador:String,
    createdAt:{type:Date,default:Date.now}
});
const superHero = mongoose.model('SuperHero',superheroSchema,'Grupo-13');
export default superHero