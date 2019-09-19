if (appMatch('Permits/Commercial/*/*')) {
  var emailSignature = '<p>Thank you,</p>' + 
  '<p>Cross Connection Control<br>' + 
  'City of Asheville Water Resources Department<br>' + 
  'Jeffrey Bryant (c) 828-777-6703<br>' + 
  'Jeremy Brooks (c) 828-707-0205<br>' + 
  'Jerrod Walker (c) 828-772-4607<br>' + 
  'Office 828-259-5977</p>'

  // ALL IS WELL
  if (matches(wfTask, 'Cross Connection') && matches(wfStatus, 'Backflow Assembly Compliant')) {
    emailByContactType('Backflow Compliance Notification: ' + CapAddress, 
    '<html><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + '<br><p>To Whom It May Concern,</p><p>We are with the Cross Connection Control Office at the City of Asheville Water Department.  Your commercial permit has been reviewed and it has been determined that the property listed has proper backflow protection that is fully compliant.  If you have any questions about the backflow protection for this property, please contact our office. </p>' +
    emailSignature +
    '<hr></body></html>', 
    'Applicant', 
    'backflowmailbox@ashevillenc.gov')
  }
  // Not tracking backflow protection:
  if (matches(wfTask, 'Cross Connection') && matches(wfStatus, 'Backflow Assembly Required')) {
    emailByContactType('IMPORTANT: Backflow Non-Compliance Issue: ' + CapAddress, 
    '<html><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + ' <br><p>To Whom It May Concern,</p><p>We are with the Cross Connection Control Office at the City of Asheville Water Department.  We needed to let you know we are not tracking a backflow assembly for the property listed on your commercial permit application.  All commercial properties on the Asheville water system are required to have proper backflow protection and have it tested every 12 months.  This issue will not keep you from obtaining your permit, but the requirement will have to be met before a Certificate of Occupancy can be issued. If you find that your property has a backflow assembly installed we simply need to inspect it.  If it passes inspection you will need to have it tested immediately.  If you don\'t have backflow protection, or are uncertain, we need to schedule a meeting at the property to determine what is needed.  This commercial water use requirement is non-negotiable so please contact one of our inspectors, or our office, at your earliest convenience to discuss.</p>' +
    emailSignature +
    '<hr></body></html>', 
    'Applicant', 
    'backflowmailbox@ashevillenc.gov')
  }
  // Tracking backflow protection, but it needs to be tested or modified:
  if (matches(wfTask, 'Cross Connection') && matches(wfStatus, 'Backflow Verification Required')) {
    emailByContactType('IMPORTANT: Backflow Non-Compliance Issue: ' + CapAddress, 
    '<html><body>Permit Number: ' + capIDString + ' <br>Location: ' + CapAddress + ' <br><p>To Whom It May Concern,</p><p>We are with the Cross Connection Control Office at the City of Asheville Water Department.  We needed to let you know that one or more backflow assembly at the property listed on your commercial permit application are past due for testing.  All backflow assemblies on the Asheville water system must be tested every 12 months.  This issue will not keep you from obtaining your permit, but the requirement will have to be met before a Certificate of Occupancy can be issued.  If you believe that this test has been completed it\'s possible that we just haven\'t received the results.  If you have not had the test completed, this needs to be done immediately.  Either way, you need to contact one of our inspectors, or our office, at your earliest convenience.</p>' +
    emailSignature +
    '<hr></body></html>', 
    'Applicant', 
    'backflowmailbox@ashevillenc.gov')
  }
}

// emailByContactType(emailSubj, emailBody, contactType, fromAddr, ccAddr)
// test 19-00537