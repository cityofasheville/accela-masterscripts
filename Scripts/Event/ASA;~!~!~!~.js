// Whne record is created

copyParcelGisObjects();

//replaced branch(ES_GET_PARCEL_ATTRIBUTES)
ES_GET_PARCEL_ATTRIBUTES();

if (publicUser) {

	//start replaced branch: ES_ACA_FEES
	{
		if (appMatch('*/Residential/*/Electrical')) {
			updateFee('TR001', 'RES_TRADE', 'FINAL', 1, 'N');
			updateFee('TECH', 'RES_TRADE', 'FINAL', 1, 'N');
		}

		if (appMatch('*/Residential/*/Mechanical')) {
			updateFee('TR002', 'RES_TRADE', 'FINAL', 1, 'N');
			updateFee('TECH', 'RES_TRADE', 'FINAL', 1, 'N');
		}

		if (appMatch('*/Residential/*/Plumbing')) {
			updateFee('TR003', 'RES_TRADE', 'FINAL', 1, 'N');
			updateFee('TECH', 'RES_TRADE', 'FINAL', 1, 'N');
		}

		if (appMatch('*/Residential/*/Gas Piping')) {
			updateFee('TR004', 'RES_TRADE', 'FINAL', 1, 'N');
			updateFee('TECH', 'RES_TRADE', 'FINAL', 1, 'N');
		}

		if (appMatch('*/Residential/*/Multi-Trade')) {
			updateFee('TR006', 'RES_TRADE', 'FINAL', 1, 'N');
			updateFee('TECH', 'RES_TRADE', 'FINAL', 1, 'N');
		}

		if (appMatch('*/Commercial/*/Electrical')) {
			updateFee('C_002', 'COM_TRADE', 'FINAL', AInfo['Cost of Work'], 'N');
			updateFee('TECH', 'COM_TRADE', 'FINAL', 1, 'N');
		}

		if (appMatch('*/Commercial/*/Mechanical')) {
			updateFee('C_003', 'COM_TRADE', 'FINAL', AInfo['Cost of Work'], 'N');
			updateFee('TECH', 'COM_TRADE', 'FINAL', 1, 'N');
		}

		if (appMatch('*/Commercial/*/Plumbing')) {
			updateFee('C_004', 'COM_TRADE', 'FINAL', AInfo['Cost of Work'], 'N');
			updateFee('TECH', 'COM_TRADE', 'FINAL', 1, 'N');
		}

		if (appMatch('*/Commercial/*/Gas Piping')) {
			updateFee('C_005', 'COM_TRADE', 'FINAL', AInfo['Cost of Work'], 'N');
			updateFee('TECH', 'COM_TRADE', 'FINAL', 1, 'N');
		}

		if (appMatch('*/Commercial/*/Multi-Trade')) {
			updateFee('TR006', 'COM_TRADE', 'FINAL', AInfo['Cost of Work'], 'N');
			updateFee('TECH', 'COM_TRADE', 'FINAL', 1, 'N');
		}

		if ((appMatch('*/Residential/Reroof/*') || appMatch('Permits/Residential/Existing Building/Reroof')) && AInfo['Licensed GC?'] == 'Yes') {
			updateFee('R_014', 'RES_REPAIR', 'FINAL', 1, 'N');
			updateFee('TECH', 'RES_REPAIR', 'FINAL', 1, 'N');
			updateFee('R_998', 'RES_REPAIR', 'FINAL', 1, 'N');
			updateFee('R_999', 'RES_REPAIR', 'FINAL', 1, 'N');
		}

		if ((appMatch('*/Residential/Reroof/*') || appMatch('Permits/Residential/Existing Building/Reroof')) && AInfo['Licensed GC?'] == 'No') {
			updateFee('R_014', 'RES_REPAIR', 'FINAL', 1, 'N');
			updateFee('TECH', 'RES_REPAIR', 'FINAL', 1, 'N');
		}

		if (appMatch('Permits/Residential/Existing Building/Repair-Replacement')) {
			updateFee('R_003A', 'RES_REPAIR', 'FINAL', 1, 'N');
			updateFee('AQ01', 'RES_REPAIR', 'FINAL', 1, 'N');
			updateFee('AQ02', 'RES_REPAIR', 'FINAL', 1, 'N');
			updateFee('TECH', 'RES_REPAIR', 'FINAL', 1, 'N');
		}

		if (appMatch('Permits/Residential/Existing Building/Repair-Replacement') && AInfo['General Contractor?'] == 'Yes') {
			updateFee('R_998', 'RES_REPAIR', 'FINAL', 1, 'N');
			updateFee('R_999', 'RES_REPAIR', 'FINAL', 1, 'N');
		}

		if (appMatch('Permits/Commercial/Existing Building/Repair-Replacement')) {
			updateFee('C_001', 'COM_BLD', 'FINAL', AInfo['Building Cost'], 'N');
			updateFee('C_002', 'COM_BLD', 'FINAL', AInfo['Electrical Cost'], 'N');
			updateFee('C_003', 'COM_BLD', 'FINAL', AInfo['Mechanical Cost'], 'N');
			updateFee('C_004', 'COM_BLD', 'FINAL', AInfo['Plumbing Cost'], 'N');
			updateFee('C_005', 'COM_BLD', 'FINAL', AInfo['Gas Piping Cost'], 'N');
		}

		if (appMatch('Permits/Commercial/Existing Building/Repair-Replacement')) {
//			updateFee('CFIRE', 'COM_BLD', 'FINAL', 1, 'N');
			updateFee('CFIREADDSC', 'COM_BLD', 'FINAL', 1, 'N');

// These fees were superseded in the July 2017 Fee Update
// updateFee('CFIREADDE', 'COM_BLD', 'FINAL', 1, 'N');
// updateFee('CFIREADDM', 'COM_BLD', 'FINAL', 1, 'N');
// updateFee('CFIREADDP', 'COM_BLD', 'FINAL', 1, 'N');
// updateFee('CFIREADDG', 'COM_BLD', 'FINAL', 1, 'N');
updateFee('TECH', 'COM_BLD', 'FINAL', 1, 'N');
		}

		if (appMatch('Permits/Commercial/Existing Building/Repair-Replacement') && AInfo['Multi-Family Use?'] == 'Yes') {
			updateFee('MFIRE', 'COM_BLD', 'FINAL', 1, 'N');
		}

		if (appMatch('Permits/Commercial/Existing Building/Repair-Replacement')) {
			updateFee('AQ03', 'COM_DEMO', 'FINAL', 1, 'N');
			updateFee('AQ04', 'COM_DEMO', 'FINAL', 1, 'N');
		}

		if (appMatch('Permits/Sign/Temporary/NA')) {
			updateFee('SIGNTEMP', 'SIGN_TEMP', 'FINAL', 1, 'N');
			updateFee('TECH', 'SIGN_TEMP', 'FINAL', 1, 'N');
		}

		if (appMatch('Permits/Sign/Face Change/NA')) {
			updateFee('SIGNREPLACE', 'SIGN_FACE', 'FINAL', AInfo['Number of Signs'], 'N');
			updateFee('SIGNFINAL', 'SIGN_FACE', 'FINAL', AInfo['SqFt of Signage'], 'N');
			updateFee('TECH', 'SIGN_FACE', 'FINAL', 1, 'N');
		}

	}
	//end replaced branch: ES_ACA_FEES;
}

