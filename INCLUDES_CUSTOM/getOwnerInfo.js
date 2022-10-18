function getOwnerInfo(capId) { // parameter is capId object: class = com.accela.aa.aamain.cap.CapIDModel,  not capIDString class = java.lang.String
    var owner = {};
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            var contactType = ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() + "";
            if (contactType == "Owner/Owner's Agent") {
                owner.email = ContactOutputs[contact_id].people.email;
                owner.name = ContactOutputs[contact_id].people.contactName;
                owner.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                owner.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                owner.addressLine2 = ContactOutputs[contact_id].people.compactAddress.addressLine2;
                owner.city = ContactOutputs[contact_id].people.compactAddress.city;
                owner.state = ContactOutputs[contact_id].people.compactAddress.state;
                owner.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }
    return owner;
}