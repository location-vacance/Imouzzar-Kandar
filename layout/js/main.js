const divUlResponsive = document.getElementById('divUlResponsive')
const toggle = document.getElementById('toggle')
function showHidden(caseUl) {
    // caseUl = 0 -> hid ul | caseUrl = 1 -> show ul
    if (caseUl == 0) {
        divUlResponsive.setAttribute('class','divUlResponsive')
        toggle.setAttribute('onclick','showHidden(1)')
    }
    if (caseUl == 1) {
        divUlResponsive.setAttribute('class','showUlLi divUlResponsive')
        toggle.setAttribute('onclick','showHidden(0)')
    }
}
var div = document.createElement('div');
div.id = "btnWhatsappPopUp"
var anchor = document.createElement('a');
anchor.href = 'https://api.whatsapp.com/send?phone=212663661627';
var image = document.createElement('img');
image.src = 'https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Whatsapp-512.png';
anchor.appendChild(image);
div.appendChild(anchor);
document.body.appendChild(div);