// WTUA:Permits/*/*/* WORKFLOWTASKUPDATEAFTER
// if (matches(currentUserID, 'RHEDRICK', 'MMAZANEC')) {
// 	showDebug = true;
// }

//start replaced branch: WORKFLOW_UA_PERMITS
var currentResultOfGetParent = getParent();
//start replaced branch: ES_CREATE_FIRE_SIBLING
var wfTaskFirePreventionOrReview = (wfTask == 'Fire Prevention' || wfTask == 'Fire Review');
var wfStatusApprovedOrWithConditions = matches(wfStatus, 'Approved', 'Approved with Conditions');
if (wfTaskFirePreventionOrReview && wfStatusApprovedOrWithConditions) {
	var checkPreventionApprovedCats = [
		{
			// Use permitCat for !hasSibling(capId, 'Permits/Fire/Construction/Fire Alarm')
			// Also use permitCat for newChildID = createChild('Permits', 'Fire', 'Construction', 'Fire Alarm', '');
			permitCat: 'Fire Alarm',
			// Use aInfot1 for AInfo['Fire Alarm & Detection Permit Required'] == 'Yes'
			// Also use aInfot1
			aInfot1: 'Fire Alarm & Detection',
		},
		{
			permitCat: 'Sprinkler System',
			aInfot1: 'Sprinkler System',
		},
		{
			permitCat: 'Hood Suppression',
			aInfot1: 'Hood Suppression',
		},
		{
			permitCat: 'Compressed Gas',
			aInfot1: 'Compressed Gas',
		},
		{
			permitCat: 'Other',
			aInfot1: 'Other Construction',
		},
		{
			permitCat: 'ERRC (Radio Booster)',
			aInfot1: 'Fire ERRC (Radio Booster)',
		}
	];
	if (currentResultOfGetParent) {
		// All of these are Permits/Fire/Construction/[permitCat]
		for (var permitListIndex = 0; permitListIndex < checkPreventionApprovedCats.length; permitListIndex++) {
			var thisPermitCheck = checkPreventionApprovedCats[permitListIndex];
			if (AInfo[thisPermitCheck.aInfot1 + ' Permit Required'] === 'Yes' && !hasSibling(capId, 'Permits/Fire/Construction/' + thisPermitCheck.permitCat)) {
				saveCapId = capId;
				pCapId = currentResultOfGetParent;
				capId = pCapId;
				newChildID = createChild('Permits', 'Fire', 'Construction', thisPermitCheck.permitCat, '');
				capId = saveCapId;
				copyAppSpecific(newChildID);
				//MS Functions around copyOwner, copyGIS to fix issue with tab info not pulling over when creating a child record
				comment('New child app id = ' + newChildID);
				t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for a ' + thisPermitCheck.aInfot1 + ' Permit';
				//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
				ES_BUILD_WORKDESC_CONSTRUCTION();
				updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
				editAppSpecific('Cost of Work', '0', newChildID);
			}
		}
		//end replaced branch: ES_CREATE_FIRE_SIBLING;
	} else { // If NOT currentResultOfGetParent
		//start replaced branch: ES_CREATE_FIRE_CHILD
		for (var elsePermitListIndex = 0; elsePermitListIndex < checkPreventionApprovedCats.length; elsePermitListIndex++) {
			var thisPermitCheckElse = checkPreventionApprovedCats[elsePermitListIndex];
			if (AInfo[thisPermitCheckElse.aInfot1 + ' Permit Required'] === 'Yes' && !hasChildren('Permits/Fire/Construction/' + thisPermitCheckElse.permitCat)) {
				newChildID = createChild('Permits', 'Fire', 'Construction', thisPermitCheckElse.permitCat, '');
				copyAppSpecific(newChildID);
				comment('New child app id = ' + newChildID);
				t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for a ' + thisPermitCheckElse.aInfot1 + ' Permit';
				//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
				ES_BUILD_WORKDESC_CONSTRUCTION();
				updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
				editAppSpecific('Cost of Work', '0', newChildID);
			}
		}
	//end replaced branch: ES_CREATE_FIRE_CHILD;
	}
}

