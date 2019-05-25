function callFunction(fun) {
    fun();
}


// function expression
var sayBye = function sayBye(params) {
    console.log('Bye from another function');

}

callFunction(sayBye);