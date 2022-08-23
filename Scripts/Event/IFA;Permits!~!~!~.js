if (appMatch('Permits/*/*/*') ) {
	var applicant = getApplicantInfo(capId);
	var recordURL = getACARecordURL(acaUrl);
	var emailParams = aa.util.newHashtable();
	addParameter (emailParams, "$$firstName$$", applicant.name);
	addParameter (emailParams, "$$RecordUrl$$", recordURL);

	sendNotification("noreply@ashevillenc.gov",applicant.email,"","INVOICE_NOTIFICATION",emailParams,null);
	
}