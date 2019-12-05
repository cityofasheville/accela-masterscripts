// Returns array of email addresses, everyone of contactType
// Param contactType can also be "ALL".
function getEmailsByContactType(contactType) {
  var emailAddrs = [];
  var CapContacts = aa.people.getCapContactByCapID(capId);
  if (CapContacts.getSuccess()) {
    var ContactOutputs = CapContacts.getOutput();
    for (yy in ContactOutputs) {
      if(contactType.equals(ContactOutputs[yy].getCapContactModel().getPeople().getContactType()) || (contactType == "ALL")) { 
        if(ContactOutputs[yy].getEmail() != null) {
          emailAddrs.push(ContactOutputs[yy].getEmail());
        }
      }
    }
  }
  return emailAddrs;
}
