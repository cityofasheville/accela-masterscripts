function emailByLicenseType(emailSubj, emailBody, licenseType, fromAddr, toAddr) {
  toAddr = typeof toAddr !== 'undefined' && toAddr != null ? toAddr : "";
  fromAddr = typeof fromAddr !== 'undefined' && fromAddr != null ? fromAddr : "developmentservices@ashevillenc.gov";
  licenseType = typeof licenseType !== 'undefined' && licenseType != null ? licenseType : "";
  var emailAddrs = [];

  if(licenseType != "") {
    // showDebug = true;
    var profObjArray = getLicenseProfessional(capId);
    for (iProf in profObjArray) {
      var tProfObj = profObjArray[iProf];
      var vProfObj = new licenseProfObject(tProfObj.getLicenseNbr()); 
      if(licenseType == vProfObj.refLicModel.getLicenseType()) {
        if(tProfObj.getEmail() + '' != ''){
          emailAddrs.push(tProfObj.getEmail());
        }
      }
    }
    var addrString = emailAddrs.join(';') 
    if(addrString.indexOf("@") > 0) {
      aa.sendMail(fromAddr, addrString, toAddr, emailSubj, emailBody); 
      logDebug("Successfully sent emails");
    }else{
      logDebug("Couldn't send emails, invalid address");
    }
  }
}
// TO CALL: emailByLicenseType(emailSubj, emailBody, licenseType, fromAddr, toAddr) 
