const Block = require('./Block');
class BlockChain{
    constructor(){
        this.chain =[this._createGenesisBlock()];
    }
    _createGenesisBlock(){
        return new Block(0,'I am Genesis Block',0);
    }
    getLatestblock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(block){
        block.previousHash = this.getLatestblock().hash;
        block.hash = block._calculateHash();
        console.log("Added Block Hash");
        this.chain.push(block);
    }
    getBlockCOunt(){
        return this.chain.length;
    }
    validateChain(){
        for(let i=1;i<this.chain.length;i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if(currentBlock.previousHash !== previousBlock.hash) return false;
            if(currentBlock.hash !== currentBlock._calculateHash()) return false;
          }
          return true;
    }


}
const StarkCoin = new BlockChain();
StarkCoin.addBlock(new Block(1,{amount:11}));
StarkCoin.addBlock(new Block(2,{amount:14}));
StarkCoin.addBlock(new Block(3,{amount:5}));
console.log("Is Chain Valid :",StarkCoin.validateChain());
//console.log(JSON.stringify(StarkCoin,null,4));
StarkCoin.chain[2].data ={ amount:999};
StarkCoin.chain[2].hash = StarkCoin.chain[2]._calculateHash();
console.log("Is Chain Valid :",StarkCoin.validateChain());
console.log(JSON.stringify(StarkCoin,null,4));

