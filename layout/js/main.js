const divUlResponsive = document.getElementById("divUlResponsive");
const toggle = document.getElementById("toggle");
function showHidden(caseUl) {
  // caseUl = 0 -> hid ul | caseUrl = 1 -> show ul
  if (caseUl == 0) {
    divUlResponsive.setAttribute("class", "divUlResponsive");
    toggle.setAttribute("onclick", "showHidden(1)");
  }
  if (caseUl == 1) {
    divUlResponsive.setAttribute("class", "showUlLi divUlResponsive");
    toggle.setAttribute("onclick", "showHidden(0)");
  }
}

var div = document.createElement("div");
div.id = "btnWhatsappPopUp";
var anchor = document.createElement("a");
anchor.href = "https://api.whatsapp.com/send?phone=212663661627";
var image = document.createElement("img");
image.src = "./layout/image/whatsapp.png";
anchor.appendChild(image);
div.appendChild(anchor);
document.body.appendChild(div);

var videos = document.querySelectorAll("#video-container video");
var currentVideoIndex = 0;

function playNextVideo() {
  if (currentVideoIndex >= videos.length) {
    var currentVideo = videos[0];
    currentVideo.addEventListener("ended", function() {
      currentVideoIndex++;
      playNextVideo();
    });
    currentVideo.play();
  }

  var currentVideo = videos[currentVideoIndex];
  currentVideo.addEventListener("ended", function() {
    currentVideoIndex++;
    playNextVideo();
  });

  currentVideo.play();
}

playNextVideo();
