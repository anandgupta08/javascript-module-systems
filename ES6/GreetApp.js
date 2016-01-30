import {Greeter as greeter} from "Greeter";

var messageElement = document.getElementById('message');
messageElement.innerText = greeter.greet();
