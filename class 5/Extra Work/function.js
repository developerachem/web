// This Is Constactor Function 

let Achem = function () {

    // This Is GPA Calculetor

    this.gpa = function (mark) {

        if (mark >= 0 && mark < 33) {
            return mark = 0;

        } else if (mark >= 33 && mark < 40) {
            return mark = 1;

        } else if (mark >= 40 && mark < 50) {
            return mark = 2;

        } else if (mark >= 50 && mark < 60) {
            return mark = 3;

        } else if (mark >= 60 && mark < 70) {
            return mark = 3.5;

        } else if (mark >= 70 && mark < 80) {
            return mark = 4;

        } else if (mark >= 80 && mark <= 100) {
            return mark = 5;

        }

    }

    // This Is Gread Calculetor 

    this.gread = function (mark) {

        if (mark >= 0 && mark < 33) {
            return mark = 'F';

        } else if (mark >= 33 && mark < 40) {
            return mark = 'D';

        } else if (mark >= 40 && mark < 50) {
            return mark = 'C';

        } else if (mark >= 50 && mark < 60) {
            return mark = 'B';

        } else if (mark >= 60 && mark < 70) {
            return mark = 'A-';

        } else if (mark >= 70 && mark < 80) {
            return mark = 'A';

        } else if (mark >= 80 && mark <= 100) {
            return mark = 'A+';

        }

    }


    // This Is Total GPA Calculetor



    this.cgpa = function (bn, en, math, ss, s) {

        let totalcMark = (bn + en + math + ss + s);

        let cgpa = totalcMark / 5;

        if (bn == 0 || en == 0 || math == 0 || ss == 0 || s == 0) {
            return (` Sorry Your are Faild 😥 `)
        } else {
            return (` Your Total CGPA : ${ cgpa } !  And Your Total GPA : ${ this.totalGread(cgpa) } `);
        }

    }

    // This Is Total Gread Calculetor 

    this.totalGread = function (cgpa) {

        if (cgpa >= 0 && cgpa < 1) {
            return ('F');

        } else if (cgpa >= 1 && cgpa < 2) {
            return ('C');

        } else if (cgpa >= 2 && cgpa < 3) {
            return ('B');

        } else if (cgpa >= 3 && cgpa < 3.5) {
            return ('D');

        } else if (cgpa >= 3.5 && cgpa < 4) {
            return ('A-');

        } else if (cgpa >= 4 && cgpa < 5) {
            return ('A');

        } else if (cgpa === 5) {
            return ('A+')
        }

    }



}