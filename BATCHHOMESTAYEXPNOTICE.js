
/*------------------------------------------------------------------------------------------------------/
| Program: BatchHomeStayExpNotice: Batch  BATCHHOMESTAYEXPNOTICE  
| Client : Asheville
|
| 
| Looks for grading permits that expire in 60 days
| Email will be sent for each record that expres in 60 days
/------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
| START: USER CONFIGURABLE PARAMETERS
/------------------------------------------------------------------------------------------------------*/
var showDebug = true;					                                  // Set to true to see debug messages in event log and email confirmation
var maxSeconds = 5 * 60;				                                  // Number of seconds allowed for batch run, usually < 5*60
//Variables needed to log parameters below in eventLog
var br = "<br>"
var sysDate = aa.date.getCurrentDate();
var batchJobID = aa.batchJob.getJobID().getOutput();
var batchJobName = "" + aa.env.getValue("batchJobName");
//Global variables
var batchStartDate = new Date();                                                         // System Date
var batchStartTime = batchStartDate.getTime();                                           // Start timer
var timeExpired = false;                                                                 // Variable to identify if batch script has timed out. Defaulted to "false".
var systemUserObj = aa.person.getUser("ADMIN").getOutput();
var capId;                                                                               // Variable used to hold the Cap Id value.
var senderEmailAddr = "noreply@ashevillenc.gov";                                           // Email address of the sender
var emailAddress = "RHedrick@ashevillenc.gov";                                                // Email address of the person who will receive the batch script log information
var emailAddress2 = "jtwilson@ashevillenc.gov";                                    // CC email address of the person who will receive the batch script log information
var emailText = "Asheville HomeStay Permits to expire in 30 days";                        // Email body
var useAppSpecificGroupName = false;

//Parameter variables
var paramsOK = true;
var paramsAppGroupArr = new Array("Permits");
var paramsAppTypeArr = new Array("Residential");
var paramsAppSubTypeArr = new Array("Home Occupation");
var paramAppCategory = "Home Stay";                                                       

var paramsAppStatusArr = new Array("In Compliance","Renewed");						// Cap Status that the batch script is suppose to process.
var paramsAppSubGroupName = "HOMESTAY ADMIN";                                      // Application Spec Info Subgroup Name that the ASI field is associated to.
var paramsAppSpecInfoLabel = "EXPIRATION DATE";                                   // ASI field name that the batch script is to search.

var paramsStartDt = aa.date.parseDate(dateAdd(null,30));                                 // Start Date for the batch script to select ASI data on.
var paramsEndDt = aa.date.parseDate(dateAdd(null,30));                                   // End Date for the batch script to select ASI data on.
/*Note: Start Date and End Date are defaulted to use the current System Date.
|       To set the Start Date and End Date to specific values for a manual run
|       replace the following syntax dateAdd(null,-1) to a string date value
|       in the following format "MM/DD/YYYY".*/



/*------------------------------------------------------------------------------------------------------/
| END: USER CONFIGURABLE PARAMETERS
/------------------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------------------/
| <===========Main=Loop================>
|
/------------------------------------------------------------------------------------------------------*/
if (paramsOK)
        {
        logMessage("START","Start of Home Stay Expiration Notice Batch Job.");

        var expireCapCount = expHomestay();

        logMessage("INFO","Number of Caps that will expire: " + expireCapCount + ".");
	logMessage("END","End of Home Stay Expiration Notice Batch Job: Elapsed Time : " + elapsed() + " Seconds.");
	}
if (emailAddress.length)
	aa.sendMail(senderEmailAddr, emailAddress, emailAddress2,"Asheville Home Stay Expiration Notice", emailText);
