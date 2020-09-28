/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/

const request = new XMLHttpRequest();

request.onload = function() {
  const jsonObj = JSON.parse(request.responseText);

  /* PULL IN LOCATION INFO FOR BACKGROUND IMAGES ON HOME PAGE. JavaScript was not affecting data pulled in from remote server
  using XMLHttpRequest. Therefore, HTML elements that were already loaded are affected by JavaScript, so these elements were used
  to store the remote data. */
  let locationInfoString = "",
      locationInfoString2 = "",
      locationInfoString3 = "",
      locationInfoString4 = "",
      destinationString = "",
      upcomingEventsString = "",
      connectString = "",
      aboutString = "";


  for(let i = 4; i < jsonObj.locations.length; i++){
    locationInfoString += "<article>";
    locationInfoString += "<h2>" + jsonObj.locations[0].city + ", " + jsonObj.locations[0].state + "</h2>";
    locationInfoString += "<h3>" + jsonObj.locations[0].title + "</h3>";
    locationInfoString += "<h4>" + jsonObj.locations[0].text + "</h4>";
    locationInfoString += "</article>";

    locationInfoString2 += "<article>";
    locationInfoString2 += "<h2>" + jsonObj.locations[1].city + ", " + jsonObj.locations[1].state + "</h2>";
    locationInfoString2 += "<h3>" + jsonObj.locations[1].title + "</h3>";
    locationInfoString2 += "<h4>" + jsonObj.locations[1].text + "</h4>";
    locationInfoString2 += "</article>";

    locationInfoString3 += "<article>";
    locationInfoString3 += "<h2>" + jsonObj.locations[2].city + ", " + jsonObj.locations[2].state + "</h2>";
    locationInfoString3 += "<h3>" + jsonObj.locations[2].title + "</h3>";
    locationInfoString3 += "<h4>" + jsonObj.locations[2].text + "</h4>";
    locationInfoString3 += "</article>";

    locationInfoString4 += "<article>";
    locationInfoString4 += "<h2>" + jsonObj.locations[3].city + ", " + jsonObj.locations[3].state + "</h2>";
    locationInfoString4 += "<h3>" + jsonObj.locations[3].title + "</h3>";
    locationInfoString4 += "<h4>" + jsonObj.locations[3].text + "</h4>";
    locationInfoString4 += "</article>";
  }

  for(let i = 0; i < jsonObj.locations.length; i++){
    destinationString += "<article>";
    destinationString += "<figure><img src='" + jsonObj.posts[i].imageURL + "' title='" + jsonObj.posts[i].title + " " + "' alt='" + jsonObj.posts[i].subtitle + "'></figure>";
    destinationString += "<h2>" + jsonObj.posts[i].title + "</h2>";
    destinationString += "<h3>" + jsonObj.posts[i].subtitle + "</h3>";
    destinationString += "<p>" + jsonObj.posts[i].text + "</p>";
    destinationString += "<h4>" + jsonObj.posts[i].postDate + "</h4>";
    destinationString += "<h4>" + jsonObj.posts[i].author + "</h4>";
    destinationString += "<a href='" + jsonObj.posts[i].moreLink + "'><button><strong>Read More</strong></button></a>";
    destinationString += "</article>";
  }

  for(let i = 2; i < jsonObj.locations.length; i++){
    upcomingEventsString += "<article>";
    upcomingEventsString += "<h4>" + jsonObj.events[i].date + "</h4>";
    upcomingEventsString += "<h5>" + jsonObj.events[i].title + "</h5>";
    upcomingEventsString += "<p>" + jsonObj.events[i].text + "</p>";
    upcomingEventsString += "</article>";
  }

  for(let i = 0; i < jsonObj.hikers.length; i++){
    connectString += "<article>";
    connectString += "<figure><img src='" + jsonObj.hikers[i].imageURL + "' title='" + jsonObj.hikers[i].firstname + " " + jsonObj.hikers[i].lastname + "' alt='" + jsonObj.hikers[i].firstname + " " + jsonObj.hikers[i].lastname + "'></figure>";
    connectString += "<section>";
    connectString += "<h4>" + jsonObj.hikers[i].firstname + " " + jsonObj.hikers[i].lastname + "</h4>";
    connectString += "<p>" + jsonObj.hikers[i].city + ", " + jsonObj.hikers[i].state + "</p>";
    connectString += "</section>";
    connectString += "</article>";
  }

  aboutString += "<article>";
  aboutString += "<h4>" + jsonObj.about.title + "</h4>";
  aboutString += "<p>" + jsonObj.about.text + "</p>";
  aboutString += "</article>";

  // for(var i = 0; i < jsonObj.locations.length; i++){
  //   locationInfoString += "<article>";
  //   locationInfoString += "<h2>" + jsonObj.locations[i].city + ", " + jsonObj.locations[i].state + "</h2>";
  //   locationInfoString += "<h3>" + jsonObj.locations[i].title + "</h3>";
  //   locationInfoString += "<h4>" + jsonObj.locations[i].text + "</h4>";
  //   locationInfoString += "</article>";
  //
  //   destinationString += "<article>";
  //   destinationString += "<img src='" + jsonObj.posts[i].imageURL + "' title='" + jsonObj.posts[i].title + " " + "' alt='" + jsonObj.posts[i].subtitle + "'>";
  //   destinationString += "<h2>" + jsonObj.posts[i].title + "</h2>";
  //   destinationString += "<h3>" + jsonObj.posts[i].subtitle + "</h3>";
  //   destinationString += "<p>" + jsonObj.posts[i].text + "</p>";
  //   destinationString += "<h4>" + jsonObj.posts[i].postDate + "</h4>";
  //   destinationString += "<h4>" + jsonObj.posts[i].author + "</h4>";
  //   destinationString += "<a href='" + jsonObj.posts[i].moreLink + "'><button><strong>Read More</strong></button></a>";
  //   destinationString += "</article>";
  // }

  // var contentLocationInfo = document.querySelector("section:nth-child(2) div:nth-child(1) article");
  // contentLocationInfo.innerHTML = locationInfoString;

  const contentLocationInfo = document.querySelector("section:nth-child(2) article:nth-child(1) section:nth-child(1)"),
        contentLocationInfo2 = document.querySelector("section:nth-child(2) article:nth-child(1) section:nth-child(2)"),
        contentLocationInfo3 = document.querySelector("section:nth-child(2) article:nth-child(1) section:nth-child(3)"),
        contentLocationInfo4 = document.querySelector("section:nth-child(2) article:nth-child(1) section:nth-child(4)"),
        contentDestination = document.querySelector("article:nth-child(3) section:nth-child(1)"),
        contentEventsString = document.querySelector(".eventsSection"),
        contentConnectString = document.querySelector(".connectHikerSection"),
        contentAboutString = document.querySelector(".aboutSection");

  contentLocationInfo.innerHTML = locationInfoString;
  contentLocationInfo2.innerHTML = locationInfoString2;
  contentLocationInfo3.innerHTML = locationInfoString3;
  contentLocationInfo4.innerHTML = locationInfoString4;
  contentDestination.innerHTML = destinationString;
  contentEventsString.innerHTML = upcomingEventsString;
  contentConnectString.innerHTML = connectString;
  contentAboutString.innerHTML = aboutString;



  // PULL IN COPYRIGHT INFO
  document.querySelector("footer section p:nth-child(1)").innerHTML = "©" + jsonObj.about.copyright;
};

