
createPendingInspection('C_REPAIR','BU-FINAL');
createPendingInspection('C_REPAIR','FP-ROUGH IN');
createPendingInspection('C_REPAIR','FP-FINAL');
if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL','Pending')) {
	createPendingInspection('C_REPAIR','EE-ROUGH IN');
	}

if (AInfo['EE Permit'] != 'NA' && AInfo['EE Permit'] != 'TBD' && !checkInspectionResult('EE-FINAL','Pending')) {
	createPendingInspection('C_REPAIR','EE-FINAL');
	}

if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL','Pending')) {
	createPendingInspection('C_REPAIR','ME-ROUGH IN');
	}

if (AInfo['ME Permit'] != 'NA' && AInfo['ME Permit'] != 'TBD' && !checkInspectionResult('ME-FINAL','Pending')) {
	createPendingInspection('C_REPAIR','ME-FINAL');
	}

if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL','Pending')) {
	createPendingInspection('C_REPAIR','PL-ROUGH IN');
	}

if (AInfo['PL Permit'] != 'NA' && AInfo['PL Permit'] != 'TBD' && !checkInspectionResult('PL-FINAL','Pending')) {
	createPendingInspection('C_REPAIR','PL-FINAL');
	}

if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL','Pending')) {
	createPendingInspection('C_REPAIR','GP-ROUGH IN');
	}

if (AInfo['GP Permit'] != 'NA' && AInfo['GP Permit'] != 'TBD' && !checkInspectionResult('GP-FINAL','Pending')) {
	createPendingInspection('C_REPAIR','GP-FINAL');
	}

