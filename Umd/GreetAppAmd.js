define(["require", "exports", "Greeter"], function(require, exports) {
    var greeter = require("./Greeter");   
    var messageElement = document.getElementById('message');
    messageElement.innerText = greeter.Greeter.greet();
});