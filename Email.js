let PinRegex = RegExp('^[a-z]{3,}$');

//UC-1: Check Initial Part
let email_1 = "abc";
check_validity(email_1);

function check_validity(sample){
    let output = PinRegex.test(sample);
    console.log(sample+" \nEmail is Valid: "+output);
}