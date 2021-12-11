// This Var Is Constacroe Function
var achem = new Achem();



let name = prompt(` Type Your Name `)
let rool = prompt(` Tyoe Your Rool No `)


let bn = prompt(`Bangla`)
let en = prompt(`English`)
let math = prompt(`Math`)
let s = prompt(`Science`)
let ss = prompt(`Social Science`)
let rel = prompt(` Religion `)



console.log(`

Your Name : ${ name }
Your Rool : ${ rool }

----------------------------------------------------------

 NO   Subject         Mark           GPA          Gread         

 01   Bangla          ${ bn }             ${ achem.gpa(bn) }           ${ achem.gread(gpa) }  
 02   English         ${ en }             ${ achem.gpa(en) }           ${ achem.gread(gpa) }
 03   Math            ${ math }             ${ achem.gpa(math) }           ${ achem.gread(gpa) }
 04   Science         ${ s }             ${ achem.gpa(s) }           ${ achem.gread(gpa) }
 05   Social Science  ${ ss }             ${ achem.gpa(ss) }           ${ achem.gread(gpa) }
 06   Religion        ${ rel }             ${ achem.gpa(rel) }           ${ achem.gread(gpa) }
----------------------------------------------------------
            ${ achem.totalCgpa( achem.gpa(bn), achem.gpa(en), achem.gpa(math), achem.gpa(s), achem.gpa(ss), achem.gpa(rel) ) }


`);