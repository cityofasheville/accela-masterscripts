//Added 6/14/19 check for approved finals before issuing BU FINAL
if ( (appMatch("Permits/Residential/New Building/*") || appMatch("Permits/Residential/Accessory Structure/*")) && (matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP')) ) {
	if (!checkInspectionResult('EE-FINAL', 'Approved') && 
			!checkInspectionResult('EE-FINAL', 'Approved with Conditions') && 
			!checkInspectionResult('EE-FINAL', 'Scheduled') && 
			!checkInspectionResult('EE-FINAL-REINSP', 'Approved') && 
			!checkInspectionResult('EE-FINAL-REINSP', 'Approved with Conditions') && 
			!checkInspectionResult('EE-FINAL-REINSP', 'Scheduled') && 
			AInfo['EE Permit'] != 'NA') {
				showMessage = true;
				comment("<font size=small><b>Can't schedule BU Final:</b></font><br><br>EE Final must be approved first.<br><br>");
				cancel = true;
	}

	if (!checkInspectionResult('ME-FINAL', 'Approved') && 
			!checkInspectionResult('ME-FINAL', 'Approved with Conditions') && 
			!checkInspectionResult('ME-FINAL', 'Scheduled') && 
			!checkInspectionResult('ME-FINAL-REINSP', 'Approved') && 
			!checkInspectionResult('ME-FINAL-REINSP', 'Approved with Conditions') && 
			!checkInspectionResult('ME-FINAL-REINSP', 'Scheduled') && 
			AInfo['ME Permit'] != 'NA') {
				showMessage = true;
				comment("<font size=small><b>Can't schedule BU Final:</b></font><br><br>ME Final must be approved first.<br><br>");
				cancel = true;
	}

	if (!checkInspectionResult('HO-FINAL', 'Approved') && 
			!checkInspectionResult('HO-FINAL', 'Approved with Conditions') && 
			!checkInspectionResult('HO-FINAL', 'Scheduled') && 
			!checkInspectionResult('HO-FINAL-REINSP', 'Approved') && 
			!checkInspectionResult('HO-FINAL-REINSP', 'Approved with Conditions') && 
			!checkInspectionResult('HO-FINAL-REINSP', 'Scheduled') && 
			AInfo['HO Permit'] != 'NA') {
				showMessage = true;
				comment("<font size=small><b>Can't schedule BU Final:</b></font><br><br>HO Final must be approved first.<br><br>");
				cancel = true;
	}

  //if (!checkInspectionResult('GR-FINAL', 'Approved') && 
    //  !checkInspectionResult('GR-FINAL', 'Approved with Conditions') && 
    //  !checkInspectionResult('GR-FINAL', 'Scheduled') && 
    //  !checkInspectionResult('GR-FINAL-REINSP', 'Approved') && 
    //  !checkInspectionResult('GR-FINAL-REINSP', 'Approved with Conditions') && 
    //  !checkInspectionResult('GR-FINAL-REINSP', 'Scheduled') && 
    //  AInfo['GR Permit'] != 'NA') {
	//			showMessage = true;
	//			comment("<font size=small><b>Can't schedule BU Final:</b></font><br><br>GR Final must be approved first.<br><br>");
	//			cancel = true;
  //}

	if (!checkInspectionResult('FP-FINAL', 'Approved') && 
			!checkInspectionResult('FP-FINAL', 'Approved with Conditions') && 
			!checkInspectionResult('FP-FINAL', 'Scheduled') && 
			!checkInspectionResult('FP-FINAL-REINSP', 'Approved') && 
			!checkInspectionResult('FP-FINAL-REINSP', 'Approved with Conditions') && 
			!checkInspectionResult('FP-FINAL-REINSP', 'Scheduled') && 
			AInfo['FP Permit'] != 'NA') {
				showMessage = true;
				comment("<font size=small><b>Can't schedule BU Final:</b></font><br><br>FP Final must be approved first.<br><br>");
				cancel = true;
	}

	if (!checkInspectionResult('PL-FINAL', 'Approved') && 
			!checkInspectionResult('PL-FINAL', 'Approved with Conditions') && 
			!checkInspectionResult('PL-FINAL', 'Scheduled') && 
			!checkInspectionResult('PL-FINAL-REINSP', 'Approved') && 
			!checkInspectionResult('PL-FINAL-REINSP', 'Approved with Conditions') && 
			!checkInspectionResult('PL-FINAL-REINSP', 'Scheduled') && 
			AInfo['PL Permit'] != 'NA') {
				showMessage = true;
				comment("<font size=small><b>Can't schedule BU Final:</b></font><br><br>PL Final must be approved first.<br><br>");
				cancel = true;
	}

  if (!checkInspectionResult('RE-FINAL', 'Approved') && 
      !checkInspectionResult('RE-FINAL', 'Approved with Conditions') && 
      !checkInspectionResult('RE-FINAL', 'Scheduled') && 
      !checkInspectionResult('RE-FINAL-REINSP', 'Approved') && 
      !checkInspectionResult('RE-FINAL-REINSP', 'Approved with Conditions') && 
      !checkInspectionResult('RE-FINAL-REINSP', 'Scheduled') && 
      AInfo['RE Permit'] != 'NA') {
    showMessage = true;
    comment("<font size=small><b>Can't schedule BU Final:</b></font><br><br>RE Final must be approved first.<br><br>");
    cancel = true;
	}

	//if (!checkInspectionResult('DR-FINAL', 'Approved') && 
			//!checkInspectionResult('DR-FINAL', 'Approved with Conditions') && 
			//!checkInspectionResult('DR-FINAL', 'Scheduled') && 
			//!checkInspectionResult('DR-FINAL-REINSP', 'Approved') && 
			//!checkInspectionResult('DR-FINAL-REINSP', 'Approved with Conditions') && 
			//!checkInspectionResult('DR-FINAL-REINSP', 'Scheduled') && 
			//AInfo['DR Permit'] != 'NA') {
			//	showMessage = true;
			//	comment("<font size=small><b>Can't schedule BU Final:</b></font><br><br>DR Final must be approved first.<br><br>");
			//	cancel = true;
	//}

  if (!checkInspectionResult('GP-FINAL', 'Approved') && 
			!checkInspectionResult('GP-FINAL', 'Approved with Conditions') && 
			!checkInspectionResult('GP-FINAL', 'Scheduled') && 
			!checkInspectionResult('GP-FINAL-REINSP', 'Approved') && 
			!checkInspectionResult('GP-FINAL-REINSP', 'Approved with Conditions') && 
			!checkInspectionResult('GP-FINAL-REINSP', 'Scheduled') && 
			AInfo['GP Permit'] != 'NA') {
				showMessage = true;
				comment("<font size=small><b>Can't schedule BU Final:</b></font><br><br>GP Final must be approved first.<br><br>");
				cancel = true;
	}
}		

//Added 6/12/19 check for approved gr preliminary
if ((appMatch("Permits/Residential/New Building/*") || appMatch("Permits/Residential/Accessory Structure/*")) &&  !matches(inspType,"GR-PRELIMINARY")  && AInfo['GR Permit'] != 'NA') {
	if (!checkInspectionResult("GR-PRELIMINARY","Approved") && !checkInspectionResult("GR-PRELIMINARY","Approved with Conditions") && !hasChildren('Permits/*/Site Work/*')) {
		cancel = true;
		showMessage = true;
		logMessage('Inspection Not Allowed: The GR-PRELIMINARY inspection must be approved first.');
	}

	if (hasChildren('Permits/*/Site Work/*') && !doesChildHaveApprovedInspection('Permits/*/Site Work/*', 'GR-PRELIMINARY') ) {
		cancel = true;
		showMessage = true;
		logMessage('Site Work Record must have approved GR-PRELIMINARY inspection. Please go to the Record Info dropdown and choose Related Records. Then find the Site record and if necessary schedule the GR-PRELIMINARY inspection.');
	}
}


if ((appMatch('Permits/*/*/*') || appMatch('Planning/*/*/*')) && !matches(capStatus, 'Issued', 'Reissued', 'Partial Issued', 'TCO Issued', 'Inspections', 'TCO Reissued', 'TCC Issued', 'In Compliance', 'Renewed', 'Amended', 'TCO Issued 30 Days', 'TCO Issued 60 Days', 'TCO Issued 90 Days', 'TCC Issued 30 Days', 'TCC Issued 60 Days', 'TCC Issued 90 Days')) {
	showMessage = true;
	comment("<font size=small><b>Permit NOT Issued:</b></font><br><br>Please visit the Development Services Department for re-issuance.<br><br>");
	cancel = true;
}

if (inspType.indexOf('BU') == 0) {

	//start replaced branch: checkFootingInspection
	{
		doCancel = false;
		if (hasChildren('Planning/Development/*/*') && !doesChildHaveApprovedInspection('Planning/Development/*/*', 'GR-PRELIMINARY')) {
			doCancel = true;
		}

		if (hasChildren('Planning/Subdivision/*/*') && !doesChildHaveApprovedInspection('Planning/Subdivision/*/*', 'GR-PRELIMINARY')) {
			doCancel = true;
		}

		if (hasChildren('Permits/*/Site Work/*') && !doesChildHaveApprovedInspection('Permits/*/Site Work/*', 'GR-PRELIMINARY')) {
			doCancel = true;
		}

		if (doCancel) {
			cancel = true;
			showMessage = true;
			logMessage('Site Work Record must have approved GR-PRELIMINARY inspection. Please return to the bottom of the record screen and navigate to the list of Related Records to find the associated Site record.');
		}

	}
	//end replaced branch: checkFootingInspection;
}

if (matches(inspType, 'ME-FINAL')) {

	//start replaced branch: ES_ISB_MECH
	{
		if (inspType == 'ME-FINAL' && checkInspectionResult('ME-ROUGH IN', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until Rough-In is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'ME-FINAL' && checkInspectionResult('ME-UNDER SLAB', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>UNDER SLAB Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'ME-FINAL' && checkInspectionResult('ME-FIRE DAMPER', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>FIRE DAMPER Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'ME-FINAL' && checkInspectionResult('ME-ABOVE CEILING', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>ABOVE CEILING Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		// DISABLED: ES_ISB_MECH:5
		//if (inspType == 'ME-FINAL' && checkInspectionResult('ME-OTHER','Pending')) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't schedule Final:</b></font><br><br>OTHER Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
		//	cancel = true;
		//	}

		if (inspType == 'ME-FINAL' && checkInspectionResult('ME-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>ME-REINSP Re-inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_ISB_MECH;
}

if (matches(inspType, 'PL-FINAL')) {

	//start replaced branch: ES_ISB_PLUM
	{
		if (inspType == 'PL-FINAL' && checkInspectionResult('PL-ROUGH IN', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until Rough-In is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'PL-FINAL' && checkInspectionResult('PL-UNDER SLAB', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>UNDER SLAB Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		// DISABLED: ES_ISB_PLUM:3
		//if (inspType == 'PL-FINAL' && checkInspectionResult('PL-SHOWER PAN','Pending')) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't schedule Final:</b></font><br><br>SHOWER PAN Inspection is not scheduled.<br><br>");
		//	cancel = true;
		//	}

		if (inspType == 'PL-FINAL' && checkInspectionResult('PL-WATER LINE', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>WATER LINE Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'PL-FINAL' && checkInspectionResult('PL-SEWER LINE', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>SEWER LINE Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'PL-FINAL' && checkInspectionResult('PL-BACKFLOW', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>BACKFLOW Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		// DISABLED: ES_ISB_PLUM:7
		//if (inspType == 'PL-FINAL' && checkInspectionResult('PL-OTHER','Pending')) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't schedule Final:</b></font><br><br>OTHER Inspection is not scheduled.<br><br>");
		//	cancel = true;
		//	}

		if (inspType == 'PL-FINAL' && checkInspectionResult('PL-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>PL-REINSP Re-inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_ISB_PLUM;
}

if (matches(inspType, 'EE-FINAL')) {

	//start replaced branch: ES_ISB_ELEC
	{
		if (inspType == 'EE-FINAL' && checkInspectionResult('EE-ROUGH IN', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until Rough-In is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'EE-FINAL' && checkInspectionResult('EE-UNDER SLAB', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>UNDER SLAB Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'EE-FINAL' && checkInspectionResult('EE-TEMPORARY SAW SERVICE', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>TEMPORARY SAW SERVICE Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'EE-FINAL' && checkInspectionResult('EE-ABOVE CEILING', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>ABOVE CEILING Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'EE-FINAL' && checkInspectionResult('EE-OTHER', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>OTHER Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'EE-FINAL' && checkInspectionResult('EE-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>EE-REINSP Re-inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_ISB_ELEC;
}

if (matches(inspType, 'HO-FINAL')) {

	//start replaced branch: ES_ISB_HOOD
	{
		if (inspType == 'HO-FINAL' && checkInspectionResult('HO-ROUGH IN', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until Rough-In is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'HO-FINAL' && checkInspectionResult('HO-ABOVE CEILING', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>ABOVE CEILING Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'HO-FINAL' && checkInspectionResult('HO-LIGHT TEST', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>LIGHT TEST Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'HO-FINAL' && checkInspectionResult('HO-SMOKE TEST', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>SMOKE TEST Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'HO-FINAL' && checkInspectionResult('HO-DUCT WRAP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>DUCT WRAP Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'HO-FINAL' && checkInspectionResult('HO-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>HO-REINSP Re-inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_ISB_HOOD;
}

if (matches(inspType, 'RE-FINAL')) {

	//start replaced branch: ES_ISB_REFR
	{
		if (inspType == 'RE-FINAL' && checkInspectionResult('RE-ROUGH IN', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until Rough-In is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'RE-FINAL' && checkInspectionResult('RE-ABOVE CEILING', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>ABOVE CEILING Inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		// DISABLED: ES_ISB_REFR:3
		//if (inspType == 'RE-FINAL' && checkInspectionResult('RE-OTHER','Pending')) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't schedule Final:</b></font><br><br>OTHER Inspection is not scheduled.<br><br>");
		//	cancel = true;
		//	}

		if (inspType == 'RE-FINAL' && checkInspectionResult('RE-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>RE-REINSP Re-inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_ISB_REFR;
}

if (matches(inspType, 'GP-FINAL')) {

	//start replaced branch: ES_ISB_GASP
	{
		if (inspType == 'GP-FINAL' && checkInspectionResult('GP-ROUGH IN', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Can't schedule Final until Rough-In is scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

		if (inspType == 'GP-FINAL' && checkInspectionResult('GP-REINSP', 'Pending')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>GP-REINSP Re-inspection is not scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_ISB_GASP;
}

if (matches(inspType, 'BU-FRAMING') && checkInspectionResult('BU-FOOTING', 'Pending')) {
	showMessage = true;
	comment("<font size=small><b>BU-FRAMING Inspection Not Allowed:</b></font><br><br>The BU-FOOTING inspection must be scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
	cancel = true;
}
//added 03/18/19 to take into affect the Site Record child being removed for Residential
if (matches(inspType, 'BU-FOOTING') && checkInspectionResult('GR-PRELIMINARY', 'Pending')) {
	showMessage = true;
	comment("<font size=small><b>BU-FRAMING Inspection Not Allowed:</b></font><br><br>The BU-FOOTING inspection must be scheduled. Inspections not required by scope will be marked NotApplicable by the inspector.<br><br>");
	cancel = true;
}
//
if (matches(inspType, 'BU-FRAMING') && checkInspectionResult('PL-ROUGH IN', 'Pending')) {
	showMessage = true;
	comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Plumbing Rough-In is scheduled.<br><br>");
	cancel = true;
}

if (matches(inspType, 'BU-FRAMING') && checkInspectionResult('ME-ROUGH IN', 'Pending')) {
	showMessage = true;
	comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Mechanical Rough-In is scheduled.<br><br>");
	cancel = true;
}

if (matches(inspType, 'BU-FRAMING') && checkInspectionResult('EE-ROUGH IN', 'Pending')) {
	showMessage = true;
	comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Electrical Rough-In is scheduled.<br><br>");
	cancel = true;
}

if (matches(inspType, 'BU-FRAMING') && checkInspectionResult('GP-ROUGH IN', 'Pending')) {
	showMessage = true;
	comment("<font size=small><b>Can't schedule Framing Inspection:</b></font><br><br>Can't schedule Framing Inspection until Gas Piping Rough-In is scheduled.<br><br>");
	cancel = true;
}

if (appMatch('Permits/Residential/*/*') && matches(inspType, 'BU-FRAMING')) {

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
	{
		if (inspType == 'SW-FINAL' && checkInspectionResult('SW-DIGITAL AS-BUILT', 'Scheduled') && checkInspectionResult('SW-DIGITAL AS-BUILT', 'Pending') && checkInspectionResult('SW-DIGITAL AS-BUILT', 'In Review') && checkInspectionResult('SW-DIGITAL AS-BUILT', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'SW-FINAL' && checkInspectionResult('SW-REPRO AS-BUILT', 'Scheduled') && checkInspectionResult('SW-REPRO AS-BUILT', 'Pending') && checkInspectionResult('SW-REPRO AS-BUILT', 'In Review') && checkInspectionResult('SW-REPRO AS-BUILT', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'SW-FINAL' && checkInspectionResult('SW-O&M AGREEMENT', 'Scheduled') && checkInspectionResult('SW-O&M AGREEMENT', 'In Review') && checkInspectionResult('SW-O&M AGREEMENT', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'SW-FINAL' && checkInspectionResult('SW-CC-ENG', 'Scheduled') && checkInspectionResult('SW-CC-ENG', 'Pending') && checkInspectionResult('SW-CC-ENG', 'In Review') && checkInspectionResult('SW-CC-ENG', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'SW-FINAL' && checkInspectionResult('SW-CC-OWNER', 'Scheduled') && checkInspectionResult('SW-CC-OWNER', 'Pending') && checkInspectionResult('SW-CC-OWNER', 'In Review') && checkInspectionResult('SW-CC-OWNER', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'SW-FINAL' && checkInspectionResult('SW-CC-CONTRACTOR', 'Scheduled') && checkInspectionResult('SW-CC-CONTRACTOR', 'Pending') && checkInspectionResult('SW-CC-CONTRACTOR', 'In Review') && checkInspectionResult('SW-CC-CONTRACTOR', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'SW-FINAL' && checkInspectionResult('SW-ALT SW LETTER', 'Scheduled') && checkInspectionResult('SW-ALT SW LETTER', 'Pending') && checkInspectionResult('SW-ALT SW LETTER', 'In Review') && checkInspectionResult('SW-ALT SW LETTER', 'Revisions Required')) {
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
	//end replaced branch: ES_ISB_SW_CLOSEOUT;
}

if (matches(inspType, 'FL-FINAL')) {

	//start replaced branch: ES_ISB_FL_CLOSEOUT
	{
		if (inspType == 'FL-FINAL' && checkInspectionResult('FLOODPROOF CERTIFICATE', 'Scheduled') && checkInspectionResult('FLOODPROOF CERTIFICATE', 'Pending') && checkInspectionResult('FLOODPROOF CERTIFICATE', 'In Review') && checkInspectionResult('FLOODPROOF CERTIFICATE', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'FL-FINAL' && checkInspectionResult('POST-CONSTRUCTION ELEVATION CERTIFICATE', 'Scheduled') && checkInspectionResult('POST-CONSTRUCTION ELEVATION CERTIFICATE', 'Pending') && checkInspectionResult('POST-CONSTRUCTION ELEVATION CERTIFICATE', 'In Review') && checkInspectionResult('POST-CONSTRUCTION ELEVATION CERTIFICATE', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'FL-FINAL' && checkInspectionResult('POST-CONSTRUCTION NO-RISE CERTIFICATE', 'Scheduled') && checkInspectionResult('POST-CONSTRUCTION NO-RISE CERTIFICATE', 'Pending') && checkInspectionResult('POST-CONSTRUCTION NO-RISE CERTIFICATE', 'In Review') && checkInspectionResult('POST-CONSTRUCTION NO-RISE CERTIFICATE', 'Revisions Required')) {
			showMessage = true;
			comment("<font size=small><b>Can't schedule Final:</b></font><br><br>Close Out Documents not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'FL-FINAL' && checkInspectionResult('POST-CONSTRUCTION LOMR/LOMA', 'Scheduled') && checkInspectionResult('POST-CONSTRUCTION LOMR/LOMA', 'Pending') && checkInspectionResult('POST-CONSTRUCTION LOMR/LOMA', 'In Review') && checkInspectionResult('POST-CONSTRUCTION LOMR/LOMA', 'Revisions Required')) {
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
	//end replaced branch: ES_ISB_FL_CLOSEOUT;
}

if (matches(inspType, 'ZO-FINAL') && (appMatch('Permits/Commercial/Site Work/NA') || appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*'))) {

	//start replaced branch: ES_ISB_ZONG
	{
		if (inspType == 'ZO-FINAL' && checkInspectionResult('FP-SITE FINAL', 'Pending')) {
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

if( appMatch('Permits/Sign/Stand Alone/*') && matches(inspType, 'GR-PRELIMINARY')) {
	showMessage = true;
	comment("Nope");
	cancel = true;
}

if (appMatch('Permits/Sign/Stand Alone/*')
&& wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')
) {
	// emailByLicenseType(emailSubj, emailBody, licenseType, fromAddr, toAddr) 
	emailByLicenseType('test', 'Test: ', 'General Contractor', 'from.nobody@avl.com');
}