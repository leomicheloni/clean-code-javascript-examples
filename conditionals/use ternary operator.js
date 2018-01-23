//// Conditionals, assign using ternary operator
var message = "";

if(isValid()){
    validationOk = "Welcome!";
}else{
    var validationOk = "Go Away";    
}
// Bien
var validationOk = isValid() ? "Welcome!": "Go Away";