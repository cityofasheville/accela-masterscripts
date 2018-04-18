
//start replaced branch: WORKFLOW_UA_PERMITS
isParent = getParent();

if (isParent) {

	//start replaced branch: ES_CREATE_FIRE_SIBLING
	{
		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Fire Alarm & Detection Permit Required'] == 'Yes' && !hasSibling(capId, 'Permits/Fire/Construction/Fire Alarm')) {
			saveCapId = capId;
			pCapId = getParent();
			capId = pCapId;
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Fire Alarm', '');
			capId = saveCapId;
			copyAppSpecific(newChildID);
			//MS Functions around copyOwner, copyGIS to fix issue with tab info not pulling over when creating a child record
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for Fire Alarm & Detection';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Sprinkler System Permit Required'] == 'Yes' && !hasSibling(capId, 'Permits/Fire/Construction/Sprinkler System')) {
			saveCapId = capId;
			pCapId = getParent();
			capId = pCapId;
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Sprinkler System', '');
			capId = saveCapId;
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for Sprinkler a System';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Hood Suppression Permit Required'] == 'Yes' && !hasSibling(capId, 'Permits/Fire/Construction/Hood Suppression')) {
			saveCapId = capId;
			pCapId = getParent();
			capId = pCapId;
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Hood Suppression', '');
			capId = saveCapId;
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for a Hood Suppression Permit';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Compressed Gas Permit Required'] == 'Yes' && !hasSibling(capId, 'Permits/Fire/Construction/Compressed Gas')) {
			saveCapId = capId;
			pCapId = getParent();
			capId = pCapId;
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Compressed Gas', '');
			capId = saveCapId;
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for a Compressed Gas Permit';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Other Construction Permit Required'] == 'Yes' && !hasSibling(capId, 'Permits/Fire/Construction/Other')) {
			saveCapId = capId;
			pCapId = getParent();
			capId = pCapId;
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Other', '');
			capId = saveCapId;
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for an Other Construction Permit';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Application Received ', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

	}
	//end replaced branch: ES_CREATE_FIRE_SIBLING;
} else {

	//start replaced branch: ES_CREATE_FIRE_CHILD
	{
		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Fire Alarm & Detection Permit Required'] == 'Yes' && !hasChildren('Permits/Fire/Construction/Fire Alarm')) {
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Fire Alarm', '');
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for Fire Alarm & Detection';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Sprinkler System Permit Required'] == 'Yes' && !hasChildren('Permits/Fire/Construction/Sprinkler System')) {
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Sprinkler System', '');
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for Sprinkler a System';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Hood Suppression Permit Required'] == 'Yes' && !hasChildren('Permits/Fire/Construction/Hood Suppression')) {
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Hood Suppression', '');
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for a Hood Suppression Permit';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Compressed Gas Permit Required'] == 'Yes' && !hasChildren('Permits/Fire/Construction/Compressed Gas')) {
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Compressed Gas', '');
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for a Compressed Gas Permit';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

		if ((wfTask == 'Fire Prevention' || wfTask == 'Fire Review') && matches(wfStatus, 'Approved', 'Approved with Conditions') && AInfo['Other Construction Permit Required'] == 'Yes' && !hasChildren('Permits/Fire/Construction/Other')) {
			newChildID = createChild('Permits', 'Fire', 'Construction', 'Other', '');
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
			t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for an Other Construction Permit';

			//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
			ES_BUILD_WORKDESC_CONSTRUCTION();
			updateAppStatus('Application Received ', 'Initial Status set by script', newChildID);
			editAppSpecific('Cost of Work', '0', newChildID);
		}

	}
	//end replaced branch: ES_CREATE_FIRE_CHILD;
}

