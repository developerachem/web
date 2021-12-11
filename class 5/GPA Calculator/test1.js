



let name = prompt('Type Your Name')
let rool = prompt('Type Your Rool')


let ban = prompt('Bangla')
let en = prompt('English')
let math = prompt('Math')
let s = prompt( 'Science' );
let ss = prompt( ' Social Science' );
let rel = prompt( 'Religion' );
let ag = prompt( 'Agriculture' );





let achem = new Achem();

console.log(`

    Your Name       : ${name}
    Your Rool No    : ${rool}

----------------------------------------------------------------------------

    Subject          Mark            GPA            Gread
    Bangla           ${ban}              ${achem.gpa(ban)}              ${achem.gread(ban)}
    English          ${en}              ${achem.gpa(en)}              ${achem.gread(en)}
    Math             ${math}              ${achem.gpa(math)}              ${achem.gread(math)}
    Science          ${s}              ${achem.gpa(s)}              ${achem.gread(s)}
    Social Scince    ${ss}              ${achem.gpa(ss)}              ${achem.gread(ss)}
    Religion         ${rel}              ${achem.gpa(rel)}              ${achem.gread(rel)}
    Agriculture      ${ag}              ${achem.gpa(ag)}              ${achem.gread(ag)}
---------------------------------------------------------------------------
    ${ achem.cgpa( achem.gpa(ban), achem.gpa(en), achem.gpa(math), achem.gpa(s), achem.gpa(ss), achem.gpa(rel), achem.gpa(ag) ) }


`);












