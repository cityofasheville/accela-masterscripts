function getContactsData(capId){
  var CapContacts = aa.people.getCapContactByCapID(capId);
  var returnContacts = [];
  if (CapContacts.getSuccess()) {
    var ContactOutputs = CapContacts.getOutput();
    for (yy in ContactOutputs) {
      var Contact = {};
      var peep = ContactOutputs[yy].getCapContactModel().getPeople();
      Contact.type = peep.getContactType();
      Contact.name = peep.getContactName();
      Contact.email = peep.email;
      returnContacts.push(Contact);
    }
  }
  return returnContacts;
}

function getLicProfData(capId){
  // returns Licensed Professionals for given Cap: [{type, name, email}]
  var LicProfs = aa.licenseProfessional.getLicensedProfessionalsByCapID(capId);
  var returnLicProfs = [];
  if (LicProfs.getSuccess()) {
    var LicProfOutputs = LicProfs.getOutput();
    for (yy in LicProfOutputs) {
      var licProf = {};
      var peep = LicProfOutputs[yy];
      licProf.business = peep.getBusinessName();
      licProf.type = peep.licenseType;
      licProf.name = peep.contactFirstName + ' ' + peep.contactLastName;
      licProf.email = peep.email;
      returnLicProfs.push(licProf);
    }
    return returnLicProfs;
  }
}


var  capId = aa.cap.getCapID("19-00719").getOutput();

var licprofs = getLicProfData(capId);
var emailContent
  = '<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' 
  + capIDString + ' <br>Location: ' + CapAddress + '<br>Owner: ' + ownerName
  + '<br><p>'
  + ' Hello, this is just to let you know that your permit has been issued, and we are notifying the '
  + ' licensed professionals (contractors) who are listed on the permit. '
  + '</p><p>'
  + ' Those professionals are: '
  + '</p><table>'
  + '<tr><th>' + 'Business' + '</th><th>' + 'Type' + '</th><th>' + 'Name' + '</th><th>' + 'Email' + '</th></tr>';
licprofs.forEach(function(xx) {
  emailContent 
  = emailContent + '<tr><td>' + xx.business + '</td><td>' + xx.type + '</td><td>' 
  + xx.name + '</td><td>' + xx.email + '</td></tr>';
});
emailContent 
  = emailContent
  + '</table><p>'
  + 'If any of these professionals are incorrect, please let us know at pac@ashevillenc.gov or at 828-259-5846. '
  + 'We look forward to working with you. Thank you,'
  + '</p><p>'
  + 'City of Asheville Development Services Department</p><hr></body></html>';

email(
  emailTo,
  fromAddr,
  'Permit Issued by City of Asheville - Licensed Professionals Listed Below', 
  emailContent);