//start replaced branch: ES_SET_EXPIRATION_DATES_PERMITS
{
	if (wfTask == 'Application Process' && matches(wfStatus, 'Complete', 'Application Incomplete')) {
		editAppSpecific('Application Expiration Date', dateAdd(null, 180));
	}

	if (!appMatch('Permits/Event-Temporary Use/NA/NA') && !appMatch('Permits/Outdoor Vendor/*/*') && !appMatch('Permits/*/A-Frame/*') && !appMatch('Permits/*/Site Work/NA') && !appMatch('Permits/Stormwater/Flood Plain Development/NA') && wfTask == 'Permit Verification' && matches(wfStatus, 'Issue', 'Reissue', 'Issue Partial', 'Amended')) {
		editAppSpecific('Permit Expiration Date', dateAdd(null, 180));
	}

	if (!appMatch('Permits/Event-Temporary Use/NA/NA') && !appMatch('Permits/Outdoor Vendor/*/*') && !appMatch('Permits/*/A-Frame/*') && !appMatch('Permits/*/Site Work/NA') && !appMatch('Permits/Stormwater/Flood Plain Development/NA') && wfTask == 'Application Process' && matches(wfStatus, 'Issue', 'Reissue', 'Issue Partial', 'Amended')) {
		editAppSpecific('Permit Expiration Date', dateAdd(null, 180));
	}

	if ((appMatch('Permits/*/Dining/*') || appMatch('Permits/*/Merchandise/*') || appMatch('Permits/*/A-Frame/*')) && wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')) {

		//start replaced branch: ES_SET_EXP_YEAR
		{
			theMonth = sysDate.getMonth();
			theYear = sysDate.getYear();
			nextYear = sysDate.getYear() + 1;
			comment('The month is: ' + theMonth);
			comment('The year is: ' + theYear);
			if (matches(theMonth, '1', '2', '3', '4', '5', '6')) {
				theExpDate = '06/30/' + theYear;
			} else {
				theExpDate = '06/30/' + nextYear;
			}

			editAppSpecific('Annual Expiration Date', theExpDate);

		}
		//end replaced branch: ES_SET_EXP_YEAR;
	}

	if (appMatch('Permits/Sign/Stand Alone/*') && matches(wfStatus, 'Issue', 'Reissue')) {
		editAppSpecific('Permit Expiration Date', dateAdd(null, 365));
	}

	if (appMatch('Permits/*/Push Cart/*') && wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')) {

		//start replaced branch: ES_SET_EXP_YEAR_MARCH
		{
			theMonth = sysDate.getMonth();
			theYear = sysDate.getYear();
			nextYear = sysDate.getYear() + 1;
			comment('The month is: ' + theMonth);
			comment('The year is: ' + theYear);
			if (matches(theMonth, '1', '2', '3')) {
				theExpDate = '03/30/' + theYear;
			} else {
				theExpDate = '03/30/' + nextYear;
			}

			editAppSpecific('Annual Expiration Date', theExpDate);

		}
		//end replaced branch: ES_SET_EXP_YEAR_MARCH;
	}

	if (appMatch('Permits/Stormwater/Flood Plain Development/NA') && wfTask == 'Permit Verification' && matches(wfStatus, 'Issue', 'Reissue')) {
		editAppSpecific('Permit Expiration Date', dateAdd(null, 365));
	}

	if (appMatch('Permits/*/Site Work/NA') && matches(wfStatus, 'Issue', 'Reissue') && AInfo['Issue Zoning Permit To'] != 'NA') {
		editAppSpecific('Zoning Permit Expires', dateAdd(null, 365));
	}

	if (appMatch('Permits/*/Site Work/NA') && matches(wfStatus, 'Issue', 'Reissue') && AInfo['Issue Stormwater Permit To'] != 'NA') {
		editAppSpecific('Stormwater Permit Expires', dateAdd(null, 365));
	}

	if (appMatch('Permits/*/Site Work/NA') && matches(wfStatus, 'Issue', 'Reissue') && AInfo['Issue Grading Permit To'] != 'NA') {
		editAppSpecific('Grading Permit Expires', dateAdd(null, 365));
	}

	if (appMatch('Permits/*/Site Work/NA') && matches(wfStatus, 'Issue', 'Reissue') && AInfo['Issue Driveway Permit To'] != 'NA') {
		editAppSpecific('Driveway Permit Expires', dateAdd(null, 365));
	}

	// DISABLED: ES_SET_EXPIRATION_DATES_PERMITS:99
	//if (appMatch('Permits/Water Availability/Extension/NA') && wfTask == 'Technical Review' && matches(wfStatus,'Issue')) {
	//	editAppSpecific('LOC Expiration Date',dateAdd(null,365));
	//	}

	// DISABLED: ES_SET_EXPIRATION_DATES_PERMITS:99
	//if (appMatch('Permits/Right of Way/Closures/NA') && wfTask == 'Issuance' && matches(wfStatus,'Issue','Reissue')) {
	//	editAppSpecific('Permit Expiration Date',dateAdd(null,30));
	//	}

}
//end replaced branch: ES_SET_EXPIRATION_DATES_PERMITS;
if (!appMatch('Permits/*/Site Work/NA') && wfTask == 'Flood' && matches(wfStatus, 'FPD Permit Required')) {
	newChildID = createChild('Permits', 'Stormwater', 'Flood Plain Development', 'NA', '');
	copyAppSpecific(newChildID);
	comment('New child app id = ' + newChildID);
	t1 = 'Permit ' + capIDString + ' requires a Flood Plain Development Permit';

	//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
	ES_BUILD_WORKDESC_CONSTRUCTION();
	updateAppStatus('Submittal Required', 'Initial Status', newChildID);
}

