//commented out as per Chris 5/2/18
//if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
//	email('ccollins@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
//	}
//
if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
	email('hmahoney@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
	}

// 11/06/2020
// Home Stay payment received instruction email
if (publicuser && appMatch('*/*/*/Home Stay')) {
	var emailSubj = "Payment Received -- Instructions for Scheduling Your Inspection"
	var emailBody = '<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' 
	+ capIDString + ' <br>Location: ' + CapAddress
	+ '<br><p>'
	+ ' Hello, we have received your payment and your homestay renewal application has been approved, pending inspection. '
	+ ' Please click the link below to schedule your inspection: '
	+ '</p><p>'
	+ ' <a href="https://www.jotform.com/build/202533942220142">https://www.jotform.com/build/202533942220142</a>'
	+ '</p><p>'
	+ ' <b>The inspection must be completed within 30 days of this email or your homestay permit will be revoked.</b> '
	+ ' <span style="color:red;">The inspection will be held online using Google Meet.</span>'
	+ ' You will receive instructions for accessing this meeting in an email confirming your inspection time. '
	+ '</p><p>'
	+ ' A one year homestay renewal permit will be issued once your property passes this remote inspection. '
	+ '</p><p>'
	+ 'If you have any questions, please contact Haley Mahoney at hmahoney@ashevillenc.gov.  Thank you.'
	+ ' </p><hr></body></html>'
	emailAllContacts(emailSubj, emailBody)
}	

