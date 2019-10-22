function hello(name) {
  return "Hello " + name + " san!";
}

function sum() {
  var sum = 0;
  util = require('util');
  console.log(util);
  
  for(i = 0; i < arguments.length; i++) {
    sum = util.add(sum, arguments[i]);
  }
  return sum;
}