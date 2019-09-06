function emailByContactType(emailSubj, emailBody, contactType, fromAddr, toAddr) {
    toAddr = typeof toAddr !== 'undefined' ? toAddr : "";
    fromAddr = typeof fromAddr !== 'undefined' ? fromAddr : "developmentservices@ashevillenc.gov";
    contactType = typeof contactType !== 'undefined' ? contactType : "";
    var emailAddrs = [];

    if(toAddr != "") { emailAddrs.push(toAddr); }

    if(contactType != "") {
      var CapContacts = aa.people.getCapContactByCapID(capId);
      if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (yy in ContactOutputs) {
          if(contactType.equals(ContactOutputs[yy].getCapContactModel().getPeople().getContactType())) { 
            if(ContactOutputs[yy].getEmail() != null) {
              emailAddrs.push(ContactOutputs[yy].getEmail());
            }
          }
        }
      }
    }

    var emailString = emailAddrs.join(';') 
    if(emailString.indexOf("@") > 0) {
      aa.sendMail(fromAddr, emailString, toAddr, emailSubj, emailBody); 
      logDebug("Successfully sent emails");
    }else{
      logDebug("Couldn't send emails, invalid address");
    }
}
