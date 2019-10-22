require.config({
  baseUrl: 'js',
 
  shim: {
    'mylib'  : ['util'],
  }
});

require(['util','mylib'], function(util) {
    var result = util.add(1, 2);
    console.log('1 + 2 = ' + result);
    
    console.log(hello("Fan"));
    
    console.log(sum(1,2,3,4,5));
});