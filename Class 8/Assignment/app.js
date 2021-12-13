let date = new Date();




const amin = ['alo', 'potol', 'begun', 'korla', 'gajor',

    {
        name: 'Abu sayeed',
        age: 40,
        skill: ['php', 'java', 'mongoDB', 'python',

            {
                name: 'mamun',
                age: 55,
            }
        ]
    }
]




console.log(` Mamun Vair Heda : ${ amin[5].skill[4].age } Years `);





// function customDay() {
//     if (date.getHours() > 12) {
//         return date.getHours() - 12;

//     }else{
//         return date.getHours()
//     }
// }

// function finelDay() {
//     if (customDay() < 10  ) {
//         return '0' + customDay();
//     }
// }

// document.getElementById("time").innerHTML = (`

// Date     :        ${date.getDate()} / ${date.getMonth() + 1} / ${date.getUTCFullYear()}

// <br>

// Time     :        ${finelDay()} : ${(date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())} : ${(date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())} ${ date.getHours() > 12 ? 'PM' : 'AM' }

// `);




// console.log(`

// Date     :        ${date.getDate()} / ${date.getMonth() + 1} / ${date.getUTCFullYear()}

// Time     :        ${finelDay()} : ${(date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())} : ${(date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())} ${ date.getHours() > 12 ? 'PM' : 'AM' }

// `);




// console.log( `

// My Time : ${ 31 -  date.getDate() } Day / ${ 23 - date.getHours()  } Hours / ${ date.getMinutes() - 59 } Minit / ${ 0 - date.getSeconds() }

// `);