// Make a result marks project 

let name = 'MD Achem' ;
let className = 10 ;
let rool = 2 ;
let age  = 18 ;
let looocation = 'Dhaka';

// Subjhhect Mark
let bn = 80 ;
let en = 65 ;
let math = 46 ;
let s = 58 ;
let ss = 90 ;
let rel = 56 ;




console.log(`

    Name        :   ${name}
    Age         :   ${age} Years Old
    Rool        :   ${rool}
    Class       :   ${className}
    Loocation   :   ${looocation}
------------------------------------------------------------

    No  Subject         Mark        GPA         Gread

    01  Bangla          ${bn}          ${gpa(bn)}           ${gread(bn)}
    02  English         ${en}          ${gpa(en)}         ${gread(en)}
    03  Math            ${math}          ${gpa(math)}           ${gread(math)}
    04  Science         ${s}          ${gpa(s)}           ${gread(s)}
    05  Social Science  ${ss}          ${gpa(ss)}           ${gread(ss)}
    06  Religons        ${rel}          ${gpa(rel)}           ${gread(rel)}
------------------------------------------------------------
     Your Finel CGPA ${totalGpa(gpa(bn), gpa(en), gpa(math), gpa(s), gpa(ss), gpa(rel))} And Your Fine Gread ${totalGread(gpa(bn), gpa(en), gpa(math), gpa(s), gpa(ss), gpa(rel))}
`);








