
// DISABLED: ES_PLN_WF_UPD_AFTER:1
//if (appMatch('Planning/*/*/*') && wfTask == 'Planning Construction' && matches(wfStatus,'Final Approved','Expired')) {
//	closeTask('Planning','Completed','Closed by Script','','PLN_TRCPROCESS');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:2
//if (appMatch('Planning/*/*/*') && wfTask == 'Grading Construction' && matches(wfStatus,'Final Approved','Expired')) {
//	closeTask('Grading','Completed','Closed by Script','','PLN_TRCPROCESS');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:3
//if (appMatch('Planning/*/*/*') && wfTask == 'Driveway Construction' && matches(wfStatus,'Final Approved','Expired')) {
//	closeTask('Driveway','Completed','Closed by Script','','PLN_TRCPROCESS');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:4
//if (appMatch('Planning/*/*/*') && wfTask == 'Stormwater Construction' && matches(wfStatus,'Final Approved','Expired')) {
//	closeTask('Stormwater','Completed','Closed by Script','','PLN_TRCPROCESS');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:5
//if (appMatch('Planning/*/*/*') && wfTask == 'Flood Construction' && matches(wfStatus,'Final Approved','Expired')) {
//	closeTask('Flood','Completed','Closed by Script','','PLN_TRCPROCESS');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:6
//if (wfProcess == 'PLN_1STTRCCOMMENTS' && wfStatus == 'Comments Sent') {
//	updateTask('TRC','Hold for Revision','Set by Script','','PLN_TRC');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:7
//if (wfProcess == 'PLN_1STTRCCOMMENTS' && wfStatus == 'Hold for Revision') {
//	activateTask('Resubmittal','PLN_1STTRCCOMMENTS');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:8
//if (wfProcess == 'PLN_2NDTRCCOMMENTS' && wfStatus == 'Hold for Revision') {
//	activateTask('Resubmittal','PLN_2NDTRCCOMMENTS');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:9
//if (wfProcess == 'PLN_2NDTRCCOMMENTS' && wfStatus == 'Comments Sent') {
//	updateTask('Final TRC','Hold for Revision','Set by Script','','PLN_TRC');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:10
//if ((appMatch('Planning/Permits/Level II/NA') || appMatch('Planning/Permits/Level III/NA') || appMatch('Planning/Permits/Conditional Zoning/NA') || appMatch('Planning/Permits/Manufactured Hsg Community/NA') || appMatch('Planning/Permits/Vested Rights/NA') || appMatch('Planning/Subdivision/Major/NA') || appMatch('Planning/Subdivision/Modification/NA')) && wfStatus == 'Amend' && wfTask == 'Partial Permit') {
//	activateTask('Application Process');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:11
//if (wfProcess == 'PLN_HRCMINOR' && wfStatus == 'Hold for Revision') {
//	activateTask('Amendment Routing','PLN_HRCMINOR');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:12
//if (wfProcess == 'PLN_LVL2' && wfStatus == 'Hold for Revision') {
//	activateTask('Application Process','PLN_LVL2');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:13
//if (wfProcess == 'PLN_2NDTRCCOMMENTS' && wfStatus == 'Comments Sent') {
//	updateTask('Final Review','Hold for Revision','Set by Script','','PLN_LVL2SUB');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:14
//if (wfProcess == 'PLN_1STTRCCOMMENTS' && wfStatus == 'Comments Sent') {
//	updateTask('Level II TRC','Hold for Revision','Set by Script','','PLN_LVL2SUB');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:15
//if (appMatch('Planning/Non Development/*/*') && matches(wfStatus,'Withdrawn')) {
//	deactivateTask('Planning Review');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:16
//if (appMatch('Planning/HRC/Major Work/NA') && matches(wfStatus,'Expired','Revoke')) {
//	deactivateTask('Issuance');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:17
//if (appMatch('Planning/*/Conditional Use/*') && wfTask == 'City Council' && matches(wfStatus,'Remand to DC')) {
//	deactivateTask('City Council');
//	activateTask('Downtown Commission');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:18
//if (appMatch('Planning/*/Conditional Use/*') && matches(wfStatus,'Recommend Approval to DC','Recommend APC to DC')) {
//	activateTask('Downtown Commission');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:19
//if (appMatch('Planning/*/Conditional Use/*')  && matches(wfStatus,'Appeal Received')) {
//	activateTask('PZC Appeal');
//	deactivateTask('Initial TRC');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:20
//if (wfProcess == 'PLN_CUP' && wfStatus == 'Hold for Revision') {
//	activateTask('Project Intake','PLN_CUP');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:21
//if (appMatch('Planning/*/Conditional Use/*')  && wfStatus == 'Amend' && wfTask == 'Partial Permit') {
//	activateTask('Project Intake');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:22
//if (wfTask == 'Application Process' && matches(wfStatus,'Application Complete') && AInfo['Create a Residential Site Work permit?']  == 'Yes') {
//	newChildID = createChild('Permits','Residential','Site Work','NA','');
//	copyAppSpecific(newChildID);
//	comment('New child app id = '+ newChildID);
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:23
//if (wfTask == 'Application Process' && matches(wfStatus,'Application Complete') && AInfo['Create a Commercial Site Work permit?']  == 'Yes') {
//	newChildID = createChild('Permits','Commercial','Site Work','NA','');
//	copyAppSpecific(newChildID);
//	comment('New child app id = '+ newChildID);
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:24
//if (wfProcess == 'PLN_LEVEL1COMMENTS' && wfStatus == 'Hold for Revision') {
//	activateTask('Resubmittal','PLN_LEVEL1COMMENTS');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:25
//if (wfProcess == 'PLN_TEMP-OCC' && wfStatus == 'Hold for Revision') {
//	activateTask('Amendment Routing','PLN_TEMP-OCC');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:26
//if (matches(wfProcess,'PLN_TRC','PLN_LVL2') && wfStatus == 'Hold for Revision') {
//	activateTask('Application Process');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:27
//if (matches(wfProcess,'PLN_HRCMINOR','PLN_SUBMINOR','PW_DEV') && wfStatus == 'Hold for Revision') {
//	activateTask('Amendment Routing');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:28
//if (appMatch('Planning/Development/Signage Plan/*') && matches(wfStatus,'Denied')) {
//	addParcelCondition(null,'Planning','Applied','Signage Plan Detail','City Council has denied the proposed signage plan associated with this parcel.  The applicant must wait at least 365 days before reapplying for a new signage plan substantially similar to the proposed signage plan.','Notice');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:29
//if (matches(wfTask,'Planning','Staff Level Site Plan Review','Final TRC','Technical Review') && matches(wfStatus,'Approved','Approved with Conditions','Disapproved','Partial Approval') && AInfo['Apply Steep Slope Fee?'] == 'Yes') {
//	updateFee('STEEPSLOPE','PLN_LEVELI','FINAL',1,'N');
//	}

// DISABLED: ES_PLN_WF_UPD_AFTER:30
//if (wfTask == 'Flood' && matches(wfStatus,'FPD Permit Required')) {
//	newChildID = createChild('Permits','Stormwater','Flood Plain Development','NA','');
//	copyAppSpecific(newChildID);
//	comment('New child app id = '+ newChildID);
//	t1 = 'Permit '+capIDString+' requires a Flood Plain Development Permit';
//	br_nch('ES_BUILD_WORKDESC_CONSTRUCTION');
//	updateAppStatus('Submittal Required','Initial Status',newChildID);
//	}

