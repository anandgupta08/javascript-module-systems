(function umdDefine(dependencies, factory) {
        if(typeof define === 'function' && define.amd) {
            define(dependencies, factory);
        } else if (typeof module === 'object' && typeof module.exports === 'object') {
            var v = factory(require, exports);
            if(v !== undefined) {
                module.exports = v;
            }
        }
    })(["require", "exports"], function(require, exports) {
    var MessageProvider = (function MessageProvider() {
        function getGreetMessage() {
            return "Hello World";
        }
        
        return {getGreetMessage : getGreetMessage};
})();
exports.MessageProvider = MessageProvider;
    });

