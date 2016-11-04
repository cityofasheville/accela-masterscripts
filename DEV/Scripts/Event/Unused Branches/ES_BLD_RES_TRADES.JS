
tradeCount = 0;
if (AInfo['Plumbing'] == 'Yes') {
	tradeCount = tradeCount + 1;
	}

if (AInfo['Mechnical'] == 'Yes') {
	tradeCount = tradeCount + 1;
	}

if (AInfo['Electrical'] == 'Yes') {
	tradeCount = tradeCount + 1;
	}

if (AInfo['Gas Piping'] == 'Yes') {
	tradeCount = tradeCount + 1;
	}

if (AInfo['Foster Care'] == 'Yes') {
	tradeCount = tradeCount + 1;
	}

if (tradeCount == 1 && AInfo['Plumbing'] == 'Yes') {
	updateFee('TR003','GENERAL','FINAL',1,'N');
	}

if (tradeCount == 1 && AInfo['Mechnical'] == 'Yes') {
	updateFee('TR002','GENERAL','FINAL',1,'N');
	}

if (tradeCount == 1 && AInfo['Electrical'] == 'Yes') {
	updateFee('TR001','GENERAL','FINAL',1,'N');
	}

if (tradeCount == 1 && AInfo['Gas Piping'] == 'Yes') {
	updateFee('TR004','GENERAL','FINAL',1,'N');
	}

if (tradeCount == 1 && AInfo['Foster Care'] == 'Yes') {
	updateFee('TR005','GENERAL','FINAL',1,'N');
	}

if (tradeCount > 1) {
	updateFee('TR006','GENERAL','FINAL',1,'N');
	}

updateFee('TECH','GENERAL','FINAL',1,'N');