/*------------------------------------------------------------------------------------------------------/
| <===========END=Main=Loop================>
/------------------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------------------/
| <===========External Functions (used by Action entries)
/------------------------------------------------------------------------------------------------------*/
function expHomestay()
	{
	var capCount = 0;
	var getCapIdResult = aa.cap.getCapIDsByAppSpecificInfoDateRange(paramsAppSubGroupName, paramsAppSpecInfoLabel, paramsStartDt, paramsEndDt);
	if (!getCapIdResult.getSuccess())
		{
		logMessage("**ERROR","Retreiving Cap Id's by Application Specific field date range: " + getCapIdResult.getErrorMessage()+ ".");
		return false;
		}

	var capIdArray = getCapIdResult.getOutput(); //Array of CapIdScriptModel Objects

	for (i in capIdArray)
		{
		if (elapsed() > maxSeconds) // Only continue if time hasn't expired
		   {
		   logMessage("WARNING","A script timeout has caused partial completion of this process.  Please re-run.  " + elapsed() + " seconds elapsed, " + maxSeconds + " allowed.") ;
		   timeExpired = true;
		   break;
		   }

                capId = capIdArray[i].getCapID(); // CapIDModel Object
                var cap = aa.cap.getCap(capId).getOutput(); // Cap Object
                
                var capGroup = cap.getCapType().getGroup(); // Cap Type Group
                var capType = cap.getCapType().getType(); // Cap Type Per Type
                var capSubType = cap.getCapType().getSubType(); // Cap Type Per Sub Type
                var capCategory = cap.getCapType().getCategory(); // Cap Type Category

                var capStatus = cap.getCapStatus(); // Current Cap Status
		capIDString = capId.getCustomID();	

		//logMessage("INFO: ", "The Custom Id is " + capIDString);
		//logMessage("INFO: ", "The Cap Status is " + capStatus);
	
                //Find records to emailmail for correct record type and status
                if (exists(capGroup,paramsAppGroupArr) && exists(capType,paramsAppTypeArr) && exists(capSubType,paramsAppSubTypeArr) && exists(capStatus,paramsAppStatusArr))
		           {
   		    //logMessage("INFO: ", "The Record with Grading Permit that will expire in 60 days is " + capIDString);
		   // logMessage("INFO: ", "The Record Status is " + capStatus);                
                    
		    var ca = new Array(); 
                    var pa = new Array(); 
                    ca = getContactArray(capId);
                    // pa = getLicenseProfessional(capId);
                    var emailSubject = "Home Stay Permit Expiration Notice  " + capId.getCustomID();
                    theEmailText = '<html><head></head><body><p>'
                    + "Permit Number: " + capId.getCustomID() + "<br>"
                    + "Address: " + getCapAddress(capId) + "<br>"
					+ '</p><p>'
					+ 'Your Homestay permit will expire 30 days from today: ' + getAppSpecific('EXPIRATION DATE', capId) + '<br>'
					+ 'If you wish to renew, please fill out this <a href="https://form.jotform.com/70245119738155">Homestay Renewal Form</a> to upload '
					+ 'information about your renewal request, '
					+ 'including any changes made to your Homestay area. After this form is completed, we will be notified to invoice fees for your renewal '
					+ 'and will send a follow-up email with instructions to pay along with the invoice. If you do not wish to renew, '
					+ 'please contact Shannon Morgan at smorgan@ashevillenc.gov or 828.259.5829.'
					+ '</p><hr></body></html>'           
           			capCount++;

                    //Get The Contacts and Email Them
                    for(y in ca) 
                      {
                       email(ca[y]["email"], "residentialpermits@ashevillenc.gov", emailSubject,theEmailText);
                       }
      
                    }
		   //capCount++;
                   
		}
	return capCount;
	}





/*------------------------------------------------------------------------------------------------------/
| <===========Internal Functions and Classes (Used by this script)
/------------------------------------------------------------------------------------------------------*/

function elapsed() {
	var thisDate = new Date();
	var thisTime = thisDate.getTime();
	return ((thisTime - batchStartTime) / 1000)
}

// exists:  return true if Value is in Array
function exists(eVal, eArray) {
	  for (ii in eArray)
	  	if (eArray[ii] == eVal) return true;
	  return false;
}

function matches(eVal,argList) {
   for (var i=1; i<arguments.length;i++)
   	if (arguments[i] == eVal)
   		return true;

}

function isNull(pTestValue,pNewValue)
	{
	if (pTestValue==null || pTestValue=="")
		return pNewValue;
	else
		return pTestValue;
	}

function logMessage(etype,edesc) {
		aa.eventLog.createEventLog(etype, "Batch Process", batchJobName, sysDate, sysDate,"", edesc,batchJobID);
	aa.print(etype + " : " + edesc);
	emailText+=etype + " : " + edesc + "<br />";
	}

function logDebug(edesc) {
	if (showDebug) {
		aa.eventLog.createEventLog("DEBUG", "Batch Process", batchJobName, sysDate, sysDate,"", edesc,batchJobID);
		aa.print("DEBUG : " + edesc);
		emailText+="DEBUG : " + edesc + " <br />"; }
	}

