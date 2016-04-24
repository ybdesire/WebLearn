// Detect if a web page sniffs the user agent or not.

"use strict";
//create page object
var page = require('webpage').create(),
    system = require('system'),
    sniffed,
    address;

//init page object
page.onInitialized = function () {
    page.evaluate(function () {

        (function () {
            var userAgent = window.navigator.userAgent,
                platform = window.navigator.platform;
                
            //set parameter for window.navigator
            window.navigator = {
                appCodeName: 'Mozilla',
                appName: 'Netscape',
                cookieEnabled: false,
                sniffed: false
            };
            //getter for window.navigator.userAgent
            window.navigator.__defineGetter__('userAgent', function () {
                window.navigator.sniffed = true;
                return userAgent;
            });
            //getter for window.navigator.platform
            window.navigator.__defineGetter__('platform', function () {
                window.navigator.sniffed = true;
                return platform;
            });
        })();
    });
};

if (system.args.length === 1) {//argument checking
    console.log('Usage: detectsniff.js <some URL>');
    phantom.exit(1);
} else {
    address = system.args[1];//get URL address
    console.log('Checking ' + address + '...');
    //open URL address
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
            phantom.exit();
        } else {
            window.setTimeout(function () {
                sniffed = page.evaluate(function () {
                    return navigator.sniffed;
                });
                if (sniffed) {
                    console.log('The page tried to sniff the user agent.');
                } else {
                    console.log('The page did not try to sniff the user agent.');
                }
                phantom.exit();
            }, 1500);
        }
    });
}