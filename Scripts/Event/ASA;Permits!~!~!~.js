// // ASA;Permits/*/*/*   --- as modified by Ray Schug 040320
//start replaced branch: APP_SA_BRANCH_PERMITS

// DISABLED: APP_SA_BRANCH_PERMITS:1
//copyParcelGisObjects();
// DISABLED: APP_SA_BRANCH_PERMITS:2
//br_nch('ES_GET_PARCEL_ATTRIBUTES');

//start replaced branch: ES_MOVE_WORKDESC_SHORTNOTES
{
	theLength = workDescGet(capId).length();
	if (theLength > 50) {
		theLength = 50;
	}

	if (theLength > 0) {
		updateShortNotes(workDescGet(capId).substring(0, theLength));
	}

}
//end replaced branch: ES_MOVE_WORKDESC_SHORTNOTES;
if (publicUser)
	logDebug("Skipping River District Review Check for publicUserID: " + publicUserID)
else {
	if ((appMatch('Permits/*/Existing Building/*') || appMatch('Permits/*/New Building/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Site Work/*') || appMatch('Permits/Sign/Stand Alone/*')) && AInfo['ParcelAttribute.RIVER DISTRICT'] == 'Yes') {
		addAdHocTask('ADHOC TASKS', 'River District Design Review', ' ', 'WPALMQUIST');
	}


	if (!appMatch('Permits/*/Existing Building/Reroof') && (appMatch('Permits/*/Existing Building/*') || appMatch('Permits/*/New Building/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Site Work/*')) && AInfo['ParcelAttribute.DTDR OVERLAY'] == 'Yes') {
		addAdHocTask('ADHOC TASKS', 'Downtown Design Review', ' ', 'WPALMQUIST');
	}

	if ((appMatch('Permits/*/Existing Building/*') || appMatch('Permits/*/New Building/*') || appMatch('*/*/Reroof/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Site Work/*') || appMatch('Permits/Sign/Stand Alone/*')) && AInfo['ParcelAttribute.HRC OVERLAY'] == 'Yes') {
		addAdHocTask('ADHOC TASKS', 'HRC Overlay', ' ', 'ACOLE');
	}

	if ((appMatch('Permits/*/Existing Building/*') || appMatch('Permits/*/New Building/*') || appMatch('*/*/Reroof/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Construction Trailer/*') || appMatch('Permits/*/Site Work/*') || appMatch('Permits/Sign/Stand Alone/*')) && AInfo['ParcelAttribute.FLOOD PLAIN'] == 'Yes') {
		addAdHocTask('ADHOC TASKS', 'Flood', ' ', 'STWTTBD');
	}

	if ((appMatch('Permits/*/Existing Building/Addition') || appMatch('Permits/*/Existing Building/Alterations w Addition') || appMatch('Permits/*/New Building/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Site Work/*')) && AInfo['ParcelAttribute.STEEP SLOPE'] == 'Yes') {
		addAdHocTask('ADHOC TASKS', 'Steep Slope', ' ', 'PZPRTBD');
	}

	if ((appMatch('Permits/*/Existing Building/*') || appMatch('Permits/*/New Building/*') || appMatch('*/*/Reroof/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Site Work/*') || appMatch('Permits/Sign/Stand Alone/*')) && AInfo['ParcelAttribute.LANDMARK'] == 'Yes') {
		addAdHocTask('ADHOC TASKS', 'Landmark', ' ', 'ACOLE');
	}

	if (!appMatch('Permits/*/Existing Building/Reroof') && (appMatch('Permits/*/New Building/*') || appMatch('Permits/*/Existing Building/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Site Work/*')) && AInfo['ParcelAttribute.DTDR OVERLAY'] == 'Yes') {
		email('wpalmquist@ashevillenc.gov', 'noreply@ashevillenc.gov', 'DTDR Task', 'Downtown Design Review task assigned. ' + capIDString + ' - Please check Accela and update the record status.');
	}

	if ((appMatch('Permits/*/Existing Building/*') || appMatch('Permits/*/New Building/*') || appMatch('*/*/Reroof/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Construction Trailer/*') || appMatch('Permits/*/Site Work/*') || appMatch('Permits/Sign/Stand Alone/*')) && AInfo['ParcelAttribute.LANDMARK'] == 'Yes') {
		email('acole@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Landmark Task', 'Landmark Review task assigned. ' + capIDString + ' - Please check Accela and update the record status.');
	}

	if ((appMatch('Permits/*/Existing Building/*') || appMatch('Permits/*/New Building/*') || appMatch('*/*/Reroof/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Construction Trailer/*') || appMatch('Permits/*/Site Work/*') || appMatch('Permits/Sign/Stand Alone/*')) && AInfo['ParcelAttribute.HRC OVERLAY'] == 'Yes') {
		email('acole@ashevillenc.gov', 'noreply@ashevillenc.gov', 'HRC Overlay Task', 'HRC Overlay Review task assigned. ' + capIDString + ' - Please check Accela and update the record status.');
	}

	if (!appMatch('Permits/*/Existing Building/Reroof') && (appMatch('Permits/*/New Building/*') || appMatch('Permits/*/Existing Building/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Site Work/*')) && AInfo['ParcelAttribute.RIVER DISTRICT'] == 'Yes') {
		email('wpalmquist@ashevillenc.gov', 'noreply@ashevillenc.gov', 'River District Design Review Task', 'River District Design Review task assigned. ' + capIDString + ' - Please check Accela and update the record status.');
	}

	capOwnerModel = getCapOwnerByName('CITY OF ASHEVILLE');
	if (capOwnerModel) {
		//start replaced branch: ES_OWNER_IS_CITY
		{
			addAdHocTask('ADHOC TASKS', 'City Manager Signature', ' ', 'SCARVER');
			if (AInfo['Total Project Valuation'] > 99999) {
				addStdCondition('PAC', 'CO HOLD - GS 133-1.1');
				comment('Condition was added');
			}

		}
		//end replaced branch: ES_OWNER_IS_CITY;
	}

	capOwnerModel2 = getCapOwnerByName('THE CITY OF ASHEVILLE');
	if (capOwnerModel2) {
		//start replaced branch: ES_OWNER_IS_CITY
		{
			addAdHocTask('ADHOC TASKS', 'City Manager Signature', ' ', 'SCARVER');
			if (AInfo['Total Project Valuation'] > 99999) {
				addStdCondition('PAC', 'CO HOLD - GS 133-1.1');
				comment('Condition was added');
			}

		}
		//end replaced branch: ES_OWNER_IS_CITY;
	}

	capOwnerModel3 = getCapOwnerByName('ASHEVILLE BUNC WATER AUTHORITY');
	if (capOwnerModel3) {
		//start replaced branch: ES_OWNER_IS_CITY
		{
			addAdHocTask('ADHOC TASKS', 'City Manager Signature', ' ', 'SCARVER');
			if (AInfo['Total Project Valuation'] > 99999) {
				addStdCondition('PAC', 'CO HOLD - GS 133-1.1');
				comment('Condition was added');
			}

		}
		//end replaced branch: ES_OWNER_IS_CITY;
	}

	capOwnerModel4 = getCapOwnerByName('CITY OF ASHEVILLE WATER AUTHORITY ');
	if (capOwnerModel4) {
		//start replaced branch: ES_OWNER_IS_CITY
		{
			addAdHocTask('ADHOC TASKS', 'City Manager Signature', ' ', 'SCARVER');
			if (AInfo['Total Project Valuation'] > 99999) {
				addStdCondition('PAC', 'CO HOLD - GS 133-1.1');
				comment('Condition was added');
			}

		}
		//end replaced branch: ES_OWNER_IS_CITY;
	}

	if ((appMatch('Permits/Commercial/Existing Building/Additions') || appMatch('Permits/Commercial/Existing Building/Alterations') || appMatch('Permits/Commercial/Trade/Plumbing') || appMatch('Permits/Commercial/Existing Building/Alterations w Addition') || appMatch('Permits/Commercial/Existing Building/Landlord Improvements') || appMatch('Permits/Commercial/New Building/*')) && AInfo['ParcelAttribute.HRC OVERLAY'] != 'Yes') {
		email('backflowmailbox@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Application ' + capIDString + ' created', 'Permit Application ' + capIDString + ' has been created for proposed work on a commercial building located at ' + CapAddress + ' . Please communicate Cross Connection requirements back to the PAC general mailbox. Thank you.');
	}

	if ((appMatch('Permits/Commercial/Existing Building/Additions') || appMatch('Permits/Commercial/Existing Building/Alterations') || appMatch('Permits/Commercial/Trade/Plumbing') || appMatch('Permits/Commercial/Existing Building/Alterations w Addition') || appMatch('Permits/Commercial/Existing Building/Landlord Improvements') || appMatch('Permits/Commercial/New Building/*')) && AInfo['ParcelAttribute.HRC OVERLAY'] == 'Yes') {
		email('backflowmailbox@ashevillenc.gov', 'noreply@ashevillenc.gov', 'HISTORIC DISTRICT Application ' + capIDString + ' created', 'Permit Application ' + capIDString + ' has been created for proposed work on a commercial building IN THE HISTORIC DISTRICT located at ' + CapAddress + ' . Please communicate Cross Connection requirements back to the PAC general mailbox. Thank you.');
	}


	if (appMatch('Permits/Residential/*/*') || appMatch('Permits/Event-Temporary Use/NA/NA') || appMatch('Permits/Over The Counter/Work After Hours/NA') || appMatch('Permits/Sign/Stand Alone/NA') || appMatch('Permits/Commercial/Construction Trailer/NA')) {
		editPriority('Level I');
	}

	if ((appMatch('*/*/Trade/*') || appMatch('*/Fire/Construction/*'))) {
		pCapId = getParent();
		if (pCapId) {

			//replaced branch(ES_UPDATE_PARENT_COST)
			ES_UPDATE_PARENT_COST();
		}
	}
	//Added 8/29/19 to reflect new Master Site Permit field in Admin Details
	if (appMatch('Permits/Residential/New Building/*') || appMatch('Permits/Residential/Accessory Structure/*')) {
		if (AInfo['Master Site Permit'] != 'NA') {
			setTask('Close Out Process', 'Y', 'N', 'MASTER-RES');
			setTask('Master Site Compliance', 'Y', 'N', 'CLOSE OUT');
		}
	}

	//end replaced branch: APP_SA_BRANCH_PERMITS;

	// added 8/30/19 as per Misty
	if (appMatch('Permits/Residential/Existing Building/Alterations w Addition') || appMatch('Permits/Residential/Existing Building/Alterations') || appMatch('Permits/Residential/Existing Building/Repair-Replacement')) {
		createPendingInspection('R_MASTER', 'BU-FRAMING');
		createPendingInspection('R_MASTER', 'BU-INSULATION');
	}
}

