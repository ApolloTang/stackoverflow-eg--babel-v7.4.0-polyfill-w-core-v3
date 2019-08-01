"use strict";

var createIterator =
/*#__PURE__*/
regeneratorRuntime.mark(function createIterator(items) {
  var i;
  return regeneratorRuntime.wrap(function createIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < items.length)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return items[i];

        case 4:
          i++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, createIterator);
});
var iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // { value: 1, done: false }

console.log(iterator.next()); // { value: 2, done: false }

console.log(iterator.next()); // { value: 3, done: false }

console.log(iterator.next()); // { value: undefined, done: true }

var set = new Set([1, 2, 3]);
console.log([1, 2, 3].includes(2)); // true

console.log([1, 2, 3].includes(4)); // false