//start replaced branch: ES_SET_EXPIRATION_DATES_PERMITS
{
	if (wfTask === 'Application Process'
		&& matches(wfStatus, 'Complete', 'Application Incomplete')
	) {
		editAppSpecific('Application Expiration Date', dateAdd(null, 180));
	}

	if (!appMatch('Permits/Event-Temporary Use/NA/NA')
		&& !appMatch('Permits/Outdoor Vendor/*/*')
		&& !appMatch('Permits/*/A-Frame/*')
		&& !appMatch('Permits/*/Site Work/NA')
		&& !appMatch('Permits/Stormwater/Flood Plain Development/NA')
		&& (wfTask == 'Application Process' || wfTask == 'Permit Verification')
		&& matches(wfStatus, 'Issue', 'Reissue', 'Issue Partial', 'Amended')
	) {
		editAppSpecific('Permit Expiration Date', dateAdd(null, 180));
	}

	if (appMatch('Permits/Sign/Stand Alone/*')
		&& matches(wfStatus, 'Issue', 'Reissue')
	) {
		editAppSpecific('Permit Expiration Date', dateAdd(null, 365));
	}

	var theMonth = sysDate.getMonth();
	var theYear = sysDate.getYear();
	var nextYear = sysDate.getYear() + 1;

	if ((appMatch('Permits/*/Dining/*')
			|| appMatch('Permits/*/Merchandise/*')
			|| appMatch('Permits/*/A-Frame/*')
		) && wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')
	) {
		//start replaced branch: ES_SET_EXP_YEAR
		comment('The month is: ' + theMonth);
		comment('The year is: ' + theYear);
		if (matches(theMonth, '1', '2', '3', '4', '5', '6')) {
			theExpDate = '06/30/' + theYear;
		} else {
			theExpDate = '06/30/' + nextYear;
		}
		editAppSpecific('Annual Expiration Date', theExpDate);
		//end replaced branch: ES_SET_EXP_YEAR;
	}

	if (appMatch('Permits/*/Push Cart/*')
		&& wfTask == 'Issuance'
		&& matches(wfStatus, 'Issue', 'Reissue')
	) {
		//start replaced branch: ES_SET_EXP_YEAR_MARCH
		comment('The month is: ' + theMonth);
		comment('The year is: ' + theYear);
		if (matches(theMonth, '1', '2', '3')) {
			theExpDate = '03/30/' + theYear;
		} else {
			theExpDate = '03/30/' + nextYear;
		}
		editAppSpecific('Annual Expiration Date', theExpDate);
		//end replaced branch: ES_SET_EXP_YEAR_MARCH;
	}

	if (appMatch('Permits/Stormwater/Flood Plain Development/NA')
		&& wfTask == 'Permit Verification'
		&& matches(wfStatus, 'Issue', 'Reissue')
	) {
		editAppSpecific('Permit Expiration Date', dateAdd(null, 365));
	}

	if (appMatch('Permits/*/Site Work/NA')
		&& matches(wfStatus, 'Issue', 'Reissue')
		&& AInfo['Issue Zoning Permit To'] != 'NA'
	) {
		editAppSpecific('Zoning Permit Expires', dateAdd(null, 365));
	}

	if (appMatch('Permits/*/Site Work/NA')
		&& matches(wfStatus, 'Issue', 'Reissue')
		&& AInfo['Issue Stormwater Permit To'] != 'NA'
	) {
		editAppSpecific('Stormwater Permit Expires', dateAdd(null, 365));
	}

	if (appMatch('Permits/*/Site Work/NA')
		&& matches(wfStatus, 'Issue', 'Reissue')
		&& AInfo['Issue Grading Permit To'] != 'NA'
	) {
		editAppSpecific('Grading Permit Expires', dateAdd(null, 365));
	}

	if (appMatch('Permits/*/Site Work/NA')
		&& matches(wfStatus, 'Issue', 'Reissue')
		&& AInfo['Issue Driveway Permit To'] != 'NA'
	) {
		editAppSpecific('Driveway Permit Expires', dateAdd(null, 365));
	}
}
//end replaced branch: ES_SET_EXPIRATION_DATES_PERMITS;
if (!appMatch('Permits/*/Site Work/NA') && wfTask === 'Flood' && matches(wfStatus, 'FPD Permit Required')) {
	newChildID = createChild('Permits', 'Stormwater', 'Flood Plain Development', 'NA', '');
	copyAppSpecific(newChildID);
	comment('New child app id = ' + newChildID);
	t1 = 'Permit ' + capIDString + ' requires a Flood Plain Development Permit';
	//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
	ES_BUILD_WORKDESC_CONSTRUCTION();
	updateAppStatus('Submittal Required', 'Initial Status', newChildID);
}

