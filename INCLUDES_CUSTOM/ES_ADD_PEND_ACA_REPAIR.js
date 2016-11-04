function ES_ADD_PEND_ACA_REPAIR() {

	if (('Permits/Commercial/*/Repair-Replacement') && !checkInspectionResult('BU-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'BU-FINAL');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && !checkInspectionResult('FP-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'FP-ROUGH IN');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && !checkInspectionResult('FP-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'FP-FINAL');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && AInfo['Electrical Permit'] == 'Yes' && !checkInspectionResult('EE-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'EE-ROUGH IN');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && AInfo['Electrical Permit'] == 'Yes' && !checkInspectionResult('EE-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'EE-FINAL');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && AInfo['Mechanical Permit'] == 'Yes' && !checkInspectionResult('ME-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'ME-ROUGH IN');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && AInfo['Mechanical Permit'] == 'Yes' && !checkInspectionResult('ME-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'ME-FINAL');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && AInfo['Plumbing Permit'] == 'Yes' && !checkInspectionResult('PL-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'PL-ROUGH IN');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && AInfo['Plumbing Permit'] == 'Yes' && !checkInspectionResult('PL-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'PL-FINAL');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && AInfo['Gas Piping Permit'] == 'Yes' && !checkInspectionResult('GP-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'GP-ROUGH IN');
	}

	if (('Permits/Commercial/*/Repair-Replacement') && AInfo['Gas Piping Permit'] == 'Yes' && !checkInspectionResult('GP-FINAL', 'Pending')) {
		createPendingInspection('C_REPAIR', 'GP-FINAL');
	}

	if (('Permits/Residential/*/Repair-Replacement') && !checkInspectionResult('BU-FINAL', 'Pending')) {
		createPendingInspection('R_ALTER', 'BU-FINAL');
	}

	if (('Permits/Residential/*/Repair-Replacement') && AInfo['Electrical Permit'] == 'Yes' && !checkInspectionResult('EE-FINAL', 'Pending')) {
		createPendingInspection('R_ALTER', 'EE-ROUGH IN');
	}

	if (('Permits/Residential/*/Repair-Replacement') && AInfo['Electrical Permit'] == 'Yes' && !checkInspectionResult('EE-FINAL', 'Pending')) {
		createPendingInspection('R_ALTER', 'EE-FINAL');
	}

	if (('Permits/Residential/*/Repair-Replacement') && AInfo['Mechanical Permit'] == 'Yes' && !checkInspectionResult('ME-FINAL', 'Pending')) {
		createPendingInspection('R_ALTER', 'ME-ROUGH IN');
	}

	if (('Permits/Residential/*/Repair-Replacement') && AInfo['Mechanical Permit'] == 'Yes' && !checkInspectionResult('ME-FINAL', 'Pending')) {
		createPendingInspection('R_ALTER', 'ME-FINAL');
	}

	if (('Permits/Residential/*/Repair-Replacement') && AInfo['Plumbing Permit'] == 'Yes' && !checkInspectionResult('PL-FINAL', 'Pending')) {
		createPendingInspection('R_ALTER', 'PL-ROUGH IN');
	}

	if (('Permits/Residential/*/Repair-Replacement') && AInfo['Plumbing Permit'] == 'Yes' && !checkInspectionResult('PL-FINAL', 'Pending')) {
		createPendingInspection('R_ALTER', 'PL-FINAL');
	}

	if (('Permits/Residential/*/Repair-Replacement') && AInfo['Gas Piping Permit'] == 'Yes' && !checkInspectionResult('GP-FINAL', 'Pending')) {
		createPendingInspection('R_ALTER', 'GP-ROUGH IN');
	}

	if (('Permits/Residential/*/Repair-Replacement') && AInfo['Gas Piping Permit'] == 'Yes' && !checkInspectionResult('GP-FINAL', 'Pending')) {
		createPendingInspection('R_ALTER', 'GP-FINAL');
	}

}
