
capIdSave = capId;
capId = pCapId;
cCapObj = aa.cap.getCap(pCapId);
cCap = cCapObj.getOutput();
cCapId = cCap.getCapID();
cStatus = cCap.getCapStatus();
cCapType = cCap.getCapType();
;
comment('The Parent Status is: '+cStatus);
comment('The Parent Type is: '+cCapType);
cCapIDString = cCapId.getCustomID();
if (cCapType != 'Permits/Residential/Manufactured Home/NA' && !checkInspectionResult('BU-ROUGH IN','Approved')) {
	showMessage = true;
	comment('<font size=small><b>Can't result Final:</b></font><br><br>The ROUGH IN inspection has not been approved on the Parent Record.<br><br>');
	cancel = true;
	}

capId = capIdSave;

