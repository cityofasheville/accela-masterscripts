//start replaced branch: APP_SA_BRANCH_PLANNING
// DISABLED: APP_SA_BRANCH_PLANNING:1
//copyParcelGisObjects();
// DISABLED: APP_SA_BRANCH_PLANNING:2
//br_nch('ES_GET_PARCEL_ATTRIBUTES');
if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Non Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Planning/Variance/*/*')) && AInfo['ParcelAttribute.RIVER DISTRICT'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'River District Design Review', ' ', 'MCARD');
}

if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Non Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Planning/Variance/*/*')) && AInfo['ParcelAttribute.DTDR OVERLAY'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'Downtown Design Review', ' ', 'SVRTUNSKI');
}

if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Non Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Planning/Variance/*/*')) && AInfo['ParcelAttribute.HRC OVERLAY'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'HRC Overlay', ' ', 'ACOLE');
}

if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Non Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Planning/Variance/*/*')) && AInfo['ParcelAttribute.FLOOD PLAIN'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'Flood', ' ', 'STWTTBD');
}

if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Non Development/*/*') || appMatch('Planning/Subdivision/*/*')) && AInfo['ParcelAttribute.STEEP SLOPE'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'Steep Slope', ' ', 'PZPRTBD');
}

if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Non Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Planning/Variance/*/*')) && AInfo['ParcelAttribute.LANDMARK'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'Landmark', ' ', 'ACOLE');
}

if ((appMatch('*/*/Annexation/*') || appMatch('*/*/Landmark/*') || appMatch('*/*/Map Amendments/*') || appMatch('*/*/Rezoning/*') || appMatch('*/*/Text Amendments/*'))) {
	addAdHocTask('ADHOC TASKS', 'NC Dept of Cultural Resources', ' ', 'ACOLE');
}

}
//end replaced branch: APP_SA_BRANCH_PLANNING;
