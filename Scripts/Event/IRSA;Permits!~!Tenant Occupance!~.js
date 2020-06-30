// begin 4/18/18 changes. For next IF-Then, emails changed from PAC to Tiffany, and added email to Amy

// back to PAC 6/30/2020
if (inspType == 'FP-FIRE MARSHAL' && matches(inspResult, 'Approved')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Occupancy ' + capIDString + ' Approved', 'The Fire Prevention safety inspection for Permit ' + capIDString + ' has been Approved. <br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Occupancy.');
}

//End 4/18/18 changes
