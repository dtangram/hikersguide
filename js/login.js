/*
 * login.js
 *
*/

var request = new XMLHttpRequest();

request.onload = function() {
  var jsonObj = JSON.parse(request.responseText);

  // PULL IN COPYRIGHT INFO
  document.querySelector("footer section p:nth-child(1)").innerHTML = "©" + jsonObj.about.copyright;
};

request.open("GET", "https://jbonline.bitbucket.io/data/hikersguide.json", true);
request.send(null);
