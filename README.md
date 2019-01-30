# sync-or-async

Write JavaScript code that can be both synchronous and asynchronous.

[Get it with `npm i sync-or-async`.](https://www.npmjs.com/package/sync-or-async)

## Example

```javascript
const {sync, async} = require('sync-or-async');

const
  getPartialSums
  = function*(arr)
    { const partialSums = [];
      let sum = 0;

      for (const n of arr)
        partialSums.push(sum += yield n); // yield n to possibly await it.

      return partialSums;};

console.log(sync(getPartialSums([1, 2, 3, 4]))); // [1, 3, 6, 10]

async(getPartialSums([1, 2, 3, 4].map(n => Promise.resolve(n))))
.then(console.log); // [1, 3, 6, 10]
```

## API

`const {sync, async} = require('sync-or-async');`

### `sync(iter, value)`

* `iter` is an Iterator
* `value` can be anything

Iterates through `iter`. The argument to each `iter.next` call is the `.value`
of the previous IteratorResult, except that `value` is passed
initially. The `.value` of the final IteratorResult is returned.

### `async(iter, value)`

* `iter` is an Iterator
* `value` can be anything
* Returns a Promise

Iterates through `iter`. The argument to each `iter.next` call is the awaited
`.value` of the previous IteratorResult, except that `value` is
passed initially. A Promise resolving to the `.value` of the final
IteratorResult is returned.
