
const ageData = [

    [ 'Achem', 22 , 'Dhaka' ],
    [ 'Rayhan', 20 , 'Sylhet' ],
    [ 'Nahid', 60 , 'Habigonj' ],
    [ 'Nayon', 15 , 'Bhola' ],
    [ 'Sweety', 23 , 'Kurigram' ],
    [ 'Mahi', 28 , 'Narayngonj' ],

]



for (let i = 0; i < ageData.length; i++) {

    let age = ageData[i][1];

    function ageCal (age){

        if( age >= 0 && age < 18 ){
            return ` You Are Bacca `

        }else if( age >= 18 && age < 40 ){
            return ` Your Good Boy `

        }else if( age >= 40 ){
            return ` Your Old Pepole `
            
        }
    }

    console.log(`
    
    Your Name    : ${ ageData[i][0] }
    Your Age     : ${ ageData[i][1] }
    Your Addreaa : ${ ageData[i][2] }

    Massage      : ${ ageCal(age) }

    -----------------------------------------
    `);
}

  






