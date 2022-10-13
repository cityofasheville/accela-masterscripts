if (appMatch('Permits/*/*/*') ) {
	var applicant = getApplicantInfo(capId);
	var recordURL = getACAUrl(capId);
	var emailParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (emailParams, "$$firstName$$", applicant.name);
	addParameter (emailParams, "$$RecordUrl$$", recordURL);
	addParameter (emailParams, "$$CapID$$", capIDString);
	addParameter (emailParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Balance$$", balanceDue);

	sendNotification("noreply@ashevillenc.gov",applicant.email,"","PAYMENT_CONFIRMATION",emailParams,null);
	
}
//Invoice notification for Architect Contact type
if (appMatch('Permits/*/*/*')) {
	var architect = getArchitectInfo(capId);
	var recordURL = getACAUrl(capId);
	var ArchParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (ArchParams, "$$FirstName$$", architect.name);
	addParameter (ArchParams, "$$RecordUrl$$", recordURL);
	addParameter (ArchParams, "$$CapID$$", capIDString);
	addParameter (ArchParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Balance$$", balanceDue);

	sendNotification("noreply@ashevillenc.gov",architect.email,"","PAYMENT_CONFIRMATION",ArchParams,null);

}

if (appMatch('Permits/*/*/*')) {
	var contractor = getContractorInfo(capId);
	var recordURL = getACAUrl(capId);
	var ContrParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (ContrParams, "$$FirstName$$", contractor.name);
	addParameter (ContrParams, "$$RecordUrl$$", recordURL);
	addParameter (ContrParams, "$$CapID$$", capIDString);
	addParameter (ContrParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Balance$$", balanceDue);

	sendNotification("noreply@ashevillenc.gov",contractor.email,"","PAYMENT_CONFIRMATION",ContrParams,null);

}

if (appMatch('Permits/*/*/*')) {
	var civilEngineer = getCivilEngineerInfo(capId);
	var recordURL = getACAUrl(capId);
	var CivilParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (CivilParams, "$$FirstName$$", civilEngineer.name);
	addParameter (CivilParams, "$$RecordUrl$$", recordURL);
	addParameter (CivilParams, "$$CapID$$", capIDString);
	addParameter (CivilParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Balance$$", balanceDue);

	sendNotification("noreply@ashevillenc.gov",civilEngineer.email,"","PAYMENT_CONFIRMATION",CivilParams,null);

}

if (appMatch('Permits/*/*/*')) {
	var superintendent = getSuperintendentInfo(capId);
	var recordURL = getACAUrl(capId);
	var SupParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (SupParams, "$$FirstName$$", superintendent.name);
	addParameter (SupParams, "$$RecordUrl$$", recordURL);
	addParameter (SupParams, "$$CapID$$", capIDString);
	addParameter (SupParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Balance$$", balanceDue);

	sendNotification("noreply@ashevillenc.gov",superintendent.email,"","PAYMENT_CONFIRMATION",SupParams,null);

}

if (appMatch('Permits/*/*/*')) {
	var projectManager = getProjectManagerInfo(capId);
	var recordURL = getACAUrl(capId);
	var ProParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (ProParams, "$$FirstName$$", projectManager.name);
	addParameter (ProParams, "$$RecordUrl$$", recordURL);
	addParameter (ProParams, "$$CapID$$", capIDString);
	addParameter (ProParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Balance$$", balanceDue);

	sendNotification("noreply@ashevillenc.gov",projectManager.email,"","PAYMENT_CONFIRMATION",ProParams,null);

}

if (appMatch('Permits/*/*/*')) {
	var owner = getOwnerInfo(capId);
	var recordURL = getACAUrl(capId);
	var OwnParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (OwnParams, "$$FirstName$$", owner.name);
	addParameter (OwnParams, "$$RecordUrl$$", recordURL);
	addParameter (OwnParams, "$$CapID$$", capIDString);
	addParameter (OwnParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Balance$$", balanceDue);

	sendNotification("noreply@ashevillenc.gov",owner.email,"","PAYMENT_CONFIRMATION",OwnParams,null);

}

if (appMatch('Permits/*/*/*')) {
	var other = getOtherInfo(capId);
	var recordURL = getACAUrl(capId);
	var OthParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (OthParams, "$$FirstName$$", other.name);
	addParameter (OthParams, "$$RecordUrl$$", recordURL);
	addParameter (OthParams, "$$CapID$$", capIDString);
	addParameter (OthParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Balance$$", balanceDue);

	sendNotification("noreply@ashevillenc.gov",other.email,"","PAYMENT_CONFIRMATION",OthParams,null);

}

if (appMatch('Permits/*/*/*')) {
	var surveyor = getSurveyorInfo(capId);
	var recordURL = getACAUrl(capId);
	var SurParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);
	addParameter (SurParams, "$$FirstName$$", surveyor.name);
	addParameter (SurParams, "$$RecordUrl$$", recordURL);
	addParameter (SurParams, "$$CapID$$", capIDString);
	addParameter (SurParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Balance$$", balanceDue);

	sendNotification("noreply@ashevillenc.gov",surveyor.email,"","PAYMENT_CONFIRMATION",SurParams,null);

}