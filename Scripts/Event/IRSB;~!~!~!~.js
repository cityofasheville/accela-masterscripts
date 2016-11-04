
if (matches(inspType, 'ME-FINAL', 'ME-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_MECH
	{
		if ((checkInspectionResult('ME-ROUGH IN', 'Pending') || checkInspectionResult('ME-ROUGH IN', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ROUGH IN Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('ME-UNDER SLAB', 'Pending') || checkInspectionResult('ME-UNDER SLAB', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>UNDER SLAB Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('ME-FIRE DAMPER', 'Pending') || checkInspectionResult('ME-FIRE DAMPER', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FIRE DAMPER Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('ME-ABOVE CEILING', 'Pending') || checkInspectionResult('ME-ABOVE CEILING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ABOVE CEILING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('ME-OTHER', 'Pending') || checkInspectionResult('ME-OTHER', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>OTHER Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('ME-REINSP', 'Pending') || checkInspectionResult('ME-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>REINSP Re-inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_MECH;
}

if (matches(inspType, 'PL-FINAL', 'PL-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_PLUM
	{
		if (matches(inspType, 'PL-FINAL', 'PL-FINAL-REINSP') && (checkInspectionResult('PL-ROUGH IN', 'Pending') || checkInspectionResult('PL-ROUGH IN', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ROUGH IN Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'PL-FINAL', 'PL-FINAL-REINSP') && (checkInspectionResult('PL-UNDER SLAB', 'Pending') || checkInspectionResult('PL-UNDER SLAB', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>UNDER SLAB Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'PL-FINAL', 'PL-FINAL-REINSP') && (checkInspectionResult('PL-SHOWER PAN', 'Pending') || checkInspectionResult('PL-SHOWER PAN', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SOWER PAN Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'PL-FINAL', 'PL-FINAL-REINSP') && (checkInspectionResult('PL-WATER LINE', 'Pending') || checkInspectionResult('PL-WATER LINE', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>WATER LINE Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'PL-FINAL', 'PL-FINAL-REINSP') && (checkInspectionResult('PL-SEWER LINE', 'Pending') || checkInspectionResult('PL-SEWER LINE', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SEWER LINE Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'PL-FINAL', 'PL-FINAL-REINSP') && (checkInspectionResult('PL-BACKFLOW', 'Pending') || checkInspectionResult('PL-BACKFLOW', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>BACKFLOW Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'PL-FINAL', 'PL-FINAL-REINSP') && (checkInspectionResult('PL-OTHER', 'Pending') || checkInspectionResult('PL-OTHER', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>OTHER Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'PL-FINAL', 'PL-FINAL-REINSP') && (checkInspectionResult('PL-REINSP', 'Pending') || checkInspectionResult('PL-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>REINSP Re-inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_PLUM;
}

if (matches(inspType, 'EE-FINAL', 'EE-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_ELEC
	{
		if ((checkInspectionResult('EE-ROUGH IN', 'Pending') || checkInspectionResult('EE-ROUGH IN', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ROUGH IN Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('EE-UNDER SLAB', 'Pending') || checkInspectionResult('EE-UNDER SLAB', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>UNDER SLAB Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('EE-TEMPORARY SAW SERVICE', 'Pending') || checkInspectionResult('EE-TEMPORARY SAW SERVICE', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>TEMPORARY SAW SERVICE Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('EE-ABOVE CEILING', 'Pending') || checkInspectionResult('EE-ABOVE CEILING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ABOVE CEILING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('EE-REINSP', 'Pending') || checkInspectionResult('EE-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>REINSP Inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_ELEC;
}

if (matches(inspType, 'HO-FINAL', 'HO-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_HOOD
	{
		if (matches(inspType, 'HO-FINAL', 'HO-FINAL-REINSP') && (checkInspectionResult('HO-ROUGH IN', 'Pending') || checkInspectionResult('HO-ROUGH IN', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ROUGH IN Inspection is not approved.<br><br>");
			cancel = true;
		}

		// DISABLED: ES_IRSB_HOOD:2
		//if (matches(inspType,'HO-FINAL','HO-FINAL-REINSP') && (checkInspectionResult('HO-DUCT WRAP','Pending') || checkInspectionResult('HO-DUCT WRAP','Scheduled'))) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't result Final:</b></font><br><br>DUCT WRAP Inspection is not approved.<br><br>");
		//	cancel = true;
		//	}

		// DISABLED: ES_IRSB_HOOD:3
		//if (matches(inspType,'HO-FINAL','HO-FINAL-REINSP') && (checkInspectionResult('HO-LIGHT TEST','Pending') || checkInspectionResult('HO-LIGHT TEST','Scheduled'))) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't result Final:</b></font><br><br>LIGHT TEST Inspection is not approved.<br><br>");
		//	cancel = true;
		//	}

		// DISABLED: ES_IRSB_HOOD:4
		//if (matches(inspType,'HO-FINAL','HO-FINAL-REINSP') && (checkInspectionResult('HO-SMOKE TEST','Pending') || checkInspectionResult('HO-SMOKE TEST','Scheduled'))) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't result Final:</b></font><br><br>SMOKE TEST Inspection is not approved.<br><br>");
		//	cancel = true;
		//	}

		// DISABLED: ES_IRSB_HOOD:5
		//if (matches(inspType,'HO-FINAL','HO-FINAL-REINSP') && (checkInspectionResult('HO-REINSP','Pending') || checkInspectionResult('HO-REINSP','Scheduled'))) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't result Final:</b></font><br><br>REINSP Re-inspection is not approved.<br><br>");
		//	cancel = true;
		//	}

	}
	//end replaced branch: ES_IRSB_HOOD;
}

if (matches(inspType, 'RE-FINAL', 'RE-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_REFR
	{
		if (matches(inspType, 'RE-FINAL', 'RE-FINAL-REINSP') && (checkInspectionResult('RE-ROUGH IN', 'Pending') || checkInspectionResult('RE-ROUGH IN', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ROUGH IN Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'RE-FINAL', 'RE-FINAL-REINSP') && (checkInspectionResult('RE-ABOVE CEILING', 'Pending') || checkInspectionResult('RE-ABOVE CEILING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ABOVE CEILING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'RE-FINAL', 'RE-FINAL-REINSP') && (checkInspectionResult('RE-OTHER', 'Pending') || checkInspectionResult('RE-OTHER', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>OTHER Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'RE-FINAL', 'RE-FINAL-REINSP') && (checkInspectionResult('RE-REINSP', 'Pending') || checkInspectionResult('RE-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>REINSP Inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_REFR;
}

if (matches(inspType, 'GP-FINAL', 'GP-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_GASP
	{
		if (matches(inspType, 'GP-FINAL', 'GP-FINAL-REINSP') && (checkInspectionResult('GP-ROUGH IN', 'Pending') || checkInspectionResult('GP-ROUGH IN', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ROUGH IN Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'GP-FINAL', 'GP-FINAL-REINSP') && (checkInspectionResult('GP-REINSP', 'Pending') || checkInspectionResult('GP-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>REINSP Re-inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_GASP;
}

if (matches(inspType, 'FP-FINAL') && appMatch('Permits/Fire/Construction/Fire Prevention') && matches(inspResult, 'Approved')) {

	//start replaced branch: ES_GET_FIRE_SIBLINGS
	{
		pCapId = getParent();
		capIdSave = capId;
		capId = pCapId;
		comment('pCapId = ' + pCapId);
		if (pCapId) {
			childrenCapId = getChildren('Permits/Fire/*/*', pCapId);
		}

		if (childrenCapId) {
			for (eachchild in childrenCapId)
				//start replaced branch: ES_CHECK_FOR_OPEN_FIRE_CHILD
			{
				eachChildCapId = childrenCapId[eachchild];
				cCapObj = aa.cap.getCap(eachChildCapId);
				cCap = cCapObj.getOutput();
				cCapId = cCap.getCapID();
				cStatus = cCap.getCapStatus();
				cCapType = cCap.getCapType();
				cCapIDString = cCapId.getCustomID();
				if (cStatus != 'Finaled' && cStatus != 'Closed' && cStatus != 'Expired' && cStatus != 'Revoked' && cCapType != 'Permits/Fire/Construction/Fire Prevention') {
					showMessage = true;
					comment("<font size=small><b>Can't result Final:</b></font><br><br>A Child/Sibling Fire Permit, '+cCapIDString +' is still Active.<br><br>");
					cancel = true;
				}

			}
			//end replaced branch: ES_CHECK_FOR_OPEN_FIRE_CHILD;
		}

		capId = capIdSave;

	}
	//end replaced branch: ES_GET_FIRE_SIBLINGS;
}

if (matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_CON
	{
		if (matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') && (checkInspectionResult('FP-ROUGH IN', 'Pending') || checkInspectionResult('FP-ROUGH IN', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ROUGH IN Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') && (checkInspectionResult('FP-ACCEPTANCE TEST', 'Pending') || checkInspectionResult('FP-ACCEPTANCE TEST', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ACCEPTANCE TEST Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') && (checkInspectionResult('FP-ABOVE CEILING', 'Pending') || checkInspectionResult('FP-ABOVE CEILING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ABOVE CEILING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') && (checkInspectionResult('FP-FIRE LINE', 'Pending') || checkInspectionResult('FP-FIRE LINE', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FIRE LINE Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') && (checkInspectionResult('FP-REINSP', 'Pending') || checkInspectionResult('FP-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>REINSP Inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_CON;
}

if (matches(inspGroup, 'F_OPE') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_OPE
	{
		if (inspType == 'OPE-FINAL' && (checkInspectionResult('OPE-SITE', 'Pending') || checkInspectionResult('OPE-SITE', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SITE Inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_OPE;
}

if (matches(inspType, 'MH-FINAL', 'MH-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_MH
	{
		if (matches(inspType, 'MH-FINAL', 'MH-FINAL-REINSP') && (checkInspectionResult('MH-FOUNDATION', 'Pending') || checkInspectionResult('MH-FOUNDATION', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FOUNDATION Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'MH-FINAL', 'MH-FINAL-REINSP') && (checkInspectionResult('MH-FOOTING', 'Pending') || checkInspectionResult('MH-FOOTING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FOOTING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'MH-FINAL', 'MH-FINAL-REINSP') && (checkInspectionResult('MH-MARRIAGE', 'Pending') || checkInspectionResult('MH-MARRIAGE WALL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>MARRIAGE WALL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'MH-FINAL', 'MH-FINAL-REINSP') && (checkInspectionResult('MH-REINSP', 'Pending') || checkInspectionResult('MH-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>REINSP Re-inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_MH;
}

if (matches(inspGroup, 'O_FC', 'O_OCC', 'TU', 'SIGN', 'SITE', 'ABC', 'TCO', 'MULTI') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_FF
	{
		if (matches(inspType, 'FINAL FINAL') && (checkInspectionResult('SAFETY', 'Pending') || checkInspectionResult('SAFETY', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SAFETY Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL') && (checkInspectionResult('BUILDING SAFETY', 'Pending') || checkInspectionResult('BUILDING SAFETY', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>BUILDING SAFETY Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL') && (checkInspectionResult('FIRE MARSHAL', 'Pending') || checkInspectionResult('FIRE MARSHAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FIRE MARSHAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL') && (checkInspectionResult('SI-CONTRACTOR CONFERENCE', 'Pending') || checkInspectionResult('SI-CONTRACTOR CONFERENCE', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SI-CONTRACTOR CONFERENCE Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL') && (checkInspectionResult('SI-OTHER', 'Pending') || checkInspectionResult('SI-OTHER', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SI-OTHER Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL') && (checkInspectionResult('SI-FINAL', 'Pending') || checkInspectionResult('SI-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SI-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('EE-FINAL', 'Pending') || checkInspectionResult('EE-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>EE-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('ME-FINAL', 'Pending') || checkInspectionResult('ME-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ME-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('PL_FINAL', 'Pending') || checkInspectionResult('PL-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>PL-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('GP-FINAL', 'Pending') || checkInspectionResult('GP-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>GP-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('FP-FINAL', 'Pending') || checkInspectionResult('FP-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FP-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('GR-FINAL', 'Pending') || checkInspectionResult('GR-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>GR-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('SW-FINAL', 'Pending') || checkInspectionResult('SW-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SW-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('DR-FINAL', 'Pending') || checkInspectionResult('DR-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>DR-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('SID-FINAL', 'Pending') || checkInspectionResult('SID-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SID-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('ZO-FINAL', 'Pending') || checkInspectionResult('ZO-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ZO-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (matches(inspType, 'FINAL FINAL', 'BU-FINAL FINAL') && (checkInspectionResult('BU-FINAL', 'Pending') || checkInspectionResult('BU-FINAL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>BU-FINAL Inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_FF;
}

if (matches(inspType, 'ZO-FINAL') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_ZO
	{
		if (inspType == 'ZO-FINAL' && (checkInspectionResult('ZO-SITE LIGHTING', 'Pending') || checkInspectionResult('ZO-SITE LIGHTING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SITE LIGHTING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'ZO-FINAL' && (checkInspectionResult('ZO-LANDSCAPING', 'Pending') || checkInspectionResult('ZO-LANDSCAPING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>LANDSCAPING Inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_ZO;
}

if (matches(inspType, 'GR-FINAL') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_GR
	{
		if (inspType == 'GR-FINAL' && (checkInspectionResult('GR-PRELIMINARY', 'Pending') || checkInspectionResult('GR-PRELIMINARY', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>GR-PRELIMINARY Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'GR-FINAL' && (checkInspectionResult('GR-ESC REPORT', 'Pending') || checkInspectionResult('GR-ESC REPORT', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ESC REPORT is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_GR;
}

if (matches(inspType, 'SW-FINAL') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_SW
	{
		// DISABLED: ES_IRSB_SW:1
		//if (inspType == 'SW-FINAL' && (checkInspectionResult('SW-ROUTINE','Pending') || checkInspectionResult('SW-ROUTINE','Scheduled'))) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't result Final:</b></font><br><br>ROUTINE Inspection is not approved.<br><br>");
		//	cancel = true;
		//	}

	}
	//end replaced branch: ES_IRSB_SW;
}

if (matches(inspType, 'DR-FINAL') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_DR
	{
		if (checkInspectionResult('DR-PRELIMINARY', 'Pending') && checkInspectionResult('DR-PRELIMINARY', 'Scheduled')) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>PRELIMINARY Inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_DR;
}

if (matches(inspType, 'SID-FINAL') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_SID
	{
		if (inspType == 'SID-FINAL' && (checkInspectionResult('SID-PRELIMINARY', 'Pending') || checkInspectionResult('SID-PRELIMINARY', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>PRELIMINARY Inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_SID;
}

if (matches(inspType, 'FL-FINAL') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_FLOOD
	{
		if (inspType == 'FL-FINAL' && (checkInspectionResult('FL-FINISH FLOOR ELEVATION', 'Pending') || checkInspectionResult('FL-FINISH FLOOR ELEVATION', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FINISH FLOOR ELEVATION Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'FL-FINAL' && (checkInspectionResult('FL-OTHER', 'Pending') || checkInspectionResult('FL-OTHER', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>OTHER Inspection is not approved.<br><br>");
			cancel = true;
		}

		if (inspType == 'FL-FINAL' && (checkInspectionResult('FL-FOUNDATION', 'Pending') || checkInspectionResult('FL-FOUNDATION', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FOUNDATION Inspection is not approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_FLOOD;
}

if (matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_GET_CHILDREN_TRADEFINALS
	{
		childrenCapId = getChildren('Permits/*/Trade/*', capId);
		if (childrenCapId) {
			for (eachchild in childrenCapId)
				//start replaced branch: ES_CHECK_FOR_OPEN_TRADECHILD
			{
				eachChildCapId = childrenCapId[eachchild];
				cCapObj = aa.cap.getCap(eachChildCapId);
				cCap = cCapObj.getOutput();
				cCapId = cCap.getCapID();
				cStatus = cCap.getCapStatus();
				cCapType = cCap.getCapType(); ;
				comment('The Child Status is: ' + cStatus);
				comment('The Child Type is: ' + cCapType);
				cCapIDString = cCapId.getCustomID();
				if (cStatus != 'Finaled' && cStatus != 'Closed' && cStatus != 'Revoked' && cStatus != 'Expired' && cStatus != 'CO Issued' && cStatus != 'CC Issued' && cStatus != 'Active') {
					showMessage = true;
					comment("<font size=small><b>Cannot result Building Final until all Trade permits are closed:</b></font><br><br>A TRADE Permit, '+capIDString+' is still Open.<br><br>");
					cancel = true;
				}

			}
			//end replaced branch: ES_CHECK_FOR_OPEN_TRADECHILD;
		}

	}
	//end replaced branch: ES_GET_CHILDREN_TRADEFINALS;
}

if (matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP') && matches(inspResult, 'Approved', 'Approved with Conditions')) {

	//start replaced branch: ES_IRSB_CNEW
	{
		if ((checkInspectionResult('BU-FOOTING', 'Pending') || checkInspectionResult('BU-FOOTING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FOOTING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-SLAB', 'Pending') || checkInspectionResult('BU-SLAB', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SLAB Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-CAST IN-PLACE', 'Pending') || checkInspectionResult('BU-CAST IN-PLACE', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>CAST IN-PLACE Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-FOUNDATION', 'Pending') || checkInspectionResult('BU-FOUNDATION', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FOUNDATION Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-FRAMING', 'Pending') || checkInspectionResult('BU-FRAMING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FRAMING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-INSULATION ROOF', 'Pending') || checkInspectionResult('BU-INSULATION ROOF', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>INSULATION ROOF Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-INSULATION FLOOR', 'Pending') || checkInspectionResult('BU-INSULATION FLOOR', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>INSULATION FLOOR Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-INSULATION WALL', 'Pending') || checkInspectionResult('BU-INSULATION WALL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>INSULATION WALL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-RATED CEILING', 'Pending') || checkInspectionResult('BU-RATED CEILING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>RATED CEILING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-RATED FLOOR', 'Pending') || checkInspectionResult('BU-RATED FLOOR', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>RATED FLOOR Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-RATED WALL', 'Pending') || checkInspectionResult('BU-RATED WALL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>RATED WALL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-RATED SHAFT', 'Pending') || checkInspectionResult('BU-RATED SHAFT', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>RATED SHAFT Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-ABOVE CEILING', 'Pending') || checkInspectionResult('BU-ABOVE CEILING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>ABOVE CEILING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-SITE', 'Pending') || checkInspectionResult('BU-SITE', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SITE Inspection is not approved.<br><br>");
			cancel = true;
		}

		// DISABLED: ES_IRSB_CNEW:15
		//if ((checkInspectionResult('BU-CONTRACTOR CONFERENCE','Pending') || checkInspectionResult('BU-CONTRACTOR CONFERENCE','Scheduled'))) {
		//	showMessage = true;
		//	comment("<font size=small><b>Can't result Final:</b></font><br><br>CONTRACTOR CONFERENCE Inspection is not approved.<br><br>");
		//	cancel = true;
		//	}

		if ((checkInspectionResult('BU-OTHER', 'Pending') || checkInspectionResult('BU-OTHER', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>OTHER Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-INSULATION', 'Pending') || checkInspectionResult('BU-INSULATION', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>INSULATION Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-MARRIAGE WALL', 'Pending') || checkInspectionResult('BU-MARRIAGE WALL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>MARRIAGE WALL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-SITE ACCESSIBILITY', 'Pending') || checkInspectionResult('BU-SITE ACCESSIBILITY', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SITE ACCESSIBILITY Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-SITE ACCESS', 'Pending') || checkInspectionResult('BU-SITE ACCESS', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SITE ACCESS Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-SITE SAFETY', 'Pending') || checkInspectionResult('BU-SITE SAFETY', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>SITE SAFETY Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-CMU', 'Pending') || checkInspectionResult('BU-CMU', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>CMU Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-SETBACK', 'Pending') || checkInspectionResult('BU-SETBACK', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>BU-SETBACK Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-REINSP', 'Pending') || checkInspectionResult('BU-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>REINSP Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-FIRE STOPPING', 'Pending') || checkInspectionResult('FIRE STOPPING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>FIRE STOPPING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-RATED FLOOR/CEILING', 'Pending') || checkInspectionResult('BU-RATED FLOOR/CEILING', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>RATED FLOOR/CEILING Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('BU-RETAINING WALL', 'Pending') || checkInspectionResult('BU-RETAINING WALL', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>RETAINING WALL Inspection is not approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('FP-FINAL', 'Pending') || checkInspectionResult('FP-FINAL-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>TRADE FINALS must be approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('EE-FINAL', 'Pending') || checkInspectionResult('EE-FINAL-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>TRADE FINALS must be approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('ME-FINAL', 'Pending') || checkInspectionResult('ME-FINAL-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>TRADE FINALS must be approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('PL-FINAL', 'Pending') || checkInspectionResult('PL-FINAL-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>TRADE FINALS must be approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('RE-FINAL', 'Pending') || checkInspectionResult('RE-FINAL-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>TRADE FINALS must be approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('GP-FINAL', 'Pending') || checkInspectionResult('GP-FINAL-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>TRADE FINALS must be approved.<br><br>");
			cancel = true;
		}

		if ((checkInspectionResult('HO-FINAL', 'Pending') || checkInspectionResult('HO-FINAL-REINSP', 'Scheduled'))) {
			showMessage = true;
			comment("<font size=small><b>Can't result Final:</b></font><br><br>TRADE FINALS must be approved.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_IRSB_CNEW;
}

if (matches(inspType, 'BU-FINAL FINAL', 'FINAL FINAL')) {

	//start replaced branch: ES_GET_CHILDREN_FINAL
	{
		childrenCapId = getChildren('Permits/*/*/*', capId);
		if (childrenCapId) {
			for (eachchild in childrenCapId)
				//start replaced branch: ES_CHECK_FOR_OPEN_CHILD
			{
				eachChildCapId = childrenCapId[eachchild];
				cCapObj = aa.cap.getCap(eachChildCapId);
				cCap = cCapObj.getOutput();
				cCapId = cCap.getCapID();
				cStatus = cCap.getCapStatus();
				cCapType = cCap.getCapType(); ;
				comment('The Child Status is: ' + cStatus);
				comment('The Child Type is: ' + cCapType);
				cCapIDString = cCapId.getCustomID();
				if (cStatus != 'Finaled' && cStatus != 'Closed' && cStatus != 'Revoked' && cStatus != 'Expired' && cStatus != 'CO Issued' && cStatus != 'CC Issued' && cStatus != 'Active') {
					showMessage = true;
					comment("<font size=small><b>Can't result Final:</b></font><br><br>A Child Permit, '+cCapId+' is still Open.<br><br>");
					cancel = true;
				}

			}
			//end replaced branch: ES_CHECK_FOR_OPEN_CHILD;
		}

	}
	//end replaced branch: ES_GET_CHILDREN_FINAL;
}

if (matches(inspType, 'BU-FINAL FINAL', 'FINAL FINAL') && checkInspectionResult('BU-FINAL', 'Pending') && checkInspectionResult('BU-FINAL', 'Scheduled')) {
	showMessage = true;
	comment("<font size=small><b>Can't result Final Final:</b></font><br><br>Final Inspection is not approved.<br><br>");
	cancel = true;
}
