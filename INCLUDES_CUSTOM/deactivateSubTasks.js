// TODO:  function not referenced in master script migration


function deactivateSubTasks(pTask) { //optional Capid
	var childProcessID = null;

	var itemCap = capId;
	if (arguments.length > 2) 
		itemCap = arguments[2];

	// have the parent task, need all the subtasks
	sResult = aa.workflow.getProcessRelationByPK(itemCap, pTask.getStepNumber(), pTask.getProcessID(), null);
	if (sResult.getSuccess()) {
		processRelation = sResult.getOutput();
		childProcessID = processRelation.getProcessID();
		logDebug("childProcessID = " + childProcessID);
		
	}
	
	if (childProcessID) {
		subResult = aa.workflow.getTasks(itemCap, childProcessID);
		if (subResult.getSuccess()) {
			subTaskArray = subResult.getOutput();
			logDebug("Found " + subTaskArray.length + " subTasks");
			for (xx in subTaskArray) {
				subTask = subTaskArray[xx];
				subTaskName = subTask.getTaskDescription();
				logDebug("Deactivating " + subTaskName);
				actResult = aa.workflow.adjustTask(itemCap, subTask.getStepNumber(), subTask.getProcessID(), "N", "N", null, null);

			} 
		}
	}	

}

