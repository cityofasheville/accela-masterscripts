// Sends emails to everyone of licenseType
// Param licenseType can also be "ALL".
function emailByLicenseType(emailSubj, emailBody, licenseType, fromAddr, ccAddr) {
  ccAddr = typeof ccAddr !== 'undefined' && ccAddr != null ? ccAddr : "";
  fromAddr = typeof fromAddr !== 'undefined' && fromAddr != null ? fromAddr : "developmentservices@ashevillenc.gov";
  licenseType = typeof licenseType !== 'undefined' && licenseType != null ? licenseType : "";
  var emailAddrs = [];

  if(licenseType != "") {
    var profObjArray = getLicenseProfessional(capId);
    for (iProf in profObjArray) {
      var tProfObj = profObjArray[iProf];
      var vProfObj = new licenseProfObject(tProfObj.getLicenseNbr()); 
      if(licenseType == vProfObj.refLicModel.getLicenseType() || (licenseType == "ALL")) {
        if(tProfObj.getEmail() + '' != ''){
          emailAddrs.push(tProfObj.getEmail());
        }
      }
    }
    var addrString = emailAddrs.join(';') 
    if(addrString.indexOf("@") > 0) {
      aa.sendMail(fromAddr, addrString, ccAddr, emailSubj, emailBody); 
      logDebug("Successfully sent emails");
    }else{
      logDebug("Couldn't send emails, invalid address");
    }
  }
}
//     showDebug = true;
