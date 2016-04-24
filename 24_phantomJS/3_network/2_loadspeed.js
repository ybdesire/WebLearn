"use strict";
//create a page object
var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {//arguments checking
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit(1);
} else {
    t = Date.now();
    address = system.args[1];//URL
    page.open(address, function (status) {//open URL page
        if (status !== 'success') {// check HTTP status
            console.log('FAIL to load the address');
        } else {// time calculation 
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('Loading time ' + t + ' msec');
        }
        phantom.exit();
    });
}