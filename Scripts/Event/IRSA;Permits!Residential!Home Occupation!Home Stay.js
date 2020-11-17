
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

// HomeStay set expiration date = in compliance date + 1 year 11/17/2020
//////////////////////////////
if (inspType == 'ZO-HOMESTAY RENEWAL' && matches(inspResult, 'Approved') || inspType == 'ZO-HOMESTAY' && matches(inspResult, 'Approved')) {
  var workflowResult = aa.workflow.getTasks(capId);
  if (workflowResult.getSuccess()) {
	      var wfObj = workflowResult.getOutput();
    for (i in wfObj) {
      fTask = wfObj[i];
      for (j in fTask) {
        if (j == "resTaskDescription" && fTask[j] == "Inspections") {
          if (fTask.getStatusDate()) {
            var statusDate = fTask.getStatusDate();
            var statusOneYear = dateAddMonths(statusDate, 12)
            editAppSpecific('EXPIRATION DATE', statusOneYear);
          }
        }
      }
    }
  }
}
