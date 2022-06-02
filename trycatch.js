/*
 - not to be used instead of if-else
 - use sparingly
 - this is for scenarios where errors may arise that are beyond the scope of your control; your code is dependent on a third-party not fulfilling the role
 it is expected to
 - if errors are within the scope of your control, you should fix that without using try-catch
 - this is not for input validation
*/
try{ //try this block of code

}
catch(error){ //if anything in that try block fails, go here
  
}
finally{ //regardless of what happens, execute the final block
}
