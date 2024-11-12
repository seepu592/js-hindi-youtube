const accountId = 144553 ;
let accontEmail = "shivendra21@gmail.com";
var accountPassword = "12345" ;
accountCity = "Jaipur";
let accountState;

//accountId = 4 ; Not allowed
accontEmail = "ss@ss.com";
accountPassword = "768768";
accountCity = "Bengaluru";

console.log(accountId);
/* 
Prefer not to use var
because of issue in block scope and funtion scope
*/
console.table([accountId,accontEmail,accountPassword,accountCity,accountState]);