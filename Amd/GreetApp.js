define(["require","Greeter"], function(require, greeter) {
    
  var messageElement = document.getElementById('message');
   messageElement.innerText = greeter.Greeter.greet();
   
});