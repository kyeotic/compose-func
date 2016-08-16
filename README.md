# compose-func
A dependency-free right-to-left compose function that will run anywhere

npm has several packages for function composition, and they are all too heavy for my liking. This operation is simple; it doesn't require dependencies, and it doesn't need gulp/grunt to transpile ES6.

This package

* Has no dependencies
* Has no build step
* Is supported by all node environments ***without any polyfills***
* Has no tests (YAGNI)
* Is 12 lines of code
* Works

# Usage

```javascript
var compose = require('compose-func');

var add1 = (x) => x + 1,
mult2 = (x) => x * 2,
square = (x) => x * x;

var compose1 = compose(add1),
compose2 = compose(mult2, add1),
compose3 = compose(square, mult2, add1);

compose1(0); // 1
// === add1(0)

compose2(1); // 4
// === mult2(add1(0))

compose3(1); // 16
// === square(mult2(add1(0)))
```
