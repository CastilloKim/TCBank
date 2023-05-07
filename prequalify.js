"use strict";
var $ = function (id) { return document.getElementById(id);};

var applyForm = function() {
    var email1 = $("email_1").value;
    var email2 = $("email_2").value;
    var isValid = true;

//Validate email1
if (email1 === "") {
    $("email_1_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
} else {
    $("email_1_error"). firstChild.nodeValue = "";
}

//Validate email2
if (email1 !== email2) {
    $("email_2_error").firstChild.nodeValue = "This entry must equal the first entry.";
    isValid = false;
} else {
    $("email_2_error").firstChild.nodeValue = "";
}

//Validate First name
if ($("first_name").value === "") {
    $("first_name_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
} else {
    $("first_name_error").firstChild.nodeValue = "";
}

//Validate Last name
if ($("last_name").value === "") {
    $("last_name_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
} else {
    $("last_name_error").firstChild.nodeValue = "";
}

//Validate City
if ($("city").value === "") {
    $("city_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
} else {
    $("city_error").firstChild.nodeValue = "";
}

//Validate State
if ($("state").value === "") {
    $("state_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
} else {
    $("state_error").firstChild.nodeValue = "";
}

//Validate Zip
if ($("zip").value === "") {
    $("zip_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
} else {
    $("zip_error").firstChild.nodeValue = "";
}

//Validate Income
if ($("income").value === "") {
    $("income_error").firstChild.nodeValue = "This field is required.";
    isValid = true;
} else if ($("income").value >= 45000){
    alert("Congratulations, Your are prequalified for a loan. A representative will contact you soon");
    isValid = true;
} else if ($("income").value <= 45000) {
    alert ("We're sorry, you do not qualify for a loan at this time");
    isValid = true;
} else {
    $("income_error").firstChild.nodeValue = "";
}

//Validate ssn
if ($("ssn").value === "") {
    $("ssn_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
} else {
    $("ssn_error").firstChild.nodeValue = "";
}

if (isValid) {
    $("prequalify_form").apply();
}
};

var process = function() {
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";
    var msg = "Please review your entries and complete all required fields.";
    var email1 = $("email_1").value;
    var email2 = $("email_2").value;
    var first_name = $("first_name").value;
    var last_name = $("last_name").value;
    var city = $("city").value;
    var state = $("state").value;
    var zip = $("zip").value;
    var income = $("income").value;
    var ssn = $("ssn").value;
    var terms = $("terms").checked;

    if (email1 == "") {
        email1 = required;
        header = msg;
    }

    if (email2 =="") {
        email2 = required;
        header = msg;
    }

    if (first_name == "") {
        first_name = required;
        header = msg;
    }

    if (last_name == "") {
        last_name = required;
        header = msg;
    }

    if (city == "") {
        city = required;
        header = msg;
    }

    if (state == "") {
        state = required;
        header = msg;
    }

    if (zip == "") {
        zip = required;
        header = msg;
    }

    if (income == "") {
        income = required;
        header = msg;
    }

    if (ssn == "") {
        ssn = required;
        header = msg;
    }

    $("registration_header").firstChild.nodeValue = header;
    if (header == msg) {     
        html = html + "<tr><td>Email Address:</td><td>" + email1 + "</td></tr>";
        html = html + "<tr><td>Re-enter Email Address:</td><td>" + email2 + "</td></tr>";
        html = html + "<tr><td>Firt Name:</td><td>" + first_name + "</td></tr>";
        html = html + "<tr><td>Last Name:</td><td>" + last_name + "</td></tr>";
        html = html + "<tr><td>City:</td><td>" + city + "</td></tr>";
        html = html + "<tr><td>State:</td><td>" + state + "</td></tr>";
        html = html + "<tr><td>Zip Code:</td><td>" + zip + "</td></tr>";
        html = html + "<tr><td>Gross Income:</td><td>" + income + "</td></tr>";
        html = html + "<tr><td>Last 4 diigits of SSN:</td><td>" + ssn + "</td></tr>";
        html = html + "<tr><td>Terms:</td><td>" + terms + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = "";
        $("prequalify_form").apply();
    }
};

window.onload = function() {
    $("apply").onclick = applyForm;
    $("process").onclick = process;
    $("email_1").focus();
};

function resetForm() {
    document.getElementById("prequalify_form").reset();
};