class IRepository{
    obtenerPorId(id){
        throw new ERROR ("Metodo 'obtenerPorId()'no implementado");
    }
    obtenerTodos(){
        throw new ERROR("Metodo 'obtenerTodo()'no implementado");
    }
    buscarPorAtributo(atributo,valor){
        throw new ERROR("Metodo 'bucarPorAtributo()'no implementado");
    }
    obtenerMayoresDe30(){
        throw new ERROR("Metodo'obtenerMatoresDe30()'no implementado");
    }
}
export default IRepository;