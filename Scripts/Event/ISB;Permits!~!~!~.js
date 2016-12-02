/*
pCapId = getParent();

if (pCapId) {
	//start replaced branch: ES_CHECK_FOR_BALANCE_ON_PARENT
	{
		pCapDetailObjResult = aa.cap.getCapDetail(pCapId);
		pCapDetail = pCapDetailObjResult.getOutput();
		pBalanceDue = pCapDetail.getBalance();
		comment('Balance is ' + pBalanceDue);
		if (pBalanceDue > 0) {
			showMessage = true;
			comment("<font size=small><b>Parent Permit Has Balance Due:</b></font><br><br>The parent permit has a balance due of $'+pBalanceDue+'.  Inspections cannot be scheduled.<br><br>");
			cancel = true;
		}

	}
	//end replaced branch: ES_CHECK_FOR_BALANCE_ON_PARENT;
}

if (balanceDue > 0) {
	showMessage = true;
	comment("<font size=small><b>Balance Due:</b></font><br><br>Inspection cannot be scheduled because there is a balance due for this Record.<br><br>");
	cancel = true;
}
*/
