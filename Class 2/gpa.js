
let name = prompt('Type Your Name');
let clas = prompt('Type Your Class');
let rool = prompt('Type Your Rool');
let mark = prompt( 'Give Your Mark' );





if( mark >= 0 && mark <= 32 ) {
    console.log(` 
        আসসালামু আলাইকুম 
        নামঃ ${ name }. 
        রোলঃ ${ rool }.
        ক্লাসঃ ${ clas }.
        সরি তুমি ফেইল করেছো ।
    
    
    `);

}else if( mark >= 33 && mark <= 39 ) {
    console.log(`  
        আসসালামু আলাইকুম 
        নামঃ ${ name }. 
        রোলঃ ${ rool }.
        ক্লাসঃ ${ clas }.
        পয়েন্টঃ D .
    `);

}else if( mark >= 40 && mark <= 49 ) {
    console.log(`  
        আসসালামু আলাইকুম 
        নামঃ ${ name }. 
        রোলঃ ${ rool }.
        ক্লাসঃ ${ clas }.
        পয়েন্টঃ C .
    `);

}else if( mark >= 50 && mark <= 59 ) {
    console.log(`  
        আসসালামু আলাইকুম 
        নামঃ ${ name }. 
        রোলঃ ${ rool }.
        ক্লাসঃ ${ clas }.
        পয়েন্টঃ B .
    `);

}else if( mark >= 60 && mark <= 69 ) {
    console.log(`  
        আসসালামু আলাইকুম 
        নামঃ ${ name }. 
        রোলঃ ${ rool }.
        ক্লাসঃ ${ clas }.
        পয়েন্টঃ A- .
    `);

}else if( mark >= 70 && mark <= 79 ) {
    console.log(`  
        আসসালামু আলাইকুম 
        নামঃ ${ name }. 
        রোলঃ ${ rool }.
        ক্লাসঃ ${ clas }.
        পয়েন্টঃ A .
    `);

}else if( mark >= 80 && mark <= 99 ) {
    console.log(`  
        আসসালামু আলাইকুম 
        নামঃ ${ name }. 
        রোলঃ ${ rool }.
        ক্লাসঃ ${ clas }.
        পয়েন্টঃ A+ .
    `);

}else if( mark == 100 ) {
    console.log(`  
        আসসালামু আলাইকুম 
        নামঃ ${ name }. 
        রোলঃ ${ rool }.
        ক্লাসঃ ${ clas }.
        পয়েন্টঃ Golden A+ .
    `);

}else{
    console.log(` ভাই আপনি কি পরিক্ষা দিয়ে এটা পুড়ন করলেন নাকি না দিয়ে পুড়ন করলেন ? `);
}




