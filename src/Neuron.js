import Synapse from './Synapse.js';

export default class {
    #isBias;
    #synapses = [];

    constructor(outputsNumber, isBias) {
        this.#isBias = !!isBias;

        for (let j = 0; j < outputsNumber; j++) {
            this.#synapses.push(
                new Synapse()
            );
        }
    }

    isBias() {
        return this.#isBias;
    }

    getSynaps(index) {
        return this.#synapses[index];
    }

    getSynapses() {
        return this.#synapses;
    }

    activation (x) {
        return 1 / (1 + Math.exp(-x));
    }

    #derivative (y) {
        return y * (1 - y);
    }
}
