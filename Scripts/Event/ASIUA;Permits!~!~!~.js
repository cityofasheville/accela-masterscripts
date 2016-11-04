
if (AInfo['Total Cost of Work'] != null) {
	aa.finance.reCalculateFees(capId, 'CONT', AInfo['Total Cost of Work']);
}

capOwnerModel = getCapOwnerByName('CITY OF ASHEVILLE');
if (capOwnerModel) {
	//start replaced branch: ES_OWNER_IS_CITY_COND
	{
		if (AInfo['Total Project Valuation'] > 99999 && !appHasCondition('PAC', null, 'CO HOLD - GS 133-1.1', null)) {
			addStdCondition('PAC', 'CO HOLD - GS 133-1.1');
			comment('Condition was added');
		}

	}
	//end replaced branch: ES_OWNER_IS_CITY_COND;
}

capOwnerModel2 = getCapOwnerByName('THE CITY OF ASHEVILLE');
if (capOwnerModel2) {
	//start replaced branch: ES_OWNER_IS_CITY_COND
	{
		if (AInfo['Total Project Valuation'] > 99999 && !appHasCondition('PAC', null, 'CO HOLD - GS 133-1.1', null)) {
			addStdCondition('PAC', 'CO HOLD - GS 133-1.1');
			comment('Condition was added');
		}

	}
	//end replaced branch: ES_OWNER_IS_CITY_COND;
}

capOwnerModel3 = getCapOwnerByName('ASHEVILLE BUNC WATER AUTHORITY');
if (capOwnerModel3) {
	//start replaced branch: ES_OWNER_IS_CITY_COND
	{
		if (AInfo['Total Project Valuation'] > 99999 && !appHasCondition('PAC', null, 'CO HOLD - GS 133-1.1', null)) {
			addStdCondition('PAC', 'CO HOLD - GS 133-1.1');
			comment('Condition was added');
		}

	}
	//end replaced branch: ES_OWNER_IS_CITY_COND;
}

capOwnerModel4 = getCapOwnerByName('CITY OF ASHEVILLE WATER AUTHORITY ');
if (capOwnerModel4) {
	//start replaced branch: ES_OWNER_IS_CITY_COND
	{
		if (AInfo['Total Project Valuation'] > 99999 && !appHasCondition('PAC', null, 'CO HOLD - GS 133-1.1', null)) {
			addStdCondition('PAC', 'CO HOLD - GS 133-1.1');
			comment('Condition was added');
		}

	}
	//end replaced branch: ES_OWNER_IS_CITY_COND;
}

// DISABLED: ApplicationSpecificInfoUpdateAfter:99
//if (appMatch('Permits/Right of Way/Cuts/NA')) {
//	br_nch('ES_CUT_TOTALS');
//	}
