
if (feeExists('CFIRE') && AInfo['Jurisdiction'] == 'Asheville Zoning Jurisdiction (ETJ)') {
	updateFee('ETJ','COM_BLD','FINAL',(feeAmount('CFIRE') + feeAmount('CFIREADD'))* .10,'N');
	}

