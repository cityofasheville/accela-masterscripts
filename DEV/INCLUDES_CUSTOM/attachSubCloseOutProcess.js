// TODO:  function not referenced in master script migration

function attachSubCloseOutProcess(targetTaskName, processName, completeRequired, activeSubTasks) { // optional capId
	var itemCap = capId;

	if (arguments.length > 4)
		itemCap = arguments[4];

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
   		}
  	}
if (!doesTaskHaveSubProcess(targetTaskName)) { 

	if (nTask != null) {
		logDebug("Attaching subprocess " + processName + " to " + nTask.getTaskDescription());
 		var result = aa.workflow.insertSubProcess(nTask,processName,completeRequired)
 		if (!result.getSuccess()) { 
			logDebug("error " + result.getErrorMessage()); 
			return false; 
		}
	}
	else {
		logDebug("Could not find target task " + targetTaskName);
		return false;
	}
}
	
	if (activeSubTasks) {
		deactivateSubTasks(nTask);
		if (processName == "FLOOD_DOC_REV")
			activateDocSubTasks(nTask, "Flood Review");
		else {
			activateDocSubTasks(nTask, "Stormwater");
			activateDocSubTasks(nTask, "Grading");
		}
	}
}


