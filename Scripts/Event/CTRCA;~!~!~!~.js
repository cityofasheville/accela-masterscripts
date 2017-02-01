
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
	email('jpayne@ashevillenc.gov', 'noreply@ashevillenc.gov', 'ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA please review scope of work and update Accela');
}

if (appMatch('*/*/*/Repair-Replacement')) {
	email('frapp@ashevillenc.gov', 'noreply@ashevillenc.gov', 'ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA please review scope of work.');
}

if (appMatch('Services/Project Inquiry/Meeting Request/NA')) {
	email('ccollins@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Early Assistance' + capIDString + ' Requested', 'A new Early Assistance record ' + capIDString + ' has been created and requires your attention.');
}

if (appMatch('Services/Project Inquiry/Meeting Request/NA')) {
	email('cshort@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Early Assistance' + capIDString + ' Requested', 'A new Early Assistance record ' + capIDString + ' has been created and requires your attention.');
}

email('rroe@ashevillenc.gov', 'mlipe@ashevillenc.gov', 'noreply@ashevillenc.gov', 'ACA Permit Created', 'The following permit, ' + capIDString + ' was just created in ACA');
