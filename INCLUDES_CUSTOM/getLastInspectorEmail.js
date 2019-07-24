function getLastInspectorEmail(recordID) {
	var initialContext = aa.proxyInvoker.newInstance("javax.naming.InitialContext", null).getOutput();
	var ds = initialContext.lookup("java:/AA");
	var conn = ds.getConnection();
	var updateString = "select dbo.fn_AVL_GET_LAST_INSP_EMAIL(?)";
	var sStmt = conn.prepareStatement(updateString);
	sStmt.setString(1, recordID);
	var rSet = sStmt.execute();
	sStmt.close();
	conn.close();
	return rSet;
	
}


