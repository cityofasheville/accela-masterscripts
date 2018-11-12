if (wfTask == 'Application Process' && matches(wfStatus, 'Complete', 'Application Incomplete')) {
	editAppSpecific('Application Expiration Date', dateAdd(null, 180));
}

if ((
		appMatch('Planning/Development/Conditional Use/NA') ||
		appMatch('Planning/Development/Conditional Zoning/NA') ||
		appMatch('Planning/Development/Level III/NA') ||
		appMatch('Planning/Development/Manufactured Hsg Community/NA') ||
		appMatch('Planning/Development/Vested Rights/NA')
	) && wfTask == 'City Council'
) {
	if (matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('Council Approval Expires', dateAdd(null, 730));
	}
	if (matches(wfStatus, 'Approved', 'Approved with Conditions', 'Denied')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}
}

if (appMatch('Planning/Development/Level II/NA')) {
	if (wfTask == 'PZC') {
		if (matches(wfStatus, 'Approved', 'Approved with Conditions')) {
			editAppSpecific('PZC Approval Expires', dateAdd(null, 365));
		}
		if (matches(wfStatus, 'Denied')) {
			editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
		}
	}
	if (wfTask == 'Appeal to City Council' && matches(wfStatus, 'Denial Upheld', 'Approval Overturned')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}
}
if (appMatch('Planning/Subdivision/Major/NA')) {
	if (wfTask == 'PZC') {
		if (matches(wfStatus, 'Approved', 'Approved with Conditions')) {
			editAppSpecific('PZC Approval Expires', dateAdd(null, 730));
		}
		if (matches(wfStatus, 'Denied')) {
			editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
		}
	}
	if (wfTask == 'Appeal to City Council' && matches(wfStatus, 'Denial Upheld', 'Approval Overturned')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}
}

if (appMatch('Planning/Subdivision/Modification/NA')) {
	if (wfTask == 'PZC' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('PZC Approval Expires', dateAdd(null, 30));
	}
	if (
		(wfTask == 'PZC' && matches(wfStatus, 'Denied')) ||
		(wfTask == 'Appeal to City Council' && matches(wfStatus, 'Denial Upheld', 'Approval Overturned'))
	) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}
}

if (
	(appMatch('Planning/Subdivision/Minor/NA') && wfTask == 'Verification' && matches(wfStatus, 'Project Approved')) ||
	(appMatch('Planning/Subdivision/Recombination/NA') && wfTask == 'Verification' && matches(wfStatus, 'Project Approved'))
) {
	editAppSpecific('Approval Expiration Date', dateAdd(null, 30));
}

if (appMatch('Planning/Development/Signage Plan/NA') && wfTask == 'City Council') {
	if (matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('Approval Expiration Date', dateAdd(null, 365));
	}
	if (matches(wfStatus, 'Denied')) {
		addStdCondition('Planning', 'Signage Plan Denial');
	}
}

if (appMatch('Planning/HRC/Major Work/NA') && wfTask == 'Issuance') {
	if (matches(wfStatus, 'Issue', 'Reissue')) {
		editAppSpecific('Approval Expiration Date', dateAdd(null, 365));
	}
	if (matches(wfStatus, 'Deny')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}
}

if (appMatch('Planning/HRC/Minor Work/NA') && wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')) {
	editAppSpecific('Approval Expiration Date', dateAdd(null, 365));
}

if ((
		appMatch('*/*/Alternative Compliance/*') ||
		appMatch('*/*/Board of Adjustments/*') ||
		appMatch('*/*/DTC/*') ||
		appMatch('*/*/RDRR/*') ||
		appMatch('Planning/Variance/*/*')
	) &&
	wfTask == 'Commission Review' &&
	matches(wfStatus, 'Approved', 'Approved with Conditions', 'Denied', 'Recommended Denial')
) {
	editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
}

if (appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') && matches(wfStatus, 'Issue', 'Reissue')) {
	if (AInfo['Issue Zoning Permit To'] != 'NA') {
		editAppSpecific('Zoning Permit Expires', dateAdd(null, 365));
	}

	if (AInfo['Issue Stormwater Permit To'] != 'NA') {
		editAppSpecific('Stormwater Permit Expires', dateAdd(null, 365));
	}

	if (AInfo['Issue Grading Permit To'] != 'NA') {
		editAppSpecific('Grading Permit Expires', dateAdd(null, 365));
	}

	if (AInfo['Issue Driveway Permit To'] != 'NA') {
		editAppSpecific('Driveway Permit Expires', dateAdd(null, 365));
	}
}

