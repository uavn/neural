import Layer from './Layer.js';

export default class {
    #layers = [];

    constructor (learningRate, sizes) {
        //console.log('NN');
    }

    init(sizes) {
        this.#layers = [];

        //console.log('sizes', sizes);

        for (let i = 0; i < sizes.length; i++) {
            var size = sizes[i];
            var nextSize = 'undefined' !== typeof sizes[i + 1] ? sizes[i + 1] : 0;
            
            this.#layers.push(new Layer(size, nextSize));            
        }
    }

    train (data) {
        if (!data.length > 0) {
            return;
        }

        const inputSize = data[0].input.length;
        const outputSize = data[0].output.length;
        // @TODO can be smarter
        const hiddenSize = inputSize + outputSize;

        this.init([inputSize, hiddenSize, outputSize]);

        const epochs = 100; //@TODO

        // for (let i = 0; i < epochs; i++) {
            for (let j = 0; j < data.length; j++) {
                const output = this.feedForward(data[j].input);
                // const expectedOutput = data[j].output;
                // const delta = expectedOutput - output;



            }
        // }

        const errors = [];
    }

    run(values) {
        return this.feedForward(values);
    }

    feedForward(values) {
        console.log('INPUT', values);

        for (let i = 1 /* ignore input layer */; i < this.#layers.length; i++) {
            const prevLayer = this.#layers[i - 1];
            const currentLayer = this.#layers[i];
            const newValues = [];
            const currentNeurons = currentLayer.getNeurons();

            for (let j = 0; j < currentNeurons.length; j++) {
                let value = 0;

                // Loop through input synapses
                for (let n = 0; n < prevLayer.getNeurons().length; n++) {
                    // Bias has no input synapses
                    if (!currentNeurons[j].isBias()) {
                        const inputSynaps = prevLayer.getNeurons()[n].getSynaps(j);

                        value += inputSynaps.getWeight() * ('undefined' !== typeof values[n] ? values[n] : 1 /* input bias */);
                    }
                }

                value = currentNeurons[j].activation(value);
                newValues.push(value);
            }

            values = newValues;
        }

        console.log('RESULT', values);

        return values;
    }

    backPropagation() {
//@TODO train methid
    }
}
