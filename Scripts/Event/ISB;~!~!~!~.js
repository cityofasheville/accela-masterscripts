/*
Inspection schedule before: prevent people from jumping to the final inspection
without doing preliminaries
*/

// TODO: IMPLEMENT THIS INSTEAD OF ALL THAT OTHER STUFF
function makeComment(title, text) {
	showMessage = true;
	// TODO: STYLE THIS SO IT LOOKS NICE, USE THIS FOR EVERYTHING
	comment("<p style='font-size:0.75em;font-weight:bold;'>Permit NOT Issued:</p><br><br>Please visit the Development Services Department for re-issuance.<br><br>");
	cancel = true;
}

// Does not apply to services module
if ((appMatch('Permits/*/*/*') || appMatch('Planning/*/*/*'))
	// Don't run if it's already issued
	&& !matches(
		capStatus,
		'Issued',
		'Reissued',
		'Partial Issued',
		'TCO Issued',
		'Inspections', // TODO: WHAT IS THIS?
		'TCO Reissued',
		'TCC Issued',
		'In Compliance',
		'Renewed',
		'Amended',
		'TCO Issued 30 Days',
		'TCO Issued 60 Days',
		'TCO Issued 90 Days',
		'TCC Issued 30 Days',
		'TCC Issued 60 Days',
		'TCC Issued 90 Days',
	)
) {
	showMessage = true;
	// TODO: STYLE THIS SO IT LOOKS NICE, USE THIS FOR EVERYTHING
	comment("<p style='font-size:0.75em;font-weight:bold;'>Permit NOT Issued:</p><br><br>Please visit the Development Services Department for re-issuance.<br><br>");
	cancel = true;
}

/* Abbreviation key - index types
BU: building inspection
TODO: SEE KEY SPREADSHEET FROM JERRY'S CUBICLE, MAKE NOTES
*/

if (inspType.indexOf('BU') === 0) {
	/*
		Planning records tend to be children of permit records
		Planning starts first, becomes a child of permit
		These three record types are the ones that need to have preliminary grading inspections
		If someone tries to schedule while only these types of children do not have approved grading inspection,
		this script should reject them
		TODO: use array of strings, loop for these record types
	*/
	if (
		(hasChildren('Planning/Development/*/*') && !doesChildHaveApprovedInspection('Planning/Development/*/*', 'GR-PRELIMINARY'))
		|| (hasChildren('Planning/Subdivision/*/*') && !doesChildHaveApprovedInspection('Planning/Subdivision/*/*', 'GR-PRELIMINARY'))
		|| (hasChildren('Permits/*/Site Work/*') && !doesChildHaveApprovedInspection('Permits/*/Site Work/*', 'GR-PRELIMINARY'))
	) {
		// TODO: WHY THIS ORDER, WHAT IS THE DIFFERENCE BETWEEN LOG MESSAGE AND COMMENT???
		cancel = true;
		showMessage = true;
		logMessage('Site Work Record must have approved GR-PRELIMINARY inspection. Please return to the bottom of the record screen and navigate to the list of Related Records to find the associated Site record.');
	}
}

