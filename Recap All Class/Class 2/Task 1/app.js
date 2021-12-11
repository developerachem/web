//Check the age of your marriage and provide age-appropriate Messages 

let name = 'Achem' ;
let year = 2018 ;
let age = 2021 - year ;





if( age >= 0 && age <= 18 ){
    console.log(`
    
    Name        :   ${name}
    Age         :   ${age}
    Birth Year  :   ${year}
    Massage     :   সরি আপনি বিয়ে করতে পারবেন না , কারন আপনার বয়স কম , আপনি আরো ${ 18 - age } বছর পরে বিয়ে করতে পারবেন । 

    `);
}else if( age > 18 && age < 40 ){
    console.log(`
    
    Name        :   ${name}
    Age         :   ${age}
    Birth Year  :   ${year}
    Massage     :   আপনাকে স্বাগতম , আপনার এখুনি উপযোক্ত সময় বিয়ে করার জন্য , আপনি তারাতারি বিয়ে করে নিন । 

    `);
}else if( age >= 40 ){
    console.log(`
    
    Name        :   ${name}
    Age         :   ${age}
    Birth Year  :   ${year}
    Massage     :   সরি আপনার বয়স ওভার হয়ে গেছে আপনাকে এখন আর কোন মেয়ে পছন্দ করবে না , আপনাকে বিয়ে করতে হলে আরো ${ age - 40 } বছর আগে আসা উচিত ছিলো , এখন আপনি নাকে তেল দিয়ে ঘুমান । 

    `);
}