if (wfTask == 'Conditions of Approval') {

	//start replaced branch: ES_SET_WF_ADMIN
	{
		if (AInfo['Air Quality Approval'] == 'No') {
			setTask('Air Quality Approval', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Cost of Work'] == 'No') {
			setTask('Cost of Work', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Privilege License'] == 'No') {
			setTask('Privilege License', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['GC Information'] == 'No') {
			setTask('GC Information', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['GC Signature'] == 'No') {
			setTask('GC Signature', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Sub-Contractor Info'] == 'No') {
			setTask('Sub-Contractor Information', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Lien Agent Designation'] == 'No') {
			setTask('Lien Agent Designation', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Proof of Ownership'] == 'No') {
			setTask('Proof of Ownership', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Owner Signature'] == 'No') {
			setTask('Owner Signature', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['MSD Approval'] == 'No') {
			setTask('MSD Approval', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Water Availability'] == 'No') {
			setTask('Water Availability', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Cross Connection'] == 'No') {
			setTask('Cross Connection', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Exemption Form'] == 'No') {
			setTask('Exemption Form', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Water - Tap and Meter'] == 'No') {
			setTask('Water - Tap and Meter', 'N', 'Y', 'ADMIN');
		}

		if (AInfo['Food Service Establishment'] == 'No') {
			setTask('Food Service Establishment', 'N', 'Y', 'ADMIN');
		}

	}
	//end replaced branch: ES_SET_WF_ADMIN;
}

if (wfTask == 'Routing') {

	//start replaced branch: ES_SET_WF_DIVISION REVIEW
	{
		if (AInfo['Building Review'] == 'No') {
			setTask('Building Review', 'N', 'Y', 'DIVISION REVIEW');
		}

		if (AInfo['Zoning Review'] == 'No') {
			setTask('Zoning Review', 'N', 'Y', 'DIVISION REVIEW');
		}

		if (AInfo['Fire Review'] == 'No') {
			setTask('Fire Review', 'N', 'Y', 'DIVISION REVIEW');
		}

		if (AInfo['Addressing'] == 'No') {
			setTask('Addressing', 'N', 'Y', 'DIVISION REVIEW');
		}

	}
	//end replaced branch: ES_SET_WF_DIVISION REVIEW;
}

if (wfTask == 'Routing') {

	//start replaced branch: ES_SET_WF_DUEDATE
	{
		if (AInfo['Expected Timeframe'] == 'Quick Touch - 3 Days') {
			editTaskDueDate('Building Review', dateAdd(null, 3, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Quick Touch - 3 Days') {
			editTaskDueDate('Fire Review', dateAdd(null, 3, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Quick Touch - 3 Days') {
			editTaskDueDate('Zoning Review', dateAdd(null, 3, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Quick Touch - 3 Days') {
			editTaskDueDate('Addressing', dateAdd(null, 3, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Res. Waiver - 2 Days') {
			editTaskDueDate('Addressing', dateAdd(null, 2, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Res. Waiver - 2 Days') {
			editTaskDueDate('Building Review', dateAdd(null, 2, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Res. Waiver - 2 Days') {
			editTaskDueDate('Fire Review', dateAdd(null, 2, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Res. Waiver - 2 Days') {
			editTaskDueDate('Zoning Review', dateAdd(null, 2, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Residential - 10 Days') {
			editTaskDueDate('Building Review', dateAdd(null, 10, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Residential - 10 Days') {
			editTaskDueDate('Fire Review', dateAdd(null, 10, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Residential - 10 Days') {
			editTaskDueDate('Zoning Review', dateAdd(null, 10, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Residential - 10 Days') {
			editTaskDueDate('Addressing', dateAdd(null, 10, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Small Comm - 10 Days') {
			editTaskDueDate('Building Review', dateAdd(null, 10, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Small Comm - 10 Days') {
			editTaskDueDate('Fire Review', dateAdd(null, 10, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Small Comm - 10 Days') {
			editTaskDueDate('Zoning Review', dateAdd(null, 10, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Small Comm - 10 Days') {
			editTaskDueDate('Addressing', dateAdd(null, 10, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Std Level I Comm  - 21 Days') {
			editTaskDueDate('Building Review', dateAdd(null, 21, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Std Level I Comm  - 21 Days') {
			editTaskDueDate('Fire Review', dateAdd(null, 21, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Std Level I Comm  - 21 Days') {
			editTaskDueDate('Zoning Review', dateAdd(null, 21, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Std Level I Comm  - 21 Days') {
			editTaskDueDate('Addressing', dateAdd(null, 21, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Std Level II or III Comm - 45 Days') {
			editTaskDueDate('Building Review', dateAdd(null, 45, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Std Level II or III Comm - 45 Days') {
			editTaskDueDate('Fire Review', dateAdd(null, 45, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Std Level II or III Comm - 45 Days') {
			editTaskDueDate('Zoning Review', dateAdd(null, 45, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Std Level II or III Comm - 45 Days') {
			editTaskDueDate('Addressing', dateAdd(null, 45, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Large Comm - 90 Days') {
			editTaskDueDate('Building Review', dateAdd(null, 90, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Large Comm - 90 Days') {
			editTaskDueDate('Fire Review', dateAdd(null, 90, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Large Comm - 90 Days') {
			editTaskDueDate('Zoning Review', dateAdd(null, 90, 'Y'));
		}

		if (AInfo['Expected Timeframe'] == 'Large Comm - 90 Days') {
			editTaskDueDate('Addressing', dateAdd(null, 90, 'Y'));
		}

		// DISABLED: ES_SET_WF_DUEDATE:40
		//if (AInfo['Expected Timeframe'] == 'Revision - 5 Days') {
		//	editTaskDueDate('Building Review', dateAdd(null,5,'Y'));
		//	}

		// DISABLED: ES_SET_WF_DUEDATE:41
		//if (AInfo['Expected Timeframe'] == 'Revision - 5 Days') {
		//	editTaskDueDate('Fire Review', dateAdd(null,5,'Y'));
		//	}

		// DISABLED: ES_SET_WF_DUEDATE:42
		//if (AInfo['Expected Timeframe'] == 'Revision - 5 Days') {
		//	editTaskDueDate('Zoning Review', dateAdd(null,5,'Y'));
		//	}

		// DISABLED: ES_SET_WF_DUEDATE:43
		//if (AInfo['Expected Timeframe'] == 'Revision - 5 Days') {
		//	editTaskDueDate('Addressing', dateAdd(null,5,'Y'));
		//	}

	}
	//end replaced branch: ES_SET_WF_DUEDATE;
}

// DISABLED: WORKFLOW_UA_PERMITS:9
//if (wfTask == 'Routing' && taskStatus !='Not Required') {
//	emailContact('Permit Routed for Review', 'Permit Number: '+capIDString+' <br> Location: '+CapAddress+' <br> Anticipated Review Timeframe: '+wfStatus+' <br>This timeframe is based on work days;
//	please make adjustments for weekends and holidays. Thank you.');
//	}

if (wfTask == 'Clearing House' && matches(wfStatus, 'Complete')) {
	closeTask('Review Process', 'Complete', 'Y');
}

if (wfTask == 'Holds') {

	//start replaced branch: ES_SET_WF_CLOSEOUT
	{
		if (AInfo['MSD Hold'] == 'No') {
			setTask('MSD Release', 'N', 'Y', 'CLOSE OUT');
		}

		if (AInfo['Water Hold'] == 'No') {
			setTask('Water Release', 'N', 'Y', 'CLOSE OUT');
		}

		if (AInfo['Backflow Hold'] == 'No') {
			setTask('Backflow Approval', 'N', 'Y', 'CLOSE OUT');
		}

		if (AInfo['Master Site Hold'] == 'No') {
			setTask('Master Site Compliance', 'N', 'Y', 'CLOSE OUT');
		}

		if (AInfo['Related Record Hold'] == 'No') {
			setTask('Related Record Compliance', 'N', 'Y', 'CLOSE OUT');
		}

	}
	//end replaced branch: ES_SET_WF_CLOSEOUT;
}

if (wfTask == 'Building Review' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
	editPriority(AInfo['Qualification Level']);
}

if (wfTask == 'Addressing' && matches(wfStatus, 'Approved - Fees Due')) {

	//replaced branch(ES_ADDRESSING_FEES)
	ES_ADDRESSING_FEES();
}

// DISABLED: WORKFLOW_UA_PERMITS:14
//if (wfTask == 'Review Process' && matches(wfStatus,'Complete')) {
//	emailContact('Permit Application Update','Permit Number: '+capIDString+' <br> Location: '+CapAddress+' <br> 'The PLAN REVIEW process for your application has been completed. You are encouraged to go online to verify if other items are required for release of this permit. You may also check in with the Permit Application Center. Thank you.');
//	}

if (matches(wfTask, 'Inspections', 'Power Release', 'Gas Release')) {

	//start replaced branch: ES_SET_WF_TU-TCO
	{
		if (matches(wfTask, 'Inspections') && matches(taskStatus, 'TCO - 30 Days', 'TCC - 30 Days')) {
			editTaskDueDate('Inspections', dateAdd(null, 30, 'Y'));
		}

		if (matches(wfTask, 'Inspections') && matches(taskStatus, 'TCO - 60 Days', 'TCC - 60 Days')) {
			editTaskDueDate('Inspections', dateAdd(null, 60, 'Y'));
		}

		if (matches(wfTask, 'Inspections') && matches(taskStatus, 'TCO - 90 Days', 'TCC - 90 Days')) {
			editTaskDueDate('Inspections', dateAdd(null, 90, 'Y'));
		}

		if (matches(wfTask, 'Power Release') && matches(taskStatus, 'Released - 30 Days')) {
			editTaskDueDate('Power Release', dateAdd(null, 30, 'Y'));
		}

		if (matches(wfTask, 'Power Release') && matches(taskStatus, 'Released - 60 Days')) {
			editTaskDueDate('Power Release', dateAdd(null, 60, 'Y'));
		}

		if (matches(wfTask, 'Power Release') && matches(taskStatus, 'Released - 90 Days')) {
			editTaskDueDate('Power Release', dateAdd(null, 90, 'Y'));
		}

		if (matches(wfTask, 'Gas Release') && matches(taskStatus, 'Released - 30 Days')) {
			editTaskDueDate('Gas Release', dateAdd(null, 30, 'Y'));
		}

		if (matches(wfTask, 'Gas Release') && matches(taskStatus, 'Released - 60 Days')) {
			editTaskDueDate('Gas Release', dateAdd(null, 60, 'Y'));
		}

		if (matches(wfTask, 'Gas Release') && matches(taskStatus, 'Released - 90 Days')) {
			editTaskDueDate('Gas Release', dateAdd(null, 90, 'Y'));
		}

	}
	//end replaced branch: ES_SET_WF_TU-TCO;
}

if (matches(wfStatus, 'Certificate of Occupancy') && (appMatch('Permits/Commercial/*/*') || appMatch('Permits/Over the Couner/Tenant Occupancy/Like for Like') || appMatch('Permits/Over The Counter/Tenant Occupancy/CO'))) {
	email('khinz@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Certificate of Occupancy Issued', 'The following location ' + CapAddress + ' has been issued a Certificate of Occupancy for permit ' + capIDString + '. Please coordinate the Occupancy Posting.');
}

if (matches(wfStatus, 'Certificate of Occupancy') && (appMatch('Permits/Commercial/*/*') || appMatch('Permits/Over the Couner/Tenant Occupancy/Like for Like') || appMatch('Permits/Over The Counter/Tenant Occupancy/CO'))) {
	email('jpayne@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Certificate of Occupancy Issued', 'The following location ' + CapAddress + ' has been issued a Certificate of Occupancy for permit ' + capIDString + '. Please coordinate the Occupancy Posting.');
}

if (appMatch('Permits/Residential/Home Occupation/Home Stay') && wfTask == 'Application Process' && wfStatus == 'Application Complete') {
	email('smorgan@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Home Stay Application ' + capIDString + ' Received', 'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> Please begin review of application information. Thank you.');
}

if (appMatch('Permits/Residential/Home Occupation/Home Stay') && wfTask == 'Zoning Review' && wfStatus == 'Approved') {
	scheduleInspectDate('ZO-HOMESTAY', dateAdd(null, 1), null, null, 'Scheduled by Script - Make contact with applicant to confirm inspection availability.');
}

if ((appMatch('Permits/*/Site Work/NA') || appMatch('Permits/Stormwater/Flood Plain Development/NA'))) {

	//replaced branch(ES_SITE_WF_UPD_AFTER)
	ES_SITE_WF_UPD_AFTER();
}

if (matches(wfTask, 'Planning', 'Zoning Review') && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Disapproved', 'Partial Approval') && AInfo['Apply Steep Slope Fee?'] == 'Yes') {
	updateFee('STEEPSLOPE', 'RES_NEW', 'FINAL', 1, 'Y');
	updateFee('TECH', 'GENERAL', 'FINAL', 1, 'Y');
}

if (matches(wfTask, 'Downtown Design Review') && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Not Required')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'DTDR Task', 'Downtown Design Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
}

if (matches(wfTask, 'Landmark') && matches(wfStatus, 'Not Required', 'Major Work Required', 'Minor Work Required')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Landmark Task', 'Landmark Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
}

if (matches(wfTask, 'HRC Overlay') && matches(wfStatus, 'Not Required', 'Minor Work Required', 'Major Work Required')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'HRC Overlay Task', 'HRC Overlay Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
}

// Added as per Diane 3/30/17 -- notifies PAC when River District task is updated to statuses below 
// (These statuses result in Go To Next Task, e.g. PAC may need to issue permit)

//WOID: 93669
//Description: 
// Added as per Diane 3/30/17 -- notifies PAC when River District task is updated to statuses below 
// (These statuses result in Go To Next Task, e.g. PAC may need to issue permit)
if (matches(wfTask, 'River District Design Review') && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Not Required')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'RDDR Task', 'River District Design Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
}

if (matches(wfStatus, 'Issue', 'Issue Partial', 'Reissue', 'Amended')) {

	//replaced branch(WORKFLOWTASK_UA_ADD_INSP)
	WORKFLOWTASK_UA_ADD_INSP();
}

if (appMatch('*/*/*/Repair-Replacement')) {
	var profArr = getLicenseProfessional(capId);
}

if (appMatch('*/*/*/Repair-Replacement') && matches(wfTask, 'Air Quality') && matches(wfStatus, 'Hold - See Comment') && profArr != null) {
	for (x in profArr)
		if (profArr[x].getEmail() + '' != '')
			email(profArr[x].getEmail(), 'noreply@ashevillenc.gov', 'Permit Suspended', 'You are identified as a Licensed Contractor on permit, ' + capIDString + ' This Repair-Replacement permit has been suspended by the WNC Regional Air Quality Agency. Please cease work immediately and contact Mike Matthews at 828-250- 6776 for information regarding next steps.');
}

if (appMatch('*/*/*/Repair-Replacement') && matches(wfTask, 'Fire Review') && matches(wfStatus, 'Hold - See Comment') && profArr != null) {
	for (x in profArr)
		if (profArr[x].getEmail() + '' != '')
			email(profArr[x].getEmail(), 'noreply@ashevillenc.gov', 'Permit Suspended', "You are identified as a Licensed Contractor on permit,  ' + capIDString + ' This Repair-Replacement permit has been suspended by the Fire Marshal' s Office.Please cease work immediately and contact the permit office at 828 - 259 - 5846 for information regarding next steps.");
}

if (appMatch('*/*/*/Repair-Replacement') && matches(wfTask, 'Air Quality') && matches(wfStatus, 'Hold - See Comment')) {
	emailContact('Permit Suspended', 'You are listed as a contact for permit ' + capIDString + " This repair - replacement permit has been suspended by the WNC Regional Air Quality Agency.Please cease work and contact Mike Matthews at 828 - 250 - 6776 for information regarding next steps.");
}

if (appMatch('*/*/*/Repair-Replacement') && matches(wfTask, 'Fire Review') && matches(wfStatus, 'Hold - See Comment')) {
	emailContact('Permit Suspended', "You are listed as a contact for permit " + capIDString + " This repair - replacement permit has been suspended by the Fire Marshal ' s Office.Please cease work and contact the permit office at 828 - 259 - 5846 for information regarding next steps.");
}

if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Permits/*/Site Work/*')) && matches(wfStatus, 'Issue') && AInfo['Issue Grading Permit To'] != 'NA') {
	emailContact('Grading Preliminary Inspection Required', 'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> A Grading Permit is being issued for this location contingent upon proper installation of all erosion control devices. <br> The contractor must schedule a GR-PRELIM inspection before commencing work. All approved plans and permits must be on site. Silt Fencing and a Construction Entrance must be installed, and the temporary address must be posted. This inspection is required on individual lots, master sites and also required for individual lots within Subdivisions. Building permit inspections will be delayed until the Grading Preliminary inspection is approved. Thank you.');
}

var profArr = getLicenseProfessional(capId);
if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Permits/*/Site Work/*')) && matches(wfStatus, 'Issue') && AInfo['Issue Grading Permit To'] != 'NA' && profArr != null) {
	for (x in profArr)
		if (profArr[x].getEmail() + '' != '')
			email(profArr[x].getEmail(), 'noreply@ashevillenc.gov', 'Grading Preliminary Inspection Required', 'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> A Grading Permit is being issued for this location contingent upon proper installation of all erosion control devices. <br> The contractor must schedule a GR-PRELIM inspection before commencing work. All approved plans and permits must be on site. Silt Fencing and a Construction Entrance must be installed, and the temporary address must be posted. This inspection is required on individual lots, master sites and also required for individual lots within Subdivisions. Building permit inspections will be delayed until the Grading Preliminary inspection is approved. Thank you.');
}

//end replaced branch: WORKFLOW_UA_PERMITS;
