define(["require","exports", "MessageProvider"], function(require, exports, messageProvider) { 
    
    var Greeter = (function Greeter() {
    var sayHello = function sayHello() {
        return  messageProvider.MessageProvider.getGreetMessage() + " from AMD (RequireJs)";
    }
    
    return {
        greet : sayHello
    }
})();
exports.Greeter = Greeter;
});