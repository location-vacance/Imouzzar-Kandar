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
anchor.title = "Whatsapp";
var image = document.createElement("img");
image.src = "./layout/image/whatsapp.png";
anchor.appendChild(image);
div.appendChild(anchor);
document.body.appendChild(div);

var div2 = document.createElement("div");
div2.id = "btnTelephonePopUp";
var anchor2 = document.createElement("a");
anchor2.href = "tel:+212663661627";
anchor2.title = "Telephone";
var image2 = document.createElement("img");
image2.src = "./layout/image/telephone.png";
anchor2.appendChild(image2);
div2.appendChild(anchor2);
document.body.appendChild(div2);

function showImage(id,folder){
    var path = `./layout/image/${folder}/i-${id}.jpg`
    const showImage = document.getElementById('showImage')
    const Image = document.getElementById('Image')
    
    Image.src=path
    showImage.setAttribute('style','display : flex !important')
}
function closeImage(){
    const showImage = document.getElementById('showImage')
    showImage.setAttribute('style','display : none !important')
}