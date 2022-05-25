import Neuron from './Neuron.js';

export default class {
    #neurons = [];

    constructor(neuronsNumber, outputsNumber) {
        for (let i = 0; i < neuronsNumber + (outputsNumber ? 1 : 0) /* + bias if it's not output layer */; i++) {
            const neuron = new Neuron(
                outputsNumber,
                outputsNumber && (i === neuronsNumber) /* is bias? */
            );

            this.#neurons.push(neuron);
        }
    }

    getNeurons() {
        return this.#neurons;
    }
}