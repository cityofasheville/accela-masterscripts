// Returns array of email addresses, everyone of licenseType
// Param contactType can also be "ALL".
function getEmailsByLicenseType(licenseType) {
  var emailAddrs = [];
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
  return emailAddrs;
}

