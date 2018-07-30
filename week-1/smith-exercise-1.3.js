/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 30 July 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to emulate classes with contructor functions. 
;===========================================
*/

// Creates header
var header = require('../header.js');
console.log(header.display("Matthew", "Smith", "Exercise 1.3"));

function House(bedrooms) {
    this.bedrooms = bedrooms;
    this.color = "White";
    this.bathrooms = 2;

    this.getDetails = function() {
        return this.bedrooms + " bedroom, " + this.bathrooms + " bath " + this.color + " house.";
    };
}

var house = new House(5);

//console.log(house.getDetails());

var house = {
    bedrooms: 4,
    bathrooms: 2,
    color: "White",
    getDetails: function() {
        return this.bedrooms + " bedroom, " + this.bathrooms + " bath " + this.color + " house.";
    }
};

//console.log(house.getDetails());

// Matt's Code
function CellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function() {
        return this.price;
    }
    this.getModel = function() {
        return this.model;
    }
    this.getDetails = function() {
        return "Manufacturer: " + this.manufacturer +
               "\nModel: " + this.getModel() +
               "\nColor: " + this.color +
               "\nPrice: " + this.getPrice();
    }
}

var mattsPhone = new CellPhone("Google", "Pixel 2", "Black", "Relatively Inexpensive");
console.log(mattsPhone.getDetails());