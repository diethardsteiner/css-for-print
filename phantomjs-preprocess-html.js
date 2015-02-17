var fs = require('fs');
var page = require('webpage').create();
// var url = 'file://' + fs.absolute('./index.html');
var url = 'file://' + fs.absolute('./sample1.html');

page.open(url, function (status) {
  if(status === "success") {
	  console.log(page.content);
  		//page.render('output.html');
  }
 	phantom.exit();
});