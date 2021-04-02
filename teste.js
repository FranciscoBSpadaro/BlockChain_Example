const Block = require('./block.js');

const block = new Block('1234', '1234567ASDFGHJ', '12345678ASDFGHJKL', '100');
console.log(block.toString());
console.log(Block.genesis().toString());
const primeiroBloco = Block.mineBlock(Block.genesis(), '$500');
console.log(primeiroBloco.toString());