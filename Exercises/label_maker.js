let contact = {
name : "Gabriel Langley",
addressline1 : "2260 WhiteBluff Way",
city : "Buford",
state : "Georgia",
Zip : 30078,



}
function printContactInfo(myInfo) {
    console.log(myInfo.name);
    console.log(myInfo.addressline1);
    console.log(myInfo.city + "," + myInfo.state + " " + myInfo.Zip);
    
}

printContactInfo(contact)