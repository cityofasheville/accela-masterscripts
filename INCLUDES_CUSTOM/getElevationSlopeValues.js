
function getElevationSlopeValues(parcelNumber)
{
   if( ! parcelNumber) // not passed a valid string or number return false
   {
      logDebug("Function getElevationSlopeValues requires a valid String or Integer passed");
     return false;
   }
   var returnArray = new Array();
   // initializing the return array
   returnArray["maxElevation"] = null;
   returnArray["percentSlope"] = null;
   // var aURL = "https://coa-bc-steep-slope-calculator.herokuapp.com/api/slopebypin/" + parcelNumber;
   var aURL = "https://mapwnc.org/api/slopebypin/" + parcelNumber;
   // aa.print(aURL);
   var vOutObj = aa.httpClient.get(aURL);
   if(vOutObj.getSuccess())
   {
      var vOut = vOutObj.getOutput();
      //  aa.print(vOut);
      // not sure if we need this JSON.parse, getOutput might do this already
      var vOutParsed = JSON.parse(vOut);
      returnArray["maxElevation"] = vOutParsed.maxElevation;
      returnArray["percentSlope"] = vOutParsed.percentSlope;
   }
   return returnArray;
}

// function getElevationSlopeValues(parcelNumber)
// {
//    var returnArray = new Array();
//    returnArray["maxElevation"] = 2135.00; 
//    returnArray["percentSlope"] = 9.30; 
//    return returnArray;
// }