if (wfTask == 'Conditions of Approval') {
	var conditionsOfApprovalCheckList = [
		'Air Quality Approval',
		'Cost of Work',
		'Privilege License',
		'GC Information',
		'GC Signature',
		'Sub-Contractor Information',
		'Lien Agent Designation',
		'Proof of Ownership',
		'Owner Signature',
		'MSD Approval',
		'Water Availability',
		'Cross Connection',
		'Exemption Form',
		'Water - Tap and Meter',
		'Food Service Establishment',
	];
	for (var conditionsOfApprovalIndex = 0; conditionsOfApprovalIndex < conditionsOfApprovalCheckList.length; conditionsOfApprovalIndex++) {
		var condition = conditionsOfApprovalCheckList[conditionsOfApprovalIndex];
		if (AInfo[condition] == 'No') {
			setTask(condition, 'N', 'Y', 'ADMIN');
		}
	}
	// 9/19/2019 set Backflow Approval 
	if (isTaskActive('Cross Connection', 'ADMIN')) {
		setTask('Backflow Approval', 'Y', 'N', 'CLOSE OUT');
	}
}

// 8/1/2019 
if ( (appMatch("Permits/Residential/New Building/*") || appMatch("Permits/Residential/Accessory Structure/*")) 
	&& (matches(wfStatus, 'Hold for Revision') && matches(wfTask, 'Building Review','Zoning Review','Grading','Driveway'))) {
	editTaskDueDate(wfTask, dateAdd(null, 2, 'Y'));
}

if (wfTask == 'Routing') { //
	//start replaced branch: ES_SET_WF_DIVISION REVIEW
	var divisionReviewSetList = [
		'Addressing',
		'Building Review',
		'Fire Review',
		'Zoning Review',
'Driveway',
		'Grading',
	];
	for (var divisionReviewIndex = 0; divisionReviewIndex < divisionReviewSetList.length; divisionReviewIndex++) {
		var divisionReviewCheck = divisionReviewSetList[divisionReviewIndex];
		if (AInfo[divisionReviewCheck] == 'No') {
			setTask(divisionReviewCheck, 'N', 'Y', 'DIVISION REVIEW');
			setTask(divisionReviewCheck, 'N', 'Y', 'DIV REVIEW-RES');
		}
	}
	//end replaced branch: ES_SET_WF_DIVISION REVIEW;
	function setAllDivisionReviewTimes(numDays, divisionList) {
		for (var divisionDateSetIndex = 0; divisionDateSetIndex < divisionList.length; divisionDateSetIndex++) {
			var thisDivision = divisionList[divisionDateSetIndex];
			editTaskDueDate(thisDivision, dateAdd(null, numDays, 'Y'));
		}
	}
	//start replaced branch: ES_SET_WF_DUEDATE
	if (AInfo['Expected Timeframe'] == 'Quick Touch - 3 Days') {
		setAllDivisionReviewTimes(3, divisionReviewSetList);
	}
// as of 7/29/19 now only using on item in dropdown, but leaving others in list:
	if (AInfo['Expected Timeframe'] == 'Residential Review - 5 Days') {
		setAllDivisionReviewTimes(3, divisionReviewSetList);
	}
	if (AInfo['Expected Timeframe'] == 'Res. Waiver - 2 Days') {
		setAllDivisionReviewTimes(2, divisionReviewSetList);
	}
if (AInfo['Expected Timeframe'] == 'Residential Renovation - 4 Days') {
		setAllDivisionReviewTimes(4, divisionReviewSetList);
	}
if (AInfo['Expected Timeframe'] == 'Residential New Construction - 6 Days') {
		setAllDivisionReviewTimes(6, divisionReviewSetList);
	}
	if (AInfo['Expected Timeframe'] == 'Residential New Construction - 10 Days'
		|| AInfo['Expected Timeframe'] == 'Small Comm/Comm Renovation - 10 Days'
	) {
		setAllDivisionReviewTimes(10, divisionReviewSetList);
	}
	if (AInfo['Expected Timeframe'] == 'Std Level I Comm - 21 Days') {
		setAllDivisionReviewTimes(21, divisionReviewSetList);
	}
	if (AInfo['Expected Timeframe'] == 'Std Level II or III Comm - 45 Days') {
		setAllDivisionReviewTimes(45, divisionReviewSetList);
	}
	if (AInfo['Expected Timeframe'] == 'Large Comm - 90 Days') {
		setAllDivisionReviewTimes(90, divisionReviewSetList);
	}
	//end replaced branch: ES_SET_WF_DUEDATE;
}

