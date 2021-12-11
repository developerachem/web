const devs = [

    [ 'Developer Achem', 70 , 'java' , 120000 , 'Dhaka' ],
    [ 'Developer Rayhan', 50 , 'Laravel' , 80000 , 'Sylet' ],
    [ 'Developer Said', 17 , 'Django' , 50000 , 'Narayongonj' ],
    [ 'Developer Akash', 20 , 'GoLang' , 40000 , 'Dhaka' ],
    [ 'Developer Nur-Amin', 26 , 'GoLang' , 40000 , 'Dhaka' ],
]

let total = 0;

for (let i = 0; i < devs.length; i++) {
    
    total = total + devs[i][3];

    console.log(`
    
    Name      :   ${ devs[i][0] }.
    Age       :   ${ devs[i][1] } Year.
    Skil      :   ${ devs[i][2] }.
    Income    :   ${ devs[i][3] } ৳
    Loocation :   ${ devs[i][4] }.
--------------------------------------------------
    `);
    
}
console.log(` Our Total Sallery = ${ total } ৳ `);






