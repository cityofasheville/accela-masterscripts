// begin 4/18/18 changes. For next IF-Then, emails changed from PAC to Tiffany, and added email to Amy

// back to PAC 6/30/2020
if (matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') && matches(inspResult, 'Approved')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Fire Prevention Final ' + capIDString + ' Approved', 'The Fire Prevention Final inspection for Permit ' + capIDString + ' has been Approved. <br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Compliance or Occupancy.');
}

//End 4/18/18 changes
