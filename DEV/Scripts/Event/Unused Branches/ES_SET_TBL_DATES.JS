
removeASITable('PERMITS');
for (thisrow in PERMITS) 
//start replaced branch: ES_LOOP_THRU_PERMITS_TBL
 {
PERMITS[thisrow]['Issued'] = dateAdd(null,0), PERMITS[thisrow]['Status'] = 'ISSUED';
PERMITS[thisrow]['Expires'] = dateAdd(null,365);

}
//end replaced branch: ES_LOOP_THRU_PERMITS_TBL;
addASITable('PERMITS',PERMITS);

