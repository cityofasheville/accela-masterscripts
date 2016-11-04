
thisInspEmail = null;
product = aa.env.getValue('Product');
daysBetween = null;
inspectionList = aa.env.getValue('InspectionList');
if (inspectionList != null)
	its = inspectionList.iterator();
inspectionModel = its.next();
thisInsp = inspectionModel['inspector'];
thisInspID = thisInsp.getUserID();
comment('Inspector ID: ' + thisInspID);
thisInspObj = aa.person.getUser(thisInspID).getOutput();
thisInspEmail = thisInspObj.getEmail();
comment('Inspector Email: ' + thisInspEmail);
scheduledDate = inspectionModel.getScheduledDateString();
schedYear = scheduledDate.substring(0, 4);
schedMonth = scheduledDate.substring(5, 7);
schedDay = scheduledDate.substring(8, 10);
schedDate = new Date(schedYear, schedMonth - 1, schedDay);
comment('scheduled Date: ' + schedDate);
cancelDate = new Date().setHours(0, 0, 0, 0);
comment('Cancellation Date: ' + convertDate(cancelDate));
daysBetween = dateDiff(schedDate, cancelDate);
comment(daysBetween);
//for (x in inspectionModel) comment(x + ' = ' + inspectionModel[x]);
if (capId == null) {
	CAPID = inspectionModel.getCapID();
	sca = String(CAPID).split('-');
	capID = aa.cap.getCapID(sca[0], sca[1], sca[2]).getOutput();
	capIdstring = capID.getCustomID();
	ad = aa.address.getAddressByCapId(capID).getOutput();
}

if (thisInspEmail != null && (product == 'ACA' || product == 'AV360') && matches(daysBetween, 0, 1, 2)) {

	//start replaced branch: ES_BLD_INSP_CANCEL_DETAILS
	{
		var emailSubject = capIdstring + ' Inspection type ' + inspectionModel['inspectionType'] + ' has been removed from job list.';
		if (ad[0].getStreetPrefix() != null && ad[0].getUnitStart() != null) {
			var emailText = capIdstring + ' Inspection type <b>' + inspectionModel['inspectionType'] + '</b> located at ' + ad[0].getHouseNumberStart() + ' ' + ad[0].getStreetPrefix() + ' ' + ad[0].getStreetName() + ' ' + ad[0].getStreetSuffix() + ' ' + ad[0].getUnitStart() + ', ' + ad[0].getCity() + ', ' + ad[0].getZip() + ' has been cancelled and removed from your job list. ';
		}

		if (ad[0].getStreetPrefix() != null) {
			var emailText = capIdstring + ' Inspection type <b>' + inspectionModel['inspectionType'] + '</b>  located at ' + ad[0].getHouseNumberStart() + ' ' + ad[0].getStreetPrefix() + ' ' + ad[0].getStreetName() + ' ' + ad[0].getStreetSuffix() + ', ' + ad[0].getCity() + ', ' + ad[0].getZip() + ' has been cancelled and removed from your job list. ';
		}

		if (ad[0].getUnitStart() != null) {
			var schedDate = inspectionModel['scheduledDate'].toString();
			var emailText = capIdstring + ' Inspection type <b>' + inspectionModel['inspectionType'] + '</b> scheduled for <b>' + schedDate.substring(0, 10) + ' </b> located at ' + ad[0].getHouseNumberStart() + ' ' + ad[0].getStreetName() + ' ' + ad[0].getStreetSuffix() + ' ' + ad[0].getUnitStart() + ', ' + ad[0].getCity() + ', ' + ad[0].getZip() + ' has been cancelled and removed from your job list. ';
		}

		if (ad[0].getStreetPrefix() == null && ad[0].getUnitStart() == null) {
			var schedDate = inspectionModel['scheduledDate'].toString();
			var emailText = capIdstring + ' Inspection type <b>' + inspectionModel['inspectionType'] + '</b> scheduled for <b>' + schedDate.substring(0, 10) + ' </b>  located at ' + ad[0].getHouseNumberStart() + ' ' + ad[0].getStreetName() + ' ' + ad[0].getStreetSuffix() + ', ' + ad[0].getCity() + ', ' + ad[0].getZip() + ' has been cancelled via ACA and removed from your job list. ';
		}

		email(thisInspEmail, 'noreply@ashevillenc.gov', emailSubject, emailText);

	}
	//end replaced branch: ES_BLD_INSP_CANCEL_DETAILS;
}
