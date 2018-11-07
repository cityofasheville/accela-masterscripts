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
}

if (wfTask == 'Routing') { //
	//start replaced branch: ES_SET_WF_DIVISION REVIEW
	var divisionReviewSetList = [
		'Addressing',
		'Building Review',
		'Fire Review',
		'Zoning Review',
	];
	for (var divisionReviewIndex = 0; divisionReviewIndex < divisionReviewSetList.length; divisionReviewIndex++) {
		var divisionReviewCheck = divisionReviewSetList[divisionReviewIndex];
		if (AInfo[divisionReviewCheck] == 'No') {
			setTask(divisionReviewCheck, 'N', 'Y', 'DIVISION REVIEW');
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
	if (AInfo['Expected Timeframe'] == 'Res. Waiver - 2 Days') {
		setAllDivisionReviewTimes(2, divisionReviewSetList);
	}
	if (AInfo['Expected Timeframe'] == 'Residential - 10 Days'
		|| AInfo['Expected Timeframe'] == 'Small Comm - 10 Days'
	) {
		setAllDivisionReviewTimes(10, divisionReviewSetList);
	}
	if (AInfo['Expected Timeframe'] == 'Std Level I Comm  - 21 Days') {
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
	emailToStartHomeStayReview('talley@ashevillenc.gov');
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
		emailContact('Permit Suspended', 'You are listed as a contact for permit ' + capIDString + " This repair - replacement permit has been suspended by the WNC Regional Air Quality Agency.Please cease work and contact Mike Matthews at 828 - 250 - 6776 for information regarding next steps.");
	}

	if (matches(wfTask, 'Fire Review')) {
		emailContact('Permit Suspended', "You are listed as a contact for permit " + capIDString + " This repair - replacement permit has been suspended by the Fire Marshal ' s Office.Please cease work and contact the permit office at 828 - 259 - 5846 for information regarding next steps.");
	}
}


profArr = getLicenseProfessional(capId);
if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Permits/*/Site Work/*')) && matches(wfStatus, 'Issue') && AInfo['Issue Grading Permit To'] != 'NA') {
	emailContact(
		'Grading Preliminary Inspection Required',
		'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> A Grading Permit is being issued for this location contingent upon proper installation of all erosion control devices. <br> The contractor must schedule a GR-PRELIM inspection before commencing work. All approved plans and permits must be on site. Silt Fencing and a Construction Entrance must be installed, and the temporary address must be posted. This inspection is required on individual lots, master sites and also required for individual lots within Subdivisions. Building permit inspections will be delayed until the Grading Preliminary inspection is approved. Thank you.');
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
