//// Functions, avoid too many arguments, use clases instead
// Mal
function register(name, lastName, age, email, country){
    // ...
}
// Bien
class User{
    constructor(name, lastName, age, email, country){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.country = countr;
    }
}
function registerUser(User){
    // ...
}