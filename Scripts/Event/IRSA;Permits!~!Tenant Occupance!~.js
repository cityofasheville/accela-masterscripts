// begin 4/18/18 changes. For next IF-Then, emails changed from PAC to Tiffany, and added email to Amy

if (inspType == 'FP-FIRE MARSHAL' && matches(inspResult, 'Approved')) {
	email('TGordon@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Occupancy ' + capIDString + ' Approved', 'The Fire Prevention safety inspection for Permit ' + capIDString + ' has been Approved. <br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Occupancy.');
	email('ATesner@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Occupancy ' + capIDString + ' Approved', 'The Fire Prevention safety inspection for Permit ' + capIDString + ' has been Approved. <br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Occupancy.');
}

//End 4/18/18 changes
