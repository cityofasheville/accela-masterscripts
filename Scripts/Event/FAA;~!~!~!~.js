if (feeExists('CFIRE') && AInfo['Jurisdiction'] == 'Asheville Zoning Jurisdiction (ETJ)') {
	updateFee('ETJ','COM_BLD','FINAL',(feeAmount('CFIRE') + feeAmount('CFIREADD'))* .10,'N');
	}

// Added by Jerry for CFIREADDSC fee update -- less than $10 needs to change to 0

if (feeExists('CFIREADDSC') && (feeAmount('CFIREADDSC') < 10)) {
                updateFee('CFIREADDSC','COM_BLD','FINAL',0,'N')

                }
