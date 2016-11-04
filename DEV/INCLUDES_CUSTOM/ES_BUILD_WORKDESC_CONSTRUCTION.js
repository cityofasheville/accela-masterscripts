function ES_BUILD_WORKDESC_CONSTRUCTION() {

	nwd = aa.cap.getCapWorkDesModel().getOutput();
	nwd.setDescription(' ');
	nwd.setCapID(newChildID);
	nwd.setAuditDate(aa.util.now());
	nwd.setAuditID('ADMIN');
	nwd.setAuditStatus('A');
	aa.cap.createCapWorkDes(nwd);
	updateWorkDesc(t1, newChildID);
	comment('The work Desc should be ' + t1);
	comment('The New Child is ' + newChildID);

}
