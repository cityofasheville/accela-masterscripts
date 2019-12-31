function getLicProfData(capId){
  // returns Licensed Professionals for given Cap: [{business, type, name, email}]
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
