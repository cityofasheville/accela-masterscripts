/*------------------------------------------------------------------------------------------------------/
| Program : ACA Page Flow Template.js
| Event   : ACA Page Flow Template
|
| Usage   : Master Script by Accela.  See accompanying documentation and release notes.
|
| Client  : N/A
| Action# : N/A
|
| Notes   :
|
/-----------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
| START User Configurable Parameters
|
|     Only variables in the following section may be changed.  If any other section is modified, this
|     will no longer be considered a "Master" script and will not be supported in future releases.  If
|     changes are made, please add notes above.
/------------------------------------------------------------------------------------------------------*/
var showMessage = false; // Set to true to see results in popup window
var showDebug = false; // Set to true to see debug messages in popup window
var useAppSpecificGroupName = false; // Use Group name when populating App Specific Info Values
var useTaskSpecificGroupName = false; // Use Group name when populating Task Specific Info Values
var cancel = true;
var useCustomScriptFile = true; // if true, use Events->Custom Script, else use Events->Scripts->INCLUDES_CUSTOM
/*------------------------------------------------------------------------------------------------------/
| END User Configurable Parameters
/------------------------------------------------------------------------------------------------------*/
var startDate = new Date();
var startTime = startDate.getTime();
var message = ""; // Message String
var debug = ""; // Debug String
var br = "<BR>"; // Break Tag

var useSA = false;
var SA = null;
var SAScript = null;
var bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS", "SUPER_AGENCY_FOR_EMSE");
if (bzr.getSuccess() && bzr.getOutput().getAuditStatus() != "I") {
	useSA = true;
	SA = bzr.getOutput().getDescription();
	bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS", "SUPER_AGENCY_INCLUDE_SCRIPT");
	if (bzr.getSuccess()) {
		SAScript = bzr.getOutput().getDescription();
	}
}

if (SA) {
	eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS", SA));
	eval(getScriptText(SAScript, SA));
} else {
	eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS"));
}

eval(getScriptText("INCLUDES_CUSTOM", null, useCustomScriptFile));

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

try {
	var cap = aa.env.getValue("CapModel");
	var capId = null; // for loadASI call
	var parentId = cap.getParentCapID();
	var appTypeResult = cap.getCapType();
	var appTypeString = appTypeResult.toString(); // Convert application type to string ("Building/A/B/C")
	var appTypeArray = appTypeString.split("/"); // Array of application type string
	var AInfo = new Array(); // Create array for tokenized variables
	loadAppSpecific4ACA(AInfo); // Add AppSpecific Info

	// page flow custom code begin

	var allContractorsExist = true;
	var lpTypes = new Array();
	var commentText = "Each permit requires a specified contractor license. Please add all required contractor types to the license professional list. This application requires the following contractors to be in the list. ";

	var asiContractorTypes = new Array(); //used to store ASI contractor types to LP professional Types
	if (AInfo["Electrical Permit"] == "Yes") {
		asiContractorTypes.push("Electrical Contractor");
		commentText = commentText + "<br>Electrical Contractor";
	}
	if (AInfo["Mechanical Permit"] == "Yes")
		asiContractorTypes.push("Heating Contractor");
	if (AInfo["Plumbing Permit"] == "Yes") {
		asiContractorTypes.push("Plumbing Contractor");
		commentText = commentText + "<br>Plumbing Contractor";
	}
	if (AInfo["Sprinkler System Permit"] == "Yes") {
		asiContractorTypes.push("Fire Protection Systems Contractor");
		commentText = commentText + "<br>Fire Protection System Contractor";
	}
	if (AInfo["Gas Piping Permit"] == "Yes") {
		asiContractorTypes.push("Fuel Piping Contractor");
		commentText = commentText + "<br>Fuel Piping Contractor OR Heating Contractor";
	}
	if (AInfo["Gas Piping Permit"] == "Yes") {
		asiContractorTypes.push("Heating Contractor");
		commentText = commentText + "<br>Heating Contractor";
	}
	if (AInfo["Total Project Valuation"] < 30000) {
		asiContractorTypes.push("General Contractor");
		asiContractorTypes.push("Unlicensed Contractor");
		commentText = commentText + "<br>General Contractor OR Unlicensed Contractor";
	}
	if (AInfo["Total Project Valuation"] >= 30000) {
		asiContractorTypes.push("General Contractor");
		commentText = commentText + "<br>General Contractor";
	}

	var lpList = cap.getLicenseProfessionalList();
	logDebug("Returned LP Size: " + lpList.size()); //dumpObj(lpList);

	if (lpList.size() > 0) {
		var lpArr = lpList.toArray();
		for (var cLP in lpArr)
			lpTypes.push(String(lpArr[cLP].getLicenseType()));
	}

	if (lpTypes != "") {
		for (var xCon in lpTypes) {
			if (lpTypes[xCon] == "General Contractor" && AInfo["Total Project Valuation"] < 30000)
				lpTypes.push("Unlicensed Contractor"); // this code is needed because of the one or the oher rule
			if (lpTypes[xCon] == "Unlicensed Contractor" && AInfo["Total Project Valuation"] < 30000)
				lpTypes.push("General Contractor"); // this code is needed because of the one or the oher rule
			if (lpTypes[xCon] == "Fuel Piping Contractor")
				lpTypes.push("Heating Contractor"); // this code is needed because of the one or the oher rule
			if (lpTypes[xCon] == "Heating Contractor")
				lpTypes.push("Fuel Piping Contractor"); // this code is needed because of the one or the oher rule
			if (asiContractorTypes != "") {
				for (var eCon in asiContractorTypes)
					if (!exists(asiContractorTypes[eCon], lpTypes))
						allContractorsExist = false;
			}
		}
	}

	if (allContractorsExist == false) {
		cancel = true;
		showMessage = true;
		comment(commentText);
	}
	// page flow custom code end
} catch (err) {
	aa.print(("**ERROR** ") + err.message + " Line " + err.lineNumber);
	aa.print("Stack: " + err.stack);
}

if (debug.indexOf("**ERROR") > 0) {
	aa.env.setValue("ErrorCode", "-2");
	aa.env.setValue("ErrorMessage", debug);
} else {
	if (cancel) {
		aa.env.setValue("ErrorCode", "-2");
		if (showMessage)
			aa.env.setValue("ErrorMessage", message);
		if (showDebug)
			aa.env.setValue("ErrorMessage", debug);
	} else {
		aa.env.setValue("ErrorCode", "0");
		if (showMessage)
			aa.env.setValue("ErrorMessage", message);
		if (showDebug)
			aa.env.setValue("ErrorMessage", debug);
	}
}