if (wfTask == 'Clearing House' && matches(wfStatus, 'Complete')) {
	closeTask('Review Process', 'Complete', 'Y');
}

if (wfTask == 'Holds') {
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

// Implied that it can be any process
// We're assuming that when the CO status is chosen, that it will automatically be on a correct process
// For example, division review can never have a CO status
function emailAboutCertOfOcc(emailAddress) {
	email(
		emailAddress,
		'noreply@ashevillenc.gov',
		'Certificate of Occupancy Issued',
		'The following location ' + CapAddress + ' has been issued a Certificate of Occupancy for permit ' + capIDString + '. Please coordinate the Occupancy Posting.');
}
// TODO: also check for process
if (matches(wfStatus, 'Certificate of Occupancy')
	&& (appMatch('Permits/Commercial/*/*')
		|| appMatch('Permits/Over the Counter/Tenant Occupancy/Like for Like')
		|| appMatch('Permits/Over The Counter/Tenant Occupancy/CO')
	)
) {
	emailAboutCertOfOcc('khinz@ashevillenc.gov');
	emailAboutCertOfOcc('jpayne@ashevillenc.gov');
}

// changed from smorgan to talley 05/09/18. Added smorgan back on 5/18
function emailToStartHomeStayReview(emailAddress) {
	email(emailAddress,
		'noreply@ashevillenc.gov',
		'Home Stay Application ' + capIDString + ' Received', 'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> Please begin review of application information. Thank you.');
}

if (appMatch('Permits/Residential/Home Occupation/Home Stay')
	&& wfTask == 'Application Process'
	&& wfStatus == 'Application Complete'
) {
	emailToStartHomeStayReview('hmahoney@ashevillenc.gov');
	emailToStartHomeStayReview('smorgan@ashevillenc.gov');
}

if (appMatch('Permits/Residential/Home Occupation/Home Stay')
	&& wfTask == 'Zoning Review'
	&& wfStatus == 'Approved'
) {
	scheduleInspectDate('ZO-HOMESTAY', dateAdd(null, 1), null, null, 'Scheduled by Script - Make contact with applicant to confirm inspection availability.');
}

if ((appMatch('Permits/*/Site Work/NA') || appMatch('Permits/Stormwater/Flood Plain Development/NA'))) {
	//replaced branch(ES_SITE_WF_UPD_AFTER)
	ES_SITE_WF_UPD_AFTER();
}

if (matches(wfTask, 'Planning', 'Zoning Review')
	&& matches(wfStatus, 'Approved', 'Approved with Conditions', 'Disapproved', 'Partial Approval')
	&& AInfo['Apply Steep Slope Fee?'] == 'Yes'
) {
	updateFee('STEEPSLOPE', 'RES_NEW', 'FINAL', 1, 'Y');
	updateFee('TECH', 'GENERAL', 'FINAL', 1, 'Y');
}

if (matches(wfTask, 'Downtown Design Review')
	&& matches(wfStatus, 'Approved', 'Approved with Conditions', 'Not Required')
) {
	email('PAC@ashevillenc.gov',
		'noreply@ashevillenc.gov',
		'DTDR Task',
		'Downtown Design Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
}

if (matches(wfTask, 'Landmark')
	&& matches(wfStatus, 'Not Required', 'Major Work Required', 'Minor Work Required')) {
	email('PAC@ashevillenc.gov',
		'noreply@ashevillenc.gov',
		'Landmark Task',
		'Landmark Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
}

if (matches(wfTask, 'HRC Overlay')
	&& matches(wfStatus, 'Not Required', 'Minor Work Required', 'Major Work Required')) {
	email('PAC@ashevillenc.gov',
		'noreply@ashevillenc.gov',
		'HRC Overlay Task',
		'HRC Overlay Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
}

// Added as per Diane 3/30/17 -- notifies PAC when River District task is updated to statuses below
// (These statuses result in Go To Next Task, e.g. PAC may need to issue permit)

//WOID: 93669
//Description:
// Added as per Diane 3/30/17 -- notifies PAC when River District task is updated to statuses below
// (These statuses result in Go To Next Task, e.g. PAC may need to issue permit)
if (matches(wfTask, 'River District Design Review')
	&& matches(wfStatus, 'Approved', 'Approved with Conditions', 'Not Required')
) {
	email('PAC@ashevillenc.gov',
		'noreply@ashevillenc.gov',
		'RDDR Task',
		'River District Design Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
}

if (matches(wfStatus, 'Issue', 'Issue Partial', 'Reissue', 'Amended')) {
	//replaced branch(WORKFLOWTASK_UA_ADD_INSP)
	WORKFLOWTASK_UA_ADD_INSP();
}

// Declared twice below-- why?
var profArr;

// Changed below as well
if (appMatch('*/*/*/Repair-Replacement') && matches(wfStatus, 'Hold - See Comment')) {
	profArr = getLicenseProfessional(capId);
	if (matches(wfTask, 'Air Quality') && profArr != null) {
		for (x in profArr) {
			if (profArr[x].getEmail() + '' != '') {
				email(profArr[x].getEmail(),
				'noreply@ashevillenc.gov',
				'Permit Suspended',
				'You are identified as a Licensed Contractor on permit, ' + capIDString + ' This Repair-Replacement permit has been suspended by the WNC Regional Air Quality Agency. Please cease work immediately and contact Mike Matthews at 828-250- 6776 for information regarding next steps.');
			}
		}
	}

	if (matches(wfTask, 'Fire Review') && profArr != null) {
		for (x in profArr) {
			if (profArr[x].getEmail() + '' != '') {
				email(profArr[x].getEmail(),
				'noreply@ashevillenc.gov',
				'Permit Suspended',
				"You are identified as a Licensed Contractor on permit,  " + capIDString + " This Repair-Replacement permit has been suspended by the Fire Marshal' s Office.Please cease work immediately and contact the permit office at 828 - 259 - 5846 for information regarding next steps.");
			}
		}
	}

	if (matches(wfTask, 'Air Quality')) {
		emailAllContacts('Permit Suspended', 'You are listed as a contact for permit ' + capIDString + " This repair - replacement permit has been suspended by the WNC Regional Air Quality Agency.Please cease work and contact Mike Matthews at 828 - 250 - 6776 for information regarding next steps.");
	}

	if (matches(wfTask, 'Fire Review')) {
		emailAllContacts('Permit Suspended', "You are listed as a contact for permit " + capIDString + " This repair - replacement permit has been suspended by the Fire Marshal ' s Office.Please cease work and contact the permit office at 828 - 259 - 5846 for information regarding next steps.");
	}
}


profArr = getLicenseProfessional(capId);
if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Permits/*/Site Work/*')) && matches(wfStatus, 'Issue') && AInfo['Issue Grading Permit To'] != 'NA') {
	if(appMatch('Permits/Residential/Site Work/*')) {
		emailByContactType(
		'Grading Preliminary Inspection Required',
		'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> A Grading Permit is being issued for this location contingent upon proper installation of all erosion control devices. <br> The contractor must schedule a GR-PRELIM inspection before commencing work. All approved plans and permits must be on site. Silt Fencing and a Construction Entrance must be installed, and the temporary address must be posted. This inspection is required on individual lots, master sites and also required for individual lots within Subdivisions. Building permit inspections will be delayed until the Grading Preliminary inspection is approved. Thank you.',
		'ALL',
		'residentialpermits@ashevillenc.gov'
		)
	} else {
		emailByContactType(
		'Grading Preliminary Inspection Required',
		'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> A Grading Permit is being issued for this location contingent upon proper installation of all erosion control devices. <br> The contractor must schedule a GR-PRELIM inspection before commencing work. All approved plans and permits must be on site. Silt Fencing and a Construction Entrance must be installed, and the temporary address must be posted. This inspection is required on individual lots, master sites and also required for individual lots within Subdivisions. Building permit inspections will be delayed until the Grading Preliminary inspection is approved. Thank you.',
		'ALL',
		'developmentservices@ashevillenc.gov'
		)
	}
	// Declared above as well
	if (profArr != null) {
		for (x in profArr) {
			if (profArr[x].getEmail() + '' != '') {
				email(profArr[x].getEmail(),
					'noreply@ashevillenc.gov',
					'Grading Preliminary Inspection Required', 'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> A Grading Permit is being issued for this location contingent upon proper installation of all erosion control devices. <br> The contractor must schedule a GR-PRELIM inspection before commencing work. All approved plans and permits must be on site. Silt Fencing and a Construction Entrance must be installed, and the temporary address must be posted. This inspection is required on individual lots, master sites and also required for individual lots within Subdivisions. Building permit inspections will be delayed until the Grading Preliminary inspection is approved. Thank you.');
			}
		}
	}
}
//end replaced branch: WORKFLOW_UA_PERMITS;

// two emails reformatted 8/22/2019
if (appMatch('Permits/Residential/*/*') && !appMatch('Permits/Residential/Home Occupation/*')) {
	if (matches(wfTask, 'Building Review','Zoning Review','Grading','Driveway','Planning') && matches(wfStatus, 'Hold for Revision')&& appMatch('Permits/Residential/*/*')) {
		emailByContactType('Action Needed On Your Permit', 
			'<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + ' <br><p>Your residential permit application has been reviewed and requires additional information and/or revision. For your convenience, you may visit the Citizen Access website (<a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>) to print your permit and approved plans/comments. </p><p>Please refer to the following steps to access your approved permit and plans/comments online in .PDF format:</p><p><ol><li>Visit <a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>. Register for a Citizen Access account if you have not already done so, then log in to access the permit documents.</li><li>Enter your permit number in the top right <b>search box</b> and click on the green spyglass to pull up the permit record.</li><li>Click <b>Record Info</b> to access a drop-down menu; then select <b>Attachments</b> from the drop-down menu.</li><li>To download reviewed plans and comments, click the blue links next to documents labeled <b>REVIEWED SITE PLANS + COMMENTS</b> and/or <b>REVIEWED BUILDING PLANS + COMMENTS.</b></li></ol></p><p>You may resubmit your revised plans and response to comments online in .PDF format through <a href="develop.ashevillenc.gov">develop.ashevillenc.gov</a> or in person during business hours at 161 S. Charlotte St.</p><p>For additional information and resubmittal guidelines, visit <a href="http://bit.ly/dsd_new_residential">http://bit.ly/dsd_new_residential</a>. </p><p>Please note that your plans may be reviewed by staff from multiple divisions, including the Building Safety Division ("Building"), Planning and Zoning Division ("Planning"), and Site Engineering Division ("Site") depending on your scope of work. You will receive additional notification emails if your application receives plan review comments from other divisions.</p><p>If you have questions, please contact the Permit Application Center at <a href="mailto:PAC@ashevillenc.gov">PAC@ashevillenc.gov</a> or 828-259-5846 or visit in-person at 161 S. Charlotte St. on Monday-Friday from 8:30 am - 5:00 pm. </p><hr></body></html>',
			'ALL',
			'residentialpermits@ashevillenc.gov'
			);
	}
}
// added 2/20/2019 to email all residential customers, electronic submittal or not, when a permit can be picked up online 
if (appMatch('Permits/Residential/*/*') && wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')) {
	emailByContactType('Permit Approved', 
		'<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + ' <br><p>Your residential permit application has been approved. For your convenience, you may visit the Citizen Access website (<a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>) to print your permit and approved plans/comments. </p><p>Please note that the issued permit along with the approved plans/comments must be maintained in hard copy on the project site during construction until the permit is closed.</p><p>Please refer to the following steps to access your approved permit and plans/comments online in .PDF format:</p><p><ol><li>Visit <a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>. Register for a Citizen Access account if you have not already done so, then log in to access the permit documents.</li><li>Enter your permit number in the top right <b>search box</b> and click on the green spyglass to pull up the permit record.</li><li>Click <b>Record Info</b> to access a drop-down menu; then select <b>Attachments</b> from the drop-down menu.</li><li>To download the 1) issued permit and 2) approved plans/comments, click the blue links next to documents labeled <b>ISSUED PERMIT</b> and <b>APPROVED SITE PLANS + COMMENTS</b> and/or <b>APPROVED BUILDING PLANS + COMMENTS.</b> </li></ol></p><p>If you have questions, please contact the Permit Application Center at PAC@ashevillenc.gov or 828-259-5846 or visit in-person at 161 S. Charlotte St. on Monday-Friday from 8:30 am - 5:00 pm. </p><hr></body></html>',
		'ALL',
		'residentialpermits@ashevillenc.gov'
		);
}

// To bypass Clearing House step after all review steps are complete 4/25/2019
if (matches(wfStatus, 'Approved','Approved with Conditions','Partial Approval','Plan Review Waiver','Not Required')) {
	if (matches(wfProcess, 'DIV REVIEW-RES')) {
		if (wfTask == 'Grading' ||  
			wfTask == 'Building Review' || 
			wfTask == 'Driveway' || 
			wfTask == 'Zoning Review') {
				if(	
				isTaskComplete("Building Review") && 
				isTaskComplete("Grading") && 
				isTaskComplete("Zoning Review") && 
				isTaskComplete("Driveway") 
			) {
			setTask('Issuance', 'Y', 'N', 'MASTER-RES');
                         closeTask('Review Process', 'Complete', 'Completed by Script', 'MASTER-RES');
			}
		}
	}
}

// 8/22/2019 
if (appMatch('Permits/*/*/SFD') || appMatch('Permits/*/*/SFD Waiver') || appMatch('Permits/Residential/Existing Building/Alterations w Addition')) {
	if(wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')) {
		if (AInfo['DR Permit'] != 'NA') {
			createPendingInspection('RES_SITE', 'DR-PRELIMINARY');
			createPendingInspection('RES_SITE', 'DR-FINAL');
		}
		if (AInfo['GR Permit'] != 'NA') {
			createPendingInspection('RES_SITE', 'GR-PRELIMINARY');
			createPendingInspection('RES_SITE', 'GR-ROUTINE');
			createPendingInspection('RES_SITE', 'GR-FINAL');
		}
	}
}
// added 8/30/19 as per Misty
//if (appMatch('Permits/Residential/Existing Building/Alterations w Addition') || appMatch('Permits/Residential/Existing Building/Alterations'))  {
//			createPendingInspection('R_MASTER', 'BU-FRAMING');
//			createPendingInspection('R_MASTER', 'BU-INSULATION');
// }

// 9/17/2019 Cross Connection Status emails
if (appMatch('Permits/Commercial/*/*')) {
  var emailSignature = '<p>Thank you,</p>' + 
  '<p>Cross Connection Control<br>' + 
  'City of Asheville Water Resources Department<br>' + 
  'Jeffrey Bryant (c) 828-777-6703<br>' + 
  'Jeremy Brooks (c) 828-707-0205<br>' + 
  'Jerrod Walker (c) 828-772-4607<br>' + 
  'Office 828-259-5977</p>'

  // ALL IS WELL
  if (matches(wfTask, 'Cross Connection') && matches(wfStatus, 'Backflow Assembly Compliant')) {
    emailByContactType('Backflow Compliance Notification: ' + CapAddress, 
    '<html><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + '<br><p>To Whom It May Concern,</p><p>We are with the Cross Connection Control Office at the City of Asheville Water Department.  Your commercial permit has been reviewed and it has been determined that the property listed has proper backflow protection that is fully compliant.  If you have any questions about the backflow protection for this property, please contact our office. </p>' +
    emailSignature +
    '<hr></body></html>', 
    'Applicant', 
    'backflowmailbox@ashevillenc.gov')
  }
  // Not tracking backflow protection:
  if (matches(wfTask, 'Cross Connection') && matches(wfStatus, 'Backflow Assembly Required')) {
    emailByContactType('IMPORTANT: Backflow Non-Compliance Issue: ' + CapAddress, 
    '<html><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + ' <br><p>To Whom It May Concern,</p><p>We are with the Cross Connection Control Office at the City of Asheville Water Department.  We needed to let you know we are not tracking a backflow assembly for the property listed on your commercial permit application.  All commercial properties on the Asheville water system are required to have proper backflow protection and have it tested every 12 months.  This issue will not keep you from obtaining your permit, but the requirement will have to be met before a Certificate of Occupancy can be issued. If you find that your property has a backflow assembly installed we simply need to inspect it.  If it passes inspection you will need to have it tested immediately.  If you don\'t have backflow protection, or are uncertain, we need to schedule a meeting at the property to determine what is needed.  This commercial water use requirement is non-negotiable so please contact one of our inspectors, or our office, at your earliest convenience to discuss.</p>' +
    emailSignature +
    '<hr></body></html>', 
    'Applicant', 
    'backflowmailbox@ashevillenc.gov')
  }
  // Tracking backflow protection, but it needs to be tested or modified:
  if (matches(wfTask, 'Cross Connection') && matches(wfStatus, 'Backflow Verification Required')) {
    emailByContactType('IMPORTANT: Backflow Non-Compliance Issue: ' + CapAddress, 
    '<html><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + ' <br><p>To Whom It May Concern,</p><p>We are with the Cross Connection Control Office at the City of Asheville Water Department.  We needed to let you know that one or more backflow assembly at the property listed on your commercial permit application are past due for testing.  All backflow assemblies on the Asheville water system must be tested every 12 months.  This issue will not keep you from obtaining your permit, but the requirement will have to be met before a Certificate of Occupancy can be issued.  If you believe that this test has been completed it\'s possible that we just haven\'t received the results.  If you have not had the test completed, this needs to be done immediately.  Either way, you need to contact one of our inspectors, or our office, at your earliest convenience.</p>' +
    emailSignature +
    '<hr></body></html>', 
    'Applicant', 
    'backflowmailbox@ashevillenc.gov')
  }
}


//setTask(divisionReviewCheck, 'N', 'Y', 'DIVISION REVIEWdue

// 8/17/2019 
if (appMatch("*/*/*/Home Stay") 
	&& (matches(wfStatus, 'Application Complete') && matches(wfTask, 'Application Process'))) {
	editTaskDueDate("Zoning Review", dateAdd(null, 15, 'Y'));
}


// added 11/12/2019 to email all lic prof when permit issued
if ( (wfTask == 'Issuance' || wfTask == 'Permit Verification' || wfTask == 'Application Process') && matches(wfStatus, 'Issue', 'Reissue')) {
	var ownerName = getOwnerNameFromCap();
	var fromAddr ;
	if (appMatch('*/Residential/*/*')) {
		fromAddr = 'residentialpermits@ashevillenc.gov';
	} else {
		fromAddr = 'developmentservices@ashevillenc.gov';
  }
// Send to all licensed prof unless they are a contact
var licProc = getEmailsByLicenseType('ALL');
var contacts = getEmailsByContactType('ALL');
var emailAddrs = inAButNotB(licProc,contacts);

var emailTo = emailAddrs.join(';')
email(
  emailTo,
  fromAddr,
  'Permit Issued by City of Asheville - You are Listed as a Licensed Professional', 
		'<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' 
		+ capIDString + ' <br>Location: ' + CapAddress + '<br>Owner: ' + ownerName
		+ '<br><p>'
		+ ' Hello, you are receiving this email because you are listed as a licensed professional on this permit that was issued by the City of Asheville. '
		+ ' We appreciate you doing business in Asheville!'
		+ '</p><p>'
		+ ' If you should not be on this permit, please let us know at pac@ashevillenc.gov. We look forward to working with you. Thank you, '
		+ '</p><p>'
    + ' City of Asheville Development Services Department</p><hr></body></html>');
    
	// emailByContactType('Permit Issued by City of Asheville - Licenced Professionals being notified', 
	// 	'<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' 
	// 	+ capIDString + ' <br>Location: ' + CapAddress + '<br>Owner: ' + ownerName + 
	// 	' <br><p>Your residential permit application has been issued. Everyone listed as a Licensed Professional has received the following email. For your convenience, you may visit the Citizen Access website (<a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>) to print your permit and approved plans/comments. </p><p>Please note that the issued permit along with the approved plans/comments must be maintained in hard copy on the project site during construction until the permit is closed.</p><p>Please refer to the following steps to access your approved permit and plans/comments online in .PDF format:</p><p><ol><li>Visit <a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>. Register for a Citizen Access account if you have not already done so, then log in to access the permit documents.</li><li>Enter your permit number in the top right <b>search box</b> and click on the green spyglass to pull up the permit record.</li><li>Click <b>Record Info</b> to access a drop-down menu; then select <b>Attachments</b> from the drop-down menu.</li><li>To download the 1) issued permit and 2) approved plans/comments, click the blue links next to documents labeled <b>ISSUED PERMIT</b> and <b>APPROVED SITE PLANS + COMMENTS</b> and/or <b>APPROVED BUILDING PLANS + COMMENTS.</b> </li></ol></p><p>If you have questions, please contact the Permit Application Center at PAC@ashevillenc.gov or 828-259-5846 or visit in-person at 161 S. Charlotte St. on Monday-Friday from 8:30 am - 5:00 pm. </p><hr></body></html>',
	// 	'Applicant',
	// 	fromAddr
	// 	);
}

// 8/17/2019 
if (appMatch("*/*/*/Home Stay") 
	&& (matches(wfStatus, 'Application Complete') && matches(wfTask, 'Application Process'))) {

    var statusDate = aa.env.getValue("StatusDate"); 
    showMessage = true;
    comment(statusDate);
    comment(dateAdd(statusDate, 365));
    AInfo['EXPIRATION DATE'] = dateAdd(statusDate, 365);
    comment(AInfo['EXPIRATION DATE']);
}