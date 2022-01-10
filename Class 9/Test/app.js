

let phone = JSON.parse(localStorage.getItem('phoneData'))

phone.map((data) => {

    console.log(`
    Name        :   ${data.name}
    Number      :   ${data.phoneNumber}
    Relation    :   ${data.relation}
    Locaation   :   ${data.location}
    `);
})




