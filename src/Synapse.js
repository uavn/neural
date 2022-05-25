export default class {
    #weight;

    constructor() {
        this.#weight = Math.random() * 2 - 1;
    }

    getWeight() {
        return this.#weight;
    }
}
