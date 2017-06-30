// TODO:  repeated conditionals, consider refactoring

if (matches(inspResult, 'Approved')) {

	//start replaced branch: ES_SET_WF_FINAL_RELEASE
	{
		if ((appMatch('Permits/*/Accessory Structure/*') || appMatch('Permits/*/Demolition/*') || appMatch('Permits/*/Manufactured Home/*') || appMatch('Permits/*/*/Alterations') || appMatch('Permits/*/*/Repair-Replacement') || appMatch('Permits/*/*/Reroof') || appMatch('Permits/*/Reroof/*') || appMatch('Permits/*/Reroof/*') || appMatch('Permits/*/Annual Maintenance/*') || appMatch('Permits/*/Construction Trailer/*') || appMatch('Permits/*/Construction Staging/*')) && isTaskActive('Construction') && matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP')  ) {
			closeTask('Construction', 'Final Release', 'Updated by IRSA Script');
		}

		if ((appMatch('Permits/*/Accessory Structure/*') || appMatch('Permits/*/Demolition/*') || appMatch('Permits/*/Manufactured Home/*') || appMatch('Permits/*/*/Alterations') || appMatch('Permits/*/*/Repair-Replacement') || appMatch('Permits/*/*/Reroof') || appMatch('Permits/*/Reroof/*') || appMatch('Permits/*/Reroof/*') || appMatch('Permits/*/Annual Maintenance/*') || appMatch('Permits/*/Construction Trailer/*') || appMatch('Permits/*/Construction Staging/*')) && isTaskActive('Inspections') && matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP')  ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'FLOOD') && inspType == 'FL-FINAL' ) {
			closeTask('Construction', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'FLOOD') && isTaskActive('Inspections') && inspType == 'FL-FINAL' ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'O_OCC') && isTaskActive('Construction') && inspType == 'FP-FIRE MARSHAL' ) {
			closeTask('Construction', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'O_OCC') && isTaskActive('Inspections') && inspType == 'FP-FIRE MARSHAL' ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'O_FC') && isTaskActive('Construction') && inspType == 'BU-SAFETY' ) {
			closeTask('Construction', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'O_FC') && isTaskActive('Inspections') && inspType == 'BU-SAFETY' ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'F_OPE') && isTaskActive('Inspections') && inspType == 'OPE-FINAL' ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'ABC') && isTaskActive('Inspections') && inspType == 'BU-FINAL FINAL' ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'F_CON', 'FA/FS', 'F-S/G', 'REINSP') && isTaskActive('Construction') && matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') ) {
			closeTask('Construction', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'F_CON', 'FA/FS', 'F-S/G', 'REINSP') && isTaskActive('Inspections') && matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'MULTI', 'SIGN', 'REINSP') && isTaskActive('Construction') && inspType == 'FINAL FINAL' ) {
			closeTask('Construction', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'MULTI', 'SIGN', 'REINSP') && isTaskActive('Inspections') && inspType == 'FINAL FINAL' ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (appMatch('Permits/*/Trade/*') && !appMatch('Permits/*/Trade/Multi-Trade') && isTaskActive('Construction') && matches(inspType, 'EE-FINAL', 'EE-FINAL-REINSP', 'ME-FINAL', 'ME-FINAL-REINSP', 'PL-FINAL', 'PL-FINAL-REINSP', 'GP-FINAL', 'GP-FINAL-REINSP', 'RE-FINAL', 'RE-FINAL-REINSP', 'HO-FINAL', 'HO-FINAL-REINSP') ) {
			closeTask('Construction', 'Final Release', 'Updated by IRSA Script');
		}

		if (appMatch('Permits/*/Trade/*') && !appMatch('Permits/*/Trade/Multi-Trade') && isTaskActive('Inspections') && matches(inspType, 'EE-FINAL', 'EE-FINAL-REINSP', 'ME-FINAL', 'ME-FINAL-REINSP', 'PL-FINAL', 'PL-FINAL-REINSP', 'GP-FINAL', 'GP-FINAL-REINSP', 'RE-FINAL', 'RE-FINAL-REINSP', 'HO-FINAL', 'HO-FINAL-REINSP') ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (matches(inspGroup, 'FACE') && isTaskActive('Inspections') && inspType == 'SI-FINAL' ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if (appMatch('Permits/Outdoor Vendor/*/*') && isTaskActive('Inspections') && matches(inspType, 'ZO-FINAL') ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

		if ((appMatch('Permits/*/New/*') || appMatch('Permits/*/Addition/*') || appMatch('Permits/*/New Building/*') || appMatch('Permits/*/*/Addition') || appMatch('Permits/*/*/Addition') || appMatch('Permits/*/*/Alterations with Addition')) && isTaskActive('Construction') && matches(inspType, 'BU-FINAL FINAL') ) {
			closeTask('Construction', 'Final Release', 'Updated by IRSA Script');
		}

		if ((appMatch('Permits/*/New/*') || appMatch('Permits/*/Addition/*') || appMatch('Permits/*/New Building/*') || appMatch('Permits/*/*/Addition') || appMatch('Permits/*/*/Addition') || appMatch('Permits/*/*/Alterations with Addition')) && isTaskActive('Inspections') && matches(inspType, 'BU-FINAL FINAL') ) {
			closeTask('Inspections', 'Final Release', 'Updated by IRSA Script');
		}

	}
	//end replaced branch: ES_SET_WF_FINAL_RELEASE;
}

if (matches(inspResult, 'Disapproved-No Plans')) {
	createPendingInspection(inspGroup, inspType);
}

if (matches(inspResult, 'Partial Approval', 'Cancelled')) {
	createPendingInspection(inspGroup, inspType);
}

if (matches(inspResult, 'Disapproved', 'Disapproved-Level 1 Fee', 'Disapproved-Level 2 Fee', 'Disapproved-Level 3 Fee')) {

	//start replaced branch: ES_ADD_REINSP
	{
		if (matches(inspGroup, 'TCO', 'TU') && matches(inspResult, 'Disapproved')) {
			createPendingInspection(inspGroup, inspType);
		}

		if (inspType.indexOf('BU') == 0 && inspType != 'BU-FINAL' && inspType != 'BU-FINAL-REINSP' && inspType != 'BU-TCO' && inspType != 'BU-TU' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'BU-REINSP');
		}

		if (inspType == 'BU-FINAL' || inspType == 'BU-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'BU-FINAL-REINSP');
		}

		if (inspType.indexOf('EE') == 0 && inspType != 'EE-FINAL' && inspType != 'EE-FINAL-REINSP' && inspType != 'EE-TCO' && inspType != 'EE-TU' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'EE-REINSP');
		}

		if (inspType == 'EE-FINAL' || inspType == 'EE-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'EE-FINAL-REINSP');
		}

		if (inspType.indexOf('FP') == 0 && inspType != 'FP-FINAL' && inspType != 'FP-FINAL-REINSP' && inspType != 'FP-TCO' && inspType != 'FP-TU' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'FP-REINSP');
		}

		if (inspType == 'FP-FINAL' || inspType == 'FP-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'FP-FINAL-REINSP');
		}

		if (inspType.indexOf('GP') == 0 && inspType != 'GP-FINAL' && inspType != 'GP-FINAL-REINSP' && inspType != 'GP-TCO' && inspType != 'GP-TU' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'GP-REINSP');
		}

		if (inspType == 'GP-FINAL' || inspType == 'GP-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'GP-FINAL-REINSP');
		}

		if (inspType.indexOf('ME') == 0 && inspType != 'ME-FINAL' && inspType != 'ME-FINAL-REINSP' && inspType != 'ME-TCO' && inspType != 'ME-TU' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'ME-REINSP');
		}

		if (inspType == 'ME-FINAL' || inspType == 'ME-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'ME-FINAL-REINSP');
		}

		if (inspType.indexOf('MH') == 0 && inspType != 'MH-FINAL' && inspType != 'MH-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'MH-REINSP');
		}

		if (inspType == 'MH-FINAL' || inspType == 'MH-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'MH-FINAL-REINSP');
		}

		if (inspType.indexOf('PL') == 0 && inspType != 'PL-FINAL' && inspType != 'PL-FINAL-REINSP' && inspType != 'PL-TCO' && inspType != 'PL-TU' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'PL-REINSP');
		}

		if (inspType == 'PL-FINAL' || inspType == 'PL-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'PL-FINAL-REINSP');
		}

		if (inspType.indexOf('HO') == 0 && inspType != 'HO-FINAL' && inspType != 'HO-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'HO-REINSP');
		}

		if (inspType == 'HO-FINAL' || inspType == 'HO-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'HO-FINAL-REINSP');
		}

		if (inspType.indexOf('RE') == 0 && inspType != 'RE-FINAL' && inspType != 'RE-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'RE-REINSP');
		}

		if (inspType == 'RE-FINAL' || inspType == 'RE-FINAL-REINSP' && matches(inspResult, 'Disapproved')) {
			createPendingInspection('REINSP', 'RE-FINAL-REINSP');
		}

	}
	//end replaced branch: ES_ADD_REINSP;
}

