




let name = prompt('Name Plz')
let age = prompt('Type Your Age')





if( age >= 18 && age <= 50 ) {
    console.log(` হ্যালো ${ name  } আপনি বিয়ে করতে পারবেন . `);
}else if( age > 50 ) {
    console.log(` হ্যালো ${ name  } আপনি এখনো বুইড়া হইছেন . আপনা ${ age - 50 } বছরের ভিতরে বিয়ে করা উচিত ছিলো .`);
}else{
    console.log(` হ্যালো বাবু ${ name  } তুমি এখনো বাচ্চা. তুমি এখনো ${ 18 - age } বছর অপেক্ষা করতে হবে . `);
}

