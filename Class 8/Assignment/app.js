
let date = new Date() ;



console.log(`

Time     :        ${(date.getHours() > 12 ? 0 + date.getHours() -12 : date.getHours())} : ${date.getMinutes()} : ${date.getSeconds()} ${ date.getHours() > 12 ? 'PM' : 'AM' }

`);


