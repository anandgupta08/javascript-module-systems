import {MessageProvider as messageProvider} from "MessageProvider"; 

export var Greeter = (function Greeter() {
    var sayHello = function sayHello() {
        return  messageProvider.getGreetMessage() + " from ES6";
    }
    
    return {
        greet : sayHello
    }
})();
