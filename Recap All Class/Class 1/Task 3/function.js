//This Is GPA Calculetor Function

function gpa(mark) {

    if (mark >= 0 && mark < 33) {
        return  0;
    } else if (mark >= 33 && mark < 40) {
        return  1;
    } else if (mark >= 40 && mark < 50) {
        return  2;
    } else if (mark >= 50 && mark < 60) {
        return  3;
    } else if (mark >= 60 && mark < 70) {
        return  3.5;
    } else if (mark >= 70 && mark < 80) {
        return  4;
    } else if (mark >= 80 && mark <= 100) {
        return  5;
    }
}

// This Is Gread Calculetor Function

function gread (mark){

    if (mark >= 0 && mark < 33) {
        return 'F';
    } else if (mark >= 33 && mark < 40) {
        return 'D';
    } else if (mark >= 40 && mark < 50) {
        return 'C';
    } else if (mark >= 50 && mark < 60) {
        return 'B';
    } else if (mark >= 60 && mark < 70) {
        return 'A';
    } else if (mark >= 70 && mark < 80) {
        return 'A-';
    } else if (mark >= 80 && mark <= 100) {
        return 'A+';
    }
}

// This Is Total GPA calculetor

function totalGpa ( bn , en , math , s , ss , rel ) {

    let totalMark = ( bn + en + math + s + ss + rel ) ;
    let finelGpa = totalMark / 6 ;
    
    if( bn === 0 , en === 0 , math === 0 , s === 0 , ss === 0 , rel === 0 ){

        return ` Your Failed 😥 `

    }else{
        return ` ${finelGpa.toFixed(2)} ` 
    }
}

// This Is Total Gread Calculetor Function

function totalGread (gpa){

    if( gpa >= 0 && gpa < 1 ){
        return 'F'
    }else if ( gpa >= 1 && gpa > 2 ){
        return 'D'
    }else if( gpa >= 2 && gpa < 3 ){
        return 'C'
    }else if( gpa >= 3 && gpa < 3.5 ){
        return 'B'
    }else if( gpa >= 3.5 && gpa < 4 ){
        return 'A'
    }else if( gpa >= 4 && gpa < 4 ){
        return 'A-'
    }else if( gpa === 5 ){
        return 'A+'
    }
}