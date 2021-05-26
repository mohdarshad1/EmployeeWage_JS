//UC-1: 6 Digit Pin Code

let PinRegex = RegExp('^[1-9]{1}[0-9]{5}$');

let pincode_1 = "400088";
let pincode_2 = "A400088";
let pincode_3 = "400088B";

check_validity(pincode_1);

//UC-2: Restrict Alphabet at First Place
check_validity(pincode_2);

//UC-3: Restrict Alphabet at Last Place
check_validity(pincode_3);


function check_validity(sample){
    let output = PinRegex.test(sample);
    console.log(sample+" Pincode is Valid: "+output);
}