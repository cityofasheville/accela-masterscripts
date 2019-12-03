function emailAllContacts(emailSubj, emailBody, emailOther) {
    var fromAddr = "developmentservices@ashevillenc.gov";
    var emailAddrs = [];

    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
      var ContactOutputs = CapContacts.getOutput();
      for (yy in ContactOutputs) {
          if(ContactOutputs[yy].getEmail() != null) {
            emailAddrs.push(ContactOutputs[yy].getEmail());
          }
      }
    }
    var emailString = emailAddrs.join(';');
    if(emailString.indexOf("@") > 0) {
      aa.sendMail(fromAddr, emailString, emailOther, emailSubj, emailBody); 
      logDebug("Successfully sent emails");
    }else{
      logDebug("Couldn't send emails, invalid address");
    }
}
