class RepositoryProduto{
    #listProtucts
    #subscribes
    constructor(){
        this.#listProtucts = [];
        this.#subscribes = [];
    }

    register(func){
        this.#subscribes = [...this.#subscribes,func]
    }

    unsubscribe(func){
        this.#subscribes.splice(this.#subscribes.findIndex(func),1);
    }

    notify(){
        this.#subscribes.forEach(subs => {subs(this.#listProtucts)});
    }

    create(product){
        this.#listProtucts = [...this.#listProtucts,product];
        this.notify();
    }

    read(){
        return this.#listProtucts;
    }

}
export default RepositoryProduto;