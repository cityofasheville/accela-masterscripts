function ES_UPDATE_PARENT_COST() {

	pCapId = getParent();
	totalCost = 0;
	if (appMatch('*/*/*/Electrical') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Electrical Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/*/*/Plumbing') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Plumbing Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/*/*/Mechanical') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Mechanical Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/*/*/Gas Piping') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Gas Piping Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/*/*/Exhaust Hood') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Exhaust Hood Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/*/*/Refrigeration') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Refrigeration Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/*/*/Fire Alarm') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Fire Alarm Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/*/*/Sprinkler System') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Fire Sprinkler System Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/*/*/Hood Suppression') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Fire Hood Suppression Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/*/*/Compressed Gas') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Fire Compressed Gas Cost', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/Fire/*/Other') && AInfo['Cost of Work'] != 0) {
		editAppSpecific('Fire Other Const. Cost ', AInfo['Cost of Work'], pCapId);
	}

	if (appMatch('*/Residential/*/*')) {
		EC = getAppSpecific('Electrical Cost', pCapId);
		PC = getAppSpecific('Plumbing Cost', pCapId);
		MC = getAppSpecific('Mechanical Cost', pCapId);
		GPC = getAppSpecific('Gas Piping Cost', pCapId);
		BC = getAppSpecific('Building Cost', pCapId);
	}

	if (appMatch('*/Residential/*/*')) {
		totalCost = parseInt(EC) + parseInt(PC) + parseInt(MC) + parseInt(GPC) + parseInt(BC);
		comment('TC = ' + totalCost);
	}

	if (appMatch('*/Commercial/*/*') || appMatch('*/Fire/Construction/*')) {
		EC = getAppSpecific('Electrical Cost', pCapId);
		PC = getAppSpecific('Plumbing Cost', pCapId);
		MC = getAppSpecific('Mechanical Cost', pCapId);
		GPC = getAppSpecific('Gas Piping Cost', pCapId);
		EH = getAppSpecific('Exhaust Hood Cost', pCapId);
		RE = getAppSpecific('Refrigeration Cost', pCapId);
		FAS = getAppSpecific('Fire Alarm Cost', pCapId);
		FSS = getAppSpecific('Fire Sprinkler System Cost', pCapId);
		FHS = getAppSpecific('Fire Hood Suppression Cost', pCapId);
		FCG = getAppSpecific('Fire Compressed Gas Cost', pCapId);
		FOC = getAppSpecific('Fire Other Const. Cost', pCapId);
		BC = getAppSpecific('Building Cost', pCapId);
	}

	if (appMatch('*/Commercial/*/*') || appMatch('*/Fire/Construction/*')) {
		totalCost = parseInt(EC) + parseInt(PC) + parseInt(MC) + parseInt(GPC) + parseInt(BC) + parseInt(EH) + parseInt(RE) + parseInt(FAS) + parseInt(FSS) + parseInt(FHS) + parseInt(FCG) + parseInt(FOC);
		comment('TC = ' + totalCost);
	}

	editAppSpecific('Total Project Valuation', totalCost, pCapId);

}
