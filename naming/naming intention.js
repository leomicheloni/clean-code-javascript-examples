//// Naming intention
// Mal
const d = moment().format('YYYY/MM/DD');
// bien
const currentDate = moment().format('YYYY/MM/DD');

// Mal
function save(){
    // ...
}
// Bien
function saveUserStatus(){
    // ...
}

// Mal
var a = ['Ford', 'Rena', 'Citroen', 'Mazda'];
a.forEach(element => {
    // ...
});
// Bien
var carMakers = ['Ford', 'Rena', 'Citroen', 'Mazda'];
carMakers.forEach(maker => {
    // ...
});
