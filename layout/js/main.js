var div3 = document.createElement("div");
div3.id = "pointerGif";
div3.setAttribute("onclick", "showHidden(1)");
var image3 = document.createElement("img");
image3.src = "./layout/image/pointer.png";
div3.appendChild(image3);
document.body.appendChild(div3);

function movePointer() {
  const pointerGif = document.getElementById('pointerGif');
  
  if (pointerGif.classList.contains('topMe')) {
    pointerGif.classList.remove('topMe');
    pointerGif.classList.add('bottomMe');
  } else {
    pointerGif.classList.remove('bottomMe');
    pointerGif.classList.add('topMe');
  }

  setTimeout(movePointer, 500);
}

movePointer();

const divUlResponsive = document.getElementById("divUlResponsive");
const toggle = document.getElementById("toggle");
const pointerGif = document.getElementById('pointerGif');
function showHidden(caseUl) {
  // caseUl = 0 -> hid ul | caseUrl = 1 -> show ul
  if (caseUl == 0) {
    divUlResponsive.setAttribute("class", "divUlResponsive");
    toggle.setAttribute("onclick", "showHidden(1)");
    pointerGif.setAttribute("onclick", "showHidden(1)");
  }
  if (caseUl == 1) {
    divUlResponsive.setAttribute("class", "showUlLi divUlResponsive");
    toggle.setAttribute("onclick", "showHidden(0)");
    pointerGif.setAttribute("onclick", "showHidden(0)");
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

function showImage(id, folder) {
  var path = `./layout/image/${folder}/i-${id}.jpg`;
  const showImage = document.getElementById("showImage");
  const Image = document.getElementById("Image");

  Image.src = path;
  showImage.setAttribute("style", "display : flex !important");
}
function showImage2(img) {
  var path = `./layout/image/${img}`;
  const showImage = document.getElementById("showImage");
  const Image = document.getElementById("Image");

  Image.src = path;
  showImage.setAttribute("style", "display : flex !important");
}
function closeImage() {
  const showImage = document.getElementById("showImage");
  showImage.setAttribute("style", "display : none !important");
}

const slide_left = document.getElementById("slide_left");
const slide_right = document.getElementById("slide_right");

slide_left.addEventListener("click", () => {
  const image_slide1 = document.getElementById("image_slide1");
  var src_image_slide1 = image_slide1.src;
  var array_img_slide1 = src_image_slide1.split("kandar/i-");
  var index_ext_img_slide1 = array_img_slide1[1].split(".");
  var index_img_slide1 = parseInt(index_ext_img_slide1[0]);
  if (index_img_slide1 == 1) {
    index_img_slide1 = 12;
  } else {
    index_img_slide1 -= 1;
  }

  const image_slide2 = document.getElementById("image_slide2");
  var src_image_slide2 = image_slide2.src;
  var array_img_slide2 = src_image_slide2.split("kandar/i-");
  var index_ext_img_slide2 = array_img_slide2[1].split(".");
  var index_img_slide2 = parseInt(index_ext_img_slide2[0]);
  if (index_img_slide2 == 1) {
    index_img_slide2 = 12;
  } else {
    index_img_slide2 -= 1;
  }

  const image_slide3 = document.getElementById("image_slide3");
  var src_image_slide3 = image_slide3.src;
  var array_img_slide3 = src_image_slide3.split("kandar/i-");
  var index_ext_img_slide3 = array_img_slide3[1].split(".");
  var index_img_slide3 = parseInt(index_ext_img_slide3[0]);
  if (index_img_slide3 == 1) {
    index_img_slide3 = 12;
  } else {
    index_img_slide3 -= 1;
  }

  const image_slide4 = document.getElementById("image_slide4");
  var src_image_slide4 = image_slide4.src;
  var array_img_slide4 = src_image_slide4.split("kandar/i-");
  var index_ext_img_slide4 = array_img_slide4[1].split(".");
  var index_img_slide4 = parseInt(index_ext_img_slide4[0]);
  if (index_img_slide4 == 1) {
    index_img_slide4 = 12;
  } else {
    index_img_slide4 -= 1;
  }

  const image_slide5 = document.getElementById("image_slide5");
  var src_image_slide5 = image_slide5.src;
  var array_img_slide5 = src_image_slide5.split("kandar/i-");
  var index_ext_img_slide5 = array_img_slide5[1].split(".");
  var index_img_slide5 = parseInt(index_ext_img_slide5[0]);
  if (index_img_slide5 == 1) {
    index_img_slide5 = 12;
  } else {
    index_img_slide5 -= 1;
  }
  slideImg(
    index_img_slide1,
    index_img_slide2,
    index_img_slide3,
    index_img_slide4,
    index_img_slide5
  );
});
slide_right.addEventListener("click", () => {
  const image_slide1 = document.getElementById("image_slide1");
  var src_image_slide1 = image_slide1.src;
  var array_img_slide1 = src_image_slide1.split("kandar/i-");
  var index_ext_img_slide1 = array_img_slide1[1].split(".");
  var index_img_slide1 = parseInt(index_ext_img_slide1[0]);
  if (index_img_slide1 == 12) {
    index_img_slide1 = 1;
  } else {
    index_img_slide1 += 1;
  }

  const image_slide2 = document.getElementById("image_slide2");
  var src_image_slide2 = image_slide2.src;
  var array_img_slide2 = src_image_slide2.split("kandar/i-");
  var index_ext_img_slide2 = array_img_slide2[1].split(".");
  var index_img_slide2 = parseInt(index_ext_img_slide2[0]);
  if (index_img_slide2 == 12) {
    index_img_slide2 = 1;
  } else {
    index_img_slide2 += 1;
  }

  const image_slide3 = document.getElementById("image_slide3");
  var src_image_slide3 = image_slide3.src;
  var array_img_slide3 = src_image_slide3.split("kandar/i-");
  var index_ext_img_slide3 = array_img_slide3[1].split(".");
  var index_img_slide3 = parseInt(index_ext_img_slide3[0]);
  if (index_img_slide3 == 12) {
    index_img_slide3 = 1;
  } else {
    index_img_slide3 += 1;
  }

  const image_slide4 = document.getElementById("image_slide4");
  var src_image_slide4 = image_slide4.src;
  var array_img_slide4 = src_image_slide4.split("kandar/i-");
  var index_ext_img_slide4 = array_img_slide4[1].split(".");
  var index_img_slide4 = parseInt(index_ext_img_slide4[0]);
  if (index_img_slide4 == 12) {
    index_img_slide4 = 1;
  } else {
    index_img_slide4 += 1;
  }

  const image_slide5 = document.getElementById("image_slide5");
  var src_image_slide5 = image_slide5.src;
  var array_img_slide5 = src_image_slide5.split("kandar/i-");
  var index_ext_img_slide5 = array_img_slide5[1].split(".");
  var index_img_slide5 = parseInt(index_ext_img_slide5[0]);
  if (index_img_slide5 == 12) {
    index_img_slide5 = 1;
  } else {
    index_img_slide5 += 1;
  }
  slideImg(
    index_img_slide1,
    index_img_slide2,
    index_img_slide3,
    index_img_slide4,
    index_img_slide5
  );
});
function slideImg(
  index_img_slide1,
  index_img_slide2,
  index_img_slide3,
  index_img_slide4,
  index_img_slide5
) {
  const image_slide1 = document.getElementById("image_slide1");
  image_slide1.src = `./layout/image/imouzzer kandar/i-${index_img_slide1}.jpg`
  image_slide1.setAttribute('onclick',`showImage(${index_img_slide1},'imouzzer kandar')`)
  const image_slide2 = document.getElementById("image_slide2");
  image_slide2.src = `./layout/image/imouzzer kandar/i-${index_img_slide2}.jpg`
  image_slide2.setAttribute('onclick',`showImage(${index_img_slide2},'imouzzer kandar')`)
  const image_slide3 = document.getElementById("image_slide3");
  image_slide3.src = `./layout/image/imouzzer kandar/i-${index_img_slide3}.jpg`
  image_slide3.setAttribute('onclick',`showImage(${index_img_slide3},'imouzzer kandar')`)
  const image_slide4 = document.getElementById("image_slide4");
  image_slide4.src = `./layout/image/imouzzer kandar/i-${index_img_slide4}.jpg`
  image_slide4.setAttribute('onclick',`showImage(${index_img_slide4},'imouzzer kandar')`)
  const image_slide5 = document.getElementById("image_slide5");
  image_slide5.src = `./layout/image/imouzzer kandar/i-${index_img_slide5}.jpg`
  image_slide5.setAttribute('onclick',`showImage(${index_img_slide5},'imouzzer kandar')`)
}
