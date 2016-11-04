// TODO:  function not referenced in master script migration

function updateCommercialBuildingFees() {
	// This function should be added to INCLUDES_CUSTOM and called from a Standard Choice
	// Example:
	// true ^ updateCommericalBuildingFees();

	// Get the ASI information and add it to the following variables
	var buildingCost = parseInt(AInfo['Building Cost']);
	var electricalCost = parseInt(AInfo['Electrical Cost']);
	var mechanicalCost = parseInt(AInfo['Mechanical Cost']);
	var plumbingCost = parseInt(AInfo['Plumbing Cost']);
	var gasPipingCost = parseInt(AInfo['Gas Piping Cost']);
	var refrigerationCost = parseInt(AInfo['Refrigeration Cost']);
	var exhaustHoodCost = parseInt(AInfo['Exhaust Hood Cost']);
	var fireSprinklerCost = parseInt(AInfo['Fire Sprinkler System Cost']);
	var fireHoodCost = parseInt(AInfo['Fire Hood Suppression Cost']);
	var fireAlarmCost = parseInt(AInfo['Fire Alarm Cost']);
	var fireCompressedGasCost = parseInt(AInfo['Fire Compressed Gas Cost']);
	var fireOther = parseInt(AInfo['Fire Other Const. Cost']);
	var totalCost = parseInt(AInfo['Total Project Valuation']);
	var PhasedAdd = AInfo['Phased Construction?'];

	if (buildingCost > 0) {
		updateFee("C_001", "COM_BLD", "FINAL", buildingCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (buildingCost >= 10001)
		updateFee("CFIREADDB", "COM_BLD", "FINAL", 1, "N", "N");

	if (electricalCost > 0) {
		updateFee("C_002", "COM_BLD", "FINAL", electricalCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (electricalCost >= 10001)
		updateFee("CFIREADDE", "COM_BLD", "FINAL", 1, "N", "N");

	if (mechanicalCost > 0) {
		updateFee("C_003", "COM_BLD", "FINAL", mechanicalCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (mechanicalCost >= 10001)
		updateFee("CFIREADDM", "COM_BLD", "FINAL", 1, "N", "N");

	if (plumbingCost > 0) {
		updateFee("C_004", "COM_BLD", "FINAL", plumbingCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (plumbingCost >= 10001)
		updateFee("CFIREADDP", "COM_BLD", "FINAL", 1, "N", "N");

	if (gasPipingCost > 0) {
		updateFee("C_005", "COM_BLD", "FINAL", gasPipingCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}
	if (gasPipingCost >= 10001)
		updateFee("CFIREADDG", "COM_BLD", "FINAL", 1, "N", "N");

	if (refrigerationCost > 0) {
		updateFee("C_006", "COM_BLD", "FINAL", refrigerationCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}
	if (refrigerationCost >= 10001)
		updateFee("CFIREADDR", "COM_BLD", "FINAL", 1, "N", "N");

	if (exhaustHoodCost > 0) {
		updateFee("C_007", "COM_BLD", "FINAL", exhaustHoodCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}
	if (exhaustHoodCost >= 10001)
		updateFee("CFIREADDH", "COM_BLD", "FINAL", 1, "N", "N");

	if (fireSprinklerCost > 0) {
		updateFee("F_001", "COM_BLD", "FINAL", fireSprinklerCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (fireHoodCost > 0) {
		updateFee("F_001", "COM_BLD", "FINAL", fireHoodCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (fireAlarmCost > 0) {
		updateFee("F_002", "COM_BLD", "FINAL", fireAlarmCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (fireCompressedGasCost > 0) {
		updateFee("F_003", "COM_BLD", "FINAL", fireCompressedGasCost, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (fireOther > 0) {
		updateFee("F_003", "COM_BLD", "FINAL", fireOther, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (totalCost > 0) {
		updateFee("C_009", "COM_BLD", "FINAL", totalCost, "N", "N");
		updateFee("CFIRE", "COM_BLD", "FINAL", 1, "N", "N");
		updateFee("TECH", "COM_BLD", "FINAL", 1, "N", "N");
	}

	if (PhasedAdd == "Y")
		updateFee("C_013", "COM_BLD", "FINAL", 1, "N", "N");

}
