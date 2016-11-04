editAppSpecific('Permit Expiration Date', dateAdd(null, 365));

if ((appMatch('Permits/Residential/*/*') || appMatch('Permits/Commercial/*/*')) && matches(inspType, 'BU-FINAL', 'BU-FINAL-REINSP') && matches(inspResult, 'Approved')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Building Final ' + capIDString + ' Approved', 'The Building Final inspection for Permit ' + capIDString + ' has been Approved. <br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Compliance or Occupancy.');
}

