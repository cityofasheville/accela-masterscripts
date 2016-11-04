
//start replaced branch: ES_IRSA_HSTAY

if (matches(inspResult, 'Disapproved', 'Renewal Disapproved')) {
	createPendingInspection(inspGroup, inspType);
}

if (inspType == 'ZO-HOMESTAY RENEWAL' && matches(inspResult, 'Approved')) {
	updateTask('Inspections', 'Renewed', 'Updated by IRSA Script');
}

if (inspType == 'ZO-HOMESTAY' && matches(inspResult, 'Approved')) {
	updateTask('Inspections', 'In Compliance', 'Updated by IRSA Script');
}

if (inspType == 'ZO-HOMESTAY RENEWAL' && matches(inspResult, 'Approved')) {
	scheduleInspectDate('ZO-HOMESTAY RENEWAL', dateAdd(null, 360), null, null, 'Scheduled by Script - Make contact with applicant to confirm inspection availability.');
}

if (inspType == 'ZO-HOMESTAY' && matches(inspResult, 'Approved')) {
	scheduleInspectDate('ZO-HOMESTAY RENEWAL', dateAdd(null, 360), null, null, 'Scheduled by Script - Make contact with applicant to confirm inspection availability.');
}

//end replaced branch: ES_IRSA_HSTAY;
