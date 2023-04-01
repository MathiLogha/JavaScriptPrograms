var user = { 
    first_name: "Chandler", 
    last_name: "Bing", 
    age: "40", 
    department: "AI&DS" 
    }; 
console.log(user);  
console.log(Object.keys(user).length); 
delete user.last_name; 
console.log(user); 
console.log(Object.keys(user).length); 