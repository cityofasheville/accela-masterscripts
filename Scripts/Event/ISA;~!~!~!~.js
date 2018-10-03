theCapAddress = getCapAddress(capId);


if (matches(inspType, 'PL-ROUGH IN') && isTaskActive('Backflow Approval') && !appMatch('Permits/Commercial/Existing Building/Repair-Replacement') && (appMatch('Permits/Commercial/Existing Building/*') || appMatch('Permits/Commercial/New Building/*'))) {
//TODO: CapAdress undefined
	email('backflowmailbox@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Inspection Request', 'A plumbing rough-in inspection has been scheduled for Permit Application ' + capIDString + ' at address ' + CapAddress + '. Please inspect the backflow device and email the Permit Application Center general mailbox your results.');
}

if ((appMatch('Permits/Commercial/*/*') || appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*')) && (inspType.indexOf('DR') == 0 || inspType.indexOf('SID') == 0)) {
	email('rgath@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Inspection Request', 'An inspection of type ' + inspType + ' has been scheduled for Permit Application ' + capIDString + ' at address ' + theCapAddress + '. Please perform the inspection and enter the results into Accela.');
}

if ((appMatch('Permits/Commercial/*/*') || appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*')) && (inspType.indexOf('DR') == 0 || inspType.indexOf('SID') == 0)) {
	email('dmears@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Inspection Request', 'An inspection of type ' + inspType + ' has been scheduled for Permit Application ' + capIDString + ' at address ' + theCapAddress + '. Please perform the inspection and enter the results into Accela.');
}
// changed from berickson 2/5/18 by Jerry

if ((appMatch('Permits/Commercial/*/*') || appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*')) && (inspType.indexOf('DR') == 0 || inspType.indexOf('SID') == 0)) {
	email('rhedrick@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Inspection Request', 'An inspection of type ' + inspType + ' has been scheduled for Permit Application ' + capIDString + ' at address ' + theCapAddress + '. Please perform the inspection and enter the results into Accela.');
}
// added emails to Caitlyn and Thana for Zoning Final 081318
if (( appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*')) && matches(inspType, 'ZO-FINAL')) {
	email('cshort@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Inspection Request', 'An inspection of type ' + inspType + ' has been scheduled for Permit Application ' + capIDString + ' at address ' + theCapAddress + '.');
}
if (( appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*')) && matches(inspType, 'ZO-FINAL')) {
	email('talley@ashevillenc.gov', 'noreply@ashevillenc.gov', 'Inspection Request', 'An inspection of type ' + inspType + ' has been scheduled for Permit Application ' + capIDString + ' at address ' + theCapAddress + '.');
}
