//start replaced branch: APP_SA_BRANCH_PLANNING
// DISABLED: APP_SA_BRANCH_PLANNING:1
//copyParcelGisObjects();
// DISABLED: APP_SA_BRANCH_PLANNING:2
//br_nch('ES_GET_PARCEL_ATTRIBUTES');

if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Non Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Planning/Variance/*/*')) && AInfo['ParcelAttribute.RIVER DISTRICT'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'River District Design Review', ' ', 'SMONSON');
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

//Added 6/20/19 matching HRC Overlay email in ASA Permits -jon
if (appMatch('Planning/*/Minor Work/*') && AInfo['ParcelAttribute.HRC OVERLAY'] == 'Yes') {
	email('acole@ashevillenc.gov', 'noreply@ashevillenc.gov', 'HRC Overlay Task', 'HRC Overlay Review task assigned. ' + capIDString + ' - Please check Accela and update the record status.');
}

//5-24-16 - when a parcel is located in a central business district, create add-hoc tasks:
//5/24/2019 As per Chris, Susannah, we don't need these, and associated tasks have been deleted
//if (appMatch('Planning/Development/*/*') && AInfo['ParcelAttribute.ZONING DISTRICT'] == 'CBD,') {
//	addAdHocTask('ADHOC TASKS', 'Encroachment Agreement', ' ', 'JBOONE'); //James Boone
 //       addAdHocTask('ADHOC TASKS', 'Granite - Running Bond', ' ', 'PWTBD'); //Public Works, To Be Determined
//}

//end replaced branch: APP_SA_BRANCH_PLANNING;
