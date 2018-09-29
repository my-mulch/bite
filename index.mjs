class ByteReader {
    constructor(props) {
        this.data = props.data
        this.head = props.head || 0
        this.format = props.format
    }

    isEmpty() { return this.head >= this.data.length }

    peek() { return this.data[this.head] }

    * read(bytes = 1) {
        while (bytes--)
            yield this.data[this.head++]
    }

}