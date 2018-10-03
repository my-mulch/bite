import ByteUtils from './utils'

export default class ByteReader {

    constructor(props) {
        this.bytes = props.bytes
        this.head = 0
    }

    read() { return this.bytes[this.head++] } // twice as slow as direct access
    isEmpty() { return this.head >= this.bytes.length }
    peek() { return this.bytes[this.head] }
}

ByteReader.utils = ByteUtils
