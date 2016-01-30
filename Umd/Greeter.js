(function umdDefine(dependencies, factory) {
        if(typeof define === 'function' && define.amd) {
            define(dependencies, factory);
        } else if (typeof module === 'object' && typeof module.exports === 'object') {
            var v = factory(require, exports);
            if(v !== undefined) {
                module.exports = v;
            }
        }
    })(["require", "exports", "MessageProvider"], function(require, exports) {
    var Greeter = (function() {
   function sayHello() {
       var messageProvider = require("./MessageProvider");
        return messageProvider.MessageProvider.getGreetMessage() + " from UMD";
    } 
    return { greet : sayHello};
})();
exports.Greeter = Greeter;
});