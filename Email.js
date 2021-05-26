let PinRegex = RegExp('^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$');

//UC-1: Check Initial Part
let email_1 = "abc";
check_validity(email_1);

//UC-2: Chect @ and Part Latter it.
let email_2 = "abc@bridgelab";
check_validity(email_2);


function check_validity(sample){
    let output = PinRegex.test(sample);
    console.log(sample+" \nEmail is Valid: "+output);
}