angular.module("listaTelefonica").provider("serialGenerator",function() {
  let _length = 10;
  this.getLength = function() {
    return _length
  };
  this.setLength = function() {
   _length = length;
  };
  this.$get = function(){
    return {
      generate: function(){
        let serial = "";
        while(serial.length < _length){
          serial += String.fromCharCode(Math.floor(Math.random()*64)+32);
        }
        return serial;
      }
    };
  };
});