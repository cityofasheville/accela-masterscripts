function emailByLicenseType(emailSubj, emailBody, licenseType, fromAddr, toAddr) {
  toAddr = typeof toAddr !== 'undefined' && toAddr !== null ? toAddr : "";
  fromAddr = typeof fromAddr !== 'undefined' && fromAddr !== null ? fromAddr : "developmentservices@ashevillenc.gov";
  licenseType = typeof licenseType !== 'undefined' && licenseType !== null ? licenseType : "";
  var emailAddrs = [];

  // if(toAddr != "") { emailAddrs.push(toAddr); }

  if(licenseType != "") {
    var profArr = getLicenseProfessional(capId);
    if (profArr != null) {
    	for(x in profArr) emailAddrs.push(profArr[x].getEmail()); 
  	}
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
  showDebug = true;
  var profObjArray = getLicenseProfessional(capId);
  for (iProf in profObjArray) {
    var tProfObj = profObjArray[iProf];
    logDebug("LP Name: " + tProfObj.people.getFirstName() + " " + tProfObj.people.getLastName());
    // var vProfObj = new licenseProfObject(tProfObj.getLicenseNbr());
    // logDebug("LP Email: " + vProfObj.refLicModel.getEMailAddress());
    // if(!matches(vProfObj.refLicModel.getEMailAddress(),null,undefined,"")) {
    //   logDebug("LP Email: " + vProfObj.refLicModel.getEMailAddress());
    //   var eParams = aa.util.newHashtable();
    //   addParameter(eParams, "$$recordTypeAlias$$", cap.getCapType().getAlias());
    //   getRecordParams4Notification(eParams);
    //   getACARecordParam4Notification(eParams,acaURL);
    //   vProfObj.getEmailTemplateParams(eParams);
    //   getPrimaryAddressLineParam4Notification(eParams);
    //   // getWorkflowParams4Notification(eParams); 
    //   // getContactParams4Notification(eParams,contactTypesArray);
    //   sendNotification(agencyReplyEmail,vProfObj.refLicModel.getEMailAddress(),"",notificationTemplate,eParams,null);
    // } 
  }


  var addrString = emailAddrs.join(';') 
  if(addrString.indexOf("@") > 0) {
    aa.sendMail(fromAddr, addrString, toAddr, emailSubj, emailBody); 
    logDebug("Successfully sent emails");
  }else{
    logDebug("Couldn't send emails, invalid address");
  }
}
// TO CALL: emailByLicenseType(emailSubj, emailBody, licenseType, fromAddr, toAddr) 
