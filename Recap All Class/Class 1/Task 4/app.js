

let name = 'Achem';
let age = 70;







if( age >= 0 && age <= 18 ){
    console.log(` Hello ${name} wee Are Sorry, tumi ekhn biye korte parbe na tomar biye korote hole ekhno ${ 18 - age } bosor opekkha kora lagbe `);
}else if ( age > 18 && age < 40 ){
    console.log( ` Hello ${name} Youre Most welcome , You can get married now  ` );
}else if(age >= 40){
    console.log(` Sorry ${name} tumi ekhn bura hoye gecho , tumi ekhn biye korte parbe na , karon tomar ${ age - 40} bosor beshi hoye geche . tomake ekhn ar kono meye biye korbe na `);
}