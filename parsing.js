"use strict";

function displayName(name) {

    let firstNameIndexEnd = name.indexOf(" ");
    
    let firstName = name.substring(0 , firstNameIndexEnd);
    
    let fname = "First Name: " + firstName;
    
    //let middleName = name.substring(firstNameIndexEnd);

   // let mname = "Middle Name: " +middleName;
    
    let lastName = name.substring(firstNameIndexEnd);
    
    let lname = "Last Name: " + lastName;

    let fullName = "Name: " + firstName + lastName;
    
    let result = fullName + '\n' + fname + '\n' +lname;
    
    
    return result;
    }
    
    let p1 = "Tracie Smith";
    
    let p2 = "Kemar Plummer Jr";
    
    let p3 = "Michelle Roberts";
    
    console.log(displayName(p1));
    console.log(displayName(p2));
    console.log(displayName(p3));