function denyFinalInspections(currentInspectionGroup, inspectionTypeList) {
	// currentInspectionGroup is ME, PL, etc
	// inspectionTypeList is ROUGH IN, UNDER SLAB, etc
	for (var typeIndex = 0; typeIndex < inspectionTypeList.length; typeIndex++) {
		var thisInspectionType = inspectionTypeList[typeIndex];
		if (checkInspectionResult(currentInspectionGroup + '-' + thisInspectionType, 'Pending')) {
			showMessage = true;
			// TODO: USE DIFFERENT TEXT FOR REINSPECTION
			// TODO: change this message when we change styling/write that function
			if (thisInspectionType === 'ROUGH IN') {
				comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until Rough-In is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			} else {
				comment("<font size=small><b>Can't schedule final: </b></font><br><br>" + thisInspectionType + " inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			}
			cancel = true;
		}
	}
}

var buildingInspectionTypesToCheck = [
	{
		group: 'ME',
		types: [
			'ROUGH IN',
			'UNDER SLAB',
			'FIRE DAMPER',
			'ABOVE CEILING',
			'REINSP',
		],
	},
	{
		group: 'PL',
		types: [
			'ROUGH IN',
			'UNDER SLAB',
			'WATER LINE',
			'SEWER LINE',
			'BACKFLOW',
			'REINSP',
		]
	},
	{
		group: 'EE',
		types: [
			'ROUGH IN',
			'UNDER SLAB',
			'TEMPORARY SAW SERVICE',
			'ABOVE CEILING',
			'OTHER',
			'REINSP',
		]
	},
	{
		group: 'HO',
		types: [
			'ROUGH IN',
			'ABOVE CEILING',
			'LIGHT TEST',
			'SMOKE TEST',
			'DUCT WRAP',
			'REINSP',
		]
	},
	{
		group: 'RE',
		types: [
			'ROUGH IN',
			'ABOVE CEILING',
			'REINSP',
		]
	},
	{
		group: 'GP',
		types: [
			'ROUGH IN',
			'REINSP',
		]
	}
]

for (var inspectionTypeIndex = 0; inspectionTypeIndex < buildingInspectionTypesToCheck.length; inspectionTypeIndex++) {
	var thisType = buildingInspectionTypesToCheck[inspectionTypeIndex]
	if (matches(inspType, thisType.group + '-FINAL')) {
		denyFinalInspections(thisType.group, thisType.types)
	}
}

if (matches(inspType, 'BU-FRAMING')) {
	/*
	Framing inspection is beginning of vertical process
	This makes sure all of the horizontal/planning type things are done
	TODO: use message function, make this consistent
	*/
	if (checkInspectionResult('BU-FOOTING', 'Pending')) {
		showMessage = true;
		comment("<font size=small><b>BU-FRAMING Inspection Not Allowed:</b></font><br><br>The BU-FOOTING inspection must be scheduled.Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('PL-ROUGH IN', 'Pending')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Plumbing Rough-In is scheduled.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('ME-ROUGH IN', 'Pending')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Mechanical Rough-In is scheduled.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('EE-ROUGH IN', 'Pending')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Electrical Rough-In is scheduled.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('GP-ROUGH IN', 'Pending')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Gas Piping Rough-In is scheduled.<br><br>");
		cancel = true;
	}

	if (appMatch('Permits/Residential/*/*')) {
		/*
		LEGACY -- DO NOT BOTHER, will be deleted
		If it's a residential permit, check for child trade permits
		TODO: check to see if we have any pre-May-2016 res permits are still open
		if not, remove this section
		*/

		//start replaced branch: ES_GET_CHILDREN_ROUGH
		{
			childrenCapId = getChildren('Permits/*/Trade/*', capId);
			if (typeof(childrenCapId) == 'object') {
				for (eachchild in childrenCapId)
				//start replaced branch: ES_ISB_ROUGH
				{
					eachChildCapId = childrenCapId[eachchild];
					cCapObj = aa.cap.getCap(eachChildCapId);
					cCap = cCapObj.getOutput();
					cStatus = cCap.getCapStatus();
					cCapType = cCap.getCapType();
					comment('The Child Status is: ' + cStatus);
					comment('The Child Type is: ' + cCapType);
					saveCapId = capId;
					capId = eachChildCapId;
					if (checkInspectionResult('PL-ROUGH IN', 'Pending')) {
						showMessage = true;
						comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Plumbing Rough-In is scheduled.<br><br>");
						cancel = true;
					}

					if (checkInspectionResult('ME-ROUGH IN', 'Pending')) {
						showMessage = true;
						comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Mechanical Rough-In is scheduled.<br><br>");
						cancel = true;
					}

					if (checkInspectionResult('EE-ROUGH IN', 'Pending')) {
						showMessage = true;
						comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Electrical Rough-In is scheduled.<br><br>");
						cancel = true;
					}

					if (checkInspectionResult('GP-ROUGH IN', 'Pending')) {
						showMessage = true;
						comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Gas Piping Rough-In is scheduled.<br><br>");
						cancel = true;
					}

					capId = saveCapId;
				}
				//end replaced branch: ES_ISB_ROUGH;
			}
		}
		//end replaced branch: ES_GET_CHILDREN_ROUGH;
	}
}

if (matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP', 'MH-FINAL')) {
	/*
	LEGACY - IGNORE - SEE ABOVE TODO ABOUT POST MAY 2016 STUFF
	Get trade children - will not exist in future, might not now
	*/

		childrenCapId = getChildren('Permits/*/Trade/*', capId);
		if (typeof(childrenCapId) == 'object') {
			for (eachchild in childrenCapId)
				//start replaced branch: ES_ISB_CHILDFINALS
			{
				eachChildCapId = childrenCapId[eachchild];
				cCapObj = aa.cap.getCap(eachChildCapId);
				cCap = cCapObj.getOutput();
				cStatus = cCap.getCapStatus();
				cCapType = cCap.getCapType();
				comment('The Child Status is: ' + cStatus);
				comment('The Child Type is: ' + cCapType);
				saveCapId = capId;
				capId = eachChildCapId;
				if (checkInspectionResult('PL-FINAL', 'Pending')) {
					showMessage = true;
					comment("<font size=small><b>Can't schedule FINAL Inspection:</b></font><br><br>Can't schedule FINAL Inspection until Plumbing Final is scheduled.See related records.<br><br>");
					cancel = true;
				}

				if (checkInspectionResult('ME-FINAL', 'Pending')) {
					showMessage = true;
					comment("<font size=small><b>Can't schedule FINAL Inspection:</b></font><br><br>Can't schedule FINAL Inspection until Mechanical Final is scheduled.See related records.<br><br>");
					cancel = true;
				}

				if (checkInspectionResult('EE-FINAL', 'Pending')) {
					showMessage = true;
					comment("<font size=small><b>Can't schedule FINAL Inspection:</b></font><br><br>Can't schedule FINAL Inspection until Electrical Final is scheduled.See related records.<br><br>");
					cancel = true;
				}

				if (checkInspectionResult('GP-FINAL', 'Pending')) {
					showMessage = true;
					comment("<font size=small><b>Can't schedule FINAL Inspection:</b></font><br><br>Can't schedule FINAL Inspection until Gas Piping Final is scheduled.See related records.<br><br>");
					cancel = true;
				}

				if (checkInspectionResult('HO-FINAL', 'Pending')) {
					showMessage = true;
					comment("<font size=small><b>Can't schedule FINAL Inspection:</b></font><br><br>Can't schedule FINAL Inspection until Exhaust Hood Final is scheduled.See related records.<br><br>");
					cancel = true;
				}

				if (checkInspectionResult('RE-FINAL', 'Pending')) {
					showMessage = true;
					comment("<font size=small><b>Can't schedule FINAL Inspection:</b></font><br><br>Can't schedule FINAL Inspection until Refrigeration Final is scheduled.See related records.<br><br>");
					cancel = true;
				}

				if (checkInspectionResult('FP-FINAL', 'Pending')) {
					showMessage = true;
					comment("<font size=small><b>Can't schedule FINAL Inspection:</b></font><br><br>Can't schedule FINAL Inspection until Fire Prevention Final is scheduled.See related records.<br><br>");
					cancel = true;
				}

				capId = saveCapId;

			}
			//end replaced branch: ES_ISB_CHILDFINALS;
		// remove this "end" 7/3/18 -}

	}
	//end replaced branch: ES_GET_CHILD_FINALS;
}

if (matches(inspType, 'BU-INSULATION')
	&& checkInspectionResult('BU-FRAMING', 'Pending')
	&& !appMatch('Permits/Commercial/*/*')
	) {
	/*
	Can't do insulation without framing inspection
	*/
	showMessage = true;
	comment("<font size=small><b>The BU-INSULATION Inspection cannot be scheduled until the BU-FRAMING Inspection is scheduled:</b></font><br><br>Please Schedule the BU-FRAMING inspection first. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
	cancel = true;
}

if (matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP', 'MH-FINAL')) {
	/*
	If they're trying to schedule a final inspection without doing any of this stuff,
	they should get rejected
	*/
	//start replaced branch: ES_ISB_BU_NEW
	{
		if (checkInspectionResult('BU-FOOTING', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>FOOTING Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('BU-FOUNDATION', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>FOUNDATION Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('BU-FRAMING', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>FRAMING Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('BU-INSULATION', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>INSULATION Inspection is not scheduled.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('BU-SITE ACCESSIBILITY', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>SITE ACCESSIBILITY Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('BU-FIRE STOPPING', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>FIRE STOPPING Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('BU-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>REINSP Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('EE-FINAL', 'Pending')
			&& checkInspectionResult('EE-FINAL-REINSP', 'Pending')
		) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Electrical Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('ME-FINAL', 'Pending')
			&& checkInspectionResult('ME-FINAL-REINSP', 'Pending')
		) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Mechanical Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('PL-FINAL', 'Pending')
			&& checkInspectionResult('PL-FINAL-REINSP', 'Pending')
		) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Plumbing Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('GP-FINAL', 'Pending')
			&& checkInspectionResult('GP-FINAL-REINSP', 'Pending')
		) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Gas Piping Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('HO-FINAL', 'Pending')
			&& checkInspectionResult('HO-FINAL-REINSP', 'Pending')
		) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Exhaust Hood Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('RE-FINAL', 'Pending')
			& checkInspectionResult('RE-FINAL-REINSP', 'Pending')
		) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Refrigeration Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('FP-FINAL', 'Pending')
			&& checkInspectionResult('FP-FINAL-REINSP', 'Pending')
		) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Fire Prevention Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('BU-MARRIAGE WALL', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>MARRIAGE WALL Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('MH-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>REINSP Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('MH-FOOTING', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>MH-FOOTING Inspection is not scheduled.Inspections not required by scope will by resulted as Not Applicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('MH-FOUNDATION', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>MH-FOUNDATION Inspection is not scheduled.Inspections not required by scope will by resulted as Not Applicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('MH-MARRIAGE WALL', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>MH-MARRIAGE WALL Inspection is not scheduled.Inspections not required by scope will by resulted as Not Applicable by the inspector.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_ISB_BU_NEW;
}


/********** CLOSEOUT STUFF **********/
/*
Done with entire project, need documents
*/
var closeOutDocuments = [
	{
		inspectionType: 'SW-FINAL',
		requiredDocuments: [
			'SW-DIGITAL AS-BUILT',
			'SW-REPRO AS-BUILT',
			'SW-O&M AGREEMENT',
			'SW-CC-ENG',
			'SW-CC-OWNER',
			'SW-CC-CONTRACTOR',
			'SW-ALT SW LETTER',
		]
	},
	{
		inspectionType: 'FL-FINAL',
		requiredDocuments: [
			'FLOODPROOF CERTIFICATE',
			'POST-CONSTRUCTION ELEVATION CERTIFICATE',
			'POST-CONSTRUCTION NO-RISE CERTIFICATE',
			'POST-CONSTRUCTION LOMR/LOMA',
		]
	},
	{
		inspectionType: 'GR-FINAL',
		requiredDocuments: [
			'GR-ESC REPORT',
			'GR-SLOPE CERT',
			'GR-MULCH LETTER',
		]
	},
]

function checkForCloseOutDocuments(inspectionToCheck) {
	// Should these be && ? They all need to be true in order to send this?
	// That doesn't seem to make sense
	var closeOutResultsToCheck = [
		'Scheduled',
		'Pending',
		'In Review',
		'Revisions Required',
	]
	var sendThing = true;
	for (var i = 0; i < closeOutResultsToCheck.length; i++) {
		sendThing = sendThing && checkInspectionResult(inspectionToCheck, closeOutResultsToCheck[i])
	}
	if (sendThing) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
		cancel = true;
	}
}

function checkCloseOutDocCompleteness(inspectionToCheck) {
	if (matches(inspType, inspectionToCheck.inspectionType)) {
		for (var closeOutIndex = 0; closeOutIndex < inspectionToCheck.requiredDocuments.length; closeOutIndex++) {
			checkForCloseOutDocuments(inspectionToCheck.requiredDocuments[closeOutIndex])
		}
		if (isTaskActive('Close Out Document Review')) {
			cancel = true;
			showMessage = true;
			logMessage('Final inspection cannot be scheduled until close out documents are complete');
		}
	}
}

for (var closeOutObjectIndex = 0; closeOutObjectIndex < closeOutDocuments.length; closeOutObjectIndex++) {
	checkCloseOutDocCompleteness(closeOutDocuments[closeOutObjectIndex])
}
/********** end CLOSEOUT STUFF **********/

if (matches(inspType, 'ZO-FINAL')
	&& (appMatch('Permits/Commercial/Site Work/NA')
		|| appMatch('Planning/Development/*/*')
		|| appMatch('Planning/Subdivision/*/*')
	)
) {
	//start replaced branch: ES_ISB_ZONG
	if (checkInspectionResult('FP-SITE FINAL', 'Pending')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until FP-SITE FINAL is scheduled.<br><br>");
		cancel = true;
	}
	//end replaced branch: ES_ISB_ZONG;
}

pCapId = getParent();

if (pCapId) {
	//start replaced branch: ES_CHECK_FOR_BALANCE_ON_PARENT
	pCapDetailObjResult = aa.cap.getCapDetail(pCapId);
	pCapDetail = pCapDetailObjResult.getOutput();
	pBalanceDue = pCapDetail.getBalance();
	comment('Balance is ' + pBalanceDue);
	if (pBalanceDue > 0) {
		showMessage = true;
		comment("<font size=small><b>Parent Permit Has Balance Due:</b></font><br><br>The parent permit has a balance due of $" + pBalanceDue + ".  Inspections cannot be scheduled.<br><br>");
		cancel = true;
	}
	//end replaced branch: ES_CHECK_FOR_BALANCE_ON_PARENT;
}

if (balanceDue > 0) {
	showMessage = true;
	comment("<font size=small><b>Balance Due:</b></font><br><br>Inspection cannot be scheduled because there is a balance due for this Record.<br><br>");
	cancel = true;
}
