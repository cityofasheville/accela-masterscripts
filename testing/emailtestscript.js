

var senderEmailAddr = "noreply@ashevillenc.gov";                                           // Email address of the sender
var emailAddress = "jtwilson@ashevillenc.gov";  
var emailText = '<html><head><style>ol {margin: 0;padding: 0}</style></head><body>Permit Number: '
+ 'capIDString' + ' <br>Location: ' + 'CapAddress'
+ '<br><p>'

+ ' Your homestay permit application has been approved. This permit is valid as long as there are no major changes (e.g. moving, selling, layout changes, etc.).  '
+ '</p><p>'
+ ' Please visit the Citizen Access website (<a href="https://services.ashevillenc.gov/citizenaccess">https://services.ashevillenc.gov/citizenaccess</a>) '
+ ' to print your permit and approved plans/comments. '
+ '</p><p>'
+ ' Please note that the issued permit along with the approved plans/comments must be maintained in hard copy on site until the permit is closed. '
+ '</p><p>'
+ ' Please refer to the following steps to access your approved permit and plans/comments online in .PDF format: '
+ '<ol><li>'
+ ' Visit https://services.ashevillenc.gov/citizenaccess. It is not necessary to login to pay fees or to view documents. '
+ ' </li><li>'
+ ' Enter your project\'s permit number in the top right search box and click on the green spyglass to pull up the permit record. '
+ ' </li><li>'
+ ' Click Record Info to access a drop-down menu; then select Attachments from the drop-down menu. '
+ ' </li><li>'
+ ' To download the 1) issued permit and 2) approved plans/comments, click the blue links next to documents labeled <b>ISSUED PERMIT</b> '
+ ' and/or <b>APPROVED HOMESTAY PLANS.</b> '
+ ' </li></ol>'
+ ' If you have questions, please contact homestayinspections@ashevillenc.gov or 828-259-5587 on Monday-Friday from 8:30 am - 5:00 pm. '
+ ' </p><hr></body></html>'
aa.sendMail(senderEmailAddr, emailAddress, "","test", emailText);