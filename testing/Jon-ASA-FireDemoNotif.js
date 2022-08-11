// ASA

// added 8/11/22 -Jon
showDebug = true;


function listObj(obj) {
  for (x in obj) {
    if (typeof (obj[x]) === "function") {
      aa.print(x);
    }
  }
  for (x in obj) {
    if (obj[x] && typeof (obj[x]) !== "function") {
      aa.print(x + " = " + obj[x]);
    }
  }
}

if (appMatch('Permits/Commercial/Demolition/*') ) {
    var theApplicant = getApplicantInfo(capId);
    listObj(theApplicant);
    listObj(capId);
    email('wrogers@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Demolition Permit Notification: ' + capIDString, 
    'This email is to notify you that a new demolition permit has been submitted.' + '<br>' 
        + 'Permit number: ' + capIDString
        + '<br>'
        + 'Applicant Point of Contact Information: ' 
        + '<br>'
        + 'Applicant Full name: ' + theApplicant.name
        + '<br>'
        + 'Applicant Email: ' + theApplicant.email
        + '<br>'
        + 'Applicant Phone: ' + theApplicant.phone
        + '<br>'
        + 'Applicant Address: ' + theApplicant.addressLine1 + " " + theApplicant.city +  "," + theApplicant.state + " " + theApplicant.zip
        );
}
