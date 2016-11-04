if (inspType == 'FP-FIRE MARSHAL' && matches(inspResult, 'Approved')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Occupancy ' + capIDString + ' Approved', 'The Fire Prevention safety inspection for Permit ' + capIDString + ' has been Approved. <br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Occupancy.');
}
