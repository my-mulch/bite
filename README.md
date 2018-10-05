# bite

```sh
npm i biteme
```

```js

import ByteReader from 'biteme'

const reader = new ByteReader({
  bytes : new Uint8Array(),
  head : /* where to begin? */
})

reader.read()
reader.isEmpty()
reader.peek()

reader.advance()
reader.rewind()
reader.seek()


```
