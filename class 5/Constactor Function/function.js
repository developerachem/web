function Achem() {

    // Entry Calculetor

    this.party = function (name, age) {

        if (name == "" || age == "") {

            alert(` Plz.. Fill In The All File `)
            console.log(` File Not Input `);

        } else {
            if (age >= 0 && age <= 17) {
                return (` হ্যালো ${ name } আপনি এখনো বাচ্ছা আপনি এই পার্টিতে জাইতে পারবেন না । আপনার এই পার্টিতে জাইতে হলে আরো ${ 18 - age } বছর অপেক্ষা করা লাগবে ।  `)

            } else if (age >= 18 && age <= 28) {
                return (` হ্যালো ${ name } স্যার আপনালে স্বাগতম । আপনি এই পার্টি নিজের মতো করে পালন করতে পারেন , আপনার কোথাও জাইতে কোন বাধা নাই ।  `)

            } else if (age > 28 && age < 40) {
                return (` হ্যালো ${ name } স্যার আপনি এই পার্টিতে যেতে পারবেন কিন্তু কিছু কিছু রুম আছে আপনি সেখানে জাওয়া থেকে বিরত থাকবেন । আপনি সেখানে যেতে জলে আরো ${ age - 28 } বছর আগে আসতে হতো । `)

            } else if (age == 40) {
                return (`  হ্যালো ${ name } স্যার আপনি এই পার্টিতে যেতে পারবেন কিন্তু কিছু কিছু রুম আছে আপনি সেখানে জাওয়া থেকে বিরত থাকবেন । কারন আপনার বয়স ৪০ হয়ে গেছে , আর আমাদের রুলস অনুজায়ী ৪০ বছর থেকে কাওকেই ওসব জায়গায় এলাউ করবো না । `)

            } else if (age > 40) {
                return (` হ্যালো ${ name } স্যার আপনি এই পার্টিতে যেতে পারবেন না কারন আপনি বুড়ো হয়ে গেছেন , আপনার এই পার্টিতে যেতে হলে আরো ${ age - 40 } বছর আগে আসতে হতো । `)
            }
        }

    }

    // Age Calculetor

    this.age = function (name, year) {

        if (name == "" || year == "") {

            alert(` Plz.. Fill In The All File `)
            console.log(` File Not Input `);

        } else {
            return (` 
             
            Your Name           : ${ name }.
            Your Current Age    : ${ 2021 - year } Years.
        
        `)
        }

    }

    // Currency Calculetor

    this.currency = function (type, amount) {

        if (type == "" || amount == "") {
            alert(` Plz.. Fill In The All File `)
            console.log(` File Not Input `);
        } else {
            if (type == 'USD') {
                return (` ${ amount } ${ type } = ${ amount * 86 } BDT `);
            } else if (type == 'CAD') {
                return (` ${ amount } ${ type } = ${ amount * 96 } BDT `);
            } else if (type == 'POUND') {
                return (` ${ amount } ${ type } = ${ amount * 130 } BDT `);
            } else if (type == 'EURO ') {
                return (` ${ amount } ${ type } = ${ amount * 16} BDT `)
            }
        }

    }

    // Area Calculetor

    this.area = function (type, lenth, height) {

        if (type == "" || lenth == "" || height == "") {
            alert(` Plz.. Fill In The All File `)
            console.log(` File Not Input `);
        } else {
            if (type == 's') {
                return lenth * lenth;
            } else if (type == 'rt') {
                return lenth * height;
            } else if (type == 't') {
                return 1.5 * lenth * height;
            }
        }

    }


}