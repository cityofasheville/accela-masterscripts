function emailContactAndOthers(emailSubj, emailBody, emailOther) { // ContactType
  var fromAddr = "noreply@accela.com",
      ContactType = "Applicant",
      emailAddr = "";
  if(4 == arguments.length) { 
    ContactType = arguments[3]; //Optional fourth param ContactType
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
    aa.sendMail(fromAddr, emailAddr, emailOther, emailSubj, emailBody); 
    logDebug("Successfully sent email to " + ContactType)
  }else{
    logDebug("Couldn't send email to " + ContactType + ", no valid email address");
  }
}