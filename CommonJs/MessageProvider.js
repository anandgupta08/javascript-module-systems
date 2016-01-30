var MessageProvider = (function MessageProvider() {
    function getGreetMessage() {
        return "Hello World";
    }   
    return {getGreetMessage : getGreetMessage};   
})();
exports.MessageProvider = MessageProvider;

