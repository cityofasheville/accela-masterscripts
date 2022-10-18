function getOtherInfo(capId) { // parameter is capId object: class = com.accela.aa.aamain.cap.CapIDModel,  not capIDString class = java.lang.String
    var other = {};
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            var contactType = ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() + "";
            if (contactType == "Other") {
                other.email = ContactOutputs[contact_id].people.email;
                other.name = ContactOutputs[contact_id].people.contactName;
                other.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                other.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                other.addressLine2 = ContactOutputs[contact_id].people.compactAddress.addressLine2;
                other.city = ContactOutputs[contact_id].people.compactAddress.city;
                other.state = ContactOutputs[contact_id].people.compactAddress.state;
                other.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }
    return other;
}