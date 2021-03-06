function inAButNotB(a1, a2) {
  // given two arrays, returns everything that appears in first list but not the second.
  // Use this to send emails to everyone in first list unless they are in second.
  // The toString funcs are needed because Accela funcs don't return JS strings, they return [object JavaObject] 

  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.toString().toUpperCase().indexOf(a1[i].toString().toUpperCase()) === -1) {
      result.push(a1[i].toString());
    }
  }
  return result;
}

