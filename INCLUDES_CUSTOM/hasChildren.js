function hasChildren(capTypeToMatch) {

	var typeArray = capTypeToMatch.split("/");
	if (typeArray.length != 4)
		logDebug("**ERROR The following cap type parameter is incorrectly formatted: " + capTypeToMatch);

	var childResult = aa.cap.getChildByMasterID(capId);
	var found = false;
	if (childResult.getSuccess())  {
    		var childResultObject = childResult.getOutput();
		for (j in childResultObject) {
			var childCapId = childResultObject[j].getCapID();
			var childCap = aa.cap.getCap(childCapId).getOutput();
			var childCapType = childCap.getCapType().toString();
			var childTypeArray = childCapType.split("/");
			isMatch = true;
			for (yy in childTypeArray) {
				if (!typeArray[yy].equals(childTypeArray[yy]) && !typeArray[yy].equals("*")) {
					isMatch = false;
				}
			}
			if (isMatch) {
				found = true;
				break;
			}
	  	}
	}
	return found;
}


