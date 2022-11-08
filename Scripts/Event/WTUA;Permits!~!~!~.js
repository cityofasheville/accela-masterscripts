// WTUA:Permits/*/*/* WORKFLOWTASKUPDATEAFTER
// if (matches(currentUserID, 'RHEDRICK', 'MMAZANEC')) {
// 	showDebug = true;
// }

//start replaced branch: WORKFLOW_UA_PERMITS
var parentCapId = getParent();

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
	var permitCats = {
		// AInfo field Name : Permits/Fire/Construction/  category
		'Fire Alarm & Detection Permit Required': 'Fire Alarm',
		'Sprinkler System Permit Required': 'Sprinkler System',
		'Hood Suppression Permit Required': 'Hood Suppression',
		'Compressed Gas Permit Required': 'Compressed Gas',
		'Other Construction Permit Required': 'Other',
		'Fire ERRC (Radio Booster) Required': 'ERRC (Radio Booster)'
	}
	logDebug("parentCapId: " + parentCapId + (parentCapId ? " using Parent CAP" : " using current CAP"));
	if (parentCapId) {
		// All of these are Permits/Fire/Construction/[permitCat]
		// 02/04/2022 RS: Replaced
		for (var fieldName in permitCats) {
			var firePermitCategory = permitCats[fieldName];
			var firePermitType = 'Permits/Fire/Construction/' + firePermitCategory
			var firePermitTypeArray = firePermitType.split("/");
			var firePermitAlias = (fieldName.replace("Required", "").replace("Permit", "")).trim() + ' Permit'
			logDebug("Checking " + fieldName + " Permit Required: " + AInfo[fieldName]
				+ ", Sibling Type: " + firePermitType
				+ ", !hasSibling? " + (!hasSibling(capId, firePermitType))
			);
			if (AInfo[fieldName] == 'Yes' && !hasSibling(capId, firePermitType)) {
				srcCapId = capId;
				capId = parentCapId;
				newChildID = createChild(firePermitTypeArray[0], firePermitTypeArray[1], firePermitTypeArray[2], firePermitTypeArray[3], capName); // CapDetail, Contacts, Addresses, Parcels
				comment('New sibling app id = ' + newChildID + ", Name: " + capName);
				logDebug('New sibling app id = ' + newChildID + ", Name: " + capName);
				//  02/04/2022 RS: Added to copy GIS Objects & Owner; LP are not copied
				capId = newChildID;
				copyParcelGisObjects();
				capId = srcCapId;
				copyOwner(srcCapId, newChildID);
				copyAppSpecific(newChildID);
				t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for a ' + firePermitAlias;
				//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
				ES_BUILD_WORKDESC_CONSTRUCTION();
				updateWorkDesc(t1, newChildID);
				updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
				editAppSpecific('Cost of Work', '0', newChildID);
			}
		}
		/* replace by above for loop
		for (var permitListIndex = 0; permitListIndex < checkPreventionApprovedCats.length; permitListIndex++) {
			var thisPermitCheck = checkPreventionApprovedCats[permitListIndex];
			if (AInfo[thisPermitCheck.aInfot1 + ' Permit Required'] === 'Yes' && !hasSibling(capId, 'Permits/Fire/Construction/' + thisPermitCheck.permitCat)) {
				saveCapId = capId;
				pCapId = parentCapId;
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
		*/
		//end replaced branch: ES_CREATE_FIRE_SIBLING;
	} else { // If NOT parentCapId
		//start replaced branch: ES_CREATE_FIRE_CHILD
		// 02/04/2022 RS: Replaced
		for (var fieldName in permitCats) {
			var firePermitCategory = permitCats[fieldName];
			var firePermitType = 'Permits/Fire/Construction/' + firePermitCategory
			var firePermitTypeArray = firePermitType.split("/");
			var firePermitAlias = (fieldName.replace("Required", "").replace("Permit", "")).trim() + ' Permit'
			logDebug("Checking " + fieldName + " Permit Required: " + AInfo[fieldName]
				+ ", Child Type: " + firePermitType
				+ ", !hasChildren? " + (!hasChildren(firePermitType))
			);
			if (AInfo[fieldName] == 'Yes' && !hasChildren(firePermitType)) {
				srcCapId = capId;
				newChildID = createChild(firePermitTypeArray[0], firePermitTypeArray[1], firePermitTypeArray[2], firePermitTypeArray[3], capName); // CapDetail, Contacts, Addresses, Parcels
				//  02/04/2022 RS: Added to copy GIS Objects & Owner; LP are not copied
				comment('New child app id = ' + newChildID + ", Name: " + capName);
				logDebug('New child app id = ' + newChildID + ", Name: " + capName);
				capId = newChildID;
				copyParcelGisObjects();
				capId = srcCapId;
				copyOwner(srcCapId, newChildID);
				copyAppSpecific(newChildID);
				t1 = 'Permit ' + capIDString + ' requires a Fire Construction Permit for a ' + firePermitAlias;
				//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
				ES_BUILD_WORKDESC_CONSTRUCTION();
				updateWorkDesc(t1, newChildID);
				updateAppStatus('Submittal Required', 'Initial Status set by script', newChildID);
				editAppSpecific('Cost of Work', '0', newChildID);
			}
		}
		/* replace by above for loop
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
		*/
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
if (!appMatch('Permits/*/Site Work/NA') && wfTask == 'Flood' && matches(wfStatus, 'FPD Permit Required')) {
	srcCapId = capId;
	newChildID = createChild('Permits', 'Stormwater', 'Flood Plain Development', 'NA', capName);
	comment('New child app id = ' + newChildID + ", Name: " + capName);
	logDebug('New child app id = ' + newChildID + ", Name: " + capName);
	//  02/04/2022 RS: Added to copy GIS Objects & Owner; LP are not copied
	capId = newChildID;
	copyParcelGisObjects();
	capId = srcCapId;
	copyOwner(srcCapId, newChildID);
	copyAppSpecific(newChildID);
	comment('New child app id = ' + newChildID);
	t1 = 'Permit ' + capIDString + ' requires a Flood Plain Development Permit';
	//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
	ES_BUILD_WORKDESC_CONSTRUCTION();
	updateWorkDesc(t1, newChildID);
	updateAppStatus('Submittal Required', 'Initial Status', newChildID);
}

if (wfTask == "Flood Review" && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
	var floodFees = {
		"Floodplain Development per Primary Structure": "FL_FLOOD01", // Floodplain Development (Each Primary Structure)
		"Floodplain Development with 1 Primary Structure": "FL_FLOOD01", // Floodplain Development (Each Primary Structure)
		"Floodplain Development with 2 Primary Structures": "FL_FLOOD01", // Floodplain Development (Each Primary Structure)
		"Floodplain Development with 3 Primary Structures": "FL_FLOOD01", // Floodplain Development (Each Primary Structure)
		"Floodplain Development with 4 Primary Structures": "FL_FLOOD01", // Floodplain Development (Each Primary Structure)
		"Floodplain Development with 5 Primary Structures": "FL_FLOOD01", // Floodplain Development (Each Primary Structure)
		"Floodway Development": "FL_FLOOD02", // Floodway Development
		"Floodplain Development": "FL_FLOOD02", // Floodplain Development
		"Flood Permit -- Minor": "FLOODCO" // Flood Permit -- Minor (Simple - $100)
	}
	for (feeName in floodFees) {
		var feeCode = floodFees[feeName];
		if (AInfo["Fee"] == feeName) {
			var feeQty = 1
			if (feeCode == "FL_FLOOD01") {
				var feeQtyTmp = parseInt(feeName.replace("Floodplain Development with ", "").replace("Primary Structures", "").replace("Primary Structure", ""));
				logDebug("feeQtyTmp: " + feeQtyTmp);
				if (!isNaN(feeQtyTmp)) feeQty = feeQtyTmp;
			}
			logDebug("Adding Fee: " + AInfo["Fee"] + " for " + feeName
				+ ", feeCode: " + feeCode + ", feeQty: " + feeQty);
			addFee(feeCode, 'FLOOD', 'FINAL', feeQty, 'Y');
			updateFee('TECH', 'FLOOD', 'FINAL', 1, 'Y', 'N', null);	// Technology Fee
			if (typeof (recalcFees) != "undefined") recalcFees(capId)
			else {
				logDebug("recalcFees() undefined");
				var valobj = aa.finance.getContractorSuppliedValuation(capId, null).getOutput();
				var estValue = 0;
				var calcValue = 0;
				var feeFactor = "CONT";
				if (valobj.length) {
					estValue = valobj[0].getEstimatedValue();
					calcValue = valobj[0].getCalculatedValue();
					feeFactor = valobj[0].getbValuatn().getFeeFactorFlag();
				}
				var feeValue = estValue;
				if (feeFactor != "CONT") {
					feeValue = calcValue;
				}
				//perform the recalculation
				logDebug("reCalculateFees: factor:" + feeFactor + ", value: " + feeValue);
				var res = aa.finance.reCalculateFees(capId, feeFactor, feeValue);
				// return res.getSuccess();
			}
		}
	}

	// Check for invoicing of fees
	if (feeSeqList.length) {
		invoiceResult = aa.finance.createInvoice(capId, feeSeqList, paymentPeriodList);
		if (invoiceResult.getSuccess()) {
			logMessage("Invoicing assessed fee items is successful.");
			// reset invoicing fee list && pay periods
			feeSeqList = new Array();
			paymentPeriodList = new Array();
			// Update balanceDue
			var capDetailObjResult = aa.cap.getCapDetail(capId);
			if (capDetailObjResult.getSuccess()) {
				capDetail = capDetailObjResult.getOutput();
				balanceDue = capDetail.getBalance();
			}

		} else
			logMessage("**ERROR: Invoicing the fee items assessed to app # " + capIDString + " was not successful.  Reason: " + invoiceResult.getErrorMessage());
	}

	// Send Flood Fee template
	if (balanceDue > 0) {
		var templateName = 'FLOOD_FEE';
		var templateParams = aa.util.newHashtable();
		if (typeof (getParams4Notification) != "undefined")
			getParams4Notification(templateParams); // Add Record related parameters: altID, capName, recordTypeAlias, capStatus, fileDate, balanceDue, workDesc
		else {
			logDebug("getParams4Notification() undefined");
			getRecordParams4Notification(templateParams); // Add Record related parameters: altID, capName, recordTypeAlias, capStatus, fileDate, balanceDue, workDesc
			if (cap && typeof (appTypeAlias) == "undefined") var appTypeAlias = cap.getCapType().getAlias();
			addParameter(templateParams, "$$capType$$", appTypeString);
			addParameter(templateParams, "$$capTypeAlias$$", appTypeAlias);
		}
		reportFile = null;

		var emailToArray = [];
		var contactTypes = ["Applicant"];
		var contactObjArray = getContactObjs(capId, contactTypes);
		for (iCon in contactObjArray) {
			var tContactObj = contactObjArray[iCon];
			var tContactEmail = tContactObj.people.getEmail();
			if (exists(tContactEmail, [undefined, null, "", "@"])) continue;
			if (String(tContactEmail).indexOf("@") < 0) continue;
			if (exists(tContactEmail, emailToArray)) continue;
			logDebug("Found email: " + tContactObj.people);
			emailToArray.push(tContactEmail);
		}
		var emailTo = emailToArray ? emailToArray.join(",") : "";
		if (templateName && emailTo != "") {
			logDebug("sendNotification to " + emailTo + ", template: " + templateName + ", params: " + templateParams);
			sendNotification("noreply@ashevillenc.gov", emailTo, "", templateName, templateParams, reportFile);
		}
	}
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
// Addressing added back in 5/4/20
if ((appMatch("Permits/Residential/New Building/*") || appMatch("Permits/Residential/Accessory Structure/*"))
	&& (matches(wfStatus, 'Hold for Revision') && matches(wfTask, 'Building Review', 'Zoning Review', 'Grading', 'Driveway', 'Addressing'))) {
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
	emailAboutCertOfOcc('apollard@ashevillenc.gov');
	emailAboutCertOfOcc('lglover@ashevillenc.gov');
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
	&& wfTask == 'Application Process'
	&& wfStatus == 'Application Complete'
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
	if (appMatch('Permits/Residential/Site Work/*')) {
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

// added Commercial 4/14/2020
// added Signs 2/26/2021
if (
	(appMatch('Permits/Residential/*/*') && !appMatch('Permits/Residential/Home Occupation/*'))
	||
	(appMatch('Permits/Commercial/New Building/*'))
	||
	(appMatch('Permits/Commercial/Existing Building/*'))
	||
	(appMatch('Permits/Sign/Stand Alone/NA'))
) {
	if (appMatch('Permits/Commercial/*/*') || appMatch('Permits/Sign/Stand Alone/NA')) {
		fromEmail = 'developmentservices@ashevillenc.gov'
	} else {
		fromEmail = 'residentialpermits@ashevillenc.gov'
	};
	/*if (matches(wfTask, 'Building Review', 'Zoning Review', 'Grading', 'Driveway', 'Planning', 'Fire Review',
		'Building', 'Electrical', 'Fire Review (Awning Only)')
		&& matches(wfStatus, 'Hold for Revision')) {
		emailByContactType('Action Needed On Your Permit',
			'<html>  <head> <style> ol { margin: 0; padding: 0 } </style> </head>  <body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + ' <br> <p>Your permit application has been reviewed and requires additional information and/or revisions. </p> <p>Please refer to the following steps to access your plans/comments online in .PDF format:</p> <p> <ol> <li>Visit <a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>. Register for a Citizen Access account if you have not already done so, then log in to access the permit documents.</li> <li>Enter your permit number in the top right <b>search box</b> and click on the green spyglass to pull up the permit record.</li> <li>Click <b>Record Info</b> to access a drop-down menu; then select <b>Attachments</b> from the drop-down menu.</li> <li>To download reviewed plans and comments, click the blue links next to documents labeled <b>REVIEWED SITE PLANS + COMMENTS</b> and/or <b>REVIEWED BUILDING PLANS + COMMENTS.</b></li> </ol> </p> <p>You may resubmit your revised plans and response to comments online in .PDF format through <a href="https://develop.ashevillenc.gov">develop.ashevillenc.gov</a> or in person during business hours at 161 S.Charlotte St.</p> <p>Please note that your plans may be reviewed by staff from multiple divisions, including the Building Safety Division ("Building"), Planning and Zoning Division ("Planning"), Site Engineering Division ("Site"), and/or the Fire Marshal\'s Office ("Fire"), depending on your scope of work. You will receive additional notification emails if your application receives plan review comments from other divisions. </p> <p>If you have questions, please contact the Permit Application Center at <a href="mailto:PAC@ashevillenc.gov">PAC@ashevillenc.gov</a> or 828-259-5846</p> <hr> </body>  </html>',
			'ALL',
			fromEmail
		);
	}*/
}

// added 2/20/2019 to email all residential customers, electronic submittal or not, when a permit can be picked up online 
//if (appMatch('Permits/Residential/*/*') && wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')) {
//	emailByContactType('Permit Approved',
//		'<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + ' <br><p>Your residential permit application has been approved. For your convenience, you may visit the Citizen Access website (<a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>) to print your permit and approved plans/comments. </p><p>Please note that the issued permit along with the approved plans/comments must be maintained in hard copy on the project site during construction until the permit is closed.</p><p>Please refer to the following steps to access your approved permit and plans/comments online in .PDF format:</p><p><ol><li>Visit <a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>. Register for a Citizen Access account if you have not already done so, then log in to access the permit documents.</li><li>Enter your permit number in the top right <b>search box</b> and click on the green spyglass to pull up the permit record.</li><li>Click <b>Record Info</b> to access a drop-down menu; then select <b>Attachments</b> from the drop-down menu.</li><li>To download the 1) issued permit and 2) approved plans/comments, click the blue links next to documents labeled <b>ISSUED PERMIT</b> and <b>APPROVED SITE PLANS + COMMENTS</b> and/or <b>APPROVED BUILDING PLANS + COMMENTS.</b> </li></ol></p><p>If you have questions, please contact the Permit Application Center at PAC@ashevillenc.gov or 828-259-5846 on Monday-Friday from 8:30 am - 5:00 pm. </p><hr></body></html>',
//		'ALL',
//		'residentialpermits@ashevillenc.gov'
//	);
//}
// added 12/02/2020 to email all commercial building customers, electronic submittal or not, when a permit can be picked up online 
//if (
//	(appMatch('Permits/Commercial/Existing Building/*') ||
//		appMatch('Permits/Commercial/Accessory Structure/*') ||
//		appMatch('Permits/Sign/*/*') ||
//		appMatch('Permits/Fire/Construction/*')
//	)
//	&& matches(wfStatus, 'Issue', 'Reissue')) {
//	emailByContactType('Permit Approved',
//		'<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + ' <br><p>Your commercial permit application has been approved. For your convenience, you may visit the Citizen Access website (<a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>) to print your permit and approved plans/comments. </p><p>Please note that the issued permit along with the approved plans/comments must be maintained in hard copy on the project site during construction until the permit is closed.</p><p>Please refer to the following steps to access your approved permit and plans/comments online in .PDF format:</p><p><ol><li>Visit <a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>. You may register for a Citizen Access account if you have not already done so, then log in to access the permit documents.</li><li>Enter your permit number in the top right <b>search box</b> and click on the green spyglass to pull up the permit record.</li><li>Click <b>Record Info</b> to access a drop-down menu; then select <b>Attachments</b> from the drop-down menu.</li><li>To download the 1) issued permit and 2) approved plans/comments, click the blue links next to documents labeled <b>ISSUED PERMIT</b> and <b>APPROVED SITE PLANS + COMMENTS</b> and/or <b>APPROVED BUILDING PLANS + COMMENTS.</b> </li></ol></p><p>If you have questions, please contact the Permit Application Center at PAC@ashevillenc.gov or 828-259-5846 on Monday-Friday from 8:30 am - 5:00 pm. </p><hr></body></html>',
//		'ALL',
//		'developmentservices@ashevillenc.gov'
//	);
//}

// To bypass Clearing House step after all review steps are complete 4/25/2019
if (matches(wfStatus, 'Approved', 'Approved with Conditions', 'Partial Approval',
	'Plan Review Waiver', 'Not Required', 'Approved - Fees Due', 'Approved - No Fees')) {
	if (matches(wfProcess, 'DIV REVIEW-RES')) {
		if (wfTask == 'Grading' ||
			wfTask == 'Building Review' ||
			wfTask == 'Driveway' ||
			wfTask == 'Zoning Review' |
			wfTask == 'Addressing') {
			if (
				isTaskComplete("Building Review") &&
				isTaskComplete("Grading") &&
				isTaskComplete("Zoning Review") &&
				isTaskComplete("Driveway") &&
				isTaskComplete("Addressing")
			) {
				setTask('Issuance', 'Y', 'N', 'MASTER-RES');
				closeTask('Review Process', 'Complete', 'Completed by Script', 'MASTER-RES');
			}
		}
	}
}

// To add commercial building prmits to the Clearing House bypass -- 04/27/20 
// Addressing added back in 5/4/20
if (matches(wfStatus, 'Approved', 'Approved with Conditions', 'Partial Approval',
	'Plan Review Waiver', 'Not Required', 'Approved - Fees Due', 'Approved - No Fees')) {
	if (matches(wfProcess, 'DIVISION REVIEW')) {
		if (wfTask == 'Addressing' ||
			wfTask == 'Building Review' ||
			wfTask == 'Fire Review' ||
			wfTask == 'Zoning Review') {
			if (
				isTaskComplete("Building Review") &&
				isTaskComplete("Zoning Review") &&
				isTaskComplete("Addressing") &&
				isTaskComplete("Fire Review")
			) {
				setTask('Clearing House', 'N', 'Y', 'DIVISION REVIEW');
				closeTask('Review Process', 'Complete', 'Completed by Script', 'MASTER V4');
				setTask('Issuance', 'Y', 'N', 'MASTER V4');
				assignTask('Issuance', 'NHART', 'MASTER V4');
			}
		}
	}
}

// 8/22/2019 
if (appMatch('Permits/*/*/SFD') || appMatch('Permits/*/*/SFD Waiver') || appMatch('Permits/Residential/Existing Building/Alterations w Addition')) {
	if (wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')) {
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


// 11/12/2019 - Email all lic prof when permit issued. Also email applicant that they were notified.
if ((wfTask == 'Issuance' || wfTask == 'Permit Verification' || wfTask == 'Permit Issuance') && matches(wfStatus, 'Issue', 'Reissue')) {
	var ownerName = getOwnerNameFromCap();
	var fromAddr;
	if (appMatch('*/Residential/*/*')) {
		fromAddr = 'residentialpermits@ashevillenc.gov';
	} else {
		fromAddr = 'developmentservices@ashevillenc.gov';
	}
	// Send to all licensed prof unless they are a contact
	var licProc = getEmailsByLicenseType('ALL');
	var contacts = getEmailsByContactType('ALL');
	var emailAddrs = inAButNotB(licProc, contacts);

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

	// 12/17/2019 
	// Email to Applicant


/*
	var licprofs = getLicProfData(capId);
	if (licprofs.length > 0) {
		var emailContent
			= '<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: '
			+ capIDString + ' <br>Location: ' + CapAddress + '<br>Owner: ' + ownerName
			+ '<br><p>'
			+ ' Hello, this is just to let you know that your permit has been issued, and we are notifying the '
			+ ' licensed professionals (contractors) who are listed on the permit. '
			+ '</p><p>'
			+ ' Those professionals are: '
			+ '</p><table>'
			+ '<tr><th>' + 'Business' + '</th><th>' + 'Type' + '</th><th>' + 'Name' + '</th><th>' + 'Email' + '</th></tr>';
		licprofs.forEach(function (xx) {
			emailContent
				= emailContent + '<tr><td>' + xx.business + '</td><td>' + xx.type + '</td><td>'
				+ xx.name + '</td><td>' + xx.email + '</td></tr>';
		});
		emailContent
			= emailContent
			+ '</table><p>'
			+ 'If any of these professionals are incorrect, please let us know at pac@ashevillenc.gov or at 828-259-5846. '
			+ 'We look forward to working with you. Thank you,'
			+ '</p><p>'
			+ 'City of Asheville Development Services Department</p><hr></body></html>';
		emailAddrs = getEmailsByContactType('Applicant');
		emailTo = emailAddrs.join(';')
		email(
			emailTo,
			fromAddr, //set above for other email
			'Permit Issued by City of Asheville - Licensed Professionals Listed Below',
			emailContent);
	} */
}

// 12/17/2019 (also copied to IRSA;Permits!Residential!Home Occupation!Home Stay 11/17/2020)
// HomeStay set expiration date = in compliance date + 1 year
//////////////////////////////
if (appMatch("*/*/*/Home Stay")
	&& (matches(wfTask, 'Inspections') && matches(wfStatus, 'In Compliance', 'Renewed'))) {
	var workflowResult = aa.workflow.getTasks(capId);
	if (workflowResult.getSuccess()) {
		var wfObj = workflowResult.getOutput();
		for (i in wfObj) {
			fTask = wfObj[i];
			for (j in fTask) {
				if (j == "resTaskDescription" && fTask[j] == "Inspections") {
					if (fTask.getStatusDate()) {
						var statusDate = fTask.getStatusDate();
						var statusOneYear = dateAddMonths(statusDate, 12)
						editAppSpecific('EXPIRATION DATE', statusOneYear);
					}
				}
			}
		}
	}
}
// April 2020 - Email Haley - Home Stay inspection OK
if (appMatch("*/*/*/Home Stay")
	&& (matches(wfTask, 'Inspections') && matches(wfStatus, 'In Compliance', 'Renewed'))) {
	email(
		'hmahoney@ashevillenc.gov',
		'developmentservices@ashevillenc.gov',
		'Home Stay Marked In Compliance or Renewed',
		'Permit Number: ' + capIDString + ' Location: ' + CapAddress + ' Home Stay Marked In Compliance or Renewed');
}

// May 26, 2020 Email PAC on MSD Step Approved for SFD
if (appMatch('Permits/*/*/SFD') || appMatch('Permits/*/*/SFD Waiver')) {
	if (matches(wfTask, 'MSD Approval') && matches(wfStatus, 'MSD Approved', 'MSD Approved Pending Payment')) {
		email(
			'pac@ashevillenc.gov',
			'residentialpermits@ashevillenc.gov',
			'MSD Step Approved',
			'MSD has approved the MSD Approval step for Permit Number: ' + capIDString + ' at Address: ' + CapAddress +
			' Please check the permit to determine the next steps to take.'
		);
	}

}
// 11/06/2020 -- moved to PROD 12/1/2020
// Home Stay Permit approved
if (appMatch('Permits/Residential/Home Occupation/Home Stay')
	&& wfTask == 'Inspections' && matches(wfStatus, 'In Compliance')) {
	var emailSubj = "Permit Approved"
	var emailBody = '<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: '
		+ capIDString + ' <br>Location: ' + CapAddress
		+ '<br><p>'

		+ ' Your homestay permit application has been approved. This permit is valid as long as there are no major changes (e.g. moving, selling, layout changes, etc.).  '
		+ '</p><p>'
		+ ' Please visit the Citizen Access website (<a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>) '
		+ ' to print your permit and approved plans/comments. '
		+ '</p><p>'
		+ ' Please note that the issued permit along with the approved plans/comments must be maintained in hard copy on site until the permit is closed. '
		+ '</p><p>'
		+ ' Please refer to the following steps to access your approved permit and plans/comments online in .PDF format: '
		+ '<ol><li>'
		+ ' Visit https://services.ashevillenc.gov/citizenaccess. It is not necessary to login to pay fees or to view documents. '
		+ ' </li><li>'
		+ ' Enter your project\'s permit number in the top right search box and click on the green spyglass to pull up the permit record. '
		+ ' </li><li>'
		+ ' Click Record Info to access a drop-down menu; then select Attachments from the drop-down menu. '
		+ ' </li><li>'
		+ ' To download the 1) issued permit and 2) approved plans/comments, click the blue links next to documents labeled <b>ISSUED PERMIT</b> '
		+ ' and/or <b>APPROVED HOMESTAY PLANS.</b> '
		+ ' </li></ol>'
		+ ' If you have questions, please contact homestayinspections@ashevillenc.gov or 828-259-5587 on Monday-Friday from 8:30 am - 5:00 pm. '
		+ ' </p><hr></body></html>'
	var staffEmail = 'hmahoney@ashevillenc.gov'
	emailAllContacts(emailSubj, emailBody, staffEmail)
}

// 11/06/2020 -- moved to PROD 12/1/2020
// Home Stay Permit approved pending payment
/*if (appMatch('Permits/Residential/Home Occupation/Home Stay')
	&& wfTask == 'Zoning Review' && matches(wfStatus, 'Approved - Pending Payment')) {
	var emailSubj = "Homestay Permit -- Ready for Payment"
	var emailBody = '<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: '
		+ capIDString + ' <br>Location: ' + CapAddress
		+ '<br><p>'
		+ ' Hello, '
		+ '</p><p>'

		+ 'The City of Asheville\'s Development Services Department has tentatively approved your homestay permit application pending payment and inspection. '
		+ 'Follow these steps to login and pay your fees online <b>(THIS PAYMENT CANNOT BE MADE ON A SMARTPHONE):</b> '
		+ '<ol><li>'
		+ 'Visit https://services.ashevillenc.gov/citizenaccess. It is not necessary to login to pay fees or to view documents. '
		+ ' </li><li>'
		+ 'Enter your project\'s permit number in the top right search box and click on the green spyglass to pull up the record. '
		+ ' </li><li>'
		+ 'Click Payments to access a drop-down menu; then select Fees from the drop-down menu. '
		+ ' </li><li>'
		+ 'Click the blue Pay Fees button on the right side of the screen. '
		+ ' </li><li>'
		+ 'After you pay the fees, you will receive an email with instructions on how to schedule your inspection. '
		+ ' </li></ol>'

		+ 'Please email Haley Mahoney at hmahoney@ashevillenc.gov or call 828-259-5587 with any additional questions on Monday-Friday from 8:30 am - 5:00 pm. '

		+ '</p><p>'
		+ ' </p><hr></body></html>'
	var staffEmail = 'hmahoney@ashevillenc.gov'
	emailAllContacts(emailSubj, emailBody, staffEmail)
}
*/

if (appMatch('Permits/Residential/Home Occupation/Home Stay') && matches(wfStatus, 'Approved')){
	
	addFee('ZO-HSTAY', 'HOME STAY', 'FINAL', 1,'N');
	addFee('TECH', 'Home STAY', 'FINAL', 1,'N');
	//invoiceFee('ZO-HSTAY','FINAL');

 
	var applicant = getApplicantInfo(capId);
	var architect = getArchitectInfo(capId);
	var contractor = getContractorInfo(capId);
	var superintendent = getSuperintendentInfo(capId);
	var civilEngineer = getCivilEngineerInfo(capId);
	var projectManager = getProjectManagerInfo(capId);
	var owner = getOwnerInfo(capId);
	var other = getOtherInfo(capId);
	var surveyor = getSurveyorInfo(capId);



}


if (matches(wfTask, 'Building Review', 'Zoning Review', 'Grading', 'Driveway', 'Planning', 'Fire Review',
		'Building', 'Electrical', 'Fire Review (Awning Only)')&& matches(wfStatus, 'Hold for Revision','Hold for Revision 1st Review','Hold for Revision 2nd Review','Hold for Revision 3rd Review' )){

			if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*') ) {
				var applicant = getApplicantInfo(capId);
				var recordURL = getACAUrl(capId);
				var emailParams = aa.util.newHashtable();
				var CapAddress = getCapAddress(capId);
				addParameter (emailParams, "$$firstName$$", applicant.name);
				addParameter (emailParams, "$$RecordUrl$$", recordURL);
				addParameter (emailParams, "$$CapID$$", capIDString);
				addParameter (emailParams,"$$Address$$", CapAddress);
			
				sendNotification("noreply@ashevillenc.gov",applicant.email,"","APPLICANT_ACTION_NOTIFICATION",emailParams,null);
				
			}
			//Invoice notification for Architect Contact type
			if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
				var architect = getArchitectInfo(capId);
				var recordURL = getACAUrl(capId);
				var ArchParams = aa.util.newHashtable();
				var CapAddress = getCapAddress(capId);
				addParameter (ArchParams, "$$FirstName$$", architect.name);
				addParameter (ArchParams, "$$RecordUrl$$", recordURL);
				addParameter (ArchParams, "$$CapID$$", capIDString);
				addParameter (ArchParams,"$$Address$$", CapAddress);
			
				sendNotification("noreply@ashevillenc.gov",architect.email,"","APPLICANT_ACTION_NOTIFICATION",ArchParams,null);
			
			}
			
			if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
				var contractor = getContractorInfo(capId);
				var recordURL = getACAUrl(capId);
				var ContrParams = aa.util.newHashtable();
				var CapAddress = getCapAddress(capId);
				addParameter (ContrParams, "$$FirstName$$", contractor.name);
				addParameter (ContrParams, "$$RecordUrl$$", recordURL);
				addParameter (ContrParams, "$$CapID$$", capIDString);
				addParameter (ContrParams,"$$Address$$", CapAddress);
			
				sendNotification("noreply@ashevillenc.gov",contractor.email,"","APPLICANT_ACTION_NOTIFICATION",ContrParams,null);
			
			}
			
			if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
				var civilEngineer = getCivilEngineerInfo(capId);
				var recordURL = getACAUrl(capId);
				var CivilParams = aa.util.newHashtable();
				var CapAddress = getCapAddress(capId);
				addParameter (CivilParams, "$$FirstName$$", civilEngineer.name);
				addParameter (CivilParams, "$$RecordUrl$$", recordURL);
				addParameter (CivilParams, "$$CapID$$", capIDString);
				addParameter (CivilParams,"$$Address$$", CapAddress);
			
				sendNotification("noreply@ashevillenc.gov",civilEngineer.email,"","APPLICANT_ACTION_NOTIFICATION",CivilParams,null);
			
			}
			
			if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
				var superintendent = getSuperintendentInfo(capId);
				var recordURL = getACAUrl(capId);
				var SupParams = aa.util.newHashtable();
				var CapAddress = getCapAddress(capId);
				addParameter (SupParams, "$$FirstName$$", superintendent.name);
				addParameter (SupParams, "$$RecordUrl$$", recordURL);
				addParameter (SupParams, "$$CapID$$", capIDString);
				addParameter (SupParams,"$$Address$$", CapAddress);
			
				sendNotification("noreply@ashevillenc.gov",superintendent.email,"","APPLICANT_ACTION_NOTIFICATION",SupParams,null);
			
			}
			
			if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
				var projectManager = getProjectManagerInfo(capId);
				var recordURL = getACAUrl(capId);
				var ProParams = aa.util.newHashtable();
				var CapAddress = getCapAddress(capId);
				addParameter (ProParams, "$$FirstName$$", projectManager.name);
				addParameter (ProParams, "$$RecordUrl$$", recordURL);
				addParameter (ProParams, "$$CapID$$", capIDString);
				addParameter (ProParams,"$$Address$$", CapAddress);
			
				sendNotification("noreply@ashevillenc.gov",projectManager.email,"","APPLICANT_ACTION_NOTIFICATION",ProParams,null);
			
			}
			
			if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
				var owner = getOwnerInfo(capId);
				var recordURL = getACAUrl(capId);
				var OwnParams = aa.util.newHashtable();
				var CapAddress = getCapAddress(capId);
				addParameter (OwnParams, "$$FirstName$$", owner.name);
				addParameter (OwnParams, "$$RecordUrl$$", recordURL);
				addParameter (OwnParams, "$$CapID$$", capIDString);
				addParameter (OwnParams,"$$Address$$", CapAddress);
			
				sendNotification("noreply@ashevillenc.gov",owner.email,"","APPLICANT_ACTION_NOTIFICATION",OwnParams,null);
			
			}
			
			if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
				var other = getOtherInfo(capId);
				var recordURL = getACAUrl(capId);
				var OthParams = aa.util.newHashtable();
				var CapAddress = getCapAddress(capId);
				addParameter (OthParams, "$$FirstName$$", other.name);
				addParameter (OthParams, "$$RecordUrl$$", recordURL);
				addParameter (OthParams, "$$CapID$$", capIDString);
				addParameter (OthParams,"$$Address$$", CapAddress);
			
				sendNotification("noreply@ashevillenc.gov",other.email,"","APPLICANT_ACTION_NOTIFICATION",OthParams,null);
			
			}
			
			if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
				var surveyor = getSurveyorInfo(capId);
				var recordURL = getACAUrl(capId);
				var SurParams = aa.util.newHashtable();
				var CapAddress = getCapAddress(capId);
				addParameter (SurParams, "$$FirstName$$", surveyor.name);
				addParameter (SurParams, "$$RecordUrl$$", recordURL);
				addParameter (SurParams, "$$CapID$$", capIDString);
				addParameter (SurParams,"$$Address$$", CapAddress);
			
				sendNotification("noreply@ashevillenc.gov",surveyor.email,"","APPLICANT_ACTION_NOTIFICATION",SurParams,null);
			
			}


		}
