

//Create a function that will return children, teenagers, 
// young people, old people from the age


let age = '45';
let fullAge = (age) =>{
 
    if( age == 0 || age == '' || typeof age !== ('number')){
     
        return 'Please input valid age'

    } if( age >= 0 && age <= 10){
        return 'You are child';

    }else if(age >= 11 && age <= 18){
        return 'You are teenager';

    }else if( age >= 19 && age <= 50){
        return 'Yu are adult';

    }return 'You are old';

}

console.log(fullAge(age))