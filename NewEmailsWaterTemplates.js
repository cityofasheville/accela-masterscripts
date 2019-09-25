// I. WAV Sent to Water 
email('rhedrick@ashevillenc.gov',
'developmentservices@ashevillenc.gov',
'New WAV available in Accela for permit ' + capIDString,
'A new Water Availability (WAV) application has been assigned to you for permit ' + capIDString + '. Please check Accela and update the record status. ');

// II. WAV Pending Field Verification
emailByContactType('Important: Next Steps for City of Asheville Water Availability application', 
'<html><body><p>Hello ' + capNameSomethingSomething + ', </p><p>The City of Asheville\'s Water Resources Department has received the residential Water Availability application for permit number ' + capIDString + ' </p><p>Next, a Water Resources Department technician will verify the proposed location for the new tap/meter or condition of the existing tap/meter. Please follow the instructions below to clearly and visibly mark the proposed or existing tap/meter location on your property. </p><p>Mark the tap/meter location using a 3-foot blue stake flag labeled in permanent marker with the site address, contact name and phone number. If needed, blue flags are available for pick up during business hours at the Development Services Department (DSD) at 161 S. Charlotte Street. </p><p><ol><li><u>New Tap/Meter:</u> Place the blue flag 5 feet from the edge of the roadway; do not place the flag in a present or future driveway and/or walkway. </li><li><u>Existing Tap/Meter:</u>Place the blue flag next to the correct meter box. Be sure that the meter box is accessible and clear of dirt and/or debris.<br>If you are unsure of the existing meter box’s location, contact the Water Resources Department representative for assistance using the contact information below.</li><li>Once you have placed the flag, email WAV@ashevillenc.gov to alert the Water Resources Department; be sure to note the permit number and site address in this email.</li></ol></p><p>For answers to frequently asked questions (FAQs), visit xxxxxxxxxxxxxxxxxxxxxxxxx.</p><p>Thank you for your prompt attention. If you have any questions or concerns, contact Water Resources Department representative Kathy Wenger at 828-232-4553 or kwenger@ashevillenc.gov or visit in person at 161 S. Charlotte St. on Monday - Friday between 8:30 AM and 5:00 PM.</p><hr></body></html>'
, 'Applicant', 'developmentservices@ashevillenc.gov');

// III. WAV Approved - Pending Payment
emailByContactType('City of Asheville Water Availability Application approved - call with payment', 
'<html><body><p>Hello ' + capNameSomethingSomething + ', </p><p>Hello xxxxxxxxx,</p><p>The City of Asheville Water Resources Department has approved the residential Water Availability application for permit ' + capIDString + '. The Water Resources Department guarantees this approval for 60 days. </p><p>You may now submit payment for the new tap/meter or establish a service account for an existing tap/meter. The water availability process must start anew if you do not take action within 60 days and this approval expires.</p><p>To submit payment for a <b>new tap/meter</b> with a debit or credit card (American Express not accepted), call Water Resources Department representative Kathy Wenger at 828-232-4553. </p><p>To submit payment by cash or check, visit the Development Services Department at 161 S. Charlotte St. on Monday - Friday between 8:30 AM and 5:00 PM.</p><p>To establish service for an <b>existing tap/meter,</b> please contact the th Water Resources Department Customer Services Division by phone at (828) 251-1122 or in-person at City Hall, First Floor, 70 Court Plaza on Monday - Friday between 9:00 AM and 5:00 PM.</p><hr></body></html>'
, 'Applicant', 'developmentservices@ashevillenc.gov');

// IV. WAV Completed
email('rhedrick@ashevillenc.gov',
'developmentservices@ashevillenc.gov',
'Complete WAV available in Accela for permit ' + capIDString,
'A complete Water Availability (WAV) application is now available for permit ' + capIDString + '. Please check Accela and update the record status. ');

// V. WAV on Hold - Pending Applicant Action
emailByContactType('City of Asheville Water Availability Application has been placed on hold - call for details ', 
'<html><body><p>Hello ' + capNameSomethingSomething + ', </p><p>Hello xxxxxxxxx,</p><p>The City of Asheville Water Availability application for residential permit number ' + capIDString + ' has been placed on hold and requires your attention.</p><p>Please contact Water Resources Department Representative Kathy Wenger at 828-232-4553 or kwenger@ashevillenc.gov or visit the Development Services Department in person at 161 S. Charlotte St. on Monday - Friday between 8:30 AM and 5:00 PM.</p><hr></body></html>'
, 'Applicant', 'developmentservices@ashevillenc.gov');

// VI. WAV Disapproved
emailByContactType('City of Asheville Water Availability Application has been disapproved - call for details', 
'<html><body><p>Hello ' + capNameSomethingSomething + ', </p><p>Hello xxxxxxxxx,</p><p>The City of Asheville Water Availability application for residential permit number ' + capIDString + ' has been disapproved.</p><p>Please contact Water Resources Department Representative Kathy Wenger at 828-232-4553 or kwenger@ashevillenc.gov or visit the Development Services Department in person at 161 S. Charlotte St. on Monday - Friday between 8:30 AM and 5:00 PM.</p><hr></body></html>'
, 'Applicant', 'developmentservices@ashevillenc.gov');

