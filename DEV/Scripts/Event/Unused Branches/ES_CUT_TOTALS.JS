
estimatedCut = 0;
actualCut = 0;
tblEstCut = loadASITable('ESTIMATED CUT');
if (typeof(tblEstCut) == 'object') {
	for(x in tblEstCut) (estimatedCut = estimatedCut + parseFloat(tblEstCut[x]['Est. Length times Width']));
	}

if (estimatedCut > 0) {
	comment('The total Estimate is: '+estimatedCut);
	editAppSpecific('Est.Total Square Footage',estimatedCut);
	}

if (AInfo['Master Permit'] != 'CHECKED' && estimatedCut > 0 && !feeExists('ROW_04')) {
	addFee('ROW_04','ROW','FINAL',estimatedCut,'N');
	}

tblActualCut = loadASITable('ACTUAL CUT');
if (typeof(tblActualCut) == 'object') {
	for(x in tblActualCut) (actualCut = actualCut + parseFloat(tblActualCut[x]['Act. Length times Width']));
	}

if (actualCut > 0) {
	comment('The total Actual is: '+actualCut);
	editAppSpecific('Act. Total Square Footage',actualCut);
	}

if (AInfo['Master Permit'] != 'CHECKED' && actualCut > 0) {
	updateFee('ROW_04','ROW','FINAL',actualCut ,'N');
	}

if (AInfo['Master Permit'] == 'CHECKED' && !feeExists('ROW_04MP')) {
	addFee('ROW_04MP','ROW','FINAL',1,'N');
	}