// TODO:  repeated conditionals, consider refactoring. Considered, decided not to at this time.

if (matches(inspResult, 'Disapproved-Level 1 Fee', 'Disapproved-Level 2 Fee', 'Disapproved-Level 3 Fee', 'Disapproved-No Plans')) {

	//start replaced branch: ES_ADD_REINSP_FEE
	{
		if (inspType.indexOf('BU') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
			updateFee('ENFB21', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('BU') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
			updateFee('ENFB22', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('BU') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
			updateFee('ENFB23', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('EE') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
			updateFee('ENFB21', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('EE') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
			updateFee('ENFB22', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('EE') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
			updateFee('ENFB23', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('ME') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
			updateFee('ENFB21', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('ME') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
			updateFee('ENFB22', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('ME') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
			updateFee('ENFB23', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('PL') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
			updateFee('ENFB21', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('PL') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
			updateFee('ENFB22', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('PL') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
			updateFee('ENFB23', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('GP') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
			updateFee('ENFB21', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('GP') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
			updateFee('ENFB22', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('GP') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
			updateFee('ENFB23', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('HO') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
			updateFee('ENFB21', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('HO') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
			updateFee('ENFB22', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('HO') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
			updateFee('ENFB23', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('RE') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
			updateFee('ENFB21', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('RE') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
			updateFee('ENFB22', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('RE') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
			updateFee('ENFB23', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('MH') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
			updateFee('ENFB21', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('MH') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
			updateFee('ENFB22', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('MH') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
			updateFee('ENFB23', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('FP') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
			updateFee('FINS', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('FP') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
			updateFee('FINS2', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('FP') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
			updateFee('FINS3', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}

		if (matches(inspResult, 'Disapproved-No Plans')) {
			updateFee('ENFB02', 'ENF_BLD', 'FINAL', 1, 'Y');
			updateFee('TECH', 'ENF_BLD', 'FINAL', 1, 'Y');
		}
// Added by Jerry 6/21/17 -- new reinspection fees have been created. We need to include them here. The above were already done for the BLD and FIRE groups.
// Now adding Site Engineering, Zoning, Public Works and Water. The new ones are all in the REINSP Fee Schedule
// Only one level for Signs, three levels for the others

                                if (inspType.indexOf('SI') == 0 && matches(inspResult, 'Disapproved - Reinsp Fee')) {
                                                updateFee('SIGNREINSP', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
                
                                if (inspType.indexOf('ZO') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
                                                updateFee('REIN_ZOLI', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
                
                                if (inspType.indexOf('ZO') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
                                                updateFee('REIN_ZOLII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
                                if (inspType.indexOf('ZO') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
                                                updateFee('REIN_ZOLIII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }

                                if (inspType.indexOf('SID') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
                                                updateFee('REIN_PWLI', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
                
                                if (inspType.indexOf('SID') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
                                                updateFee('REIN_PWLII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
                                if (inspType.indexOf('SID') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
                                                updateFee('REIN_PWLIII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
// MAY NEED TO BREAK OUT DR INTO RES AND COMMERCIAL IF FEES HAVE DIFFERENT CODES -- Leave as is as per Diane 06/28/17
                                if (inspType.indexOf('DR') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
                                                updateFee('REIN_PWLI', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
                
                                if (inspType.indexOf('DR') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
                                                updateFee('REIN_PWLII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }

                                if (inspType.indexOf('DR') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
                                                updateFee('REIN_PWLIII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }

                                if (inspType.indexOf('FL') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
                                                updateFee('REIN_SELI', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
                
                                if (inspType.indexOf('FL') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
                                                updateFee('REIN_SELII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }

                                if (inspType.indexOf('FL') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
                                                updateFee('REIN_SELIII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }

                                if (inspType.indexOf('GR') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
                                                updateFee('REIN_SELI', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
                
                                if (inspType.indexOf('GR') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
                                                updateFee('REIN_SELII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }

                                if (inspType.indexOf('GR') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
                                                updateFee('REIN_SELIII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }

                                if (inspType.indexOf('SW') == 0 && matches(inspResult, 'Disapproved-Level 1 Fee')) {
                                                updateFee('REIN_SELI', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }
                
                                if (inspType.indexOf('SW') == 0 && matches(inspResult, 'Disapproved-Level 2 Fee')) {
                                                updateFee('REIN_SELII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }

                                if (inspType.indexOf('SW') == 0 && matches(inspResult, 'Disapproved-Level 3 Fee')) {
                                                updateFee('REIN_SELIII', 'REINSP', 'FINAL', 1, 'Y');
                                                updateFee('TECH', 'REINSP', 'FINAL', 1, 'Y');
                                }

	}
	//end replaced branch: ES_ADD_REINSP_FEE;
}

// TODO:  repeated conditionals, consider refactoring. Done.

if (matches(inspResult, 'Disapproved-TCO Fee')) {

	//start replaced branch: ES_ADD_TCO-REINSP_FEE
	{
		if (inspType.indexOf('BU') == 0 ) {
			updateFee('BU_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('EE') == 0 ) {
			updateFee('BU_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('ME') == 0 ) {
			updateFee('BU_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('PL') == 0 ) {
			updateFee('BU_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('FP') == 0 ) {
			updateFee('FP_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('ZO') == 0 ) {
			updateFee('ZO_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('SW') == 0 ) {
			updateFee('SW_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('GR') == 0 ) {
			updateFee('SW_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('FL') == 0 ) {
			updateFee('SW_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

	}
	//end replaced branch: ES_ADD_TCO-REINSP_FEE;
}

if (matches(inspResult, 'Disapproved-TU Fee')) {

	//start replaced branch: ES_ADD_TU-REINSP_FEE
	{
		if (inspType.indexOf('BU') == 0 ) {
			updateFee('BU_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('EE') == 0 ) {
			updateFee('BU_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('ME') == 0 ) {
			updateFee('BU_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('PL') == 0 ) {
			updateFee('BU_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('GP') == 0 ) {
			updateFee('BU_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

		if (inspType.indexOf('FP') == 0 ) {
			updateFee('FP_INSP', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
			updateFee('TECH', 'TU/TCC/TCO', 'FINAL', 1, 'Y');
		}

	}
	//end replaced branch: ES_ADD_TU-REINSP_FEE;
}

if (inspType.indexOf('GR') == 0) {

	//start replaced branch: ES_ADD_GRADING_INSP
	{
		if (matches(inspType, 'GR-PRELIMINARY') && matches(inspResult, 'Approved', 'Approved with Conditions', 'Partial Approval')) {
			scheduleInspectDate('GR-ROUTINE', dateAdd(null, 14), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'GR-ROUTINE') && matches(inspResult, 'AP-7 Days')) {
			scheduleInspectDate('GR-ROUTINE', dateAdd(null, 7), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'GR-ROUTINE') && matches(inspResult, 'AP-14 Days')) {
			scheduleInspectDate('GR-ROUTINE', dateAdd(null, 14), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'GR-ROUTINE') && matches(inspResult, 'AP-28 Days')) {
			scheduleInspectDate('GR-ROUTINE', dateAdd(null, 28), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'GR-ROUTINE') && matches(inspResult, 'AP-91 Days')) {
			scheduleInspectDate('GR-ROUTINE', dateAdd(null, 91), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'GR-ROUTINE') && matches(inspResult, 'DAP-7 Days')) {
			scheduleInspectDate('GR-ROUTINE', dateAdd(null, 7), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'GR-ROUTINE') && matches(inspResult, 'Postpone-7 Days')) {
			scheduleInspectDate('GR-ROUTINE', dateAdd(null, 7), null, null, 'Scheduled by Script');
		}

	}
	//end replaced branch: ES_ADD_GRADING_INSP;
}

if (inspType.indexOf('SW') == 0) {

	//start replaced branch: ES_ADD_STORMWATER_INSP
	{
		if (matches(inspType, 'SW-O&M AGREEMENT') && matches(inspResult, 'Accepted')) {
			newChildID = createChild('Permits', 'Stormwater', 'Operations & Maintenance', 'NA', '');
			copyAppSpecific(newChildID);
			comment('New child app id = ' + newChildID);
		}

		if (matches(inspType, 'SW-ROUTINE') && matches(inspResult, 'AP-7 Days')) {
			scheduleInspectDate('SW-ROUTINE', dateAdd(null, 7), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'SW-ROUTINE') && matches(inspResult, 'AP-14 Days')) {
			scheduleInspectDate('SW-ROUTINE', dateAdd(null, 14), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'SW-ROUTINE') && matches(inspResult, 'AP-28 Days')) {
			scheduleInspectDate('SW-ROUTINE', dateAdd(null, 28), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'SW-ROUTINE') && matches(inspResult, 'AP-91 Days')) {
			scheduleInspectDate('SW-ROUTINE', dateAdd(null, 91), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'SW-ROUTINE') && matches(inspResult, 'DAP-7 Days')) {
			scheduleInspectDate('SW-ROUTINE', dateAdd(null, 7), null, null, 'Scheduled by Script');
		}

		if (matches(inspType, 'SW-ROUTINE') && matches(inspResult, 'Postpone-7 Days')) {
			scheduleInspectDate('SW-ROUTINE', dateAdd(null, 7), null, null, 'Scheduled by Script');
		}

	}
	//end replaced branch: ES_ADD_STORMWATER_INSP;
}

if (matches(inspGroup, 'TU') && matches(inspResult, 'Approved', 'Disapproved', 'Not Applicable', 'Cancelled')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'TU ' + capIDString + ' Inspection Resulted', 'The Inspection ' + inspType + ' for Permit ' + capIDString + ' was completed with a result of ' + inspResult + '.<br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for release of utilities.');
}

if (matches(inspGroup, 'TCO') && matches(inspResult, 'Approved', 'Disapproved', 'Not Applicable', 'Cancelled')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'TCO Inspection ' + capIDString + ' Resulted', 'The Inspection ' + inspType + ' for Permit ' + capIDString + ' was completed with a result of ' + inspResult + '.<br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Temporary Certificate of Compliance or Occupancy.');
}

if (matches(inspGroup, 'ABC') && matches(inspResult, 'Approved', 'Disapproved', 'Not Applicable', 'Cancelled')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'ABC Inspection' + capIDString + ' Resulted', 'The Inspection ' + inspType + ' for Permit ' + capIDString + ' was completed with a result of ' + inspResult + '.<br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance.');
}

if ((appMatch('Permits/*/Site Work/*') || appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*')) && inspType == 'ZO-FINAL' && matches(inspResult, 'Approved')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Zoning Final ' + capIDString + ' Approved', 'The Zoning Final inspection for Permit ' + capIDString + ' has been Approved.<br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Compliance or Occupancy.');
}

if (inspType == 'GR-FINAL' && matches(inspResult, 'Approved')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Grading Final ' + capIDString + ' Approved', 'The Grading Final inspection for Permit ' + capIDString + ' has been Approved.<br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Compliance or Occupancy.');
}

if (inspType == 'SW-FINAL' && matches(inspResult, 'Approved')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Storm Water Final ' + capIDString + ' Approved', 'The Stormwater Final inspection for Permit ' + capIDString + ' has been Approved.<br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Compliance or Occupancy.');
}

if (inspType == 'FL-FINAL' && matches(inspResult, 'Approved')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Flood Final ' + capIDString + ' Approved', 'The Flood Plain Development Final inspection for Permit ' + capIDString + ' has been Approved.<br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Compliance or Occupancy.');
}

if (inspType == 'ZO-EXPIRATION CHECK' && matches(inspResult, 'Expired')) {
	updateTask('Application Process', 'Expired', 'Updated by IRSA Script');
}

// DISABLED: InspectionResultSubmitAfter:76
//emailContact('Inspection Completed','You are a contact on permit '+capIDString+' An Inspection '+inspType+' was completed with a result of '+inspResult+'.<br>Inspection Comment: '+inspComment+'<br><br>Thank You.','Contact');
// DISABLED: InspectionResultSubmitAfter:78
//var profArr = getLicenseProfessional(capId);
// DISABLED: InspectionResultSubmitAfter:79
//if (profArr != null) {
//	for(x in profArr) if(profArr[x].getEmail() + '' != '') email(profArr[x].getEmail(),'noreply@ashevillenc.gov','Inspection Resulted','You are a professional on permit '+capIDString+' An Inspection '+inspType+' was completed with a result of '+inspResult+'.<br>Inspection Comment: '+inspComment+'<br><br><br>Thank You.');
//	}

theUserId = getInspector(inspType);
comment('The inspector is: ' + theUserId);
if (true) {
	userResult = aa.person.getUser(theUserId);
	userFName = 'Unknown';
	userLName = 'Unknown';
	userPhn = 'Unknown';
}

if (userResult.getSuccess()) {
	userObj = userResult.getOutput();
	userFName = userObj.getFirstName();
	comment('The user First name: ' + userFName);
	userLName = userObj.getLastName();
	comment('The user Last name: ' + userLName);
	userPhn = userObj.getPhoneNumber();
	userEmail = userObj.getEmail();
	comment('The user Phone ' + userPhn);
	comment('The user Email ' + userEmail);
	theCapAddress = getCapAddress(capId);
}

emailContact('Inspection Completed', 'You are a contact on permit ' + capIDString + ' An Inspection ' + inspType + ' was completed with a result of ' + inspResult + '.<br>Inspection Comment: ' + inspComment + '<br>Inspected By: ' + userFName + ' ' + userLName + '<br>Phone: ' + userPhn + '<br><br>Thank You.', 'Contact');
var profArr = getLicenseProfessional(capId);
if (true && profArr != null) {
	for (x in profArr)
		if (profArr[x].getEmail() + '' != '')
			email(profArr[x].getEmail(), 'noreply@ashevillenc.gov', 'Inspection ' + inspType + ' for ' + capIDString + ' at address ' + theCapAddress + ' Resulted', 'You are a professional on permit ' + capIDString + ' An Inspection ' + inspType + ' was completed with a result of ' + inspResult + '.<br>Inspection Comment: ' + inspComment + '<br>Inspected By: ' + userFName + ' ' + userLName + '<br>Phone: ' + userPhn + '<br><br>Thank You.');
}

if (userResult.getSuccess() && inspResult == 'Cancelled') {
	email(userEmail, 'noreply@ashevillenc.gov', 'Inspection cancelled', 'Permit: ' + capIDString + '<br>Inspection: ' + inspType + '<br>At address ' + theCapAddress + '<br>On ' + inspSchedDate + ' has been Cancelled');
}

// DISABLED: InspectionResultSubmitAfter:98
//if (appMatch('Permits/Right of Way/Closures/NA') && isTaskActive('Construction')  && inspType =='SC-FINAL' && matches(inspResult,'Approved')) {
//	closeTask('Construction','Close','Updateed by Script');
//	}
