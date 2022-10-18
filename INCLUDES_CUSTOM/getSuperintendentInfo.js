function getSuperintendentInfo(capId) { // parameter is capId object: class = com.accela.aa.aamain.cap.CapIDModel,  not capIDString class = java.lang.String
    var superintendent = {};
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            var contactType = ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() + "";
            if (contactType == "Superintendent") {
                superintendent.email = ContactOutputs[contact_id].people.email;
                superintendent.name = ContactOutputs[contact_id].people.contactName;
                superintendent.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                superintendent.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                superintendent.addressLine2 = ContactOutputs[contact_id].people.compactAddress.addressLine2;
                superintendent.city = ContactOutputs[contact_id].people.compactAddress.city;
                superintendent.state = ContactOutputs[contact_id].people.compactAddress.state;
                superintendent.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }
    return superintendent;
}