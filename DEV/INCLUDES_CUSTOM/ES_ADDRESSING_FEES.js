function ES_ADDRESSING_FEES() {

	if (AInfo['Number of Addresses Changed?'] != 0) {
		updateFee('ADD02', 'GENERAL', 'FINAL', AInfo['Number of Addresses Changed?'], 'N');
		updateFee('TECH', 'GENERAL', 'FINAL', 1, 'Y');
	}

	if (AInfo['Created as part of a new subdivision?'] == 'No' && AInfo['Number of Addresses Created?'] > 0) {
		updateFee('ADD01', 'GENERAL', 'FINAL', AInfo['Number of Addresses Created?'], 'N');
		updateFee('TECH', 'GENERAL', 'FINAL', 1, 'Y');
	}

	if (AInfo['Created as part of a new subdivision?'] == 'Yes' && AInfo['Number of Addresses Created?'] > 0) {
		updateFee('ADD03', 'GENERAL', 'FINAL', AInfo['Number of Addresses Created?'], 'N');
		updateFee('TECH', 'GENERAL', 'FINAL', 1, 'Y');
	}

}
