//commented out as per Chris 5/2/18
//if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
//	email('ccollins@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
//	}
//
if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
	email('cshort@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
	}
