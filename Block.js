const SHA256 = require('crypto-js/sha256');
class Block{
    constructor(index,data,previousHash ='')
    {
        this.index = index;
        this.timestamp = new Date().getTime().toString().slice(0, -3);
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this._calculateHash();
    }
    _calculateHash(){
        return SHA256(this.index+ this.timestamp+ JSON.stringify(this.data)+this.previousHash).toString();
    }
}

module.exports=Block;