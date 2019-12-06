function inAButNotB(a1, a2) {
    // given two arrays, returns everything that appears in first list but not the second.
    // Use this to send emails to everyone in first list unless they are in second.
    var result = [];
    for (var i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1) {
        result.push(a1[i]);
      }
    }
    return result;
  }

  // console.log(inAButNotB(['a ','b','c'], ['a']));
  // console.log(inAButNotB(['a','b','c'], ['a ']));