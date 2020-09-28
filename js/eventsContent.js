/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/

var request = new XMLHttpRequest();

request.onload = function() {
  var jsonObj = JSON.parse(request.responseText);

  // PULL IN LOCATION INFO FOR BACKGROUND IMAGES ON HOME PAGE
  var eventsString = "";

  eventsString += "<tbody>";
  eventsString += "<tr>";
  eventsString += "<th>Date</th>";
  eventsString += "<th>Title</th>";
  eventsString += "</tr>";
  eventsString += "</tbody>";

  for(var i = 0; i < jsonObj.events.length; i++){
    eventsString += "<tbody>";
    eventsString += "<tr>";
    eventsString += "<th>" + jsonObj.events[i].date + "</th>";
    eventsString += "</tr>";
    eventsString += "<tr>";
    eventsString += "<td>" + jsonObj.events[i].title + "</td>";
    eventsString += "</tr>";
    eventsString += "</tbody>";
  }

  var contentEvents = document.querySelector("section table");
  contentEvents.innerHTML = eventsString;


  // PULL IN COPYRIGHT INFO
  document.querySelector("footer section p:nth-child(1)").innerHTML = "©" + jsonObj.about.copyright;
};

request.open("GET", "https://jbonline.bitbucket.io/data/hikersguide.json", true);
request.send(null);
