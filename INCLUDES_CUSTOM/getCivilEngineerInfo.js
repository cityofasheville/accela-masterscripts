function getCivilEngineerInfo(capId) { // parameter is capId object: class = com.accela.aa.aamain.cap.CapIDModel,  not capIDString class = java.lang.String
    var civilEngineer = {};
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            var contactType = ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() + "";
            if (contactType == "Civil Engineer") {
                civilEngineer.email = ContactOutputs[contact_id].people.email;
                civilEngineer.name = ContactOutputs[contact_id].people.contactName;
                civilEngineer.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                civilEngineer.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                civilEngineer.addressLine2 = ContactOutputs[contact_id].people.compactAddress.addressLine2;
                civilEngineer.city = ContactOutputs[contact_id].people.compactAddress.city;
                civilEngineer.state = ContactOutputs[contact_id].people.compactAddress.state;
                civilEngineer.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }
    return civilEngineer;
}