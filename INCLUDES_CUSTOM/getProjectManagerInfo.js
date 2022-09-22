function getProjectManagerInfo(capId) { // parameter is capId object: class = com.accela.aa.aamain.cap.CapIDModel,  not capIDString class = java.lang.String
    var projectManager = {};
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            var contactType = ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() + "";
            if (contactType == "Project Manager") {
                projectManager.email = ContactOutputs[contact_id].people.email;
                projectManager.name = ContactOutputs[contact_id].people.contactName;
                projectManager.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                projectManager.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                projectManager.addressLine2 = ContactOutputs[contact_id].people.compactAddress.addressLine2;
                projectManager.city = ContactOutputs[contact_id].people.compactAddress.city;
                projectManager.state = ContactOutputs[contact_id].people.compactAddress.state;
                projectManager.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }
    return projectManager;
}