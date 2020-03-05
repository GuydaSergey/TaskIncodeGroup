
export default class Store {
    static _instance = null;
    state = {};

    static getInstance() {
        this._instance = this._instance !== null ? this._instance : new Store();
        return  this._instance;
    }

    reRender() {}

    subscribe(observer) {
        this.reRender = observer;
    }
}
