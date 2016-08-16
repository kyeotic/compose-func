module.exports = function compose() {
  var funcs = Array.prototype.slice.call(arguments)
  if (funcs.length === 0) return function (arg) { return arg }
  if (funcs.length === 1) return funcs[0]
  return function () {
     var val = funcs[funcs.length - 1].apply(undefined, arguments)
     for (var i = funcs.length - 2; i > -1; i--) {
       val = funcs[i].call(undefined, val)
     }
     return val
  }
}
