
childrenCapId = getChildren('Permits/*/Trade/*',capId);
if (typeof(childrenCapId) == 'object') {
	for (eachchild in childrenCapId) 
//start replaced branch: ES_SCHEDULE_CHILD_UNDERSLAB
 {
// DISABLED: ES_SCHEDULE_CHILD_UNDERSLAB:1
//eachChildCapId = childrenCapId[eachchild];
// DISABLED: ES_SCHEDULE_CHILD_UNDERSLAB:2
//cCapObj = aa.cap.getCap(eachChildCapId);
//cCap = cCapObj.getOutput();
//cStatus = cCap.getCapStatus();
//cCapType = cCap.getCapType();
//comment('The Child Status is: '+cStatus);
//comment('The Child Type is: '+cCapType);
// DISABLED: ES_SCHEDULE_CHILD_UNDERSLAB:3
//saveCapId = capId;
//capId = eachChildCapId;
// DISABLED: ES_SCHEDULE_CHILD_UNDERSLAB:4
//if (cCapType == 'Permits/Residential/Trade/Electrical' && !checkInspectionResult('EE-UNDER SLAB','Approved')  && !checkInspectionResult('EE-UNDER SLAB','Scheduled')) {
//	scheduleInspectDate('EE-UNDER SLAB',inspSchedDate,inspInspector);
//	}

// DISABLED: ES_SCHEDULE_CHILD_UNDERSLAB:5
//if (cCapType == 'Permits/Residential/Trade/Mechanical' && !checkInspectionResult('ME-UNDER SLAB','Approved')  && !checkInspectionResult('ME-UNDER SLAB','Scheduled')) {
//	scheduleInspectDate('ME-UNDER SLAB',inspSchedDate,inspInspector);
//	}

// DISABLED: ES_SCHEDULE_CHILD_UNDERSLAB:6
//if (cCapType == 'Permits/Residential/Trade/Plumbing' && !checkInspectionResult('PL-UNDER SLAB','Approved')  && !checkInspectionResult('PL-UNDER SLAB','Scheduled')) {
//	scheduleInspectDate('PL-UNDER SLAB',inspSchedDate,inspInspector);
//	}

// DISABLED: ES_SCHEDULE_CHILD_UNDERSLAB:7
//if (cCapType == 'Permits/Residential/Trade/Gas Piping' && !checkInspectionResult('GP-UNDER SLAB','Approved') && !checkInspectionResult('GP-UNDER SLAB','Scheduled')) {
//	scheduleInspectDate('GP-UNDER SLAB',inspSchedDate,inspInspector);
//	}

// DISABLED: ES_SCHEDULE_CHILD_UNDERSLAB:8
//capId = saveCapId;

}
//end replaced branch: ES_SCHEDULE_CHILD_UNDERSLAB;
	}

