var webPage = require('webpage');
var page = webPage.create();

page.open('https://www.apkfiles.com/apk-475836/clash-of-spartan-hd-update', function (status) {
  var cookies = page.cookies;

  console.log('Listing cookies:');
  for(var i in cookies) {
    console.log(cookies[i].name + '=' + cookies[i].value);
  }

  phantom.exit();
});