// added 8/11/22 -Jon
if (appMatch('Permits/*/Demolition/*')) {
	var applicant = getApplicantInfo(capId);
	var architect = getArchitectInfo(capId);
	var contractor = getContractorInfo(capId);
	var superintendent = getSuperintendentInfo(capId);
	var civilEngineer = getCivilEngineerInfo(capId);
	var projectManager = getProjectManagerInfo(capId);
	var owner = getOwnerInfo(capId);
	var other = getOtherInfo(capId);
	var recordURL = getACAUrl(capId);
	var surveyor = getSurveyorInfo(capId);
	var emailParams = aa.util.newHashtable();
	var CapAddress = getCapAddress(capId);

	addParameter (emailParams, "$$FirstName$$", applicant.name);
	addParameter (emailParams, "$$RecordUrl$$", recordURL);
	addParameter (emailParams, "$$CapID$$", capIDString);
	addParameter (emailParams,"$$Phone$$", applicant.phone)
	addParameter (emailParams,"$$Address$$", CapAddress);
	addParameter (emailParams,"$$Email$$", applicant.email);

	addParameter (emailParams, "$$ArchFirstName$$", architect.name);
	addParameter (emailParams,"$$ArchEmail$$", architect.email);
	addParameter (emailParams,"$$ArchPhone$$", architect.phone);

	addParameter (emailParams, "$$ContrFirstName$$", contractor.name);
	addParameter (emailParams,"$$ContrEmail$$", contractor.email);
	addParameter (emailParams,"$$ContrPhone$$", contractor.phone);

	addParameter (emailParams, "$$CivilFirstName$$", civilEngineer.name);
	addParameter (emailParams,"$$CivilEmail$$", civilEngineer.email);
	addParameter (emailParams,"$$CivilPhone$$", civilEngineer.phone);

	addParameter (emailParams, "$$SupFirstName$$", superintendent.name);
	addParameter (emailParams,"$$SupEmail$$", superintendent.email);
	addParameter (emailParams,"$$SupPhone$$", superintendent.phone);

	addParameter (emailParams, "$$ProFirstName$$", projectManager.name);
	addParameter (emailParams,"$$ProEmail$$", projectManager.email);
	addParameter (emailParams,"$$ProPhone$$", projectManager.phone);

	addParameter (emailParams, "$$OwnFirstName$$", owner.name);
	addParameter (emailParams,"$$OwnEmail$$", owner.email);
	addParameter (emailParams,"$$OwnPhone$$", owner.phone);

	addParameter (emailParams, "$$OthFirstName$$", other.name);
	addParameter (emailParams,"$$OthEmail$$", other.email);
	addParameter (emailParams,"$$OthPhone$$", other.phone);

	addParameter (emailParams, "$$SurFirstName$$", surveyor.name);
	addParameter (emailParams,"$$SurEmail$$", surveyor.email);
	addParameter (emailParams,"$$SurPhone$$", surveyor.phone);
			
	sendNotification("noreply@ashevillenc.gov","nmiller@ashevillenc.gov","","DEMO_FIRE_NOTIFICATION",emailParams,null);
	
}

