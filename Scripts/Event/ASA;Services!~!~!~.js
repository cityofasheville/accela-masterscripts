//start replaced branch: APP_SA_BRANCH_SERVICES

// DISABLED: APP_SA_BRANCH_SERVICES:1
//copyParcelGisObjects();
// DISABLED: APP_SA_BRANCH_SERVICES:2
//br_nch('ES_GET_PARCEL_ATTRIBUTES');
if (appMatch('Services/Complaint-Enforcement/*/*') && AInfo['ParcelAttribute.RIVER DISTRICT'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'River District Design Review', ' ', 'SMONSON');
}

if (appMatch('Services/Complaint-Enforcement/*/*') && AInfo['ParcelAttribute.DTDR OVERLAY'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'Downtown Design Review', ' ', 'SVRTUNSKI');
}

if (appMatch('Services/Complaint-Enforcement/*/*') && AInfo['ParcelAttribute.HRC OVERLAY'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'HRC Overlay', ' ', 'ACOLE');
}

if (appMatch('Services/Complaint-Enforcement/*/*') && AInfo['ParcelAttribute.STEEP SLOPE'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'Steep Slope', ' ', 'PZPRTBD');
}

if (appMatch('Services/Complaint-Enforcement/*/*') && AInfo['ParcelAttribute.FLOOD PLAIN'] == 'Yes') {
	addAdHocTask('ADHOC TASKS', 'Flood', ' ', 'STWTTBD');
}

if (appMatch('Services/Complaint-Enforcement/*/*')) {
	scheduleInspectDate('ENF-FOLLOW UP', dateAdd(null, 14), null, null, 'Scheduled by Script');
}

if (!appMatch('Permits/*/Existing Building/Reroof') && (appMatch('Permits/*/New Building/*') || appMatch('Permits/*/Existing Building/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Site Work/*')) && AInfo['ParcelAttribute.RIVER DISTRICT'] == 'Yes') {
	email('smonson@ashevillenc.gov', 'noreply@ashevillenc.gov', 'River District Design Review Task', 'River District Design Review task assigned. ' + capIDString + ' - Please check Accela and update the record status.');
}

//end replaced branch: APP_SA_BRANCH_SERVICES;
