function Achem() {
    //----------------------------------------------------------------------------------------------------------------------
    // This Is Age Calculetor

    this.age = function (name, age) {

        if (age >= 0 && age < 18) {
            return (` Hello ${ name } Your children 😥 `);

        } else if (age >= 18 && age <= 25) {
            return (` Hello ${ name } Welcome You Are Teenagers. You can get married now.🥰 `);

        } else if (age > 25 && age <= 40) {
            return (` Hello ${ name } Now You Are young . Enjoy Your marriage life 💕 `);

        } else if (age > 40) {
            return (` Hello ${ name } Now You Are Old People. You play with your grandchildren 👳‍♂️ `)
        }

    }

    //---------------------------------------------------------------------------------------------------------------------
    // This Is Area Calculetor

    this.area = function (type, height, lenth) {

        if (type === 't') {
            return (` Your Result : Triangle = ${ 1.5 * height * lenth } `);

        } else if (type === 's') {
            return (` Your Result : Square = ${ height * height } `)
        } else if (type === 'rt') {
            return (` Your Result : Rectangle = ${ height * lenth } `)
        }

    }


    //--------------------------------------------------------------------------------------------------------------------
    // This Is Age Result Calculetor

    this.ageCal = function (name, year) {

        return (` 
        
        Your Name        : ${ name }
        Your Current Age : ${ 2021 - year } Years Old !
        
        `);

    }

    //-------------------------------------------------------------------------------------------------------------------
    // This Is Currency Converter 

    this.currency = function (type, amount) {

        if (type === 'USD') {

            return ` ${ amount } ${ type } = ${ amount * 86 } BDT ! `;

        } else if (type === 'CAD') {

            return ` ${ amount } ${ type } = ${ amount * 65 } BDT ! `;

        } else if (type === 'POUND') {

            return ` ${ amount } ${ type } = ${ amount * 16 } BDT ! `;

        } else if (type === 'EURO') {
            return ` ${ amount } ${ type } = ${ amount * 116 } BDT ! `;
        }

    }


}