define(["require", "exports"], function(require, exports) {
    
    var MessageProvider = (function MessageProvider() {
        
        var getGreetMessage = function getGreetMessage() {
            return "Hello World";
        };
        
        return {getGreetMessage : getGreetMessage};
})();
exports.MessageProvider = MessageProvider;
});