request.open("GET", "https://jbonline.bitbucket.io/data/hikersguide.json", true);
request.send(null);



//ROTATE BACKGROUND IMAGE ON HOMEPAGE
// var imageRotate = document.querySelectorAll("#mainContain > section:nth-child(2) > div:nth-child(2) ul li"),
//     currentImg = 0;
//
// var clearImg = function(){
//   for(var i = 0; i < imageRotate.length; i++){
//     imageRotate[i].classList.add("previous");
//     imageRotate[i].classList.remove("current");
//   }
// };
//
// var rotateImage = function(){
//   clearImg();
//   imageRotate[0].classList.add("current");
//   imageRotate[0].classList.remove("previous");
// };
//
// var imageLeft = function(){
//   clearImg();
//   imageRotate[currentImg - 1].classList.add("current");
//   imageRotate[currentImg - 1].classList.remove("previous");
//   currentImg--;
// };
//
// var leftArrow = function(){
//   if(currentImg === 0){
//     currentImg = imageRotate.length;
//   }
//
//   imageLeft();
// };
//
// var imageRight = function(){
//   clearImg();
//   imageRotate[currentImg + 1].classList.add("current");
//   imageRotate[currentImg + 1].classList.remove("previous");
//   currentImg++;
// };
//
// var rightArrow = function(){
//   if(currentImg === imageRotate.length - 1){
//     currentImg = -1;
//   }
//
//   imageRight();
// };
//
// rotateImage();

