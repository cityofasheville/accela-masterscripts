/*
Inspection schedule before: prevent people from jumping to the final inspection
without doing preliminaries
*/

// TODO: IMPLEMENT THIS INSTEAD OF ALL THAT OTHER STUFF
function makeStyledCommentAndCancelProcess(title, text) {
	showMessage = true;
	// TODO: STYLE THIS SO IT LOOKS NICE, USE THIS FOR EVERYTHING
	comment("<p style='font-size:0.75em;font-weight:bold;margin-bottom:2em;'>"
			+ title
			+ "</p><p style='font-size:0.75em;margin-bottom:2em;'>"
			+ text
			+ "</p>"
		);
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
	makeStyledCommentAndCancelProcess(
		'Permit NOT Issued',
		'Please visit the Development Services Department for re-issuance.'
	);
}

/* Abbreviation key - index types
Buiding: RE, HO, GP, PL, MH, ME, EE, BU
Site Engineering: FLOODPROOF CERTIFICATE, FL, DR (residential only), POST, GR, SW
Planning - Zoning: SI, ZO
Public Works: DR (commercial only), SID
Fire Inspections: OPE, FP
Enforcement: ENF
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
		makeStyledCommentAndCancelProcess(
			"Site Work Record must have approved GR-PRELIMINARY inspection.",
			"Please return to the bottom of the record screen and navigate to the list of Related Records to find the associated Site record.",
		)
	}
}

function denyFinalInspections(currentInspectionGroup, inspectionTypeList) {
	// currentInspectionGroup is ME, PL, etc
	// inspectionTypeList is ROUGH IN, UNDER SLAB, etc
	for (var typeIndex = 0; typeIndex < inspectionTypeList.length; typeIndex++) {
		var thisInspectionType = inspectionTypeList[typeIndex];
		if (checkInspectionResult(currentInspectionGroup + '-' + thisInspectionType, 'Pending')) {
			// TODO: USE DIFFERENT TEXT FOR REINSPECTION
			// TODO: change this message when we change styling/write that function
			if (thisInspectionType === 'ROUGH IN') {
				makeStyledCommentAndCancelProcess(
					"Can't schedule Final",
					"Can't schedule Final until Rough-In is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector."
				);
			} else {
				makeStyledCommentAndCancelProcess(
					"Can't schedule final",
					thisInspectionType + " inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector."
				);
			}
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
		makeStyledCommentAndCancelProcess(
			'BU-FRAMING Inspection Not Allowed',
			'The BU-FOOTING inspection must be scheduled.Inspections not required by scope will be marked NotApplicable by the inspector.'
		)
	}

	if (checkInspectionResult('PL-ROUGH IN', 'Pending')) {
		makeStyledCommentAndCancelProcess(
			"Can\'t schedule Framing Inspection",
			"Can't schedule Framing Inspection until Plumbing Rough-In is scheduled.",
		)
	}

	if (checkInspectionResult('ME-ROUGH IN', 'Pending')) {
		makeStyledCommentAndCancelProcess(
			"Can't schedule Framing Inspection",
			"Can't schedule Framing Inspection until Mechanical Rough-In is scheduled.",
		)
	}

	if (checkInspectionResult('EE-ROUGH IN', 'Pending')) {
		makeStyledCommentAndCancelProcess(
			"Can't schedule Framing Inspection",
			"Can't schedule Framing Inspection until Electrical Rough-In is scheduled.",
		)
	}

	if (checkInspectionResult('GP-ROUGH IN', 'Pending')) {
		makeStyledCommentAndCancelProcess(
			"Can't schedule Framing Inspection",
			"Can't schedule Framing Inspection until Gas Piping Rough-In is scheduled.",
		)
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
						makeStyledCommentAndCancelProcess(
							"Can't schedule Framing Inspection",
							"Can't schedule Framing Inspection until Plumbing Rough-In is scheduled.",
						)
					}

					if (checkInspectionResult('ME-ROUGH IN', 'Pending')) {
						makeStyledCommentAndCancelProcess(
							"Can't schedule Framing Inspection",
							"Can't schedule Framing Inspection until Mechanical Rough-In is scheduled.",
						)
					}

					if (checkInspectionResult('EE-ROUGH IN', 'Pending')) {
						makeStyledCommentAndCancelProcess(
							"Can't schedule Framing Inspection",
							"Can't schedule Framing Inspection until Electrical Rough-In is scheduled."
						)
					}

					if (checkInspectionResult('GP-ROUGH IN', 'Pending')) {
						makeStyledCommentAndCancelProcess(
							"Can't schedule Framing Inspection",
							"Can't schedule Framing Inspection until Gas Piping Rough-In is scheduled.",
						)
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
					makeStyledCommentAndCancelProcess(
						"Can't schedule FINAL Inspection",
						"Can't schedule FINAL Inspection until Plumbing Final is scheduled.See related records.",
					)
				}

				if (checkInspectionResult('ME-FINAL', 'Pending')) {
					makeStyledCommentAndCancelProcess(
						"Can't schedule FINAL Inspection",
						"Can't schedule FINAL Inspection until Mechanical Final is scheduled.See related records.",
					)
				}

				if (checkInspectionResult('EE-FINAL', 'Pending')) {
					makeStyledCommentAndCancelProcess(
						"Can't schedule FINAL Inspection",
						"Can't schedule FINAL Inspection until Electrical Final is scheduled.See related records.",
					)
				}

				if (checkInspectionResult('GP-FINAL', 'Pending')) {
					makeStyledCommentAndCancelProcess(
						"Can't schedule FINAL Inspection",
						"Can't schedule FINAL Inspection until Gas Piping Final is scheduled.See related records.",
					)
				}

				if (checkInspectionResult('HO-FINAL', 'Pending')) {
					makeStyledCommentAndCancelProcess(
						"Can't schedule FINAL Inspection",
						"Can't schedule FINAL Inspection until Exhaust Hood Final is scheduled.See related records.",
					)
				}

				if (checkInspectionResult('RE-FINAL', 'Pending')) {
					makeStyledCommentAndCancelProcess(
						"Can't schedule FINAL Inspection",
						"Can't schedule FINAL Inspection until Refrigeration Final is scheduled.See related records.",
					)
				}

				if (checkInspectionResult('FP-FINAL', 'Pending')) {
					makeStyledCommentAndCancelProcess(
						"Can't schedule FINAL Inspection",
						"Can't schedule FINAL Inspection until Fire Prevention Final is scheduled.See related records.",
					)
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
	makeStyledCommentAndCancelProcess(
		"The BU-INSULATION Inspection cannot be scheduled until the BU-FRAMING Inspection is scheduled",
		"Please Schedule the BU-FRAMING inspection first. Inspections not required by scope will be marked NotApplicable by the inspector.",
	)
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
		makeStyledCommentAndCancelProcess(
			"Can't schedule Final",
			"Close Out Documents not approved.",
		)
	}
}

function checkCloseOutDocCompleteness(inspectionToCheck) {
	if (matches(inspType, inspectionToCheck.inspectionType)) {
		for (var closeOutIndex = 0; closeOutIndex < inspectionToCheck.requiredDocuments.length; closeOutIndex++) {
			checkForCloseOutDocuments(inspectionToCheck.requiredDocuments[closeOutIndex])
		}
		if (isTaskActive('Close Out Document Review')) {
			makeStyledCommentAndCancelProcess(
				'Final inspection cannot be scheduled',
				'Close out documents must be complete.',
			)
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
		makeStyledCommentAndCancelProcess(
			"Can't schedule Final",
			"Can't schedule Final until FP-SITE FINAL is scheduled.",
		)
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
		makeStyledCommentAndCancelProcess(
			"Parent Permit Has Balance Due",
			"The parent permit has a balance due of $" + pBalanceDue + ".  Inspections cannot be scheduled.",
		)
	}
	//end replaced branch: ES_CHECK_FOR_BALANCE_ON_PARENT;
}

if (balanceDue > 0) {
	makeStyledCommentAndCancelProcess(
		"Balance Due",
		"Inspection cannot be scheduled because there is a balance due for this Record.",
	)
}
