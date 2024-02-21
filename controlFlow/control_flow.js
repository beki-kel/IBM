let userRole="manager";
let accessLevel;
if(userRole === "admin"){
    accessLevel="full access granted";
}
else if(userRole=== "manager"){
    accessLevel="limited access granted"
}
else{
    accessLevel="no access granted"
}

console.log("Access Level:", accessLevel);

let isLoggedIn=true;
let userMessage;

if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="welcome,Admin!";
    }
    else{
        userMessage="welcome, user!"
    }
}
else{
    userMessage="please log in to access the system"
}

console.log("User Message:", userMessage);

let userType;
let userCatagory;

switch(userType){
    case "admin":
        userCatagory="Adminstrator"
        break;
    case "manager":
        userCatagory="manger"
        break
    case "subscriber":
        userCatagory="subscriber"
        break
    default:
        userCatagory="unkown"
}

console.log( userCatagory)