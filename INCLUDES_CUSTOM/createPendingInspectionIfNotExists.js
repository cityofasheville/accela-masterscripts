function createPendingInspectionIfNotExists(insGrp, insType) {
  // only creates the pending inspection if it doesn't already exist
  if(checkInspectionResult(insType, 'Pending')){
    createPendingInspection(insGrp, insType);
  }
}