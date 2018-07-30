/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 30 July 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to emulate interfaces in JavaScript
; using duck typing. 
;===========================================
*/

// Creates header
var header = require('../header.js');
console.log(header.display("Matthew", "Smith", "Exercise 1.4"));

function Album(title, composer) {
    this.title = title;
    this.composer = composer;
}

Album.prototype.purchase = function() {
    console.log("Album added to shopping cart!");
};

function Cd(title, composer, price) {
    this.title = title;
    this.composer = composer;
    this.price = price;
}

Cd.prototype.purchase = function() {
    console.log("CD added to shopping cart!");
};

function Dvd(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
}

Dvd.prototype.purchase = function() {
    console.log("DVD added to shopping cart!");
};

var uriCaine = new Album("Uri Caine", "Primal Light");
var blakeShelton = new Cd("If I'm Honest", "Blake Shelton", 14.99);
var tron = new Dvd("TRON-LEGACY", 9.96, "Action/Adventure");

var purchased = [];

function purchaseIt(item) {
    item.purchase();

    purchased.push(item);
}

//purchaseIt(uriCaine);
//purchaseIt(blakeShelton);
//purchaseIt(tron);

// Display shopping cart
//console.log("\n-- The following items have been added to your shopping cart --");
for (var k = 0; k < purchased.length; k++) {
    console.log(purchased[k].constructor.name + ": " + purchased[k].title);
}

// Matt's Code

// Car
function Car(model) {
    this.model = model;
}
Car.prototype.start = function() {
    console.log(this.model + " added to the race track!");
}

// Truck
function Truck(model, year) {
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function() {
    console.log(this.year + " " + this.model + " added to the race track!");
}

// Jeep
function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}
Jeep.prototype.start = function() {
    console.log(this.color + " " + this.year + " " + this.model + " added to the race track!");
}

// Racetrack Array
var racetrack = [];

// driveIt function
function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

// Vehicle Objects
var car = new Car("Lemon");
driveIt(car);

var truck = new Truck("Monster", 1983);
driveIt(truck);

var jeep = new Jeep("Jormp", 2075, "Plaid");
driveIt(jeep);

// Looping over the racetrack array
console.log("\n-- The following vehicles are in the race! --")
for(let vehicle of racetrack) {
    console.log(vehicle.constructor.name + ": " + vehicle.model);
}

