function activateDocSubTasks(pTask, tsiTaskName) { //optional Capid
	var childProcessID = null;

	var itemCap = capId;
	if (arguments.length > 2)
		itemCap = arguments[2];

	// have the parent task, need all the subtasks
	sResult = aa.workflow.getProcessRelationByPK(itemCap, pTask.getStepNumber(), pTask.getProcessID(), null);
	if (sResult.getSuccess()) {
		processRelation = sResult.getOutput();
		childProcessID = processRelation.getProcessID();
		
	}
	
	if (childProcessID) {
		subResult = aa.workflow.getTasks(itemCap, childProcessID);
		if (subResult.getSuccess()) {
			subTaskArray = subResult.getOutput();
			for (xx in subTaskArray) {
				subTask = subTaskArray[xx];
				subTaskName = subTask.getTaskDescription();
				if (subTaskName == "Operations and Maintenance Agreement") {
					if ("" + getTaskSpecific(tsiTaskName, "Operations & Maintenance Agreement") == "Yes") {
						actResult = aa.workflow.adjustTask(itemCap, subTask.getStepNumber(), subTask.getProcessID(), "Y", "N", null, null);
						if (actResult.getSuccess()) 
							logDebug("Activate task " + subTaskName);
					}
				}
				else {
					if ("" + getTaskSpecific(tsiTaskName, subTaskName) == "Yes") {
						actResult = aa.workflow.adjustTask(itemCap, subTask.getStepNumber(), subTask.getProcessID(), "Y", "N", null, null);
						if (actResult.getSuccess()) 
							logDebug("Activate task " + subTaskName);
					} 
				}
				
			}
		}
	}	

}
