# General Accela Scripting Gotchas
* Must use `==` rather than `===` because Accela does not return types consistently
* From Corey in Spokane: "Unless you override comment() or logMessage() in your customs file it essentially does the same thing, appends to the global "message" variable.  comment() just checks showDebug/showMessage and appends to debug/message global variable accordingly.  logMessage just appends to message and logDebug appends to debug.  Usually in before events it's showMessage=true (to make sure the variable will get appended), then comment() to actually add the text to the variable, then cancel=true to stop execution.""

# Needs Investigation
* Must have semicolon at the end of every line?
* `==` works and `!=` doesn’t?
* Switch statements don’t work?
* aa.sendMail rather than email? (goes through Communication Manager)
* See ConvertToRealCapAfter
