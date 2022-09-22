function getContractorInfo(capId) { // parameter is capId object: class = com.accela.aa.aamain.cap.CapIDModel,  not capIDString class = java.lang.String
    var contractor = {};
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            var contactType = ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() + "";
            if (contactType == "Contractor") {
                contractor.email = ContactOutputs[contact_id].people.email;
                contractor.name = ContactOutputs[contact_id].people.contactName;
                contractor.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                contractor.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                contractor.addressLine2 = ContactOutputs[contact_id].people.compactAddress.addressLine2;
                contractor.city = ContactOutputs[contact_id].people.compactAddress.city;
                contractor.state = ContactOutputs[contact_id].people.compactAddress.state;
                contractor.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }
    return contractor;
}