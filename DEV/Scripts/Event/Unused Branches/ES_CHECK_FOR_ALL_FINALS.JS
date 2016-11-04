
SetToFinaled = true;
if (AInfo['Building Permit Issued To'] != null && (!isScheduled('BU-FINAL') || (isScheduled('BU-FINAL') && !checkInspectionResult('BU-FINAL','Approved')))) {
	SetToFinaled = false;
	}

if (AInfo['Electrical Permit Issued To'] != null && (!isScheduled('EE-FINAL') || (isScheduled('EE-FINAL') && !checkInspectionResult('EE-FINAL','Approved')))) {
	SetToFinaled = false;
	}

if (AInfo['Mechanical Permit Issued To'] != null && (!isScheduled('ME-FINAL') || (isScheduled('ME-FINAL') && !checkInspectionResult('ME-FINAL','Approved')))) {
	SetToFinaled = false;
	}

if (AInfo['Plumbing Permit Issued To'] != null && (!isScheduled('PL-FINAL') || (isScheduled('PL-FINAL') && !checkInspectionResult('PL-FINAL','Approved')))) {
	SetToFinaled = false;
	}

if (AInfo['Fuel Piping Permit Issued To'] != null && (!isScheduled('GP-FINAL') || (isScheduled('GP-FINAL') && !checkInspectionResult('GP-FINAL','Approved')))) {
	SetToFinaled = false;
	}

if (AInfo['Refrigeration Permit Issued To'] != null && (!isScheduled('RE-FINAL') || (isScheduled('RE-FINAL') && !checkInspectionResult('RE-FINAL','Approved')))) {
	SetToFinaled = false;
	}

if (AInfo['Exhaust Hood Permit Issued To'] != null && (!isScheduled('HO-FINAL') || (isScheduled('HO-FINAL') && !checkInspectionResult('HO-FINAL','Approved')))) {
	SetToFinaled = false;
	}

if (AInfo['Fire Prevention Permit Issued To'] != null && (!isScheduled('FP-FINAL') || (isScheduled('FP-FINAL') && !checkInspectionResult('FP-FINAL','Approved')))) {
	SetToFinaled = false;
	}

comment ('We are in the InspResult script.  SetToFinaled ='+SetToFinaled);
if (SetToFinaled && capStatus != 'Finaled') {
	updateAppStatus('Finaled','All Final Inspections Done');
	}