if (matches(wfStatus, 'Issue','Reissue')){
	if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*') ) {
		var applicant = getApplicantInfo(capId);
		var recordURL = getACAUrl(capId);
		var emailParams = aa.util.newHashtable();
		var CapAddress = getCapAddress(capId);
		addParameter (emailParams, "$$firstName$$", applicant.name);
		addParameter (emailParams, "$$RecordUrl$$", recordURL);
		addParameter (emailParams, "$$CapID$$", capIDString);
		addParameter (emailParams,"$$Address$$", CapAddress);
	
		sendNotification("noreply@ashevillenc.gov",applicant.email,"","PERMIT_ISSUED",emailParams,null);
		
	}
	//Invoice notification for Architect Contact type
	if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
		var architect = getArchitectInfo(capId);
		var recordURL = getACAUrl(capId);
		var ArchParams = aa.util.newHashtable();
		var CapAddress = getCapAddress(capId);
		addParameter (ArchParams, "$$FirstName$$", architect.name);
		addParameter (ArchParams, "$$RecordUrl$$", recordURL);
		addParameter (ArchParams, "$$CapID$$", capIDString);
		addParameter (ArchParams,"$$Address$$", CapAddress);
	
		sendNotification("noreply@ashevillenc.gov",architect.email,"","PERMIT_ISSUED",ArchParams,null);
	
	}
	
	if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
		var contractor = getContractorInfo(capId);
		var recordURL = getACAUrl(capId);
		var ContrParams = aa.util.newHashtable();
		var CapAddress = getCapAddress(capId);
		addParameter (ContrParams, "$$FirstName$$", contractor.name);
		addParameter (ContrParams, "$$RecordUrl$$", recordURL);
		addParameter (ContrParams, "$$CapID$$", capIDString);
		addParameter (ContrParams,"$$Address$$", CapAddress);
	
		sendNotification("noreply@ashevillenc.gov",contractor.email,"","PERMIT_ISSUED",ContrParams,null);
	
	}
	
	if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
		var civilEngineer = getCivilEngineerInfo(capId);
		var recordURL = getACAUrl(capId);
		var CivilParams = aa.util.newHashtable();
		var CapAddress = getCapAddress(capId);
		addParameter (CivilParams, "$$FirstName$$", civilEngineer.name);
		addParameter (CivilParams, "$$RecordUrl$$", recordURL);
		addParameter (CivilParams, "$$CapID$$", capIDString);
		addParameter (CivilParams,"$$Address$$", CapAddress);
	
		sendNotification("noreply@ashevillenc.gov",civilEngineer.email,"","PERMIT_ISSUED",CivilParams,null);
	
	}
	
	if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
		var superintendent = getSuperintendentInfo(capId);
		var recordURL = getACAUrl(capId);
		var SupParams = aa.util.newHashtable();
		var CapAddress = getCapAddress(capId);
		addParameter (SupParams, "$$FirstName$$", superintendent.name);
		addParameter (SupParams, "$$RecordUrl$$", recordURL);
		addParameter (SupParams, "$$CapID$$", capIDString);
		addParameter (SupParams,"$$Address$$", CapAddress);
	
		sendNotification("noreply@ashevillenc.gov",superintendent.email,"","PERMIT_ISSUED",SupParams,null);
	
	}
	
	if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
		var projectManager = getProjectManagerInfo(capId);
		var recordURL = getACAUrl(capId);
		var ProParams = aa.util.newHashtable();
		var CapAddress = getCapAddress(capId);
		addParameter (ProParams, "$$FirstName$$", projectManager.name);
		addParameter (ProParams, "$$RecordUrl$$", recordURL);
		addParameter (ProParams, "$$CapID$$", capIDString);
		addParameter (ProParams,"$$Address$$", CapAddress);
	
		sendNotification("noreply@ashevillenc.gov",projectManager.email,"","PERMIT_ISSUED",ProParams,null);
	
	}
	
	if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
		var owner = getOwnerInfo(capId);
		var recordURL = getACAUrl(capId);
		var OwnParams = aa.util.newHashtable();
		var CapAddress = getCapAddress(capId);
		addParameter (OwnParams, "$$FirstName$$", owner.name);
		addParameter (OwnParams, "$$RecordUrl$$", recordURL);
		addParameter (OwnParams, "$$CapID$$", capIDString);
		addParameter (OwnParams,"$$Address$$", CapAddress);
	
		sendNotification("noreply@ashevillenc.gov",owner.email,"","PERMIT_ISSUED",OwnParams,null);
	
	}
	
	if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
		var other = getOtherInfo(capId);
		var recordURL = getACAUrl(capId);
		var OthParams = aa.util.newHashtable();
		var CapAddress = getCapAddress(capId);
		addParameter (OthParams, "$$FirstName$$", other.name);
		addParameter (OthParams, "$$RecordUrl$$", recordURL);
		addParameter (OthParams, "$$CapID$$", capIDString);
		addParameter (OthParams,"$$Address$$", CapAddress);
	
		sendNotification("noreply@ashevillenc.gov",other.email,"","PERMIT_ISSUED",OthParams,null);
	
	}
	
	if (appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*')) {
		var surveyor = getSurveyorInfo(capId);
		var recordURL = getACAUrl(capId);
		var SurParams = aa.util.newHashtable();
		var CapAddress = getCapAddress(capId);
		addParameter (SurParams, "$$FirstName$$", surveyor.name);
		addParameter (SurParams, "$$RecordUrl$$", recordURL);
		addParameter (SurParams, "$$CapID$$", capIDString);
		addParameter (SurParams,"$$Address$$", CapAddress);
	
		sendNotification("noreply@ashevillenc.gov",surveyor.email,"","PERMIT_ISSUED",SurParams,null);
	
	}

	
}

if ((appMatch('Permits/*/*/*')|| appMatch('Planning/*/*/*') && matches(wfStatus, 'Issue','Reissue'))){
var ProfessionalEmails = getLicenseProfessional(capId);
	if (true && ProfessionalEmails != null) {
		for (x in ProfessionalEmails){
			if (ProfessionalEmails[x].getEmail() + '' != '');
				sendNotification("noreply@ashevillenc.gov",ProfessionalEmails[x].getEmail(),"","PERMIT_ISSUED",emailParams,null);
		}
	}
}