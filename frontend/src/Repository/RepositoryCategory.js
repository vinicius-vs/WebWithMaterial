class RepositoryCategory {
    #categorylist;
    #subscrites;
    constructor(){
        this.#categorylist = [];
        this.#subscrites = [];
    }

    register(func){
        this.#subscrites = [...this.#subscrites,func];
    }

    unsubscrites(func){
        this.#subscrites.splice(this.#subscrites.findIndex(func),1);
    }

    notifi(){
        this.#subscrites.forEach(subs => {subs(this.#categorylist)});
    }

    create(category){
        this.#categorylist = [...this.#categorylist,category];
        this.notifi();
    }
    read(){
        return this.#categorylist;
    }
}
export default RepositoryCategory;