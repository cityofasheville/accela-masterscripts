/*------------------------------------------------------------------------------------------------------/
| Test Parameters - Modify as needed
/------------------------------------------------------------------------------------------------------*/


var myCapId = "CMB15-00315";
var myUserId = "ADMIN";
var manipulateSysDate = false; //use this to play with sysDate
var mySimDate = aa.date.parseDate("2016-12-01");  //populate if manipulateSysDate = true  Date string format  YYYY-MM-DD

//var controlString = "ApplicationConditionAddAfter"; 	
//var controlString = "WorkflowTaskUpdateAfter"; 	  wfTask="Application Intake";  wfStatus="Accepted";
var controlString = "InspectionResultSubmitAfter"; 	var inspResult="APPROVED"; var inspType = "9899 Water - Final";
//var controlString = "ApplicationSubmitBefore"; 	
//var controlString = "ApplicationSubmitAfter"; 	

var preExecute = "PreExecuteForAfterEvents";  	// Standard choice to execute first (for globals, etc) (PreExecuteForAfterEvent or PreExecuteForBeforeEvents)
//var preExecute = "PreExecuteForBeforeEvents";  	// Standard choice to execute first (for globals, etc) (PreExecuteForAfterEvent or PreExecuteForBeforeEvents)

/*------------------------------------------------------------------------------------------------------/
| Set Required Environment Variables Value 
/------------------------------------------------------------------------------------------------------*/
var tmpID = aa.cap.getCapID(myCapId).getOutput();
if(tmpID != null){
	aa.env.setValue("PermitId1",tmpID.getID1());
	aa.env.setValue("PermitId2",tmpID.getID2());
	aa.env.setValue("PermitId3",tmpID.getID3());
}
aa.env.setValue("CurrentUserID",myUserId);

/*------------------------------------------------------------------------------------------------------/
| Log Globals and Add Includes
/------------------------------------------------------------------------------------------------------*/
var SCRIPT_VERSION = 2.0
var useProductCustomScript = true;  // set to true to use the "productized" INCLUDES_CUSTOM (events->Custom Script), false to use scripts from (events->scripts)
var useProductIncludesScript = false; // set to true to use the other INCLUDES files from the product (events->Master Scripts), false to use from non prod (events->scripts)

eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS",null,useProductIncludesScript));
eval(getScriptText("INCLUDES_ACCELA_GLOBALS",null,useProductIncludesScript));
eval(getScriptText("INCLUDES_CUSTOM",null,useProductCustomScript));

//For sysDate manipulation
if (manipulateSysDate){
	logDebug("The old sys date is: " + convertDate(sysDate));
	sysDate = mySimDate;
	logDebug("new sys date for this run is: " + convertDate(sysDate));
}

function getScriptText(vScriptName, servProvCode, useProductScripts) {
	if (!servProvCode)
		servProvCode = aa.getServiceProviderCode();
	vScriptName = vScriptName.toUpperCase();
	var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
	try {
		if (useProductScripts) {
			var emseScript = emseBiz.getMasterScript(aa.getServiceProviderCode(), vScriptName);
		} else {
			var emseScript = emseBiz.getScriptByPK(aa.getServiceProviderCode(), vScriptName, "ADMIN");
		}
		return emseScript.getScriptText() + "";
	} catch (err) {
		return "";
	}
}


if (preExecute.length) doStandardChoiceActions(preExecute,true,0); 	// run Pre-execution code

logGlobals(AInfo);

doStandardChoiceActions(controlString,true,0);

//this is where we try our new code and functions
try {
	showDebug = true;

	//
	//user test code goes here
	//
	

} catch (err) {
	logDebug("A JavaScript Error occured: " + err.message + " In Line " + err.lineNumber);
}

aa.env.setValue("ScriptReturnCode", "1");
aa.env.setValue("ScriptReturnMessage", debug)

