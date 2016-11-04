// TODO:  function not referenced in master script migration

function doesTaskHaveSubProcess(targetTaskName) {
	itemCap = capId;
	var workflowResult = aa.workflow.getTasks(itemCap);
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
    		prResult = aa.workflow.getProcessRelationByPK(capId, nTask.getStepNumber(), nTask.getProcessID(), "ADMIN");
    		if (prResult.getSuccess()) {
    			processRelation = prResult.getOutput();
    			if (processRelation != null) 
    				return true;
    		}
    	}
  	}
	return false;
}

