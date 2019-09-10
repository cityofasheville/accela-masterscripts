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
//    logDebug("LP Name: " + tProfObj.people.getFirstName() + " " + tProfObj.people.getLastName());
    var vProfObj = new licenseProfObject(tProfObj.getLicenseNbr()); 
    // refLicModel,infoTableGroupCodeObj,infoTableSubGroupCodesObj,infoTables,attribs,valid,validTables,validAttrs,getEmailTemplateParams,refreshTables,getMaxRowByTable,addTableRow,addTableFromASIT,removeTableRow,removeTable,setTableEnabledFlag,setDisplayInACA4Table,getAttribute,setAttribute,updateFromRecordContactByType,updateFromAddress,updateFromRecordLicensedProf,copyToRecord,enable,disable,getAssociatedRecords,updateRecord
    
    var keysProfObj = Object.keys(vProfObj);
    logDebug("keysProfObj: " + keysProfObj);

    var refLicModel = vProfObj.refLicModel;
    var keysRefLicModel = Object.keys(refLicModel);
    logDebug("keysRefLicModel: " + keysRefLicModel);

    var licenseType = vProfObj.refLicModel.getLicenseType();
    logDebug("licenseType: " + licenseType);

// hashCode,acaPermission,wait,auditID,setContactLastName,businessLicense,getCountry,setBusinessName2,getContactLastName,setAddress3,
// businessName2,setAddress2,wcPolicyNo,setSuffixName,selfIns,getAuditID,getPolicy,setCountryCode,getAuditStatus,getSocialSecurityNumber,
// getEMailAddress,setSocialSecurityNumber,setWcSuspendDate,insuranceAmount,setLicenseExpirationDate,getContactMiddleName,setContrLicNo,
// getLicenseIssueDate,setEinSs,setWcPolicyNo,getComment,wcCancDate,licenseLastRenewalDate,getInfoTableGroupCodeModel,setLicState,
// getWcExempt,getFein,setContactMiddleName,setPolicy,recLocd,getClass,getPhone2CountryCode,setAddress1,setWcExempt,setInsuranceAmount,
// setRecLocd,setLicenseBoard,getFax,setServiceProviderCode,getLicenseType,setAuditDate,insuranceCo,setWcInsCoCode,
// peopleAttributeScriptModels,getState,setWcIntentToSuspNtcSentDate,cityCode,getCountryCode,address1,phone2,address2,
// setInsuranceExpDate,phone3,address3,getPermStatusCode,phone1,holdDesc,getAuditDate,contLicBusName,getLicenseExpirationDate,
// getAcaPermission,licSeqNbr,setInfoTableGroupCodeModel,permStatusCode,getContryCode,setAttributes,wcInsCoCode,fax,setWcExpDate,
// getWcPolicyNo,socialSecurityNumber,countryCode,setHoldCode,country,getLicState,contrLicNo,getLicenseModel,getLicSeqNbr,einSs,
// wcSuspendDate,getPhone2,getBusinessLicense,getPhone3,getPhone1,setLicenseIssueDate,phone3CountryCode,setFax,getMaskedSsn,
// licenseExpirationDate,licOrigIssDate,setPhone3,setPhone2,getLicenseBoard,businessLicExpDate,setPhone1,setMaskedSsn,getWcEffDate,
// setAcaPermission,getHoldCode,getPhone1CountryCode,getZip,getPhone3CountryCode,infoTableGroupCodeModel,getInsuranceAmount,
// getPeopleAttributeScriptModels,setEMailAddress,setAgencyCode,contactLastName,setCity,contactFirstName,setLicenseLastRenewalDate,
// wcExpDate,getEinSs,licenseIssueDate,setPhone2CountryCode,attributes,getTypeFlag,setComment,setContryCode,setBusinessLicExpDate,
// stateLicense,setCountry,setLicSeqNbr,city,wcIntentToSuspNtcSentDate,serviceProviderCode,setWcCancDate,licenseType,equals,getSelfIns,
// phone2CountryCode,getBusinessName,setAuditStatus,comment,setCityCode,EMailAddress,getAddress3,getAddress2,getAddress1,setHoldDesc,
// typeFlag,maskedSsn,getContactFirstName,recSecurity,licState,getRecLocd,fein,getCity,getWcIntentToSuspNtcSentDate,setWcEffDate,
// wcExempt,getCityCode,agencyCode,getLicenseLastRenewalDate,getWcInsCoCode,getRecSecurity,insuranceExpDate,getServiceProviderCode,
// auditDate,getContLicBusName,setFaxCountryCode,setStateLicense,setLicenseType,setTypeFlag,setBusinessName,businessName,getAgencyCode,
// getBusinessLicExpDate,setBusinessLicense,getHoldDesc,getSuffixName,getFaxCountryCode,getInsuranceExpDate,auditStatus,setLicOrigIssDate,
// setContactFirstName,notifyAll,licenseBoard,setAuditID,faxCountryCode,getLicOrigIssDate,licenseModel,class,toString,policy,
// getAttributes,phone1CountryCode,getBusinessName2,state,setRecSecurity,getWcExpDate,contactMiddleName,getStateLicense,notify,
// getWcSuspendDate,setState,setSelfIns,holdCode,getInsuranceCo,suffixName,zip,setInsuranceCo,getContrLicNo,getWcCancDate,
// setContLicBusName,setPermStatusCode,setFein,setZip,wcEffDate,setPhone3CountryCode,setPhone1CountryCode,contryCode

    
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
