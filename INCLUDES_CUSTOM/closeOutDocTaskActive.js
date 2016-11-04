// TODO:  function not referenced in master script migration

function closeOutDocTaskActive(inspType) {
	retValue = false;
	tsiTaskName = "";
	itemCap = capId;
	
	if (inspType == "SW-FINAL") 
		tsiTaskName = "Stormwater";
	if (inspType == "GR-FINAL")
		tsiTaskName = "Grading"
	
	if (tsiTaskName != "") {
		// get the Close Out Document Review
		targetTaskName = "CLOSE OUT DOCUMENT REVIEW";
	 	var workflowResult = aa.workflow.getTasks(capId);
	  	if (workflowResult.getSuccess())
	     		var wfObj = workflowResult.getOutput();
	   	else { 
			logDebug("**ERROR: Failed to get workflow object: " + workflowResult.getErrorMessage()); 
			return false; 
		}

		// Get the target Task
	 	var nTask = null;
	 	for (i in wfObj) {
	     		fTask = wfObj[i];
	    		if (fTask.getTaskDescription().toUpperCase().equals(targetTaskName.toUpperCase())) {
	    			nTask = wfObj[i];
	    		}
	  	}
if (nTask == null) return false;	 	
		// have the parent task, need all the subtasks
		sResult = aa.workflow.getProcessRelationByPK(capId, nTask.getStepNumber(), nTask.getProcessID(), null);
		if (sResult.getSuccess()) {
			processRelation = sResult.getOutput();
			childProcessID = processRelation.getProcessID();			
		}
		
		if (childProcessID) {
			subResult = aa.workflow.getTasks(capId, childProcessID);
			if (subResult.getSuccess()) {
				subTaskArray = subResult.getOutput();
				for (xx in subTaskArray) {
					subTask = subTaskArray[xx];
					subTaskName = subTask.getTaskDescription();
					if (subTask.getActiveFlag() == "Y") {
						if (subTaskName == "Operations and Maintenance Agreement") {
							if (getTaskSpecific(tsiTaskName, "Operations & Maintenance Agreement") == "Yes") 
								return true;	
						}
						else {
							if (getTaskSpecific(tsiTaskName, subTaskName) == "Yes") 
								return true;
						} 
					}
				}
			}
		}	
	}
	return retValue;
}


