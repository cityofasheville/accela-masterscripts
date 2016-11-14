function ES_SITE_WF_UPD_AFTER() {

	if (matches(wfStatus, 'Issue', 'Issue Partial', 'Reissue') && appMatch('Permits/Stormwater/Flood Plain Development/NA')) {
		createPendingInspection('FLOOD', 'FL-FINAL');
	}

	if (matches(wfStatus, 'Issue', 'Issue Partial', 'Reissue') && appMatch('Permits/Residential/Site Work/NA')) {

		//start replaced branch: ES_ADD_PEND_RES-SITE
		{
			if (AInfo['Issue Grading Permit To'] != 'NA' && !checkInspectionResult('GR-PRELIMINARY', 'Pending')) {
				createPendingInspection('RES_SITE', 'GR-PRELIMINARY');
			}

			if (AInfo['Issue Grading Permit To'] != 'NA' && !checkInspectionResult('GR-ROUTINE', 'Pending')) {
				createPendingInspection('RES_SITE', 'GR-ROUTINE');
			}

			if (AInfo['Issue Grading Permit To'] != 'NA' && !checkInspectionResult('GR-FINAL', 'Pending')) {
				createPendingInspection('RES_SITE', 'GR-FINAL');
			}

			if (AInfo['Issue Driveway Permit To'] != 'NA' && !checkInspectionResult('DR-PRELIMINARY', 'Pending')) {
				createPendingInspection('RES_SITE', 'DR-PRELIMINARY');
			}

			if (AInfo['Issue Driveway Permit To'] != 'NA' && !checkInspectionResult('DR-FINAL', 'Pending')) {
				createPendingInspection('RES_SITE', 'DR-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_RES-SITE;
	}

	if (matches(wfStatus, 'Issue', 'Issue Partial', 'Reissue') && (appMatch('Permits/Commercial/Site Work/NA') || appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*'))) {

		//start replaced branch: ES_ADD_PEND_SITE
		{
			if (AInfo['Issue Grading Permit To'] != 'NA' && !checkInspectionResult('GR-PRELIMINARY', 'Pending')) {
				createPendingInspection('SITE', 'GR-PRELIMINARY');
			}

			if (AInfo['Issue Grading Permit To'] != 'NA' && !checkInspectionResult('GR-ROUTINE', 'Pending')) {
				createPendingInspection('SITE', 'GR-ROUTINE');
			}

			if (AInfo['Issue Grading Permit To'] != 'NA' && !checkInspectionResult('GR-FINAL', 'Pending')) {
				createPendingInspection('SITE', 'GR-FINAL');
			}

			if (AInfo['Issue Driveway Permit To'] != 'NA' && !checkInspectionResult('DR-PRELIMINARY', 'Pending')) {
				createPendingInspection('SITE', 'DR-PRELIMINARY');
			}

			if (AInfo['Issue Driveway Permit To'] != 'NA' && !checkInspectionResult('DR-FINAL', 'Pending')) {
				createPendingInspection('SITE', 'DR-FINAL');
			}

			if (AInfo['Issue Stormwater Permit To'] != 'NA' && !checkInspectionResult('SW-PRELIMINARY', 'Pending')) {
				createPendingInspection('SITE', 'SW-PRELIMINARY');
			}

			if (AInfo['Issue Stormwater Permit To'] != 'NA' && !checkInspectionResult('SW-ROUTINE', 'Pending')) {
				createPendingInspection('SITE', 'SW-ROUTINE');
			}

			if (AInfo['Issue Stormwater Permit To'] != 'NA' && !checkInspectionResult('SW-FINAL', 'Pending')) {
				createPendingInspection('SITE', 'SW-FINAL');
			}

			if (AInfo['Issue Zoning Permit To'] != 'NA' && !checkInspectionResult('ZO-FINAL', 'Pending')) {
				createPendingInspection('SITE', 'ZO-FINAL');
			}

			if (AInfo['Issue Sidewalk Permit To'] != 'NA' && !checkInspectionResult('SID-PRELIMINARY', 'Pending')) {
				createPendingInspection('SITE', 'SID-PRELIMINARY');
			}

			if (AInfo['Issue Sidewalk Permit To'] != 'NA' && !checkInspectionResult('SID-FINAL', 'Pending')) {
				createPendingInspection('SITE', 'SID-FINAL');
			}

			if (AInfo['Issue Zoning Permit To'] != 'NA' && !checkInspectionResult('FP-SITE FINAL', 'Pending')) {
				createPendingInspection('SITE', 'FP-SITE FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_SITE;
	}

	if (wfTask == 'Grading' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {

		//start replaced branch: ES_ADD_CLOSEOUT_INSP
		{
			if (AInfo['ESC Report required?'] == 'Yes') {
				createPendingInspection('SITE', 'GR-ESC REPORT');
			}

			if (AInfo['Slope Stability Certificate'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'GR-SLOPE CERT');
			}

			if (AInfo['Mulch Acceptance Letter'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'GR-MULCH LETTER');
			}

			if (AInfo['Digital As-Built'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'SW-DIGITAL AS-BUILT');
			}

			//if (AInfo['Reproducible As-Built'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-REPRO AS-BUILT');
			//}

			//if (AInfo['Operations and Maintenance Agreement'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-O&M AGREEMENT');
			//}

			//if (AInfo['Certificate of Completion - Engineer'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-CC-ENG');
			//}

			//if (AInfo['Certificate of Completion - Owner/Developer'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-CC-OWNER');
			//}

			//if (AInfo['Certificate of Completion - Contractor'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-CC-CONTRACTOR');
			//}

			//if (AInfo['Alternate SW Acceptance Letter'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-ALT SW LETTER');
			//}

			//if (AInfo['Floodproof Certificate'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'FLOODPROOF CERTIFICATE');
			//}

			//if (AInfo['Post-Construction Elevation Certificate'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'POST-CONSTRUCTION ELEVATION CERTIFICATE');
			//}

			//if (AInfo['Post-Construction No-Rise Certificate'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'POST-CONSTRUCTION NO-RISE CERTIFICATE');
			//}

			//if (AInfo['Post-Construction LOMR/LOMA'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'POST-CONSTRUCTION LOMR/LOMA');
			//}

		}
		//end replaced branch: ES_ADD_CLOSEOUT_INSP;
	}

	if (wfTask == 'Stormwater' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {

		//start replaced branch: ES_ADD_CLOSEOUT_INSP
		{
			//if (AInfo['ESC Report required?'] == 'Yes') {
			//	createPendingInspection('SITE', 'GR-ESC REPORT');
			//}

			//if (AInfo['Slope Stability Certificate'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'GR-SLOPE CERT');
			//}

			//if (AInfo['Mulch Acceptance Letter'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'GR-MULCH LETTER');
			//}

			if (AInfo['Digital As-Built'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'SW-DIGITAL AS-BUILT');
			}

			if (AInfo['Reproducible As-Built'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'SW-REPRO AS-BUILT');
			}

			if (AInfo['Operations and Maintenance Agreement'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'SW-O&M AGREEMENT');
			}

			if (AInfo['Certificate of Completion - Engineer'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'SW-CC-ENG');
			}

			if (AInfo['Certificate of Completion - Owner/Developer'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'SW-CC-OWNER');
			}

			if (AInfo['Certificate of Completion - Contractor'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'SW-CC-CONTRACTOR');
			}

			if (AInfo['Alternate SW Acceptance Letter'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'SW-ALT SW LETTER');
			}

			//if (AInfo['Floodproof Certificate'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'FLOODPROOF CERTIFICATE');
			//}

			//if (AInfo['Post-Construction Elevation Certificate'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'POST-CONSTRUCTION ELEVATION CERTIFICATE');
			//}

			//if (AInfo['Post-Construction No-Rise Certificate'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'POST-CONSTRUCTION NO-RISE CERTIFICATE');
			//}

			//if (AInfo['Post-Construction LOMR/LOMA'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'POST-CONSTRUCTION LOMR/LOMA');
			//}

		}
		//end replaced branch: ES_ADD_CLOSEOUT_INSP;
	}

	if (matches(wfTask, 'Flood Review', 'Flood') && matches(wfStatus, 'Approved', 'Approved with Conditions')) {

		//start replaced branch: ES_ADD_CLOSEOUT_INSP
		{
			//if (AInfo['ESC Report required?'] == 'Yes') {
			//	createPendingInspection('SITE', 'GR-ESC REPORT');
			//}

			//if (AInfo['Slope Stability Certificate'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'GR-SLOPE CERT');
			//}

			//if (AInfo['Mulch Acceptance Letter'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'GR-MULCH LETTER');
			//}

			//if (AInfo['Digital As-Built'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-DIGITAL AS-BUILT');
			//}

			//if (AInfo['Reproducible As-Built'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-REPRO AS-BUILT');
			//}

			//if (AInfo['Operations and Maintenance Agreement'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-O&M AGREEMENT');
			//}

			//if (AInfo['Certificate of Completion - Engineer'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-CC-ENG');
			//}

			//if (AInfo['Certificate of Completion - Owner/Developer'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-CC-OWNER');
			//}

			//if (AInfo['Certificate of Completion - Contractor'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-CC-CONTRACTOR');
			//}

			//if (AInfo['Alternate SW Acceptance Letter'] == 'Yes') {
			//	createPendingInspection('GR-SW CLOSE', 'SW-ALT SW LETTER');
			//}

			if (AInfo['Floodproof Certificate'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'FLOODPROOF CERTIFICATE');
			}

			if (AInfo['Post-Construction Elevation Certificate'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'POST-CONSTRUCTION ELEVATION CERTIFICATE');
			}

			if (AInfo['Post-Construction No-Rise Certificate'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'POST-CONSTRUCTION NO-RISE CERTIFICATE');
			}

			if (AInfo['Post-Construction LOMR/LOMA'] == 'Yes') {
				createPendingInspection('GR-SW CLOSE', 'POST-CONSTRUCTION LOMR/LOMA');
			}

		}
		//end replaced branch: ES_ADD_CLOSEOUT_INSP;
	}

	if (wfTask == 'Grading' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		email('mclampett@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Grading Review Complete', 'The following grading permit, ' + capIDString + ' has been approved for this location, ' + CapAddress + ' . The permit will be issued when all other agency approvals are in place. Please begin monitoring the site for grading activities and erosion and sediment control.');
	}

	if (wfTask == 'Grading' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		email('dgibson@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Grading Review Complete', 'The following grading permit, ' + capIDString + ' has been approved for this location, ' + CapAddress + ' . The permit will be issued when all other agency approvals are in place. Please begin monitoring the site for grading activities and erosion and sediment control.');
	}

	if (wfTask == 'Grading' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		email('tshelton@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Grading Review Complete', 'The following grading permit, ' + capIDString + ' has been approved for this location, ' + CapAddress + ' . The permit will be issued when all other agency approvals are in place. Please begin monitoring the site for grading activities and erosion and sediment control.');
	}

	if (wfTask == 'Grading' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		email('hwledford@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Grading Review Complete', 'The following grading permit, ' + capIDString + ' has been approved for this location, ' + CapAddress + ' . The permit will be issued when all other agency approvals are in place. Please begin monitoring the site for grading activities and erosion and sediment control.');
	}

	if (matches(wfTask, 'Planning', 'Staff Level Site Plan Review', 'Final TRC', 'Technical Review') && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Disapproved', 'Partial Approval') && AInfo['Apply Steep Slope Fee?'] == 'Yes') {
		updateFee('STEEPSLOPE', 'PLN_LEVELI', 'FINAL', 1, 'Y');
	}

	if (wfTask == 'Flood' && matches(wfStatus, 'FPD Permit Required')) {
		newChildID = createChild('Permits', 'Stormwater', 'Flood Plain Development', 'NA', '');
		copyAppSpecific(newChildID);
		comment('New child app id = ' + newChildID);
		t1 = 'Permit ' + capIDString + ' requires a Flood Plain Development Permit';

		//replaced branch(ES_BUILD_WORKDESC_CONSTRUCTION)
		ES_BUILD_WORKDESC_CONSTRUCTION();
		updateAppStatus('Submittal Required', 'Initial Status', newChildID);
	}

	if (wfTask == 'Grading' && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Partial Approved') && AInfo['Pre-Con Meeting Required?'] == 'Yes') {
		addStdCondition('ENGINEERING REVIEW', 'Stormwater Pre-Con Meeting Required');
	}

	if (wfTask == 'Close Out Document Review' && matches(wfStatus, 'Complete') && AInfo['Create Stormwater O&M Record?'] == 'Yes') {
		newChildID = createChild('Permits', 'Stormwater', 'Operations & Maintenance', 'NA', '');
		copyAppSpecific(newChildID);
		comment('New child app id = ' + newChildID);
	}

	if (matches(wfTask, 'Construction', 'Inspections') && matches(wfStatus, 'Close Out Docs Received')) {
		email('mclampett@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Close Out Docs Received', 'Close out documents have been submitted for ' + capIDString + ' for location, ' + CapAddress + ' .  Please review and update Accela.');
	}

	if (matches(wfTask, 'Construction', 'Inspections') && matches(wfStatus, 'Close Out Docs Received')) {
		email('dgibson@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Close Out Docs Received', 'Close out documents have been submitted for ' + capIDString + ' for location, ' + CapAddress + ' .  Please review and update Accela.');
	}

	if (matches(wfTask, 'Construction', 'Inspections') && matches(wfStatus, 'Close Out Docs Received')) {
		email('tshelton@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Close Out Docs Received', 'Close out documents have been submitted for ' + capIDString + ' for location, ' + CapAddress + ' . Please review and update Accela.');
	}

	if (matches(wfTask, 'Construction', 'Inspections') && matches(wfStatus, 'Close Out Docs Received')) {
		email('hwledford@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Close Out Docs Received', 'Close out documents have been submitted for ' + capIDString + ' for location, ' + CapAddress + ' .  Please review and update Accela.');
	}

}
