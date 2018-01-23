//// Clases, avoid primitive return types, use clases
// Mal
function registerUser(user){
    // ...
    return json;
}
// Bien
function registerUser(user){
    return {
        success: true,
        userId : 123,
        welcomeDiscount: 10
    };
}
