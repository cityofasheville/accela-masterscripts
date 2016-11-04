function editInspectionUnitNbr(iNumber, unitNumber) {
	var initialContext = aa.proxyInvoker.newInstance("javax.naming.InitialContext", null).getOutput();
	var ds = initialContext.lookup("java:/AA");
	var conn = ds.getConnection();
	var updateString = "update g6action set unit_nbr = ? where serv_prov_code = ? and b1_per_id1 = ? and b1_per_id2 = ? and b1_per_id3 = ? and g6_act_num = ?";
	var sStmt = conn.prepareStatement(updateString);
	sStmt.setString(1, unitNumber);
	sStmt.setString(2, aa.getServiceProviderCode());
	sStmt.setString(3, capId.getID1());
	sStmt.setString(4, capId.getID2());
	sStmt.setString(5, capId.getID3());
	sStmt.setLong(6, iNumber);
	var rSet = sStmt.execute();
	sStmt.close();
	conn.close();
	
}


