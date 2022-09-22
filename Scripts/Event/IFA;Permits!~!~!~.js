if (appMatch('Permits/*/*/*') ) {
	var applicant = getApplicantInfo(capId);
	var recordURL = getACAUrl(capId);
	var emailParams = aa.util.newHashtable();
	addParameter (emailParams, "$$firstName$$", applicant.name);
	addParameter (emailParams, "$$RecordUrl$$", recordURL);
	addParameter (emailParams, "$$CapID$$", capIDString);

	sendNotification("noreply@ashevillenc.gov",applicant.email,"","INVOICE_NOTIFICATION",emailParams,null);
	
}

if (appMatch('Permits/*/*/*')) {
	var ArcEmailParams = aa.util.newHashtable();
	var architect = getContactParams4Notification(ArcEmailParams, "Architect");

	sendNotification("noreply@ashevillenc.gov", "$$email$$" ,"","INVOICE_NOTIFICATION",ArcEmailParams,null);


}