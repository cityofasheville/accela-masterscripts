editAppSpecific('Permit Expiration Date', dateAdd(null, 180));
if (!appMatch('Permits/*/Reroof/*')) {
	closeTask('Application Process', 'Issue', 'Web Permit Issued on Submittal');
}

if (appMatch('Permits/*/Reroof/*')) {
	branchTask('Application Process', 'Issue', 'Web Permit Issued on Submittal');
}

if (appMatch('*/*/*/Repair-Replacement')) {
	//replaced branch(ES_ADD_PEND_ACA_REPAIR)
	ES_ADD_PEND_ACA_REPAIR();
}

if (!appMatch('*/*/*/Repair-Replacement') && !appMatch('Permits/*/Trade/Multi-Trade') && !appMatch('Permits/Sign/*/*')) {
	createPendingInspFromReqd();
}

if (appMatch('*/*/*/Multi-Trade') && AInfo['Electrical Permit'] == 'Yes') {
	createPendingInspection('MULTI', 'EE-FINAL');
}

if (appMatch('*/*/*/Multi-Trade') && AInfo['Mechanical Permit'] == 'Yes') {
	createPendingInspection('MULTI', 'ME-FINAL');
}

if (appMatch('*/*/*/Multi-Trade') && AInfo['Gas Piping Permit'] == 'Yes') {
	createPendingInspection('MULTI', 'GP-FINAL');
}

if (appMatch('*/*/*/Multi-Trade') && AInfo['Plumbing Permit'] == 'Yes') {
	createPendingInspection('MULTI', 'PL-FINAL');
}

if (appMatch('*/*/*/Multi-Trade')) {
	createPendingInspection('MULTI', 'FINAL FINAL');
}

if (appMatch('Permits/Sign/Face Change/NA')) {
	scheduleInspectDate('ZO-FINAL', dateAdd(null, 45), null, null, 'Scheduled by Script.');
}

if (appMatch('Permits/Sign/Temporary/NA')) {
	scheduleInspectDate('ZO-EXPIRATION CHECK', dateAdd(null, 45), null, null, 'Scheduled by Script - Please review permit validity and update record status.');
}

if (appMatch('*/*/*/Repair-Replacement')) {
	email('Mike.Matthews@buncombecounty.org', 'noreply@ashevillenc.gov', 'ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA please review scope of work and update Accela');
}

if (appMatch('*/Commercial/*/Repair-Replacement')) {
	email('khinz@ashevillenc.gov', 'noreply@ashevillenc.gov', 'ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA please review scope of work and update Accela');
}

if (appMatch('*/Commercial/*/Repair-Replacement')) {
	email('jpayne@ashevillenc.gov', 'noreply@ashevillenc.gov', 'ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA please review scope of work and update Accela');
}
// Removed when Frank switched to Stormwater
//if (appMatch('*/*/*/Repair-Replacement')) {
//	email('frapp@ashevillenc.gov', 'noreply@ashevillenc.gov', 'ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA please review scope of work.');
//}

//Commented out as per Chris 5/2/18
//if (appMatch('Services/Project Inquiry/Meeting Request/NA')) {
//	email('ccollins@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Early Assistance' + capIDString + ' Requested', 'A new Early Assistance record ' + capIDString + ' has been created and requires your attention.');
//}
//
//if (appMatch('Services/Project Inquiry/Meeting Request/NA')) {
//	email('cshort@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Early Assistance' + capIDString + ' Requested', 'A new Early Assistance record ' + capIDString + ' has been created and requires your attention.');
//}

// Previous line below commented out 4/18/18 and replaced with the multiple rows at the end of this script
// email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA');

// Begin added all below to break out emails according to Susannah 4/18/18

//added 7/8/19 as per Misty to email her on ALL online permits
if (appMatch('*/*/*/*')) {
	email('MLipe@ashevillenc.gov', 'noreply@ashevillenc.gov', 'ACA Permit Created Online', 'The following permit, ' + capIDString + ' was just created in ACA. Please verify that it was pulled appropriately.');
}

if (appMatch('*/*/*/Repair-Replacement')) {
	email('MLipe@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Repair-Replace ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA. Please verify that it was pulled appropriately.');
	email('SSalyer@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Repair-Replace ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA. Please verify that it was pulled appropriately.');
}

if (appMatch('*/*/*/Multi-Trade')) {
	email('KAkabar2@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Multi-Trade ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA. Please verify that it was pulled appropriately.');
	email('TGordon@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Multi-Trade ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA. Please verify that it was pulled appropriately.');
}

if (appMatch('Permits/Sign/*/*')) {
	email('RHurley@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Sign ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA. Please verify that it was pulled appropriately.');
	// changed below from talley 8/16/18
	email('GMiser@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Sign ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA. Please verify that it was pulled appropriately.');
}

if (appMatch('Permits/*/Reroof/*')) {
	email('MLipe@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Reroof ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA. Please verify that it was pulled appropriately.');
	email('SSalyer@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Reroof ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA. Please verify that it was pulled appropriately.');
}
// End added emails

