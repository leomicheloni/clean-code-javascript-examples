//// Conditionals, avoid arrow code
// MAL
var result = "";

if(!user.isRegistered()){
    if(user.name.length < 3){
        result = "the name is too short";
    }else{
        if(user.password.lenght < 4){
            result = "the passwork is too short";
        }else{
            if(user.age < 18){
                result = "you must be over 18 in order to register my friend";
            }else{
                if(user.gender == ""){
                    result = "A gender must be specified";
                }else{
                    if(user.country == ""){
                        result = "Please select a country from the list";
                    }else{
                        if(user.hasValidEmail()){
                            result = "Welcome man";
                        }else{
                            result = "The email is not valid";
                        }
                    }
                }
            }
        }
    }
}
else{
    result = "This user is already registered";    
}
return result;

// Bien
if(user.isRegistered())
    return "This user is already registered";  

if(user.name.length < 3)
    return "The name is too short";

if(user.password.lenght < 4){
    return "the passwork is too short";
        
if(user.age < 18)
    return "you must be over 18 in order to register my friend";

if(user.gender == ""){
    return "A gender must be specified";

if(user.country == "")
    return "Please select a country from the list";

if(user.hasValidEmail())
    return "The email is not valid";

return "Welcome man";