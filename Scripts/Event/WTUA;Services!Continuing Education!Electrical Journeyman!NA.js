	//start replaced branch: WORKFLOW_UA_SERVICES
	{
		if (wfTask == 'Issuance' && matches(wfStatus, 'Inactive')) {
			editAppSpecific('Expired Date', dateAdd(null, 365));
		}

		if (wfTask == 'Issuance' && matches(wfStatus, 'Issue')) {
			editAppSpecific('Inactive Date', dateAdd(null, 1095));
		}

	}
	//end replaced branch: WORKFLOW_UA_SERVICES;
