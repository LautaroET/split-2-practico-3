class IRepository {
    obtenerPorId(id) { 
        throw new Error("Método 'obtener PorId()' no implementado"); 
    }  
    obtenerTodos() { 
        throw new Error("Método 'obtener Todos ()' no implementado"); 
    } 
    buscarPorAtributo(atributo, valor) { 
        throw new Error("Método 'buscarPorAtributo()' no implementado"); 
    } 
    obtenerMayoresDe30() { 
        throw new Error("Método 'obtener Mayores De30()' no implementado"); 
    } 
}
export default IRepository;