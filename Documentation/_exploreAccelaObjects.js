// query top objects: aa.cap, aa.env, aa.fee, aa.inspection, aa.person, aa.people, aa.workflow
function listObj(obj) {
  for (x in obj) {
    if (typeof (obj[x]) === "function") {
      aa.print(x);
    }
  }
  for (x in obj) {
    if (obj[x] && typeof (obj[x]) !== "function") {
      aa.print(x + " = " + obj[x]);
    }
  }
}
listObj(aa);

//Failed attempt at recursion (java.lang.NullPointerException)
function listObj(obj, nest) {
  for (x in obj)
    if (typeof (obj[x]) === "function")
      aa.print(Array(nest + 1).join("-") + x);
  for (x in obj)
    if (obj[x] && typeof (obj[x]) !== "function") {
      aa.print(x + " = " + obj[x]);
      listObj(obj[x], nest + 1);
    }
}
listObj(aa, 0);

// playing with function getEmailsByContactType
function getEmails() {
  capId = aa.cap.getCapID("19-00719").getOutput();
  var emailAddrs = [];
  var CapContacts = aa.people.getCapContactByCapID(capId);
  if (CapContacts.getSuccess()) {
    var ContactOutputs = CapContacts.getOutput();
    for (yy in ContactOutputs) {
      ContactOutputs[yy].getCapContactModel().getPeople().getContactType();
      // if(ContactOutputs[yy].getEmail() != null) {
      //   emailAddrs.push(ContactOutputs[yy].getEmail().trim());
      // }

    }
  }
  return emailAddrs;
}

aa.print(getEmails());

//////////////////////////////////////////////////////
// verbose version with error handling
myResult = aa.cap.getCapID("19-00719");
if (myResult.getSuccess()) {
  myCap = myResult.getOutput();
} else {
  aa.print(myResult.getErrorMessage());
  aa.abortScript();
}
myResult = aa.inspection.getInspections(myCap);

if (myResult.getSuccess()) {
  myInspections = myResult.getOutput();
} else {
  aa.print(myResult.getErrorMessage());
  aa.abortScript();
}
for (x in myInspections)
  var anInspection = myInspections[x];
for (xx in anInspection)
  if (typeof (anInspection[x]) === "function")
    aa.print(x);
for (xx in anInspection)
  if (typeof (anInspection[x]) !== "function")
    aa.print(x + " = " + anInspection[x]);
//////////////////////////////////////////////////////
// Show all methods and properties of an Accela object
capId = aa.cap.getCapID("19-00719").getOutput();

capDetail = aa.cap.getCapDetail(capId).getOutput();
aa.print(capDetail.getClass());

for (x in capDetail)
  if (typeof (capDetail[x]) === "function")
    aa.print(x);
for (x in capDetail)
  if (typeof (capDetail[x]) !== "function")
    aa.print(x + " = " + capDetail[x]);


//////////////////////////////////////////////////////
// 
var capId = aa.cap.getCapID("19-00719").getOutput();
var LicProfs = aa.licenseProfessional.getLicensedProfessionalsByCapID(capId);

if (LicProfs.getSuccess()) {
  var LicProfOutputs = LicProfs.getOutput();
  for (yy in LicProfOutputs) {
    var licProf = {};
    var obj = LicProfOutputs[yy];
    for (x in obj)
      if (typeof (obj[x]) === "function")
        aa.print(x);
  }
}