function getCapOwnerByName(ownerName) {
    itemCap = capId;
    if (arguments.length > 1 && arguments[1]) itemCap = arguments[1];

    capOwnerResult = aa.owner.getOwnerByCapId(itemCap);
    if (capOwnerResult.getSuccess()) {
        owner = capOwnerResult.getOutput();

        for (o in owner) {
            thisOwner = owner[o];
            if (thisOwner.getOwnerFullName() == ownerName) {
                logDebug("Found owner[" + o + "]: " + thisOwner.getOwnerFullName());
                return thisOwner;
            }
        }
    }
    return null;
}

