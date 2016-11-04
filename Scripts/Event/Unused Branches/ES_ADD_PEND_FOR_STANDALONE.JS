
if (appMatch('*/Residential/Trade/Electrical')) {
	createPendingInspection('R_ELEC','EE-ROUGH IN');
	}

if (appMatch('*/Residential/Trade/Mechanical')) {
	createPendingInspection('R_MECH','ME-ROUGH IN');
	}

if (appMatch('*/Residential/Trade/Plumbing')) {
	createPendingInspection('R_PLUM','PL-ROUGH IN');
	}

if (appMatch('*/Residential/Trade/Gas Piping')) {
	createPendingInspection('R_GASP','GP-ROUGH IN');
	}

