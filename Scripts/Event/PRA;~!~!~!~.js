

if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
	email('ccollins@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
	}

if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
	email('cshort@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
	}

//New additions 4/26/17 as per Diane


//WOID: 94376
//Description: Send email to Shannon Morgan when an online payment has been made on a homestay permit.
if (currentUserID.startsWith("PUBLICUSER") && appMatch('*/*/*/Home Stay')) {
	email('smorgan@ashevillenc.gov','noreply@ashevillenc.gov','On-Line Home Stay '+capIDString+' Payment Applied','An on-line payment has been applied on the Home Stay record '+capIDString+' and it requires your attention.');
	}

//WOID: 94377
//Description: Send email to Amy Tesner when an online payment has been made on an event permit.
if (currentUserID.startsWith("PUBLICUSER") && appMatch('Permits/Event-Temporary Use/NA/NA')) {
	email('atesner@ashevillenc.gov','noreply@ashevillenc.gov','On-Line Event '+capIDString+' Payment Applied','An on-line payment has been applied on the Event-Temporary record '+capIDString+' and it requires your attention.');
	}
