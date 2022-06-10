//commented out as per Chris 5/2/18
//if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
//	email('ccollins@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
//	}
//
if (appMatch('Services/Project Inquiry/Meeting Request/NA') && balanceDue == 0) {
	email('hmahoney@ashevillenc.gov','noreply@ashevillenc.gov','Early Assistance '+capIDString+' Payment Applied','A payment has been applied on the Early Assistance record '+capIDString+' and it requires your attention.');
	}

// 4/27/22 jtwilson New version
 if (publicUser && appMatch('*/*/*/Home Stay')) {
 	var emailSubj = "Payment Received -- Instructions for Scheduling Your Inspection"
 	var emailBody = '<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: ' 
 	+ capIDString + ' <br>Location: ' + CapAddress
 	+ '<br><p>'

	+ ' Hello, we have received your payment and your homestay application has been approved, pending inspection. Please click the link below to schedule your inspection: '
	+ '</p><p>'
	+ ' <a href="https://www.jotform.com/build/202533942220142">https://www.jotform.com/build/202533942220142</a>'
	+ '</p><p>'
	+ '<span style="color:red">'
	+ ' This will be an on-site inspection of the homestay area. The primary permit applicant must be present at the inspection.  '
	+ '</span>'
	+ '</p><p>'
	+ ' A homestay permit will be issued once your property passes this remote inspection, and will be valid until you wish to close the permit. '
	+ ' <b>If anything changes with ownership, layout, or hosting of the homestay, please contact homestayinspections@ashevillenc.gov to discuss how to document these changes. </b>' 
	+ '</p><p>'
	+ ' If you have any questions, please reach out. Thank you. '
	+ ' </p><hr></body></html>'
	 var staffEmail = 'hmahoney@ashevillenc.gov'
 	emailAllContacts(emailSubj, emailBody, staffEmail)
 }	
//added 9/13 by JH
 if (publicUser && appMatch('*/*/*/Noise')) {
 		email('noise@ashevillenc.gov','noreply@ashevillenc.gov','Noise Payment Made '+capIDString+' Payment Applied','A payment has been applied on the Noise record '+capIDString+' and it requires your attention.');
	}