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