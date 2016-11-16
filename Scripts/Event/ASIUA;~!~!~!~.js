

if (appMatch('*/*/Trade/*') || appMatch('*/Fire/Construction/*')) {
	pCapId = getParent();
	//replaced branch(ES_UPDATE_PARENT_COST)
	ES_UPDATE_PARENT_COST();
}

if (AInfo['Jurisdiction'] == null) {
	//replaced branch(ES_GET_PARCEL_ATTRIBUTES)
	ES_GET_PARCEL_ATTRIBUTES();
}


if (appMatch("Services/*/Fee Calculator/*")) {
	updateSiteFees();
	updateCommercialBuildingFees();
	updateMiscFees();
}
