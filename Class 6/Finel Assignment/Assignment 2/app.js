

const studentMark = [ 
    // Name     bn    en  math  ss   s   rel  Rool  Reg
    [  'Achem' , 80 , 98 , 84 , 92 , 89 , 80 , 2 , 55069855 ],
    [  'Amzad' , 52 , 98 , 70 , 40 , 40 , 50 , 6 , 22695236 ],
    [  'Arif' , 60 , 98 , 35 , 60 , 40 , 50 , 1 , 22654456 ],
    [  'Rayhan' , 70 , 98 , 70 , 60 , 40 , 50 , 10 , 223644756 ],
    [  'Mahi' , 20 , 98 , 70 , 60 , 40 , 50 , 10 , 223644756 ],
    [  'Sweety' , 80 , 98 , 70 , 93 , 81 , 97 , 10 , 223644756 ],
];



// This Is Loop Condation
for (let i = 0; i < studentMark.length; i++) {
    
    let bn = studentMark[i][1];
    let en = studentMark[i][2];
    let math = studentMark[i][3];
    let ss = studentMark[i][4];
    let s = studentMark[i][5];
    let rel = studentMark[i][6];

    

//  This Is Constactor Function 
    function Achem (){

        // This Is Gread Calculetor
        this.gread = function (mark){

            if( mark >= 0 && mark < 33 ){
                return 'F';

            }else if( mark >= 33 && mark < 40 ){
                return 'D';

            }else if( mark >= 40 && mark < 50 ){
                return 'C';
                
            }else if ( mark >= 50 && mark < 60 ){
                return 'B';

            }else if( mark >= 60 && mark < 70 ){
                return 'A-';

            }else if ( mark >= 70 && mark < 80 ){
                return 'A';

            }else if ( mark >= 80 && mark <= 100 ){
                return 'A+';

            }
        }

        // This Is Gpa Calculetor
        this.gpa = function (mark){

            if( mark >= 0 && mark < 33 ){
                return gpa = 0;

            }else if( mark >= 33 && mark < 40 ){
                return gpa = 1;

            }else if( mark >= 40 && mark < 50 ){
                return gpa = 2;
                
            }else if ( mark >= 50 && mark < 60 ){
                return gpa = 3;

            }else if( mark >= 60 && mark < 70 ){
                return gpa = 3.5;

            }else if ( mark >= 70 && mark < 80 ){
                return gpa = 4;

            }else if ( mark >= 80 && mark <= 100 ){
                return gpa = 5;
                
            }
        }

        // This Is Total Mark Calculetor
        this.totalMarkCal = function ( bn , en , math , ss , s , rel ){

            let totalMark = ( bn + en + math + ss + s + rel )

            let cgpa = totalMark / 6 ;
            
            if( bn == 0 || en == 0 || math == 0 || ss == 0 || s == 0 || rel == 0 ) {

                return ` Your Failed `

            }else{
                //This Is OutPut Of Total CGPA And Total Gread
                return ` Your Total CGPA ${ cgpa.toFixed(2) } And Your Total Gread ${ achem.totalGread(gpa) } `
            }
        }

        // This Is Total Gread Calculetor
        this.totalGread = function (gpa){

            if( gpa >= 0 && gpa < 1 ){
                return 'F';

            }else if( gpa >= 1 && gpa < 2 ){
                return 'D';

            }else if( gpa >= 2 && gpa < 3 ){
                return 'C';

            }else if ( gpa >= 3 && gpa < 3.5 ){
                return 'B';

            }else if( gpa >= 3.5 && gpa < 4 ){
                return 'A-';

            }else if( gpa >= 4 && gpa < 5 ){
                return 'A';

            }else if( gpa === 5 ){
                return 'A+' ;

            }
        }
    }



    // This Is Constactor Function Var
    let achem = new Achem;




    // This Is All Over OutPut
    console.log(`
    
    Name :  ${ studentMark[i][0] }          Rool : ${ studentMark[i][7] }           Reg No :   ${ studentMark[i][8] }  
--------------------------------------------------------------------------

    No      Subject            Mark           Gread              GPA

    01      Bangla             ${ bn }             ${ achem.gread(bn) }                 ${ achem.gpa(bn) }     
    02      English            ${ en }             ${ achem.gread(en) }                 ${ achem.gpa(en) } 
    03      Math               ${ math }             ${ achem.gread(math) }                  ${ achem.gpa(math) } 
    04      Social Sicenc      ${ ss }             ${ achem.gread(ss) }                 ${ achem.gpa(ss) } 
    05      Sicenc             ${ s }             ${ achem.gread(s) }                  ${ achem.gpa(s) } 
    06      Relegens           ${ rel }             ${ achem.gread(rel) }                  ${ achem.gpa(rel) } 
--------------------------------------------------------------------------
                         ${ achem.totalMarkCal( achem.gpa(bn), achem.gpa(en), achem.gpa(math), achem.gpa(ss), achem.gpa(s), achem.gpa(rel) ) }

    `); 
}




