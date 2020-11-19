import * as CryptoJS from "crypto-js" //타입스크립트 import 방식

class Block {
    public index:number
    public hash:string
    public previousHash: string
    public data: string
    public timestamp: number

    // static이기 때문에 class가 생성되지 않아도 사용 가능하다
    static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string): string => CryptoJS.SHA256(index+previousHash+timestamp+data).toString();

    constructor(index:number, hash:string, previousHash:string, data:string, timestamp:number){
        this.index=index
        this.hash=hash
        this.previousHash=previousHash
        this.data=data
        this.timestamp = timestamp
    }
}

const genesisBlock:Block = new Block(0, '20202020', '', 'Hello', 1234)

let blockchain: [Block] = [genesisBlock];


const getBlockChain = () :Block[] => blockchain

const getLatestBlock = ():Block => blockchain[blockchain.length-1]

const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000)

const createNewBlock = (data:string) : Block => {
    const previousBlock: Block = getLatestBlock()
    const newIndex:number = previousBlock.index+1
    const newTimestamp:number = getNewTimeStamp()
    const newHash:string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data)
    const newBlock : Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp)
    return newBlock
}

console.log(createNewBlock("Hello"), createNewBlock("Bye Bye"))

export {};