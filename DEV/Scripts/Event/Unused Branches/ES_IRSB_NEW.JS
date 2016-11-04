
if (matches(inspType,'BU-FINAL','BU-FINAL-REINSP') && (checkInspectionResult('BU-FIRE STOPPING','Pending') || checkInspectionResult('BU-FIRE STOPPING','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>FIRE STOPPING Inspection is not approved.<br><br>');
	cancel = true;
	}

if (matches(inspType,'BU-FINAL','BU-FINAL-REINSP') && (checkInspectionResult('BU-FOUNDATION','Pending') || checkInspectionResult('BU-FOUNDATION','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>FOUNDATION Inspection is not approved.<br><br>');
	cancel = true;
	}

if (matches(inspType,'BU-FINAL','BU-FINAL-REINSP') && (checkInspectionResult('BU-FRAMING','Pending') || checkInspectionResult('BU-FRAMING','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>FRAMING Inspection is not approved.<br><br>');
	cancel = true;
	}

if (matches(inspType,'BU-FINAL','BU-FINAL-REINSP') && (checkInspectionResult('BU-FOOTING','Pending') || checkInspectionResult('BU-FOOTING','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>FOOTING Inspection is not approved.<br><br>');
	cancel = true;
	}

if (matches(inspType,'BU-FINAL','BU-FINAL-REINSP') && (checkInspectionResult('BU-INSULATION','Pending') || checkInspectionResult('BU-INSULATION','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>INSULATION Inspection is not approved.<br><br>');
	cancel = true;
	}

if (matches(inspType,'BU-FINAL','BU-FINAL-REINSP') && (checkInspectionResult('BU-REINSP','Pending') || checkInspectionResult('BU-REINSP','Scheduled'))) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>REINSP Inspection is not approved.<br><br>');
	cancel = true;
	}

