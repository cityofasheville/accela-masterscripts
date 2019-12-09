function inAButNotB(a1, a2) {
  // given two arrays, returns everything that appears in first list but not the second.
  // Use this to send emails to everyone in first list unless they are in second.
  // The toString funcs are needed because Accela funcs don't return JS strings, they return [object JavaObject] 
  // https://developer.mozilla.org/en-US/docs/Archive/Web/LiveConnect_Reference/JavaObject "Archive of obsolete content"

  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.toString().indexOf(a1[i].toString()) === -1) {
      result.push(a1[i].toString());
    }
  }
  return result;
}

