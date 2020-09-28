/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/

var request = new XMLHttpRequest();

request.onload = function() {
  var jsonObj = JSON.parse(request.responseText);

  var destinationString = "";

  for(var i = 0; i < jsonObj.posts.length; i++){
    destinationString += "<article>";
    destinationString += "<img src='" + jsonObj.posts[i].imageURL + "' title='" + jsonObj.posts[i].title + " " + "' alt='" + jsonObj.posts[i].subtitle + "'>";
    destinationString += "<h2>" + jsonObj.posts[i].title + "</h2>";
    destinationString += "<h4>" + jsonObj.posts[i].postDate + "</h4>";
    destinationString += "<h4>" + jsonObj.posts[i].author + "</h4>";
    destinationString += "<a href='" + jsonObj.posts[i].moreLink + "'><button><strong>Read More</strong></button></a>";
    destinationString += "</article>";
  }

  var contentDestination = document.querySelector("#destContain section:nth-child(2) section");
  contentDestination.innerHTML = destinationString;


  // PULL IN COPYRIGHT INFO
  document.querySelector("footer section p:nth-child(1)").innerHTML = "©" + jsonObj.about.copyright;
};

request.open("GET", "https://jbonline.bitbucket.io/data/hikersguide.json", true);
request.send(null);
