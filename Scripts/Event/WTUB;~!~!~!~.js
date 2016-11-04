
if ((appMatch('Permits/*/*/*') || appMatch('Planning/*/*/*')) && matches(wfStatus, 'Issue', 'Issue Partial', 'Reissue') && appHasCondition(null, 'Applied', null, 'Required')) {
	showMessage = true;
	comment('<font size=small><b>Conditions Exist:</b></font><br><br>Before issuing please make sure all conditions are met.<br><br>');
	cancel = true;
}

if (matches(wfProcess, 'BLD_OTCABC', 'BLD_OTCOCC', 'BLD_TRADES') && matches(wfStatus, 'Application Complete') && balanceDue > 0) {
	showMessage = true;
	comment('<font size=small><b>Balance Due:</b></font><br><br>There is a balance due for this Record.  It cannot Issued until all invoiced fees are paid.<br><br>');
	cancel = true;
}

if (matches(wfStatus, 'Issue', 'Reissue', 'Issue Partial') && (isTaskActive('HRC Overlay') || isTaskActive('Flood') || isTaskActive('Landmark') || isTaskActive('Steep Slope') || isTaskActive('River District Design Review') || isTaskActive('Downtown Design Review'))) {
	showMessage = true;
	comment('<font size=small><b>Adhoc Task Open:</b></font><br><br>Please complete all Adhoc tasks before issuing.<br><br>');
	cancel = true;
}

if (wfTask == 'Building' && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Partial Approval') && (getPriority() == null || getPriority() == '')) {
	cancel = true;
	showMessage = true;
	logMessage('Qualification Level must be set on Record Tab.');
}

if (wfTask == 'Building' && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Partial Approval') && calcValue == 0) {
	showMessage = true;
	comment('<font size=small><b>Need Valuation:</b></font><br><br>Please use the Valuation tab and calculate the ICC Cost.<br><br>');
	cancel = true;
}

// DISABLED: WorkflowTaskUpdateBefore:99
//if (appMatch('Permits/Water Availability/Construction/NA') && wfTask == 'Water ATC Process' && matches(wfStatus,'ATC Issued') && !appHasCondition(null,'Met','Pre-Con Meeting Required',null)) {
//	showMessage = true;
//	comment('<font size=small><b>Condition Missing:</b></font><br><br>Before Approving please signoff the Pre-Con Meeting Required, condition<br><br>');
//	cancel = true;
//	}

// DISABLED: WorkflowTaskUpdateBefore:99
//if (appMatch('Permits/Right of Way/Encroachment/NA') && wfTask == 'Legal' && matches(wfStatus,'Approved') && appHasCondition(null,'Applied',null,null)) {
//	showMessage = true;
//	comment('<font size=small><b>Conditions Exist:</b></font><br><br>Before Approving please make sure all conditions are met.<br><br>');
//	cancel = true;