function getCapId(pid1,pid2,pid3)  {

    var s_capResult = aa.cap.getCapID(pid1, pid2, pid3);
    if(s_capResult.getSuccess())
      return s_capResult.getOutput();
    else
    {
      logMessage("**ERROR","Failed to get capId: " + s_capResult.getErrorMessage());
      return null;
    }
  }

function dateAdd(td,amt)
	// perform date arithmetic on a string
	// td can be "mm/dd/yyyy" (or any string that will convert to JS date)
	// amt can be positive or negative (5, -3) days
	// if optional parameter #3 is present, use working days only
	{

	var useWorking = false;
	if (arguments.length == 3)
		useWorking = true;

	if (!td)
		dDate = new Date();
	else
		dDate = new Date(td);
	var i = 0;
	if (useWorking)
		if (!aa.calendar.getNextWorkDay)
			{
			logMessage("**ERROR","getNextWorkDay function is only available in Accela Automation 6.3.2 or higher.");
			while (i < Math.abs(amt))
				{
				dDate.setTime(dDate.getTime() + (1000 * 60 * 60 * 24 * (amt > 0 ? 1 : -1)));
				if (dDate.getDay() > 0 && dDate.getDay() < 6)
					i++
				}
			}
		else
			{
			while (i < Math.abs(amt))
				{
				dDate = new Date(aa.calendar.getNextWorkDay(aa.date.parseDate(dDate.getMonth()+1 + "/" + dDate.getDate() + "/" + dDate.getFullYear())).getOutput().getTime());
				i++;
				}
			}
	else
		dDate.setTime(dDate.getTime() + (1000 * 60 * 60 * 24 * amt));

	return (dDate.getMonth()+1) + "/" + dDate.getDate() + "/" + dDate.getFullYear();
	}

function jsDateToMMDDYYYY(pJavaScriptDate)
	{
	//converts javascript date to string in MM/DD/YYYY format
	//
	if (pJavaScriptDate != null)
		{
		if (Date.prototype.isPrototypeOf(pJavaScriptDate))
	return (pJavaScriptDate.getMonth()+1).toString()+"/"+pJavaScriptDate.getDate()+"/"+pJavaScriptDate.getFullYear();
		else
			{
			logMessage("**ERROR","Parameter is not a javascript date");
			return ("INVALID JAVASCRIPT DATE");
			}
		}
	else
		{
		logMessage("**ERROR","Parameter is null");
		return ("NULL PARAMETER VALUE");
		}
	}

 
 function getContactArray()
	{
	// Returns an array of associative arrays with contact attributes.  Attributes are UPPER CASE
	// optional capid
	// added check for ApplicationSubmitAfter event since the contactsgroup array is only on pageflow,
	// on ASA it should still be pulled normal way even though still partial cap
	var thisCap = capId;
	if (arguments.length == 1) thisCap = arguments[0];

	var cArray = new Array();

	if (arguments.length == 0 && !cap.isCompleteCap() && controlString != "ApplicationSubmitAfter") // we are in a page flow script so use the capModel to get contacts
		{
		capContactArray = cap.getContactsGroup().toArray() ;
		}
	else
		{
		var capContactResult = aa.people.getCapContactByCapID(thisCap);
		if (capContactResult.getSuccess())
			{
			var capContactArray = capContactResult.getOutput();
			}
		}
	
	if (capContactArray)
		{
		for (yy in capContactArray)
			{
			var aArray = new Array();
			aArray["lastName"] = capContactArray[yy].getPeople().lastName;
			aArray["firstName"] = capContactArray[yy].getPeople().firstName;
			aArray["middleName"] = capContactArray[yy].getPeople().middleName;
			aArray["businessName"] = capContactArray[yy].getPeople().businessName;
			aArray["contactSeqNumber"] =capContactArray[yy].getPeople().contactSeqNumber;
			aArray["contactType"] =capContactArray[yy].getPeople().contactType;
			aArray["relation"] = capContactArray[yy].getPeople().relation;
			aArray["phone1"] = capContactArray[yy].getPeople().phone1;
			aArray["phone2"] = capContactArray[yy].getPeople().phone2;
			aArray["email"] = capContactArray[yy].getPeople().email;
			aArray["addressLine1"] = capContactArray[yy].getPeople().getCompactAddress().getAddressLine1();
			aArray["addressLine2"] = capContactArray[yy].getPeople().getCompactAddress().getAddressLine2();
			aArray["city"] = capContactArray[yy].getPeople().getCompactAddress().getCity();
			aArray["state"] = capContactArray[yy].getPeople().getCompactAddress().getState();
			aArray["zip"] = capContactArray[yy].getPeople().getCompactAddress().getZip();
			aArray["fax"] = capContactArray[yy].getPeople().fax;
			aArray["notes"] = capContactArray[yy].getPeople().notes;
			aArray["country"] = capContactArray[yy].getPeople().getCompactAddress().getCountry();
			aArray["fullName"] = capContactArray[yy].getPeople().fullName;

			if (arguments.length == 0 && !cap.isCompleteCap()) // using capModel to get contacts
				var pa = capContactArray[yy].getPeople().getAttributes().toArray();
			else
				var pa = capContactArray[yy].getCapContactModel().getPeople().getAttributes().toArray();
	                for (xx1 in pa)
                   		aArray[pa[xx1].attributeName] = pa[xx1].attributeValue;
			cArray.push(aArray);
			}
		}
	return cArray;
	}