$(document).ready(function(){
  const cirBTN = function(img1, img2, img3, img4, cirClick1, cirClick2, cirClick3, cirClick4,
    bckImg1, bckImg2, bckImg3, bckImg4){
    const cirOBJ = {
      img1,
      img2,
      img3,
      img4,
      cirClick1,
      cirClick2,
      cirClick3,
      cirClick4,
      bckImg1,
      bckImg2,
      bckImg3,
      bckImg4
    };

    cirOBJ.cirFunc = function(){
      cirOBJ.img1.stop().animate({"opacity": "1"}, 1000).addClass("current").removeClass("previous");
      cirOBJ.img2.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
      cirOBJ.img3.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
      cirOBJ.img4.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");

      cirOBJ.cirClick1.addClass("currentCir");
      cirOBJ.cirClick2.removeClass("currentCir");
      cirOBJ.cirClick3.removeClass("currentCir");
      cirOBJ.cirClick4.removeClass("currentCir");

      cirOBJ.bckImg1.stop().animate({"opacity": "1"}, 1000).addClass("current").removeClass("previous");
      cirOBJ.bckImg2.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
      cirOBJ.bckImg3.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
      cirOBJ.bckImg4.stop().animate({"opacity": "0"}, 1000).removeClass("current").addClass("previous");
    };

    return cirOBJ;
  };

  let newfunc;

  // const bckImg1 = $("div ul.locations li:nth-child(1)"),
  //       bckImg2 = $("div ul.locations li:nth-child(2)"),
  //       bckImg3 = $("div ul.locations li:nth-child(3)"),
  //       bckImg4 = $("div ul.locations li:nth-child(4)"),
  //       cirbutton1 = $(".circleNav li:nth-child(1)"),
  //       cirbutton2 = $(".circleNav li:nth-child(2)"),
  //       cirbutton3 = $(".circleNav li:nth-child(3)"),
  //       cirbutton4 = $(".circleNav li:nth-child(4)");

  const cirbutton1 = $(".circleNav li:nth-child(1)"),
        cirbutton2 = $(".circleNav li:nth-child(2)"),
        cirbutton3 = $(".circleNav li:nth-child(3)"),
        cirbutton4 = $(".circleNav li:nth-child(4)")
        backGrndImg1 = $("#mainContain > section:nth-child(2) section:nth-child(2) ul li:nth-child(1)"),
        backGrndImg2 = $("#mainContain > section:nth-child(2) section:nth-child(2) ul li:nth-child(2)"),
        backGrndImg3 = $("#mainContain > section:nth-child(2) section:nth-child(2) ul li:nth-child(3)"),
        backGrndImg4 = $("#mainContain > section:nth-child(2) section:nth-child(2) ul li:nth-child(4)"),
        panelInfo1 = $("#mainContain > section:nth-child(2) > article:nth-child(1) section:nth-child(1)"),
        panelInfo2 = $("#mainContain > section:nth-child(2) > article:nth-child(1) section:nth-child(2)"),
        panelInfo3 = $("#mainContain > section:nth-child(2) > article:nth-child(1) section:nth-child(3)"),
        panelInfo4 = $("#mainContain > section:nth-child(2) > article:nth-child(1) section:nth-child(4)");

  panelInfo1.addClass("current");
  backGrndImg1.addClass("current");

  cirbutton1.on("click", function(){
    newfunc = cirBTN(panelInfo1, panelInfo2, panelInfo3, panelInfo4, cirbutton1, cirbutton2, cirbutton3, cirbutton4,
    backGrndImg1, backGrndImg2, backGrndImg3, backGrndImg4).cirFunc();
  });

  cirbutton2.on("click", function(){
    newfunc = cirBTN(panelInfo2, panelInfo1, panelInfo3, panelInfo4, cirbutton2, cirbutton1, cirbutton3, cirbutton4,
    backGrndImg2, backGrndImg1, backGrndImg3, backGrndImg4).cirFunc();
  });

  cirbutton3.on("click", function(){
    newfunc = cirBTN(panelInfo3, panelInfo2, panelInfo1, panelInfo4, cirbutton3, cirbutton2, cirbutton1, cirbutton4,
    backGrndImg3, backGrndImg1, backGrndImg2, backGrndImg4).cirFunc();
  });

  cirbutton4.on("click", function(){
    newfunc = cirBTN(panelInfo4, panelInfo3, panelInfo2, panelInfo1, cirbutton4, cirbutton3, cirbutton2, cirbutton1,
    backGrndImg4, backGrndImg1, backGrndImg2, backGrndImg3).cirFunc();
  });
});
