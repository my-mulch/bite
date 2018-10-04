import ByteUtils from './utils/byte'

export default class ByteReader {

    constructor(props) {
        this.bytes = props.bytes
        this.length = this.bytes.length
        this.head = 0
    }

    read() { return this.bytes[this.head++] } // twice as slow as direct access
    isEmpty() { return this.head >= this.bytes.length }
    peek() { return this.bytes[this.head] }

    extract(start, end) { return this.bytes.slice(start, end) }
    advance(marker) { return this.head += marker }
    rewind(marker) { return this.head -= marker }
}

ByteReader.utils = ByteUtils
