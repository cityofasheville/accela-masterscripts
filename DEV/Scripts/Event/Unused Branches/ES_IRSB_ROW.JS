
if (inspType == 'SC-FINAL' && (checkInspectionResult('SC-PRELIMINARY','Pending') || checkInspectionResult('SC-PRELIMINARY','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>PRELIMINARY Inspection is not approved.<br><br>');
	cancel = true;
	}

if (inspType == 'SC-FINAL' && (checkInspectionResult('SC-ROUTINE','Pending') || checkInspectionResult('SC-ROUTINE','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>ROUTINE Inspection is not approved.<br><br>');
	cancel = true;
	}

if (inspType == 'SC-FINAL' && (checkInspectionResult('SC-OTHER','Pending') || checkInspectionResult('SC-OTHER','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>OTHER Inspection is not approved.<br><br>');
	cancel = true;
	}

