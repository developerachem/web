//# Create an email pattern 

let textEmail = 'admin@developerachem.com.bd';

let emailPattern = /^[a-z0-9-_\.]{1,}@[a-z]{1,}\.[a-z\.]{2,}$/;

console.log(emailPattern.test(textEmail));


//# Create a  username pattern----------------------------------------------------------------

let textUserName = 'achem.6' ;

let userNamePattrn = /^[a-z][a-z-\._0-9]{3,9}/;

console.log(userNamePattrn.test(textUserName)); 



//# Create a Bangladeshi phone number pattern-------------------------------------------------

let textBDPhoneNumber = '+8801764849199';

let phoneNumerPattern =  /^(01|8801|\+8801)[0-9]{9}$/ ;

console.log(phoneNumerPattern.test(textBDPhoneNumber));

//# Create a password pattern ----------------------------------------------------------------

let textPassword = 'xchekwwlk7';

let passwordPattern = /^[A-Za-z0-9!@#\$%\^&*-_\.]{8,16}$/;

console.log(passwordPattern.test(textPassword));

//# Create a zipcode pattern  ----------------------------------------------------------------

let textZipCode = '1416';

let zipcodePattern = /^[0-9]{4}$/;

console.log(zipcodePattern.test(textZipCode));

// #CSS Color Code Pattern-------------------------------------------------------------------

let textColorCode = '#0116c2';

let colorCodePattern = /^#[a-A-zZ0-9]{6}$/;

console.log(colorCodePattern.test(textColorCode));