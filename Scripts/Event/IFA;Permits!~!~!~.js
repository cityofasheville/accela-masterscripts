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
	var architect = getArchitectInfo(capId);
	var recordURL = getACAUrl(capId);
	var ArchParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (ArchParams, "$$FirstName$$", architect.name);
	addParameter (ArchParams, "$$RecordUrl$$", recordURL);
	addParameter (ArchParams, "$$CapID$$", capIDString);
	addParameter (ArchParams,"$$Address$$", CapAddress)

	sendNotification("noreply@ashevillenc.gov",architect.email,"","INVOICE_NOTIFICATION",ArchParams,null);

}