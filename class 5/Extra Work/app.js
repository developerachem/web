let name = prompt(` Type Your Name `)
let rool = Number(prompt(` Type Your Rool No `))



let bn = Number(prompt(` Bangle `))
let en = Number(prompt(` English `))
let math = Number(prompt(` Math `))
let s = Number(prompt(` Science `))
let ss = Number(prompt(` Social Science `))



// this Is Input From Constactor Function
let achem = new Achem;





console.log(` 

Your Name: ${ name }
Your Rool: ${ rool }

-----------------------------------------------------------------------------------------


Subject                 Mark                   GPA               Gread

Bangla                  ${ bn }                     ${ achem.gpa(bn) }              ${ achem.gread(bn) }
English                 ${ en }                     ${ achem.gpa(en) }                ${ achem.gread(en) }
Math                    ${ math }                     ${ achem.gpa(math) }                ${ achem.gread(math) }
Science                 ${ s }                     ${ achem.gpa(s) }                ${ achem.gread(s) }
Social Science          ${ ss }                     ${ achem.gpa(ss) }                ${ achem.gread(ss) }
----------------------------------------------------------------------------------------
                ${ achem.cgpa(achem.gpa(bn), achem.gpa(en), achem.gpa(math), achem.gpa(s), achem.gpa(ss) ) }

`);