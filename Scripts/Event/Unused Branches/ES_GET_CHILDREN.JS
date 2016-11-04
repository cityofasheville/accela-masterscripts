
childrenCapId = getChildren('Permits/*/Trade/*',capId);
if (typeof(childrenCapId) == 'object') {
	for (eachchild in childrenCapId) 
//start replaced branch: ES_SCHEDULE_CHILD_ROUGHIN
 {
eachChildCapId = childrenCapId[eachchild];
cCapObj = aa.cap.getCap(eachChildCapId);
cCap = cCapObj.getOutput();
cStatus = cCap.getCapStatus();
cCapType = cCap.getCapType();
comment('The Child Status is: '+cStatus);
comment('The Child Type is: '+cCapType);
saveCapId = capId;
capId = eachChildCapId;
if (cCapType == 'Permits/Residential/Trade/Electrical' && !checkInspectionResult('EE-ROUGH IN','Approved')  && !checkInspectionResult('EE-ROUGH IN','Scheduled')) {
	scheduleInspectDate('EE-ROUGH IN',inspSchedDate,inspInspector);
	}

if (cCapType == 'Permits/Residential/Trade/Mechanical' && !checkInspectionResult('ME-ROUGH IN','Approved')  && !checkInspectionResult('ME-ROUGH IN','Scheduled')) {
	scheduleInspectDate('ME-ROUGH IN',inspSchedDate,inspInspector);
	}

if (cCapType == 'Permits/Residential/Trade/Plumbing' && !checkInspectionResult('PL-ROUGH IN','Approved')  && !checkInspectionResult('PL-ROUGH IN','Scheduled')) {
	scheduleInspectDate('PL-ROUGH IN',inspSchedDate,inspInspector);
	}

if (cCapType == 'Permits/Residential/Trade/Gas Piping' && !checkInspectionResult('GP-ROUGH IN','Approved') && !checkInspectionResult('GP-ROUGH IN','Scheduled')) {
	scheduleInspectDate('GP-ROUGH IN',inspSchedDate,inspInspector);
	}

capId = saveCapId;

}
//end replaced branch: ES_SCHEDULE_CHILD_ROUGHIN;
	}

