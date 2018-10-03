editAppSpecific('Permit Expiration Date', dateAdd(null, 365));

// begin 4/18/18 changes. For next IF-Then, emails changed from PAC to Tiffany, and added email to Amy

if ((appMatch('Permits/Residential/*/*') || appMatch('Permits/Commercial/*/*')) && matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP') && matches(inspResult, 'Approved')) {
	email('TGordon@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Building Final ' + capIDString + ' Approved', 'The Building Final inspection for Permit ' + capIDString + ' has been Approved. <br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Compliance or Occupancy.');
	email('ATesner@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Building Final ' + capIDString + ' Approved', 'The Building Final inspection for Permit ' + capIDString + ' has been Approved. <br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Compliance or Occupancy.');
}

//End 4/18/18 changes
