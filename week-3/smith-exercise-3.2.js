/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 13 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; the Factory Pattern.
;===========================================
*/

// Creates header
var header = require('../header.js');
console.log(header.display("Matthew", "Smith", "Exercise 3.2"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    
    // Updated DatabaseFactory with switch statement that includes Oracle and Informix
    switch(properties.databaseType) {
        case "Postgres": {
            this.databaseClass = Postgres;
            break;
        }
        case "MySql": {
            this.databaseClass = MySql;
            break;
        }
        case "Oracle": {
            this.databaseClass = Oracle;
            break;
        }
        case "Informix": {
            this.databaseClass = Informix;
            break;
        }
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

// Oracle database class
function Oracle(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "p@55w0rd";
    this.server = properties.server || "localhost:8080";
    this.version = properties.version || "1.0";
}

// Informix database class
function Informix(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "p@55w0rd";
    this.server = properties.server || "localhost:8080";
}

// Creates an Oracle database factory and database.
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "rhetoracle",
    password: "0r@c13",
    server: "localhost:1111",
    version: "1.1"
});

// Creates an Informix database factory and database.
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "missinformixion",
    password: "1n4mix",
    server: "localhost:9999"
});

// Logging to console
console.log("\n");
console.log(oracle);
console.log("\n");
console.log(informix);
// end program
