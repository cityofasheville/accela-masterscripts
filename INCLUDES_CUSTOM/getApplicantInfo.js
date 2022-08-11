function getApplicantInfo(capId) { // parameter is capId object: class = com.accela.aa.aamain.cap.CapIDModel,  not capIDString class = java.lang.String
    var applicant = {};
    var CapContacts = aa.people.getCapContactByCapID(capId);
    if (CapContacts.getSuccess()) {
        var ContactOutputs = CapContacts.getOutput();
        for (contact_id in ContactOutputs) {
            if (ContactOutputs[contact_id].getCapContactModel().getPeople().getContactType() === "Applicant") {
                applicant.email = ContactOutputs[contact_id].people.email;
                applicant.name = ContactOutputs[contact_id].people.contactName;
                applicant.phone = ContactOutputs[contact_id].people.contactPhoneNum;
                applicant.addressLine1 = ContactOutputs[contact_id].people.compactAddress.addressLine1;
                applicant.city = ContactOutputs[contact_id].people.compactAddress.city;
                applicant.state = ContactOutputs[contact_id].people.compactAddress.state;
                applicant.zip = ContactOutputs[contact_id].people.compactAddress.zip;
            }
        }
    }
    return applicant;
}

/*
// use: 
var capId = aa.cap.getCapID("19-00719").getOutput();
var applicant = getApplicantInfo(capId);
aa.print(applicant.email);
aa.print(applicant.name);
aa.print(applicant.phone);
aa.print(applicant.addressLine1);
aa.print(applicant.city);
aa.print(applicant.state);
aa.print(applicant.zip);

*/

