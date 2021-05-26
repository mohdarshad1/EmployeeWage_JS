let PinRegex = RegExp('^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$');

//UC-1: Check Initial Part
let email_1 = "abc";
check_validity(email_1);

//UC-2: Chect @ and Part Latter it.
let email_2 = "abc@bridgelab";
check_validity(email_2);

//UC-3: Add . after Bridgelab
let email_3 = "abc.@bridgelab.co";
check_validity(email_3);

//UC-4: Handling Optional Part
let email_4 = "abc.x_yz@bridgelabz.co.in";
check_validity(email_4);


function check_validity(sample){
    let output = PinRegex.test(sample);
    console.log(sample+" \nEmail is Valid: "+output);
}