function getLicenseProfessional(itemcapId)
{
	capLicenseArr = null;
	var s_result = aa.licenseProfessional.getLicenseProf(itemcapId);
	if(s_result.getSuccess())
	{
		capLicenseArr = s_result.getOutput();
		if (capLicenseArr == null || capLicenseArr.length == 0)
		{
			aa.print("WARNING: no licensed professionals on this CAP:" + itemcapId);
			capLicenseArr = null;
		}
	}
	else
	{
		aa.print("ERROR: Failed to license professional: " + s_result.getErrorMessage());
		capLicenseArr = null;
	}
	return capLicenseArr;
}



function getAppSpecific(itemName)  // optional: itemCap
{
	var updated = false;
	var i=0;
	var itemCap = capId;
	if (arguments.length == 2) itemCap = arguments[1]; // use cap ID specified in args
   	
	if (useAppSpecificGroupName)
	{
		if (itemName.indexOf(".") < 0)
			{ logDebug("**WARNING: editAppSpecific requires group name prefix when useAppSpecificGroupName is true") ; return false }
		
		
		var itemGroup = itemName.substr(0,itemName.indexOf("."));
		var itemName = itemName.substr(itemName.indexOf(".")+1);
	}
	
    var appSpecInfoResult = aa.appSpecificInfo.getByCapID(itemCap);
	if (appSpecInfoResult.getSuccess())
 	{
		var appspecObj = appSpecInfoResult.getOutput();
		
		if (itemName != "")
		{
			for (i in appspecObj)
				if( appspecObj[i].getCheckboxDesc() == itemName && (!useAppSpecificGroupName || appspecObj[i].getCheckboxType() == itemGroup) )
				{
					return appspecObj[i].getChecklistComment();
					break;
				}
		} // item name blank
	} 
	else
		{ logDebug( "**ERROR: getting app specific info for Cap : " + appSpecInfoResult.getErrorMessage()) }
}
function email(pToEmail, pFromEmail, pSubject, pText) 
	{
	//Sends email to specified address
	//06SSP-00221
	//
	aa.sendMail(pFromEmail, pToEmail, "", pSubject, pText);
	logDebug("For permit "+capIDString+" the Email was sent to "+pToEmail);
	return true;
	}


function getCapAddress(recCapId)
{
  var CapAddress = "";
  var itemCap = recCapId;

  capAddressResult1 = aa.address.getAddressByCapId(itemCap);
  if (capAddressResult1.getSuccess())
  {
    Address = capAddressResult1.getOutput();
    for (yy in Address)
    {
      CapAddress = Address[yy].getHouseNumberStart();

      if (Address[yy].getStreetDirection())
          CapAddress += " " + Address[yy].getStreetDirection();

      CapAddress += " " + Address[yy].getStreetName();

      if (Address[yy].getStreetSuffix())
          CapAddress += " " + Address[yy].getStreetSuffix();

      if (Address[yy].getUnitStart())
          CapAddress += " " + Address[yy].getUnitStart();

      CapAddress += ", " + Address[yy].getCity();
      CapAddress += " " + Address[yy].getZip();
    }
    return CapAddress;
  }
  else
  { logDebug("No record address available for capId: " + capId); return null; }
}