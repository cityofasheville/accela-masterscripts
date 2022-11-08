//commented out as per Chris 5/2/18
//if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
//	email('ccollins@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
//	}
//
if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
	email('hmahoney@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
	}

// 4/27/22 jtwilson New version
 if (publicUser && appMatch('*/*/*/Home Stay')) {
 	var emailSubj = "Payment Received -- Instructions for Scheduling Your Inspection"
 	var emailBody = '<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' 
 	+ capIDString + ' <br>Location: ' + CapAddress
 	+ '<br><p>'

	+ ' Hello, we have received your payment and your homestay application has been approved, pending inspection. Please click the link below to schedule your inspection: '
	+ '</p><p>'
	+ ' <a href="https://www.jotform.com/build/202533942220142">https://www.jotform.com/build/202533942220142</a>'
	+ '</p><p>'
	+ '<span style="color:red">'
	+ ' This will be an on-site inspection of the homestay area. The primary permit applicant must be present at the inspection.  '
	+ '</span>'
	+ '</p><p>'
	+ ' A homestay permit will be issued once your property passes this remote inspection, and will be valid until you wish to close the permit. '
	+ ' <b>If anything changes with ownership, layout, or hosting of the homestay, please contact homestayinspections@ashevillenc.gov to discuss how to document these changes. </b>' 
	+ '</p><p>'
	+ ' If you have any questions, please reach out. Thank you. '
	+ ' </p><hr></body></html>'
	 var staffEmail = 'hmahoney@ashevillenc.gov'
 	emailAllContacts(emailSubj, emailBody, staffEmail)
 }	
//added 9/13 by JH
 if (publicUser && appMatch('*/*/*/Noise')) {
 		email('noise@ashevillenc.gov','noreply@ashevillenc.gov','Noise Payment Made '+capIDString+' Payment Applied','A payment has been applied on the Noise record '+capIDString+' and it requires your attention.');
	}


	if (appMatch('Planning/*/*/*') ) {
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
	if (appMatch('Planning/*/*/*')) {
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
	
	if (appMatch('Planning/*/*/*')) {
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
	
	if (appMatch('Planning/*/*/*')) {
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
	
	if (appMatch('Planning/*/*/*')) {
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
	
	if (appMatch('Planning/*/*/*')) {
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
	
	if (appMatch('Planning/*/*/*')) {
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
	
	if (appMatch('Planning/*/*/*')) {
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
	
	if (appMatch('Planning/*/*/*')) {
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