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
showDebug = true;


function listObj(obj) {
  for (x in obj) {
    if (typeof (obj[x]) === "function") {
      aa.print(x);
    }
  }
  for (x in obj) {
    if (obj[x] && typeof (obj[x]) !== "function") {
      aa.print(x + " = " + obj[x]);
    }
  }
}

if (appMatch('Permits/Commercial/Demolition/*') ) {
	var applicant = {};
    var CapContacts = aa.people.getCapContactByCapID(capId.customID);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            if (ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() === "Applicant") {
                applicant.email = ContactOutputs[contact_id].people.email;
                applicant.name = ContactOutputs[contact_id].people.contactName;
                applicant.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                applicant.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                applicant.addressLine2 = ContactOutputs[contact_id].people.compactAddress.addressLine2;
                applicant.city = ContactOutputs[contact_id].people.compactAddress.city;
                applicant.state = ContactOutputs[contact_id].people.compactAddress.state;
                applicant.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }


    listObj(applicant);
    listObj(capId.customID);
    email('wrogers@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Demolition Permit Notification: ' + capIDString, 
    'This email is to notify you that a new demolition permit has been submitted.' + '<br>' 
        + 'Permit number: ' + capIDString
        + '<br>'
        + 'Applicant Point of Contact Information: ' 
        + '<br>'
        + 'Applicant Full name: ' + applicant.name
        + '<br>'
        + 'Applicant Email: ' + applicant.email
        + '<br>'
        + 'Applicant Phone: ' + applicant.phone
        + '<br>'
        + 'Applicant Address: ' + applicant.addressLine1 + " " + applicant.city +  "," + applicant.state + " " + applicant.zip
        );
}