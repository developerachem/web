



let name = prompt("Type Your Name");
let Rool = prompt("Type Your Rool No");
let Reg = prompt("Type Your Reg No");
let Class = prompt("Type Your Class");
let mark = prompt( 'Type Your Mark' );



if( mark <= 32 && mark >= 0 ) {
    console.log(` 
        You Name: ${ name } 
        You Rool: ${ Rool } 
        You Reg: ${ Reg } 
        You Class: ${ Class } 
        আপনি ফেল মারছেন , সামনের দিকে আরো ভালো করবেন


    `);

}else if( mark <= 40 ) {
    console.log(` 
        You Name: ${ name } 
        You Rool: ${ Rool } 
        You Reg: ${ Reg } 
        You Class: ${ Class } 
        You GPA: D


    `);

}else if( mark <= 50 ) {
    console.log(` 
        You Name: ${ name } 
        You Rool: ${ Rool } 
        You Reg: ${ Reg } 
        You Class: ${ Class } 
        You GPA: C


    `);

}else if( mark <= 60 ) {
    console.log(` 
        You Name: ${ name } 
        You Rool: ${ Rool } 
        You Reg: ${ Reg } 
        You Class: ${ Class } 
        You GPA: B


    `);

}else if( mark <= 70 ) {
    console.log(` 
        You Name: ${ name } 
        You Rool: ${ Rool } 
        You Reg: ${ Reg } 
        You Class: ${ Class } 
        You GPA: A-


    `);

}else if( mark <= 80 ) {
    console.log(` 
        You Name: ${ name } 
        You Rool: ${ Rool } 
        You Reg: ${ Reg } 
        You Class: ${ Class } 
        You GPA: A


    `);

}else if( mark <= 99 ) {
    console.log(` 
        You Name: ${ name } 
        You Rool: ${ Rool } 
        You Reg: ${ Reg } 
        You Class: ${ Class } 
        You GPA: A+


    `);

}else if( mark == 100 ) {
    console.log(` 
        You Name: ${ name } 
        You Rool: ${ Rool } 
        You Reg: ${ Reg } 
        You Class: ${ Class } 
        You GPA: Golden A+


    `);

}else{
    console.log(` তুই শালা বাটপার , যা ভাগ এখান থেকে . তোর তো পাওার কথা ছিলো 100 এর ভিতরে তাইলে তুই  ${ mark - 100 } মার্ক বেশি পাইলি কিভাবে । সো তুই একটা হারে হারামজাদা`);
}












