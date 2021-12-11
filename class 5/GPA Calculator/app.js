



let name = prompt('Type Your Name')
let rool = prompt('Type Your Rool')


let ban = prompt('Bangla')
let en = prompt('English')
let math = prompt('Math')
let s = prompt( 'Science' );
let ss = prompt( ' Social Science' );
let rel = prompt( 'Religion' );
let ag = prompt( 'Agriculture' );







console.log(`

    Your Name       : ${name}
    Your Rool No    : ${rool}

----------------------------------------------------------------------------

    Subject          Mark            GPA            Gread
    Bangla           ${ban}              ${gpa(ban)}              ${gread(ban)}
    English          ${en}              ${gpa(en)}              ${gread(en)}
    Math             ${math}              ${gpa(math)}              ${gread(math)}
    Science          ${s}              ${gpa(s)}              ${gread(s)}
    Social Scince    ${ss}              ${gpa(ss)}              ${gread(ss)}
    Religion         ${rel}              ${gpa(rel)}              ${gread(rel)}
    Agriculture      ${ag}              ${gpa(ag)}              ${gread(ag)}
---------------------------------------------------------------------------
    ${ cgpa( gpa(ban), gpa(en), gpa(math), gpa(s), gpa(ss), gpa(rel), gpa(ag) ) }


`);












