if (matches(inspType, 'FP-FINAL', 'FP-FINAL-REINSP') && matches(inspResult, 'Approved')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Fire Prevention Final ' + capIDString + ' Approved', 'The Fire Prevention Final inspection for Permit ' + capIDString + ' has been Approved. <br>Inspection Comment: ' + inspComment + ' <br>Please verify if clear for issuance of Certificate of Compliance or Occupancy.');
}

