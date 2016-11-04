function getPriority() {
	var itemCap = capId
	if (arguments.length > 1) itemCap = arguments[1]; // use cap ID specified in args
	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (cdScriptObjResult.getSuccess()) {
		var cdScriptObj = cdScriptObjResult.getOutput();
		if (!cdScriptObj)
			{ logDebug("**ERROR: No cap detail script object") ; return false; }
		cd = cdScriptObj.getCapDetailModel();
		return cd.getPriority();
	}
	else { logDebug("Error - No cap detail script object : " + cdScriptObjResult.getErrorMessage()) ; return null; }
	return null;
}

