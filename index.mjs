
export default class ByteReader {
    constructor(props) {
        this.bytes = props.bytes
        this.head = props.head || 0
        this.format = props.format
        this.base = props.base
    }

    isEmpty() { return this.head >= this.bytes.length }
    peek() { return this.bytes[this.head] }
    read(bytes = 1) { this.bytes[head++] }
}

import fs from 'fs'

const file = fs.readFileSync('/Users/tru/Desktop/.../movies/ed/calculus-strang/The\ Exponential\ Function-oo1ZZlvT2LQ.webm')

console.time('1')

for(let i=0; i< file.length; i++)
    file[0] + 1

console.timeEnd('1')