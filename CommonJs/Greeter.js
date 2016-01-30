var Greeter = (function Greeter() {
    var messageProvider = require("./MessageProvider")
    function sayHello() {
        return  messageProvider.MessageProvider.getGreetMessage() + " from CommonJS (Node)";
    }  
    return {greet : sayHello}  
})();
exports.Greeter = Greeter;