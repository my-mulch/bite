export default class ByteReader {

    constructor(props) {
        this.file = props.file
        this.head = 0
    }

    static leadingZeros(byte) {
        if (byte > 128) return 0
        if (byte > 64) return 1
        if (byte > 32) return 2
        if (byte > 16) return 3
        if (byte > 8) return 4
        if (byte > 4) return 5
        if (byte > 2) return 6
        if (byte > 1) return 7
    }

    read() { return this.file[this.head++] } // twice as slow as direct access
    isEmpty() { return this.head >= this.file.length }
    peek() { return this.file[this.head] }

}