if (publicUser && AInfo['Cost of Work'] == 0) {
	editAppSpecific('Cost of Work', '100');
}

if ((appMatch('Permits/*/Existing Building/*') || appMatch('Permits/*/New Building/*') || appMatch('Permits/*/Accessory Structure/*') || appMatch('*/*/Construction Trailer/*') || appMatch('*/*/Construction Staging/*') || appMatch('Services/Project Inquiry/*/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/*/Accessory Structure') || appMatch('*/*/Addition/*') || appMatch('*/*/New/*') || appMatch('*/*/Site Work/*') || appMatch('*/Development/*/*') || appMatch('*/Subdivision/*/*') || appMatch('*/Site Compliance Verification/*/*') || appMatch('*/Flexible Development/*/*') || appMatch('*/Development/*/*') || appMatch('*/Subdivision/*/*') || appMatch('*/Research/*/*') || appMatch('*/Variance/*/*')) && matches(AInfo['ParcelAttribute.ZONING DISTRICT'], 'RS2,', 'RS4,', 'RS8,', 'RM6,', 'RM8,', 'RM16,', 'NB,', 'OFFICE,', 'OFFICE II,', 'OB,', 'CBI,', 'CBII,', 'RESORT,', 'INST,', 'HB,', 'RB,', 'CBD,', 'RIVER,', 'CI,', 'IND,', 'UV,', 'NCD,', 'UR,', 'LI,', 'UP,')) {

	//start replaced branch: ES_ADD_SETBACKS
	{
		editAppSpecific('Front', lookup('SetbackFront', AInfo['ParcelAttribute.ZONING DISTRICT']));
		editAppSpecific('Side', lookup('SetbackSide', AInfo['ParcelAttribute.ZONING DISTRICT']));
		editAppSpecific('Rear', lookup('SetbackRear', AInfo['ParcelAttribute.ZONING DISTRICT']));
		editAppSpecific('Corner Side', lookup('SetbackCornerSide', AInfo['ParcelAttribute.ZONING DISTRICT']));

	}
	//end replaced branch: ES_ADD_SETBACKS;
}

//moved from ASA Planning 6/25/19
if (!appMatch('Permits/*/Existing Building/Reroof') && (appMatch('Permits/*/New Building/*') || appMatch('Permits/*/Existing Building/*') || appMatch('*/*/Remodel/*') || appMatch('*/*/Manufactured Home/*') || appMatch('*/*/Demolition/*') || appMatch('*/*/Addition/*') || appMatch('*/*/Accessory Structure/*') || appMatch('Permits/*/New/*') || appMatch('Permits/*/Site Work/*')) && AInfo['ParcelAttribute.RIVER DISTRICT'] == 'Yes') {
	email('svrtunski@ashevillenc.gov', 'noreply@ashevillenc.gov', 'River District Design Review Task', 'River District Design Review task assigned. ' + capIDString + ' - Please check Accela and update the record status.');
}

// DISABLED: ApplicationSubmitAfter:99
//if (appMatch('Permits/Water Availability/Warranty/NA')) {
//	editAppSpecific('Warranty Expiration Date',dateAdd(null,365));
//	}

// DISABLED: ApplicationSubmitAfter:99
//if (appMatch('Permits/Right of Way/Cuts/NA')) {
//	br_nch('ES_CUT_TOTALS');
//	}

// DISABLED: ApplicationSubmitAfter:99
//if (appMatch('Permits/Right of Way/Warranty/NA')) {
//	editAppSpecific('Warranty Expiration Date',dateAdd(null,720));
//	}

// added 02/22/2022
if (appMatch('Planning/Development/Level I/NA')) {
    assignTask('Level I Site Plan Review', 'HMAHONEY', 'PW_DEV');
}

if (appMatch('Planning/Non Development/Alternative Compliance/*')) {
    assignTask('Planning Review', 'HMAHONEY', 'PLN_COMM');
}