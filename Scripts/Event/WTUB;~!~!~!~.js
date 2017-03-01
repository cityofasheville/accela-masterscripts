
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

////Checking for fees due (invoiced & non-invoiced) and if so, stopping a permit from being issued internally
//If there are invoiced fees (balance due), we should not be able to issue a permit (internally)
if (matches(wfStatus, 'Issue', 'Reissue', 'Issue Partial')) {
	if (appMatch('Permits/*/*/*') && balanceDue > 0) {
	                showMessage = true;
	                comment('<font size=small><b>Balance Due </b></font><br><br>The Balance Due will need to be paid before the permit can be issued.<br><br>');
	                comment("Balance Due = "+balanceDue);
	                cancel = true;
	}
	//If there are non-invoiced fees, we should not be able to issue a permit (internally)
	// Note from Keith H -- Check if there a Assessed fees:    Check for NON Invoiced fees
    newFees = feeGetTotByDateRange("01/01/2000","01/01/2030","NEW"); 
	if (appMatch('Permits/*/*/*') && newFees > 0) {		        
	                comment("NEW fee total = "+newFees); comment("Workflow status = "+wfStatus);
	                showMessage = true; comment("<font size=small><b>Un-Invoiced Fees</b></font><br><br>The permit you are trying to issue or final has assessed fees that have NOT been invoiced. Those fees need to be invoiced or removed prior to the permit being issued or finaled.<br><br>");
	                cancel = true;
	}
}////END of Checking for fees due (invoiced & non-invoiced)

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
