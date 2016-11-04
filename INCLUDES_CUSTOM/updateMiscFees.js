// TODO:  function not referenced in master script migration

function updateMiscFees(){

var createAddress = parseInt(AInfo['Number of Addresses being Created?']);
var changeAddress = parseInt(AInfo['Number of Addresses Changed?']);
var qty = 0;

if (AInfo['Work includes demolition of an existing building?']=="Yes") 
  {
    updateFee("C_020","COM_DEMO","FINAL",1,"N","N");
    updateFee("AQ03","COM_DEMO","FINAL",1,"N","N");
    updateFee("AQ04","COM_DEMO","FINAL",1,"N","N");
    updateFee("TECH","COM_DEMO","FINAL",1,"N","N");
  }

if ((AInfo['Work includes partial or interior demolition?']=="Yes") || (AInfo['Work includes alterations or repairs to an existing building?']=="Yes")) 
  {
    updateFee("C_019","COM_DEMO","FINAL",1,"N","N");
    updateFee("AQ03","COM_DEMO","FINAL",1,"N","N");
    updateFee("AQ04","COM_DEMO","FINAL",1,"N","N");
    updateFee("TECH","COM_DEMO","FINAL",1,"N","N");
  } 

if (createAddress>0) 
  {
    updateFee("ADD01","GENERAL","FINAL",1,"N","N");
    updateFee("TECH","COM_BLD","FINAL",1,"N","N");
  } 

if (changeAddress>0) 
  {
    updateFee("ADD02","GENERAL","FINAL",1,"N","N");
    updateFee("TECH","COM_BLD","FINAL",1,"N","N");
  } 
}

