function emailByLicenseType(emailSubj, emailBody, licenseType, fromAddr, toAddr) {
  toAddr = typeof toAddr !== 'undefined' && toAddr !== null ? toAddr : "";
  fromAddr = typeof fromAddr !== 'undefined' && fromAddr !== null ? fromAddr : "developmentservices@ashevillenc.gov";
  licenseType = typeof licenseType !== 'undefined' && licenseType !== null ? licenseType : "";
  var emailAddrs = [];

  // if(toAddr != "") { emailAddrs.push(toAddr); }

  if(licenseType != "") {
    var profArr = getLicenseProfessional(capId);
    profArr.toJSON = function(key) { return this; }
    emailBody = emailBody + JSON.stringify(profArr);
    emailAddrs.push('wha@noway.arg');
    // var CapContacts = aa.people.getCapContactByCapID(capId);
    // if (CapContacts.getSuccess()) {
    //   var ContactOutputs = CapContacts.getOutput();
    //   for (yy in ContactOutputs) {
    //     if(contactType.equals(ContactOutputs[yy].getCapContactModel().getPeople().getContactType())) { 
    //       if(ContactOutputs[yy].getEmail() != null) {
    //         emailAddrs.push(ContactOutputs[yy].getEmail());
    //       }
    //     }
    //   }
    // }
  }

  //var profArr = getLicenseProfessional(capId);
  //if (profArr != null) {
  //	for(x in profArr) if(profArr[x].getEmail() + '' != '') email(profArr[x].getEmail(),'noreply@ashevillenc.gov','Inspection Resulted','You are a professional on permit '+capIDString+' An Inspection '+inspType+' was completed with a result of '+inspResult+'.<br>Inspection Comment: '+inspComment+'<br><br><br>Thank You.');
  //	}

  var addrString = emailAddrs.join(';') 
  if(addrString.indexOf("@") > 0) {
    aa.sendMail(fromAddr, addrString, toAddr, emailSubj, emailBody); 
    logDebug("Successfully sent emails");
  }else{
    logDebug("Couldn't send emails, invalid address");
  }
}
// TO CALL: emailByLicenseType(emailSubj, emailBody, licenseType, fromAddr, toAddr) 
