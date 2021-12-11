function Achem() {

    //GPA Calculetor

    this.gpa = function (mark) {

        if (mark === "") {
            alert(` First Fill In The Gap `)
        } else {
            if (mark >= 0 && mark < 33) {
                return gpa = 0;

            } else if (mark >= 33 && mark < 40) {
                return gpa = 1;

            } else if (mark >= 40 && mark < 50) {
                return gpa = 2;

            } else if (mark >= 50 && mark < 60) {
                return gpa = 3;

            } else if (mark >= 60 && mark < 70) {
                return gpa = 3.5;

            } else if (mark >= 70 && mark < 80) {
                return gpa = 4;

            } else if (mark >= 80 && mark <= 100) {
                return gpa = 5;

            }
        }
    }







    // Gread Calculetor 

    this.gread = function (gpa) {

        if (gpa === "") {

            alert(` First Fill In The Gap `)

        } else {
            if (gpa >= 0 && gpa < 1) {
                return (` F `);

            } else if (gpa >= 1 && gpa < 2) {
                return (` D `);

            } else if (gpa >= 2 && gpa < 3) {
                return (` C `);

            } else if (gpa >= 3 && gpa < 3.5) {
                return (` B `);

            } else if (gpa >= 3.5 && gpa < 4) {
                return (` A- `);

            } else if (gpa >= 4 && gpa < 5) {
                return (` A `);

            } else if (gpa == 5) {
                return (` A+ `)
            }
        }

    }



    // Total GPA Calculetor


    this.totalCgpa = function (bn, en, math, s, ss, rel) {

        let cgpa = (bn + en + math + s + ss + rel);
        let totalCgpa = (cgpa / 6);


        if (bn === 0 || en === 0 || math == 0 || s === 0 || ss === 0 || rel === 0) {
            return (` Sorry You Are Fail ! `);
        } else {
            return (` Your Total Gpa : ${ totalCgpa.toFixed(2) } & Total Gread :${ this.totalGread(gpa) } `);
        }

    }


    // Total Gread Calculetor

    this.totalGread = function (gpa) {

        if (gpa >= 0 && gpa < 1) {
            return (`F`);

        } else if (gpa >= 1 && gpa < 2) {
            return (` D `);

        } else if (gpa >= 2 && gpa < 3) {
            return (` C `);

        } else if (gpa >= 3 && gpa < 3.5) {
            return (` B `);

        } else if (gpa >= 3.5 && gpa < 4) {
            return (` A- `);

        } else if (gpa >= 4 && gpa < 5) {
            return (` A `);

        } else if (gpa === 5) {
            return (` A+ `);

        }

    }

}