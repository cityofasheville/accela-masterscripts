function WORKFLOWTASK_UA_ADD_INSP() {

	if (appMatch('Permits/*/Trade/*') && !appMatch('Permits/*/*/Multi-Trade') && !isScheduled('EE-FINAL') && !isScheduled('ME-FINAL') && !isScheduled('PL-FINAL') && !isScheduled('GP-FINAL') && !isScheduled('RE-FINAL') && !isScheduled('HO-FINAL')) {
		createPendingInspFromReqd();
	}

	if (appMatch('Permits/*/Tenant Occupancy/*')) {
		createPendingInspection('O_OCC', 'FP-FIRE MARSHAL');
	}

	if ((appMatch('Permits/Over The Counter/Foster Care/NA') || appMatch('Permits/Residential/Home Occupation/Day Care'))) {
		createPendingInspection('O_FC', 'BU-SAFETY');
	}

	if (appMatch('Permits/Fire/Occupational/NA')) {
		createPendingInspection('F_OPE', 'OPE-FINAL');
	}

	if (appMatch('Permits/Fire/Construction/*') && !isScheduled('FP-FINAL')) {
		createPendingInspFromReqd();
	}

	if (appMatch('Permits/Sign/Face Change/NA')) {
		scheduleInspectDate('ZO-FINAL', dateAdd(null, 45), null, null, 'Scheduled by Script.');
	}

	if (appMatch('Permits/Sign/Temporary/NA')) {
		scheduleInspectDate('ZO-EXPIRATION CHECK', dateAdd(null, 45), null, null, 'Scheduled by Script - Please review permit validity and update record status.');
	}

	if (appMatch('Permits/Sign/A-Frame/NA')) {
		scheduleInspectDate('ZO-EXPIRATION CHECK', dateAdd(null, 330), null, null, 'Scheduled by Script - Please review permit validity and update record status.');
	}

	if (appMatch('Permits/Sign/Stand Alone/*')) {

		//start replaced branch: ES_ADD_PEND_SIGN
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('SIGN', 'BU-FINAL');
			}

			// if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
			// 	createPendingInspection('SIGN', 'EE-ROUGH IN');
			// }

			// if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
			// 	createPendingInspection('SIGN', 'EE-FINAL');
			// }
			
			// 7/24/2019 only add electrical inspections if needed
			if ( AInfo['Issue Electrical Permit To'] != 'N/A' ) {
				createPendingInspection('SIGN', 'EE-FINAL');
				createPendingInspection('SIGN', 'EE-ROUGH IN');
			}

			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
				createPendingInspection('SIGN', 'FP-FINAL');
			}

			if (!checkInspectionResult('SI-FINAL', 'Pending')) {
				createPendingInspection('SIGN', 'SI-FINAL');
			}

			if (!checkInspectionResult('SI-FINAL', 'Scheduled')) {
				scheduleInspectDate('ZO-EXPIRATION CHECK', dateAdd(null, 180), null, null, 'Scheduled by Script - Please review permit validity and update record status.');
			}

		}
		//end replaced branch: ES_ADD_PEND_SIGN;
	}

	if (appMatch('Permits/*/*/Deck')) {

		//start replaced branch: ES_ADD_PEND_DECK
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('DECK', 'BU-FOOTING');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('DECK', 'BU-FRAMING');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('DECK', 'BU-FINAL');
			}

			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
				createPendingInspection('F_CON', 'FP-FINAL');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('C_ELEC', 'EE-ROUGH IN');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('C_ELEC', 'EE-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_DECK;
	}

	if (appMatch('Permits/*/*/Retaining Wall')) {

		//start replaced branch: ES_ADD_PEND_RETWALL
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('RET WALL', 'BU-FOOTING');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('RET WALL', 'BU-RETAINING WALL');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('RET WALL', 'BU-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_RETWALL;
	}

	if (appMatch('Permits/*/*/Swimming Pool')) {

		//start replaced branch: ES_ADD_PEND_POOL
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('POOL', 'BU-FINAL');
			}

			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
				createPendingInspection('F_CON', 'FP-FINAL');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('POOL', 'EE-ROUGH IN');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('POOL', 'EE-POOL BONDING');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('POOL', 'EE-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_POOL;
	}

	if (appMatch('Permits/*/*/Solar Array')) {

		//start replaced branch: ES_ADD_PEND_SOLAR
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('SOLAR', 'BU-FINAL');
			}

			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
				createPendingInspection('F_CON', 'FP-ROUGH IN');
			}

			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
				createPendingInspection('F_CON', 'FP-FINAL');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('SOLAR', 'EE-ROUGH IN');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('SOLAR', 'EE-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_SOLAR;
	}

	if (appMatch('Permits/Commercial/Construction Trailer/NA')) {

		//start replaced branch: ES_ADD_PEND_CONTRAILER
		{
			if (!checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_TRAILER', 'BU-FINAL');
			}

			if (!checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_TRAILER', 'BU-SITE SAFETY');
			}

			if (!checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_TRAILER', 'EE-FINAL');
			}

			if (!checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_TRAILER', 'PL-FINAL');
			}

			if (!checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_TRAILER', 'FP-SITE ACCESS');
			}

		}
		//end replaced branch: ES_ADD_PEND_CONTRAILER;
	}

	if ((appMatch('Permits/*/*/Telecom Colocation') || appMatch('Permits/*/*/Telecom Tower'))) {

		//start replaced branch: ES_ADD_PEND_TELECOM
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('BU&EE', 'BU-FINAL');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('BU&EE', 'EE-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_TELECOM;
	}

	if (appMatch('Permits/*/Demolition/*') && AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
		createPendingInspection('DEMO', 'BU-FINAL');
	}

	if (!appMatch('Permits/*/*/Landlord Improvements') && !appMatch('Permits/*/*/Upfit First Occupancy') && !appMatch('Permits/*/*/Modular') && (appMatch('Permits/Commercial/New Building/*') || appMatch('Permits/Commercial/Accessory Structure/Other') || appMatch('Permits/Commercial/Existing Building/Alterations w Addition') || appMatch('Permits/Commercial/Existing Building/Addition'))) {

		//start replaced branch: ES_ADD_PEND_MASTER
		{
			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'FP-ROUGH IN');
			}

			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'FP-FINAL');
			}

			if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'GP-ROUGH IN');
			}

			if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'GP-FINAL');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'PL-ROUGH IN');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'PL-FINAL');
			}

			if (AInfo['RE Permit'] != 'NA' && AInfo['RE Permit'] != 'TBD' && !checkInspectionResult('RE-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'RE-ROUGH IN');
			}

			if (AInfo['RE Permit'] != 'NA' && AInfo['RE Permit'] != 'TBD' && !checkInspectionResult('RE-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'RE-FINAL');
			}

			if (AInfo['HO Permit'] != 'NA' && AInfo['HO Permit'] != 'TBD' && !checkInspectionResult('HO-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'HO-ROUGH IN');
			}

			if (AInfo['HO Permit'] != 'NA' && AInfo['HO Permit'] != 'TBD' && !checkInspectionResult('HO-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'HO-SMOKE TEST');
			}

			if (AInfo['HO Permit'] != 'NA' && AInfo['HO Permit'] != 'TBD' && !checkInspectionResult('HO-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'HO-LIGHT TEST');
			}

			if (AInfo['HO Permit'] != 'NA' && AInfo['HO Permit'] != 'TBD' && !checkInspectionResult('HO-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'HO-FINAL');
			}

			if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'ME-ROUGH IN');
			}

			if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'ME-FINAL');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'EE-ROUGH IN');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'EE-FINAL');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'BU-FOOTING');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'BU-FOUNDATION');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'BU-FRAMING');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'BU-INSULATION');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'BU-SITE ACCESSIBILITY');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_MASTER', 'BU-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_MASTER;
	}

	if ((appMatch('Permits/Residential/New Building/*') || appMatch('Permits/Residential/Accessory Structure/Other') || appMatch('Permits/Residential/Existing Building/Alterations w Addition') || appMatch('Permits/Residential/Existing Building/Addition'))) {

		//start replaced branch: ES_ADD_PEND_RMASTER
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'BU-FOOTING');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'BU-FOUNDATION');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'BU-FRAMING');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'BU-INSULATION');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'BU-FINAL');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'EE-ROUGH IN');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'EE-FINAL');
			}

			if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'ME-ROUGH IN');
			}

			if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'ME-FINAL');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'PL-ROUGH IN');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'PL-FINAL');
			}

			if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'GP-ROUGH IN');
			}

			if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL', 'Pending')) {
				createPendingInspection('R_MASTER', 'GP-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_RMASTER;
	}

	if (appMatch('Permits/Commercial/*/Reroof') && AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
		createPendingInspection('C_ROOF', 'BU-FINAL');
	}

	if (appMatch('Permits/Residential/*/Reroof') && AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
		createPendingInspection('R_ROOF', 'BU-FINAL');
	}

	if ((appMatch('Permits/Commercial/*/Alterations') || appMatch('Permits/Commercial/*/Landlord Improvements') || appMatch('Permits/*/*/Upfit First Occupancy'))) {

		//start replaced branch: ES_ADD_PEND_C-ALTER
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'BU-FINAL');
			}

			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'FP-ROUGH IN');
			}

			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'FP-FINAL');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'EE-ROUGH IN');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'EE-FINAL');
			}

			if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'ME-ROUGH IN');
			}

			if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'ME-FINAL');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'PL-ROUGH IN');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'PL-FINAL');
			}

			if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'GP-ROUGH IN');
			}

			if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'GP-FINAL');
			}

			if (AInfo['HO Permit'] != 'NA' && AInfo['HO Permit'] != 'TBD' && !checkInspectionResult('HO-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'HO-ROUGH IN');
			}

			if (AInfo['HO Permit'] != 'NA' && AInfo['HO Permit'] != 'TBD' && !checkInspectionResult('HO-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'HO-SMOKE TEST');
			}

			if (AInfo['HO Permit'] != 'NA' && AInfo['HO Permit'] != 'TBD' && !checkInspectionResult('HO-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'HO-LIGHT TEST');
			}

			if (AInfo['HO Permit'] != 'NA' && AInfo['HO Permit'] != 'TBD' && !checkInspectionResult('HO-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'HO-DUCT WRAP');
			}

			if (AInfo['HO Permit'] != 'NA' && AInfo['HO Permit'] != 'TBD' && !checkInspectionResult('HO-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'HO-FINAL');
			}

			if (AInfo['RE Permit'] != 'NA' && AInfo['RE Permit'] != 'TBD' && !checkInspectionResult('RE-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'RE-ROUGH IN');
			}

			if (AInfo['RE Permit'] != 'NA' && AInfo['RE Permit'] != 'TBD' && !checkInspectionResult('RE-FINAL', 'Pending')) {
				createPendingInspection('C_ALTER', 'RE-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_C-ALTER;
	}

	if (appMatch('Permits/Residential/*/Alterations')) {

		//start replaced branch: ES_ADD_PEND_R-ALTER
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('R_ALTER', 'BU-FINAL');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('R_ALTER', 'EE-ROUGH IN');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('R_ALTER', 'EE-FINAL');
			}

			if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL', 'Pending')) {
				createPendingInspection('R_ALTER', 'ME-ROUGH IN');
			}

			if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL', 'Pending')) {
				createPendingInspection('R_ALTER', 'ME-FINAL');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('R_ALTER', 'PL-ROUGH IN');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('R_ALTER', 'PL-FINAL');
			}

			if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL', 'Pending')) {
				createPendingInspection('R_ALTER', 'GP-ROUGH IN');
			}

			if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL', 'Pending')) {
				createPendingInspection('R_ALTER', 'GP-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_R-ALTER;
	}

	if (appMatch('Permits/*/*/Repair-Replacement')) {

		//replaced branch(ES_ADD_PEND_ACA_REPAIR)
		ES_ADD_PEND_ACA_REPAIR();
	}

	if ((appMatch('Permits/*/New Building /Modular') || appMatch('Permits/*/New Building /Modular SFD') || appMatch('Permits/*/New Building /Modular Duplex') || appMatch('Permits/Residential/Manufactured Home/*'))) {

		//start replaced branch: ES_ADD_PEND_MFGHOME
		{
			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'BU-FINAL');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending') && appMatch('Permits/Commercial/*/*')) {
				createPendingInspection('MOD-MFG', 'BU-SITE ACCESSIBILITY');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'BU-FOOTING');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'BU-FOUNDATION');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'BU-INSULATION');
			}

			if (AInfo['BU Permit'] != 'NA' && AInfo['BU Permit'] != 'TBD' && !checkInspectionResult('BU-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'BU-MARRIAGE WALL');
			}

			if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'EE-FINAL');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && (appMatch('Permits/*/New Building/*') || appMatch('Permits/Residentail/Manufactured Home/NA')) && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'PL-WATER LINE');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && (appMatch('Permits/*/New Building/*') || appMatch('Permits/Residentail/Manufactured Home/NA')) && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'PL-SEWER LINE');
			}

			if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'PL-FINAL');
			}

			if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'ME-FINAL');
			}

			if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL', 'Pending')) {
				createPendingInspection('MOD-MFG', 'GP-FINAL');
			}

			if (AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending') && appMatch('Permits/Commercial/*/*')) {
				createPendingInspection('F_CON', 'FP-FINAL');
			}

		}
		//end replaced branch: ES_ADD_PEND_MFGHOME;
	}

	if (appMatch('Permits/Commercial/Annual Maintenance/NA')) {

		//start replaced branch: ES_ADD_PEND_QUARTERLY
		{
			scheduleInspectDate('QUARTERLY INSPECTION', dateAdd(null, 91), null, null, 'Scheduled by Script - Make contact with applicant to confirm');
			scheduleInspectDate('QUARTERLY INSPECTION', dateAdd(null, 182), null, null, 'Scheduled by Script - Make contact with applicant to confirm');
			scheduleInspectDate('QUARTERLY INSPECTION', dateAdd(null, 273), null, null, 'Scheduled by Script - Make contact with applicant to confirm');
			scheduleInspectDate('BU-FINAL', dateAdd(null, 357), null, null, 'Scheduled by Script - Make contact with applicant to confirm - expires DEC 31');

		}
		//end replaced branch: ES_ADD_PEND_QUARTERLY;
	}

	if ((appMatch('Permits/*/New/*') || appMatch('Permits/*/Remodel/*') || appMatch('Permits/*/Addition/*') || appMatch('Permits/*/Reroof/*') || appMatch('Permits/*/Emergency Repairs/*')) && !isScheduled('BU-FINAL')) {
		createPendingInspFromReqd();
	}

	if (appMatch('*/*/*/Multi-Trade') && AInfo['Electrical Permit'] == 'Yes') {
		createPendingInspection('MULTI', 'EE-FINAL');
	}

	if (appMatch('*/*/*/Multi-Trade') && AInfo['Mechanical Permit'] == 'Yes') {
		createPendingInspection('MULTI', 'ME-FINAL');
	}

	if (appMatch('*/*/*/Multi-Trade') && AInfo['Gas Piping Permit'] == 'Yes') {
		createPendingInspection('MULTI', 'GP-FINAL');
	}

	if (appMatch('*/*/*/Multi-Trade') && AInfo['Plumbing Permit'] == 'Yes') {
		createPendingInspection('MULTI', 'PL-FINAL');
	}

	if (appMatch('*/*/*/Multi-Trade')) {
		createPendingInspection('MULTI', 'FINAL FINAL');
	}

	if (appMatch('Permits/Commercial/*/Reroof') && AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
		createPendingInspection('C_ROOF', 'FP-FINAL');
	}

	if (appMatch('Permits/Commercial/*/Reroof') && AInfo['FP Permit'] != 'NA' && AInfo['FP Permit'] != 'TBD' && !checkInspectionResult('FP-FINAL', 'Pending')) {
		createPendingInspection('C_ROOF', 'FP-SITE SAFETY');
	}

	// DISABLED: WORKFLOWTASK_UA_ADD_INSP:35
	//if (appMatch('Permits/Sign/Face Change/NA')) {
	//	scheduleInspectDate('FP-FIREHOUSE UPDATE',dateAdd(null,7),null,null,'Scheduled by Script. Please verify application information corresponds with FireHouse. Tenant may have changed.');
	//	}

}
