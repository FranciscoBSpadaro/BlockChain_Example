// SHA -256  Securitu Hash Algoritm - 256 bit / 32bytes = 32 characters
const SHA256 = require('crypto-js/sha256')

class Block{

    constructor(timestamp, lastHash, hash, data){

        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block =
                Timestamp = ${this.timestamp}
                lastHash = ${this.lastHash.substring(0, 10)}
                hash = ${this.hash.substring(0,10)}
                data = ${this.data}`;
    }

    static genesis(){
        
        return new this('Genesis time', '------', 'JHASHID3233', []);
    }

    static mineBlock(lastBlock, data){

        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data);
        
    }
// gerador de hash
    static hash(timestamp, lastHash, hash, data){
        return SHA256(`${timestamp}${lastHash}${hash}${data}`).toString();
    }

}

module.exports = Block;