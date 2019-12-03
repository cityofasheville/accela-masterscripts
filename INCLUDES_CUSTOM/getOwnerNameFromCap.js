function getOwnerNameFromCap() {
    // returns name of owner given Cap object. If multiples, just the first.
    itemCap = capId;
    if (arguments.length > 1 && arguments[1]) itemCap = arguments[1];

    capOwnerResult = aa.owner.getOwnerByCapId(itemCap);
    if (capOwnerResult.getSuccess()) {
        owner = capOwnerResult.getOutput();

        thisOwner = owner[0];
        return thisOwner.getOwnerFullName();
    }
    return null;
}