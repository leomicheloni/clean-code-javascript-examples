//// Conditionals, don't use magic numbers
// Mal
if(user.age > 18){
    // ...
}
// Bien
var validAge = 18;
if(user.age > validAge){
    // ...
}

// Mal
setTimeout(blastOff, 86400000);
// bien
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

// Mal
if(userStatus = -1){ // new user
    // ....
}
// Bien
var UserStatusNew = -1;
if(userStatus = UserStatusNew){
    // ....
}