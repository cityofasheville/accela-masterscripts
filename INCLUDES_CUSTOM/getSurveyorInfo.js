function getSurveyorInfo(capId) { // parameter is capId object: class = com.accela.aa.aamain.cap.CapIDModel,  not capIDString class = java.lang.String
    var surveyor = {};
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            var contactType = ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() + "";
            if (contactType == "Surveyor") {
                surveyor.email = ContactOutputs[contact_id].people.email;
                surveyor.name = ContactOutputs[contact_id].people.contactName;
                surveyor.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                surveyor.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                surveyor.addressLine2 = ContactOutputs[contact_id].people.compactAddress.addressLine2;
                surveyor.city = ContactOutputs[contact_id].people.compactAddress.city;
                surveyor.state = ContactOutputs[contact_id].people.compactAddress.state;
                surveyor.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }
    return surveyor;
}