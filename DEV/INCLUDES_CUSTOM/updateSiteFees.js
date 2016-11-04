// TODO:  function not referenced in master script migration

function updateSiteFees(){

var TotalSqFtNew = parseInt(AInfo['Total SqFt of New Construction']);
var SqFtGrading = parseInt(AInfo['SqFt of Land Disturbance/Grading']);
var stormWater = AInfo['Scope includes a storm water collection system?'];
var Driveway = parseInt(AInfo['Number of driveway cuts?']);
var floodWay = AInfo['Is the property located in a designated Floodway?'];
var floodFringe = AInfo['Is the property located in the 100 Year Flood Zone AE?'];
// var qty = 0;
logDebug("floodFringe- "+floodFringe);

  if (TotalSqFtNew <500) 
    {
      updateFee("PLN_SITE01","PLN_LEVELI","FINAL",1,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }

  if (TotalSqFtNew >=500 && TotalSqFtNew <=1499) 
    {
      updateFee("PLN_LVLI01","PLN_LEVELI","FINAL",1,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }

  if (TotalSqFtNew >=1500 && TotalSqFtNew <=34999)  
    {
      updateFee("PLN_LVLI02","PLN_LEVELI","FINAL",1,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }
    
  if (SqFtGrading <10000) 
    {
      updateFee("GR_SQFT01","PLN_LEVELI","FINAL",1,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }
    
  if (SqFtGrading >10000 && SqFtGrading <=43560) 
    {
      updateFee("GR_SQFT02","PLN_LEVELI","FINAL",1,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }
    
  if (SqFtGrading >=43560) 
    {
      qty = Math.ceil((SqFtGrading-43560)/43560);  
      updateFee("GR_SQFT02","PLN_LEVELI","FINAL",1,"N","N");
      updateFee("GR_ARCE01","PLN_LEVELI","FINAL",qty,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
      //logDebug("GR_ARCE01: "+GR_ARCE01+ "GR_SQFT02: "+ GR_SQFT02+ "QTY: "+ qty);
    }

  if (stormWater =="Yes") 
    {
      updateFee("SW_STWTR01","PLN_LEVELI","FINAL",1,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }

  if (Driveway >0) 
    {
      updateFee("DR_CDRVWY","PLN_LEVELI","FINAL",Driveway,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }

  if ((AInfo['Is the property at 2200 feet or higher in elevation?']=="Yes") && (AInfo['Does the property have an existing grade of 15 percent or more?']=="Yes"))
    {
      updateFee("STEEPSLOPE","PLN_LEVELI","FINAL",1,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }

  if (floodWay =="Yes") 
    {
      updateFee("FL_FLOOD02","FLOOD","FINAL",1,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }

  if (floodFringe =="Yes") 
    {
      updateFee("FL_FLOOD01","FLOOD","FINAL",1,"N","N");
      updateFee("TECH","COM_BLD","FINAL",1,"N","N");
    }
}


