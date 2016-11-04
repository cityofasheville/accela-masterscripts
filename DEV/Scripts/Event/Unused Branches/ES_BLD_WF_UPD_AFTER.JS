
// DISABLED: ES_BLD_WF_UPD_AFTER:1
//isParent = getParent();
// DISABLED: ES_BLD_WF_UPD_AFTER:2
//if (isParent) {
//	br_nch('ES_CREATE_FIRE_SIBLING');
//	} else {
//	br_nch('ES_CREATE_FIRE_CHILD');
//	}

// DISABLED: ES_BLD_WF_UPD_AFTER:3
//if (wfTask == 'Flood' && matches(wfStatus,'FPD Permit Required')) {
//	newChildID = createChild('Permits','Stormwater','Flood Plain Development','NA','');
//	copyAppSpecific(newChildID);
//	comment('New child app id = '+ newChildID);
//	t1 = 'Permit '+capIDString+' requires a Flood Plain Development Permit';
//	br_nch('ES_BUILD_WORKDESC_CONSTRUCTION');
//	updateAppStatus('Submittal Required','Initial Status',newChildID);
//	}

// DISABLED: ES_BLD_WF_UPD_AFTER:4
//if (matches(wfTask,'Planning','Staff Level Site Plan Review','Final TRC','Technical Review') && matches(wfStatus,'Approved','Approved with Conditions','Disapproved','Partial Approval') && AInfo['Apply Steep Slope Fee?'] == 'Yes') {
//	updateFee('STEEPSLOPE','RES_NEW','FINAL',1,'Y');
//	updateFee('TECH','GENERAL','FINAL',1,'Y');
//	}

// DISABLED: ES_BLD_WF_UPD_AFTER:6
//if (appMatch('Permits/*/New/*') && matches(wfStatus,'Approved','Approved with Conditions', 'Partial Approval')) {
//	activateTask('Partial Issuance') //just trying this as an example;
//	}

// DISABLED: ES_BLD_WF_UPD_AFTER:7
//if (appMatch('Permits/*/New/*') && matches(wfStatus,'Issued','','Reissued', 'Disapproved')) {
//	deactivateTask('Partial Issuance') //just trying this as an example;
//	}

// DISABLED: ES_BLD_WF_UPD_AFTER:8
//if (appMatch('Permits/*/New/*') && wfTask == 'Fire Prevention' && wfStatus == 'Partial Approval') {
//	br_nch('ES_FIRE_CHILDREN');
//	}

// DISABLED: ES_BLD_WF_UPD_AFTER:99
//if (appMatch('Permits/Water Availability/Dedicated Fire Line/NA') && wfTask == 'Project Close Out' && matches(wfStatus,'Warranty Period')) {
//	newChildID = createChild('Permits','Water Availability','Warranty','NA','');
//	copyAppSpecific(newChildID);
//	comment('New child app id = '+ newChildID);
//	}

// DISABLED: ES_BLD_WF_UPD_AFTER:99
//if (appMatch('Permits/Water Availability/Extention/NA') && wfTask == 'Project Close Out' && matches(wfStatus,'Warranty Period')) {
//	newChildID = createChild('Permits','Water Availability','Warranty','NA','');
//	copyAppSpecific(newChildID);
//	comment('New child app id = '+ newChildID);
//	}

// DISABLED: ES_BLD_WF_UPD_AFTER:99
//if (appMatch('Permits/Water Availability/Construction/NA') && wfTask == 'Project Close Out' && matches(wfStatus,'Warranty Record Established')) {
//	newChildID = createChild('Permits','Water Availability','Warranty','NA','');
//	copyAppSpecific(newChildID);
//	comment('New child app id = '+ newChildID);
//	}

// DISABLED: ES_BLD_WF_UPD_AFTER:99
//if (appMatch('Permits/Right of Way/Cuts/NA') && wfTask == 'Project Close Out' && matches(wfStatus,'Warranty Period')) {
//	newChildID = createChild('Permits','Right of Way','Warranty','NA','');
//	copyAppSpecific(newChildID);
//	comment('New child app id = '+ newChildID);
//	}

