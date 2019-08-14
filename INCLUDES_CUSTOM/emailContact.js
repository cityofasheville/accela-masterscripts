// overwrites emailContact function. Changed reply address.
function emailContact(emailSubj, emailBody) { // ContactType
    var fromAddr = "developmentservices@ashevillenc.gov",
        ContactType = "Applicant",
        emailAddr = "";
    if(3 == arguments.length) { 
      ContactType = arguments[2]; //Optional third param ContactType
    }
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (yy in ContactOutputs) {
          if(ContactType.equals(ContactOutputs[yy].getCapContactModel().getPeople().getContactType())) { 
            if(ContactOutputs[yy].getEmail() != null) {
              emailAddr = "" + ContactOutputs[yy].getEmail();
            }
          }
        }
    }
    if(emailAddr.indexOf("@") > 0) {
      aa.sendMail(fromAddr, emailAddr, null, emailSubj, emailBody); 
      logDebug("Successfully sent email to " + ContactType)
    }else{
      logDebug("Couldn't send email to " + ContactType + ", no valid email address");
    }
}