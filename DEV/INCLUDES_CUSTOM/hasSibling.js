function hasSibling(capId, appType) {

	var parentId = getParent();
	childArray = getChildren(appType, parentId);
	if (childArray && childArray.length > 0) 
		return true;
	return false;
}




