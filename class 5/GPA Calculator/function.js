



function gpa (marks) {
    
    let gpa;

    if( marks >= 0 && marks <= 32 ) {
        gpa = 0;
    }else if( marks >= 33 && marks < 40 ) {
        gpa = 1;
    }else if (marks >= 40 && marks < 50) {
        gpa = 2;
    }else if (marks >= 50 && marks < 60) {
        gpa = 3;
    }else if (marks >= 60 && marks < 70) {
        gpa = 3.5;
    }else if (marks >= 70 && marks < 80) {
        gpa = 4;
    }else if (marks >= 80 && marks <= 100) {
        gpa = 5;
    }

    return gpa;

}


// This is Gread Calculetor

function gread (marks) {
    let gread;

    if(marks >= 0 && marks <= 32) {
        gread = ('F');
    }else if( marks >= 33 && marks < 40 ){
        gread = ('C');
    }else if( marks >= 40 && marks < 50 ){
        gread = ('D');
    }else if( marks >= 50 && marks < 60 ){
        gread = ('B');
    }else if( marks >= 60 && marks < 70 ){
        gread = ('A-');
    }else if( marks >= 70 && marks < 80 ){
        gread = ('A');
    }else if( marks >= 80 && marks <= 100 ){
        gread = ('A+')
    }

    return gread ;
}


//CGPA Calcculetor

let cgpa = ( ban, en, math, s, ss, rel, ag ) => {

    let totalCgpa = ( ban + en + math + s + ss + rel + ag )
    let cgpa = ( totalCgpa/7 )

    if( ban == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0 || ag == 0 ){
        return ` You Are Fail `
    }else{
        return  (` Your CGPA = ${ cgpa.toFixed(2) } & Your Total CGPA: ${ totalGread(cgpa) }` )
    }
    
}

// Total Gread Calculetor

function totalGread (cgpa) {
    if( cgpa >= 0 && cgpa < 1 ){
        return ('F');
    }else if(cgpa >= 1 && cgpa < 2) {
        return ('C');
    }else if( cgpa >= 2 && cgpa < 3 ){
        return ('D');
    }else if( cgpa >= 3 && cgpa < 3.5 ) {
        return ('B');
    }else if( cgpa >= 3.5 && cgpa < 4 ){
        return ('A-');
    }else if( cgpa >= 4 && cgpa < 5 ){
        return ('A');
    }else if( cgpa == 5 ){
        return ('A+');
    }
}























