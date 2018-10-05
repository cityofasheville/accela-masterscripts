if ((appMatch('Permits/*/*/*') || appMatch('Planning/*/*/*'))
	&& !matches(
		capStatus,
		'Issued',
		'Reissued',
		'Partial Issued',
		'TCO Issued',
		'Inspections',
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

if (inspType.indexOf('BU') === 0) {
	//start replaced branch: checkFootingInspection
	if (
		(hasChildren('Planning/Development/*/*') && !doesChildHaveApprovedInspection('Planning/Development/*/*', 'GR-PRELIMINARY'))
		|| (hasChildren('Planning/Subdivision/*/*') && !doesChildHaveApprovedInspection('Planning/Subdivision/*/*', 'GR-PRELIMINARY'))
		|| (hasChildren('Permits/*/Site Work/*') && !doesChildHaveApprovedInspection('Permits/*/Site Work/*', 'GR-PRELIMINARY'))
	) {
		cancel = true;
		showMessage = true;
		logMessage('Site Work Record must have approved GR-PRELIMINARY inspection. Please return to the bottom of the record screen and navigate to the list of Related Records to find the associated Site record.');
	}
	//end replaced branch: checkFootingInspection;
}

function denyFinalInspections(currentInspectionType, inspectionResultList) {
	// currentInspectionType is ME, PL, etc
	// inspectionResultList is ROUGH IN, UNDER SLAB, etc
	for (var inspectionResultIndex = 0; inspectionResultIndex < meInspectionTypes.length; inspectionResultIndex++) {
		var thisInspectionType = inspectionResultList[inspectionResultIndex];
		if (checkInspectionResult(currentInspectionType + '-' + thisInspectionType, 'Pending')) {
			showMessage = true;
			// TODO: USE DIFFERENT TEXT FOR REINSPECTION
			if (thisInspectionType === 'ROUGH IN') {
				comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until Rough-In is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			} else {
				comment("<font size=small><b>Can't schedule final: </b></font><br><br>" + thisInspectionType + " inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			}
			cancel = true;
		}
	}
}

var inspectionTypesToCheck = [
	{
		type: 'ME',
		subTypes: [
			'ROUGH IN',
			'UNDER SLAB',
			'FIRE DAMPER',
			'ABOVE CEILING',
			'REINSP',
		],
	},
	{
		type: 'PL',
		subTypes: [
			'ROUGH IN',
			'UNDER SLAB',
			'WATER LINE',
			'SEWER LINE',
			'BACKFLOW',
			'REINSP',
		]
	},
	{
		type: 'EE',
		subTypes: [
			'ROUGH IN',
			'UNDER SLAB',
			'TEMPORARY SAW SERVICE',
			'ABOVE CEILING',
			'OTHER',
			'REINSP',
		]
	},
	{
		type: 'HO',
		subTypes: [
			'ROUGH IN',
			'ABOVE CEILING',
			'LIGHT TEST',
			'SMOKE TEST',
			'DUCT WRAP',
			'REINSP',
		]
	},
	{
		type: 'RE',
		subTypes: [
			'ROUGH IN',
			'ABOVE CEILING',
			'REINSP',
		]
	},
	{
		type: 'GP',
		subTypes: [
			'ROUGH IN',
			'REINSP',
		]
	}
]

for (var inspectionTypeIndex = 0; inspectionTypeIndex < inspectionTypesToCheck.length; inspectionTypeIndex++) {
	var thisType = inspectionTypesToCheck[inspectionTypeIndex]
	if (matches(inspType, thisType.type + '-FINAL')) {
		denyFinalInspections(thisType.type, thisType.subTypes)
	}
}

if (matches(inspType, 'BU-FRAMING')) {
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

	//start replaced branch: ES_GET_CHILD_FINALS
// remove this "else" 7/3/18 -	{

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

if (matches(inspType, 'BU-INSULATION') && checkInspectionResult('BU-FRAMING', 'Pending') && !appMatch('Permits/Commercial/*/*')) {
	showMessage = true;
	comment("<font size=small><b>The BU-INSULATION Inspection cannot be scheduled until the BU-FRAMING Inspection is scheduled:</b></font><br><br>Please Schedule the BU-FRAMING inspection first. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
	cancel = true;
}

if (matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP', 'MH-FINAL')) {

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

		if (checkInspectionResult('EE-FINAL', 'Pending') && checkInspectionResult('EE-FINAL-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Electrical Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('ME-FINAL', 'Pending') && checkInspectionResult('ME-FINAL-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Mechanical Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('PL-FINAL', 'Pending') && checkInspectionResult('PL-FINAL-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Plumbing Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('GP-FINAL', 'Pending') && checkInspectionResult('GP-FINAL-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Gas Piping Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('HO-FINAL', 'Pending') && checkInspectionResult('HO-FINAL-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Exhaust Hood Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('RE-FINAL', 'Pending') && checkInspectionResult('RE-FINAL-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Refrigeration Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('FP-FINAL', 'Pending') && checkInspectionResult('FP-FINAL-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final Inspection:</b></font><br><br>Can't schedule Final Inspection until Fire Prevention Final is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (checkInspectionResult('BU-MARRIAGE WALL', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>MARRIAGE WALL Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		// DISABLED: ES_ISB_BU_NEW:16
		//br_nch('ES_GET_CHILDREN_TRADEFINALS');
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

if (matches(inspType, 'GR-FINAL')) {

	//start replaced branch: ES_ISB_GR_CLOSEOUT
	{
		if (inspType == 'GR-FINAL' && checkInspectionResult('GR-ESC REPORT', 'Scheduled') && checkInspectionResult('GR-ESC REPORT', 'Pending') && checkInspectionResult('GR-ESC REPORT', 'In Review') && checkInspectionResult('GR-ESC REPORT', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'GR-FINAL' && checkInspectionResult('GR-SLOPE CERT', 'Scheduled') && checkInspectionResult('GR-SLOPE CERT', 'Pending') && checkInspectionResult('GR-SLOPE CERT', 'In Review') && checkInspectionResult('GR-SLOPE CERT', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'GR-FINAL' && checkInspectionResult('GR-MULCH LETTER', 'Scheduled') && checkInspectionResult('GR-MULCH LETTER', 'Pending') && checkInspectionResult('GR-MULCH LETTER', 'In Review') && checkInspectionResult('GR-MULCH LETTER', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (isTaskActive('Close Out Document Review')) {
			cancel = true;
			showMessage = true;
			logMessage('Final inspection cannot be scheduled until close out documents are complete');
		}

	}
	//end replaced branch: ES_ISB_GR_CLOSEOUT;
}

if (matches(inspType, 'SW-FINAL')) {

	//start replaced branch: ES_ISB_SW_CLOSEOUT
	if (checkInspectionResult('SW-DIGITAL AS-BUILT', 'Scheduled') && checkInspectionResult('SW-DIGITAL AS-BUILT', 'Pending') && checkInspectionResult('SW-DIGITAL AS-BUILT', 'In Review') && checkInspectionResult('SW-DIGITAL AS-BUILT', 'Revisions Required')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('SW-REPRO AS-BUILT', 'Scheduled') && checkInspectionResult('SW-REPRO AS-BUILT', 'Pending') && checkInspectionResult('SW-REPRO AS-BUILT', 'In Review') && checkInspectionResult('SW-REPRO AS-BUILT', 'Revisions Required')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('SW-O&M AGREEMENT', 'Scheduled') && checkInspectionResult('SW-O&M AGREEMENT', 'In Review') && checkInspectionResult('SW-O&M AGREEMENT', 'Revisions Required')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('SW-CC-ENG', 'Scheduled') && checkInspectionResult('SW-CC-ENG', 'Pending') && checkInspectionResult('SW-CC-ENG', 'In Review') && checkInspectionResult('SW-CC-ENG', 'Revisions Required')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('SW-CC-OWNER', 'Scheduled') && checkInspectionResult('SW-CC-OWNER', 'Pending') && checkInspectionResult('SW-CC-OWNER', 'In Review') && checkInspectionResult('SW-CC-OWNER', 'Revisions Required')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('SW-CC-CONTRACTOR', 'Scheduled') && checkInspectionResult('SW-CC-CONTRACTOR', 'Pending') && checkInspectionResult('SW-CC-CONTRACTOR', 'In Review') && checkInspectionResult('SW-CC-CONTRACTOR', 'Revisions Required')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
		cancel = true;
	}

	if (checkInspectionResult('SW-ALT SW LETTER', 'Scheduled') && checkInspectionResult('SW-ALT SW LETTER', 'Pending') && checkInspectionResult('SW-ALT SW LETTER', 'In Review') && checkInspectionResult('SW-ALT SW LETTER', 'Revisions Required')) {
		showMessage = true;
		comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
		cancel = true;
	}

	if (isTaskActive('Close Out Document Review')) {
		cancel = true;
		showMessage = true;
		logMessage('Final inspection cannot be scheduled until close out documents are complete');
	}
	//end replaced branch: ES_ISB_SW_CLOSEOUT;
}

if (matches(inspType, 'FL-FINAL')) {
	// TODO: SHOULD THESE BE && OR || ?
	var closeOutInspectionsToCheck = [
		'FLOODPROOF CERTIFICATE',
		'POST-CONSTRUCTION ELEVATION CERTIFICATE',
		'POST-CONSTRUCTION NO-RISE CERTIFICATE',
		'POST-CONSTRUCTION LOMR/LOMA',
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

	for (var closeOutIndex = 0; closeOutIndex < closeOutInspectionsToCheck.length; closeOutIndex++) {
		checkForCloseOutDocuments(closeOutInspectionsToCheck[closeOutIndex])
	}

	if (isTaskActive('Close Out Document Review')) {
		cancel = true;
		showMessage = true;
		logMessage('Final inspection cannot be scheduled until close out documents are complete');
	}
}

if (matches(inspType, 'ZO-FINAL') && (appMatch('Permits/Commercial/Site Work/NA') || appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*'))) {

	//start replaced branch: ES_ISB_ZONG
	{
		if (checkInspectionResult('FP-SITE FINAL', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until FP-SITE FINAL is scheduled.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_ISB_ZONG;
}

pCapId = getParent();

if (pCapId) {
	//start replaced branch: ES_CHECK_FOR_BALANCE_ON_PARENT
	{
		pCapDetailObjResult = aa.cap.getCapDetail(pCapId);
		pCapDetail = pCapDetailObjResult.getOutput();
		pBalanceDue = pCapDetail.getBalance();
		comment('Balance is ' + pBalanceDue);
		if (pBalanceDue > 0) {
			showMessage = true;
			comment("<font size=small><b>Parent Permit Has Balance Due:</b></font><br><br>The parent permit has a balance due of $'+pBalanceDue+'.  Inspections cannot be scheduled.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_CHECK_FOR_BALANCE_ON_PARENT;
}

if (balanceDue > 0) {
	showMessage = true;
	comment("<font size=small><b>Balance Due:</b></font><br><br>Inspection cannot be scheduled because there is a balance due for this Record.<br><br>");
	cancel = true;
}
