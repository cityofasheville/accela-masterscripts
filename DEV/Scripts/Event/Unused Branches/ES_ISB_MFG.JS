
if (checkInspectionResult('MH-FOOTING','Pending')) {
	showMessage = true;
	comment('<font size=small><b>Can't schedule Final:</b></font><br><br>FOOTING Inspection is not scheduled.<br><br>');
	cancel = true;
	}

if (checkInspectionResult('MH-FOUNDATION','Pending')) {
	showMessage = true;
	comment('<font size=small><b>Can't schedule Final:</b></font><br><br>FOUNDATION Inspection is not scheduled.<br><br>');
	cancel = true;
	}

if (checkInspectionResult('MH-MARRIAGE WALL','Pending')) {
	showMessage = true;
	comment('<font size=small><b>Can't schedule Final:</b></font><br><br>MARRIAGE WALL Inspection is not scheduled.<br><br>');
	cancel = true;
	}

if (checkInspectionResult('MH-REINSP','Pending')) {
	showMessage = true;
	comment('<font size=small><b>Can't schedule Final:</b></font><br><br>REINSP Inspection is not scheduled.<br><br>');
	cancel = true;
	}

