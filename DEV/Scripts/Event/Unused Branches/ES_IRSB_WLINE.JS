
if (inspType == 'W-FINAL' && (checkInspectionResult('W-SHOP DRAWING','Pending') || checkInspectionResult('W-SHOP DRAWING','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>SHOP DRAWING Inspection is not approved.<br><br>');
	cancel = true;
	}

if (inspType == 'W-FINAL' && (checkInspectionResult('W-ROUTINE','Pending') || checkInspectionResult('W-ROUTINE','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>ROUTINE Inspection is not approved.<br><br>');
	cancel = true;
	}

if (inspType == 'W-FINAL' && (checkInspectionResult('W-PRESURE TEST','Pending') || checkInspectionResult('W-PRESURE TEST','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>PRESURE TEST Inspection is not approved.<br><br>');
	cancel = true;
	}

if (inspType == 'W-FINAL' && (checkInspectionResult('W-BAC-TEST','Pending') || checkInspectionResult(W-BAC-TEST','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>BAC-TEST Inspection is not approved.<br><br>');
	cancel = true;
	}

if (inspType == 'W-FINAL' && (checkInspectionResult('W-OTHER','Pending') || checkInspectionResult('W-OTHER','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>OTHER Inspection is not approved.<br><br>');
	cancel = true;
	}

