function getArchitectInfo(capId) { // parameter is capId object: class = com.accela.aa.aamain.cap.CapIDModel,  not capIDString class = java.lang.String
    var architect = {};
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            var contactType = ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() + "";
            if (contactType == "Architect") {
                architect.email = ContactOutputs[contact_id].people.email;
                architect.name = ContactOutputs[contact_id].people.contactName;
                architect.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                architect.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                architect.addressLine2 = ContactOutputs[contact_id].people.compactAddress.addressLine2;
                architect.city = ContactOutputs[contact_id].people.compactAddress.city;
                architect.state = ContactOutputs[contact_id].people.compactAddress.state;
                architect.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }
    return architect;
}