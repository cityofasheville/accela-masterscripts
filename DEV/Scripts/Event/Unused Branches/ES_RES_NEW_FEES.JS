
if (AInfo['Construction Type'] == '1 Story Site Built' || AInfo['Construction Type'] == '> 1 Story Site Built') {
	updateFee('R_001','RES_NEW','FINAL',AInfo['Total SqFt'],'N');
	}

if (AInfo['Construction Type'] == '1 Story Modular') {
	updateFee('R_004','RES_NEW','FINAL',1,'N');
	}

if (AInfo['Construction Type'] == '> 1 Story Modular') {
	updateFee('R_005','RES_NEW','FINAL',1,'N');
	}

// DISABLED: ES_RES_NEW_FEES:4
//updateFee('PLN01','RES_NEW','FINAL',1,'N');
// DISABLED: ES_RES_NEW_FEES:5
//updateFee('TRN_RDW','RES_NEW','FINAL',AInfo['Entrance Cuts'],'N');
// DISABLED: ES_RES_NEW_FEES:6
//if (AInfo['Land Measurement'] == '<10ksf') {
//	updateFee('PW_GR01R','RES_NEW','FINAL',1,'N');
//	}

// DISABLED: ES_RES_NEW_FEES:7
//if (AInfo['Land Measurement'] == '10ksf-1ac') {
//	updateFee('PW_GR02R','RES_NEW','FINAL',1,'N');
//	}

// DISABLED: ES_RES_NEW_FEES:8
//if (AInfo['Land Measurement'] == '>1ac') {
//	updateFee('PW_GR03','RES_NEW','FINAL',1,'N');
//	}

// DISABLED: ES_RES_NEW_FEES:9
//if (AInfo['Land Measurement'] == '>1ac') {
//	updateFee('PW_GR04','RES_NEW','FINAL',parseInt(AInfo['Acres Land Disturbed']),'N');
//	comment('Acres Rounded = '+parseInt(AInfo['Acres Land Disturbed']));
//	}

if (AInfo['Homeowner Recovery Fee'] == 'Yes') {
	updateFee('R_998','RES_NEW','FINAL',1,'N');
	updateFee('R_999','RES_NEW','FINAL',1,'N');
	}

if (AInfo['New Address'] == 'Yes') {
	updateFee('ADD01','RES_NEW','FINAL',1,'N');
	}

updateFee('TECH','RES_NEW','FINAL',1,'N');