if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*'))) {
	ES_SITE_WF_UPD_AFTER();
}

if (wfTask == 'Addressing' && matches(wfStatus, 'Approved - Fees Due')) {
	ES_ADDRESSING_FEES();
}

if (
	matches(wfTask, 'Planning', 'Staff Level Site Plan Review', 'Final TRC', 'Technical Review') &&
	matches(wfStatus, 'Approved', 'Approved with Conditions', 'Disapproved', 'Partial Approval') &&
	AInfo['Apply Steep Slope Fee?'] == 'Yes'
) {
	updateFee('STEEPSLOPE', 'RES_NEW', 'FINAL', 1, 'Y');
	updateFee('TECH', 'GENERAL', 'FINAL', 1, 'Y');
}

if (appMatch('Planning/*/*/*') && matches(wfStatus, 'Final Approved', 'Expired')) {
	if (wfTask == 'Planning Construction') {
		closeTask('Planning', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
	}

	if (wfTask == 'Grading Construction') {
		closeTask('Grading', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
	}

	if (wfTask == 'Driveway Construction') {
		closeTask('Driveway', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
	}

	if (wfTask == 'Stormwater Construction') {
		closeTask('Stormwater', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
	}

	if (wfTask == 'Flood Construction') {
		closeTask('Flood', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
	}
}

if (wfProcess == 'PLN_1STTRCCOMMENTS') {
	if (wfStatus == 'Comments Sent') {
		updateTask('TRC', 'Hold for Revision', 'Set by Script', '', 'PLN_TRC');
		updateTask('Level II TRC', 'Hold for Revision', 'Set by Script', '', 'PLN_LVL2SUB');
	}
	if (wfStatus == 'Hold for Revision') {
		activateTask('Resubmittal', 'PLN_1STTRCCOMMENTS');
	}
}

if (wfProcess == 'PLN_2NDTRCCOMMENTS') {
	if (wfStatus == 'Hold for Revision') {
		activateTask('Resubmittal', 'PLN_2NDTRCCOMMENTS');
	}
	if (wfStatus == 'Comments Sent') {
		updateTask('Final TRC', 'Hold for Revision', 'Set by Script', '', 'PLN_TRC');
		updateTask('Final Review', 'Hold for Revision', 'Set by Script', '', 'PLN_LVL2SUB');
	}
}

if ((
		appMatch('Planning/Permits/Level II/NA') ||
		appMatch('Planning/Permits/Level III/NA') ||
		appMatch('Planning/Permits/Conditional Zoning/NA') ||
		appMatch('Planning/Permits/Manufactured Hsg Community/NA') ||
		appMatch('Planning/Permits/Vested Rights/NA') ||
		appMatch('Planning/Subdivision/Major/NA') ||
		appMatch('Planning/Subdivision/Modification/NA')
	) && wfStatus == 'Amend' && wfTask == 'Partial Permit')
{
	activateTask('Application Process');
}

if (wfProcess == 'PLN_HRCMINOR' && wfStatus == 'Hold for Revision') {
	activateTask('Amendment Routing', 'PLN_HRCMINOR');
}

if (wfProcess == 'PLN_LVL2' && wfStatus == 'Hold for Revision') {
	activateTask('Application Process', 'PLN_LVL2');
}




if (appMatch('Planning/Non Development/*/*') && matches(wfStatus, 'Withdrawn')) {
	deactivateTask('Planning Review');
}

if (appMatch('Planning/HRC/Major Work/NA') && matches(wfStatus, 'Expired', 'Revoke')) {
	deactivateTask('Issuance');
}

if (appMatch('Planning/*/Conditional Use/*') && wfTask == 'City Council' && matches(wfStatus, 'Remand to DC')) {
	deactivateTask('City Council');
	activateTask('Downtown Commission');
}

if (appMatch('Planning/*/Conditional Use/*') && matches(wfStatus, 'Appeal Received')) {
	activateTask('PZC Appeal');
	deactivateTask('Initial TRC');
}

if (wfProcess == 'PLN_CUP' && wfStatus == 'Hold for Revision') {
	activateTask('Project Intake', 'PLN_CUP');
}

if (appMatch('Planning/*/Conditional Use/*') && wfStatus == 'Amend' && wfTask == 'Partial Permit') {
	activateTask('Project Intake');
}

if (wfProcess == 'PLN_LEVEL1COMMENTS' && wfStatus == 'Hold for Revision') {
	activateTask('Resubmittal', 'PLN_LEVEL1COMMENTS');
}

if (wfProcess == 'PLN_TEMP-OCC' && wfStatus == 'Hold for Revision') {
	activateTask('Amendment Routing', 'PLN_TEMP-OCC');
}

if (matches(wfProcess, 'PLN_TRC', 'PLN_LVL2') && wfStatus == 'Hold for Revision') {
	activateTask('Application Process');
}

if (matches(wfProcess, 'PLN_HRCMINOR', 'PLN_SUBMINOR', 'PW_DEV') && wfStatus == 'Hold for Revision') {
	activateTask('Amendment Routing');
}

if (appMatch('Planning/Development/Signage Plan/*') && matches(wfStatus, 'Denied')) {
	addParcelCondition(
		null,
		'Planning',
		'Applied',
		'Signage Plan Detail',
		'City Council has denied the proposed signage plan associated with this parcel. The applicant must wait at least 365 days before reapplying for a new signage plan substantially similar to the proposed signage plan.',
		'Notice'
	);
}

// Added 2/27/18 to email PAC that a Pre-con meeting is possible. As per Chris. Permit Verification task exists only for Level I, Level II, Maj Sub, Level III, Cond Zoning -- which are the exact record types this email applies to.
// 3/9/18 as per Chris and Susannah, changed to Nancy and Caitlyn rather than PAC
//commented out 5/18/18 -- not in right place, now emailing Thana after individual tasks

//if (wfTask == 'Permit Verification' && matches(wfStatus, 'Issue', 'Issue Partial')) {
//	email('NWatford@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Pre-Construction Meeting', 'Possible Pre-Construction meeting required. ' + capIDString + ' - Please check record and if pre-con meeting is required, please contact the applicant to schedule.');
//	email('CShort@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Pre-Construction Meeting', 'Possible Pre-Construction meeting required. ' + capIDString + ' - Please check record and if pre-con meeting is required, please contact the applicant to schedule.');
//
//
//}
//
// Changes made 5/18/18 to email Thana/Caitlyn when all of these tasks are completed.
// 8/22/18 Added Not Required to statuses to check for


function emailAboutPreConstructionMeeting (emailAddress) {
	email(
		emailAddress,
		'noreply@ashevillenc.gov',
		'Pre-Construction Meeting',
		'Preliminary tasks approved. Possible Pre-Construction meeting required. ' +
		capIDString +
		' - Please check record and if pre-con meeting is required, please contact the applicant to schedule and let Nancy know. If not, please coordinate approvals or take other action to move forward'
	);
}

if (matches(wfProcess, 'PLN_LVL2', 'PLN_LVL2SUB', 'PLN_TRC', 'PLN_CUP') && matches(wfStatus, 'Approved','Approved with Conditions','Not Required')) {
	if (wfTask == 'Grading') {
		if (isTaskComplete("Stormwater") && isTaskComplete("Driveway") && isTaskComplete("Sidewalk") && isTaskComplete("Addressing") && isTaskComplete("Application Process") && isTaskComplete("Planning Intake") && isTaskComplete("Technical Review") && isTaskComplete("Pre-Application Process")) {
			emailAboutPreConstructionMeeting('CShort@ashevillenc.gov');
			emailAboutPreConstructionMeeting('NWatford@ashevillenc.gov');
		}
	}

	if (wfTask == 'Stormwater') {
		if (isTaskComplete("Grading") && isTaskComplete("Driveway") && isTaskComplete("Sidewalk") && isTaskComplete("Addressing") && isTaskComplete("Application Process") && isTaskComplete("Planning Intake") && isTaskComplete("Technical Review") && isTaskComplete("Pre-Application Process")) {
			emailAboutPreConstructionMeeting('CShort@ashevillenc.gov');
			emailAboutPreConstructionMeeting('NWatford@ashevillenc.gov');
		}
	}

	if (wfTask == 'Driveway') {
		if (isTaskComplete("Stormwater") && isTaskComplete("Grading") && isTaskComplete("Sidewalk") && isTaskComplete("Addressing") && isTaskComplete("Application Process") && isTaskComplete("Planning Intake") && isTaskComplete("Technical Review") && isTaskComplete("Pre-Application Process")) {
			emailAboutPreConstructionMeeting('CShort@ashevillenc.gov');
			emailAboutPreConstructionMeeting('NWatford@ashevillenc.gov');
		}
	}

	if (wfTask == 'Sidewalk') {
		if (isTaskComplete("Stormwater") && isTaskComplete("Driveway") && isTaskComplete("Grading") && isTaskComplete("Addressing") && isTaskComplete("Application Process") && isTaskComplete("Planning Intake") && isTaskComplete("Technical Review") && isTaskComplete("Pre-Application Process")) {
			emailAboutPreConstructionMeeting('CShort@ashevillenc.gov');
			emailAboutPreConstructionMeeting('NWatford@ashevillenc.gov');
		}
	}
}


if (matches(wfProcess, 'PW_DEV') && matches(wfStatus, 'Approved','Approved with Conditions','Not Required')) {
	if (wfTask == 'Grading') {
		if (isTaskComplete("Stormwater") && isTaskComplete("Driveway") && isTaskComplete("Sidewalk") && isTaskComplete("Addressing") && isTaskComplete("Application Process") && isTaskComplete("Staff Level Site Plan Review") && isTaskComplete("Technical Review") && isTaskComplete("Pre-Application Process")) {
			emailAboutPreConstructionMeeting('TAlley@ashevillenc.gov');
			emailAboutPreConstructionMeeting('NWatford@ashevillenc.gov');
		}
	}
	if (wfTask == 'Driveway') {
		if (isTaskComplete("Stormwater") && isTaskComplete("Grading") && isTaskComplete("Sidewalk") && isTaskComplete("Addressing") && isTaskComplete("Application Process") && isTaskComplete("Staff Level Site Plan Review") && isTaskComplete("Technical Review") && isTaskComplete("Pre-Application Process")) {
			emailAboutPreConstructionMeeting('TAlley@ashevillenc.gov');
			emailAboutPreConstructionMeeting('NWatford@ashevillenc.gov');
		}
	}
	if (wfTask == 'Stormwater') {
		if (isTaskComplete("Grading") && isTaskComplete("Driveway") && isTaskComplete("Sidewalk") && isTaskComplete("Addressing") && isTaskComplete("Application Process") && isTaskComplete("Staff Level Site Plan Review") && isTaskComplete("Technical Review") && isTaskComplete("Pre-Application Process")) {
			emailAboutPreConstructionMeeting('TAlley@ashevillenc.gov');
			emailAboutPreConstructionMeeting('NWatford@ashevillenc.gov');
		}
	}
	if (wfTask == 'Staff Level Site Plan Review') {
		if (isTaskComplete("Stormwater") && isTaskComplete("Driveway") && isTaskComplete("Sidewalk") && isTaskComplete("Addressing") && isTaskComplete("Application Process") && isTaskComplete("Grading") && isTaskComplete("Technical Review") && isTaskComplete("Pre-Application Process")) {
			emailAboutPreConstructionMeeting('TAlley@ashevillenc.gov');
			emailAboutPreConstructionMeeting('NWatford@ashevillenc.gov');
		}
	}
	if (wfTask == 'Sidewalk') {
		if (isTaskComplete("Stormwater") && isTaskComplete("Driveway") && isTaskComplete("Grading") && isTaskComplete("Addressing") && isTaskComplete("Application Process") && isTaskComplete("Grading") && isTaskComplete("Technical Review") && isTaskComplete("Pre-Application Process")) {
			emailAboutPreConstructionMeeting('TAlley@ashevillenc.gov');
			emailAboutPreConstructionMeeting('NWatford@ashevillenc.gov');
		}
	}
}

// Added below 5/23/18 to send email to primary contact. this is for records that may be created online to alert the customer their permit can be printed out.

if (wfTask == 'Permit Verification' && matches(wfStatus, 'Issue', 'Reissue', 'Issue Partial')) {
	emailContact('Your Permit Has Been Issued -- Important Instructions Inside', 'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> Your permit has been issued at this location. If you have not received your permit and plans already, before starting work, please follow the steps below to prepare the permit and plans for this project.<br><br> --Visit Develop.AshevilleNC.Gov<br> --Click Access Permits and Inspections<br> --Search for the above record number in the top-right corner of the page.<br> --Click the arrow down next to Record Info and select Attachments<br> --Click the name of the approved plans and permit to download<br><br>The project permit must be posted at the work site. Approved plans must be available on-site.');

}
// End added 5/23




if (wfTask == 'Permit Verification' && matches(wfStatus, 'Issue', 'Issue Partial')) {

	//replaced branch(WORKFLOWTASK_UA_ADD_INSP)
	WORKFLOWTASK_UA_ADD_INSP();
}

if (matches(wfTask, 'HRC Review') && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'HRC Overlay Task', 'HRC Overlay Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
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

//end replaced branch: WORKFLOW_UA_PLANNING;
