//Invoice notification for Applicant Contact type
if (appMatch('Planning/*/*/*') ) {
	var applicant = getApplicantInfo(capId);
	var recordURL = getACAUrl(capId);
	var emailParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (emailParams, "$$firstName$$", applicant.name);
	addParameter (emailParams, "$$RecordUrl$$", recordURL);
	addParameter (emailParams, "$$CapID$$", capIDString);
	addParameter (emailParams,"$$Address$$", CapAddress);

	sendNotification("noreply@ashevillenc.gov",applicant.email,"","INVOICE_NOTIFICATION",emailParams,null);
	
}
//Invoice notification for Architect Contact type
if (appMatch('Planning/*/*/*')) {
	var architect = getArchitectInfo(capId);
	var recordURL = getACAUrl(capId);
	var ArchParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (ArchParams, "$$FirstName$$", architect.name);
	addParameter (ArchParams, "$$RecordUrl$$", recordURL);
	addParameter (ArchParams, "$$CapID$$", capIDString);
	addParameter (ArchParams,"$$Address$$", CapAddress);

	sendNotification("noreply@ashevillenc.gov",architect.email,"","INVOICE_NOTIFICATION",ArchParams,null);

}

if (appMatch('Planning/*/*/*')) {
	var contractor = getContractorInfo(capId);
	var recordURL = getACAUrl(capId);
	var ContrParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (ContrParams, "$$FirstName$$", contractor.name);
	addParameter (ContrParams, "$$RecordUrl$$", recordURL);
	addParameter (ContrParams, "$$CapID$$", capIDString);
	addParameter (ContrParams,"$$Address$$", CapAddress);

	sendNotification("noreply@ashevillenc.gov",contractor.email,"","INVOICE_NOTIFICATION",ContrParams,null);

}

if (appMatch('Planning/*/*/*')) {
	var civilEngineer = getCivilEngineerInfo(capId);
	var recordURL = getACAUrl(capId);
	var CivilParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (CivilParams, "$$FirstName$$", civilEngineer.name);
	addParameter (CivilParams, "$$RecordUrl$$", recordURL);
	addParameter (CivilParams, "$$CapID$$", capIDString);
	addParameter (CivilParams,"$$Address$$", CapAddress);

	sendNotification("noreply@ashevillenc.gov",civilEngineer.email,"","INVOICE_NOTIFICATION",CivilParams,null);

}

if (appMatch('Planning/*/*/*')) {
	var superintendent = getSuperintendentInfo(capId);
	var recordURL = getACAUrl(capId);
	var SupParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (SupParams, "$$FirstName$$", superintendent.name);
	addParameter (SupParams, "$$RecordUrl$$", recordURL);
	addParameter (SupParams, "$$CapID$$", capIDString);
	addParameter (SupParams,"$$Address$$", CapAddress);

	sendNotification("noreply@ashevillenc.gov",superintendent.email,"","INVOICE_NOTIFICATION",SupParams,null);

}

if (appMatch('Planning/*/*/*')) {
	var projectManager = getProjectManagerInfo(capId);
	var recordURL = getACAUrl(capId);
	var ProParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (ProParams, "$$FirstName$$", projectManager.name);
	addParameter (ProParams, "$$RecordUrl$$", recordURL);
	addParameter (ProParams, "$$CapID$$", capIDString);
	addParameter (ProParams,"$$Address$$", CapAddress);

	sendNotification("noreply@ashevillenc.gov",projectManager.email,"","INVOICE_NOTIFICATION",ProParams,null);

}

if (appMatch('Planning/*/*/*')) {
	var owner = getOwnerInfo(capId);
	var recordURL = getACAUrl(capId);
	var OwnParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (OwnParams, "$$FirstName$$", owner.name);
	addParameter (OwnParams, "$$RecordUrl$$", recordURL);
	addParameter (OwnParams, "$$CapID$$", capIDString);
	addParameter (OwnParams,"$$Address$$", CapAddress);

	sendNotification("noreply@ashevillenc.gov",owner.email,"","INVOICE_NOTIFICATION",OwnParams,null);

}

if (appMatch('Planning/*/*/*')) {
	var other = getOtherInfo(capId);
	var recordURL = getACAUrl(capId);
	var OthParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (OthParams, "$$FirstName$$", other.name);
	addParameter (OthParams, "$$RecordUrl$$", recordURL);
	addParameter (OthParams, "$$CapID$$", capIDString);
	addParameter (OthParams,"$$Address$$", CapAddress);

	sendNotification("noreply@ashevillenc.gov",other.email,"","INVOICE_NOTIFICATION",OthParams,null);

}

if (appMatch('Planning/*/*/*')) {
	var surveyor = getSurveyorInfo(capId);
	var recordURL = getACAUrl(capId);
	var SurParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (SurParams, "$$FirstName$$", surveyor.name);
	addParameter (SurParams, "$$RecordUrl$$", recordURL);
	addParameter (SurParams, "$$CapID$$", capIDString);
	addParameter (SurParams,"$$Address$$", CapAddress);

	sendNotification("noreply@ashevillenc.gov",surveyor.email,"","INVOICE_NOTIFICATION",SurParams,null);

}