import NeuralNetwork from './src/NeuralNetwork.js';

const net = new NeuralNetwork();
net.train([
    {input: [0, 0], output: [0, 0]},
    {input: [0, 1], output: [1, 0]},
    {input: [1, 0], output: [1, 0]},
    {input: [1, 1], output: [0, 0]},
]);

var output = net.run([1, 0]);  // [0.987, 0]
console.log('====================');
console.log('OUTPUT', output);
