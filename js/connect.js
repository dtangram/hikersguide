/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/

var request = new XMLHttpRequest();

request.onload = function() {
  var jsonObj = JSON.parse(request.responseText);

  // PULL IN LOCATION INFO FOR BACKGROUND IMAGES ON HOME PAGE
  var connectString = "";

  // document.querySelector("section article:nth-child(2) h3").innerHTML = jsonObj.about.title;
  document.querySelector("section article:nth-child(2) p").innerHTML = jsonObj.about.title + " " + jsonObj.about.text;

  for(var i = 0; i < jsonObj.hikers.length; i++){
    connectString += "<li>";
    connectString += "<img src='" + jsonObj.hikers[i].imageURL + "' title='" + jsonObj.hikers[i].firstname + " " + jsonObj.hikers[i].lastname + "' alt='" + jsonObj.hikers[i].firstname + " " + jsonObj.hikers[i].lastname + "'>";
    connectString += "<h3>" + jsonObj.hikers[i].firstname + " " + jsonObj.hikers[i].lastname + "</h3>";
    connectString += "<p>" + jsonObj.hikers[i].username + " " + jsonObj.hikers[i].joinDate + "</p>";
    connectString += "<h4>" + jsonObj.hikers[i].city + ", " + jsonObj.hikers[i].state + "</h4>";
    connectString += "</li>";
  }

  var contentConnect = document.querySelector("section > section article ol");
  contentConnect.innerHTML = connectString;


  // PULL IN COPYRIGHT INFO
  document.querySelector("footer section p:nth-child(1)").innerHTML = "©" + jsonObj.about.copyright;
};

request.open("GET", "https://jbonline.bitbucket.io/data/hikersguide.json", true);
request.send(null);
