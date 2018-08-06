/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 6 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; the Prototype Pattern.
;===========================================
*/

// Creates header
var header = require('../header.js');
console.log(header.display("Matthew", "Smith", "Exercise 1.3"));

var publication = {
    getType: function () {
        console.log("The publication type is '" + this.type + "'");
    }
};

var book = Object.create(publication, {
   "type": {
       "value": "Book",
       enumerable: true
   },
    "title": {
       "value": "Learning JavaScript Design Patterns."
    }
});

//book.getType();
//console.log("The title is '" + book.title + "'");

// Matt's Code

var Person = {
    getAge() {
        return this.age;
    }
}

var person = Object.create(Person, {
    "age": {
       "value": 36,
       enumerable: true
    },
    "fullName": {
        "value": "Matthew Brubaker Smith"
    }
});

console.log(person.fullName);
console.log(person.getAge());