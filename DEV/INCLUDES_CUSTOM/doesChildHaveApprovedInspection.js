function doesChildHaveApprovedInspection(childType, childInspType) {
 childArr = getChildren(childType);
	if (childArr && childArr.length > 0){
    for (cIndex in childArr) {
        	thisChildId = childArr[cIndex];
        	childCapResult = aa.cap.getCap(thisChildId);
        	if (childCapResult.getSuccess()) {
        		childCap = childCapResult.getOutput();
        		logDebug(childCap);

                //3 lines added by Keith 4/30/16
                cCapObj = aa.cap.getCap(thisChildId); cCap = cCapObj.getOutput();cCapId = cCap.getCapID()
                issueGPTo = getGradingPermitTSI("Permit Verification","Issue Grading Permit To",cCapId);
                logDebug("The Value of Issue Grading Permit To = "+issueGPTo);

                //Keith changed if to include issueGPTo 
        		if (matches( ""+childCap.getCapStatus(), "Issued", "Reissued", "Partial Issued") && issueGPTo != "NA" ) {
           		     logDebug("OK to perform check - getting inspections on the child");
           		     var inspResultObj = aa.inspection.getInspections(thisChildId);
           		     if (inspResultObj.getSuccess()) {
           		     	var childInspList = inspResultObj.getOutput();
           		         if (childInspList == null) {
           		         	logDebug("No inspections on the child - check fails")
           		             return false;
           		         }
           		         else {
           		         	for (xx in childInspList) {
           		         		childInspType = childInspList[xx].getInspectionType();
           			             	if (childInspType != null && childInspType.indexOf("GR-") == 0) {
           			             		if (matches(""+childInspList[xx].getInspectionStatus(), "Approved", "Approved with Conditions", "Not Applicable", "Partial Approval")) {
                        					logDebug("Found inspection of type and result - check passes")
                                    			return true;
                        				}
                            		}
                    		}
                        		logDebug("No inspection of type and result - check fails");
                        		return false;
                    	}
               	    }
               	else {
            	   logDebug("Error getting inspections on the child - check fails " + inspResultObj.getErrorMessage());
                       return false;
               	}
        	        } // end if matches
        	} // end if childCapResult
    }
    }
    logDebug("No children found - return true")
    return true;
}


