/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 13 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; the Singleton Pattern.
;===========================================
*/

// Creates header
var header = require('../header.js');
console.log(header.display("Matthew", "Smith", "Exercise 3.3"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

// Database singleton object
var DatabaseSingleton = (function() {
    // Declare private instance variable in a closure
    var instance;
    // Define private createInstance function in a closure
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    // Return closure singleton function that either creates the initial instance, or returns the existing one.
    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

// Function that tests whether DatabaseSingleton is a true singleton even if it has multiple references
function databaseSingletonTest() {
    // This initial call to DatabaseSingleton.getInstance() actually creates the instance.
    var databaseInstance1 = DatabaseSingleton.getInstance();
    // This call should return the same instance created when assigning databaseInstance1.
    var databaseInstance2 = DatabaseSingleton.getInstance();
    
    console.log("One database instance? " + (databaseInstance1 === databaseInstance2));
}

// Execute singleton test
databaseSingletonTest();

// end program