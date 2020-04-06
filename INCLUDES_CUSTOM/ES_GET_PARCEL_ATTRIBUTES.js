function ES_GET_PARCEL_ATTRIBUTES() {

	if (AInfo['ParcelAttribute.JURISDICTION'] != null) {
		editAppSpecific('Jurisdiction', AInfo['ParcelAttribute.JURISDICTION']);
	}

	if (AInfo['ParcelAttribute.ZONING DISTRICT'] != null) {
		editAppSpecific('Zoning District', AInfo['ParcelAttribute.ZONING DISTRICT']);
	}

	if (AInfo['ParcelAttribute.STEEP SLOPE'] != null) {
		editAppSpecific('Steep Slope', AInfo['ParcelAttribute.STEEP SLOPE']);
	}

	if (AInfo['ParcelAttribute.RIVER DISTRICT'] != null) {
		editAppSpecific('River District', AInfo['ParcelAttribute.RIVER DISTRICT']);
	}

	if (AInfo['ParcelAttribute.DTDR OVERLAY'] != null) {
		editAppSpecific('DTDR Overlay', AInfo['ParcelAttribute.DTDR OVERLAY']);
	}

	if (AInfo['ParcelAttribute.HRC OVERLAY'] != null) {
		editAppSpecific('HRC Overlay', AInfo['ParcelAttribute.HRC OVERLAY']);
	}

	if (AInfo['ParcelAttribute.FIRE DISTRICT'] != null) {
		editAppSpecific('Fire District', AInfo['ParcelAttribute.FIRE DISTRICT']);
	}

	if (AInfo['ParcelAttribute.FLOOD PLAIN'] != null) {
		editAppSpecific('Flood Plain', AInfo['ParcelAttribute.FLOOD PLAIN']);
	}

	if (AInfo['ParcelAttribute.AQUATIC BUFFER'] != null) {
		editAppSpecific('Aquatic Buffer', AInfo['ParcelAttribute.AQUATIC BUFFER']);
	}

	if (AInfo['ParcelAttribute.LANDMARK'] != null) {
		editAppSpecific('Landmark', AInfo['ParcelAttribute.LANDMARK']);
	}

	var x = new Array;
	x = getElevationSlopeValues(AInfo['ParcelAttribute.PINNUMBER']);
	editAppSpecific('Max Elevation', x['maxElevation']);
	editAppSpecific('Percent Slope', x['percentSlope']);

	if (AInfo['ParcelAttribute.INSPECTION GROUP'] != null) {
		editAppSpecific('Inspection Group', AInfo['ParcelAttribute.INSPECTION GROUP']);
	}

	if (AInfo['ParcelAttribute.BUILDING VALUE'] != null) {
		editAppSpecific('Building Value', AInfo['ParcelAttribute.BUILDING VALUE']);
	}

	if (AInfo['ParcelAttribute.INNOVATION DISTRICT'] != null) {
		editAppSpecific('Innovation District', AInfo['ParcelAttribute.INNOVATION DISTRICT']);
	}

	if (AInfo['ParcelAttribute.PINNUMBER'] != null) {
		editAppSpecific('Pinnumber', AInfo['ParcelAttribute.PINNUMBER']);
	}

}
