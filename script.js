function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("menu").style.display = "none";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("menu").style.display = "flex";
}

const grad = document.getElementById('grad2');
const gradBtn = document.getElementById('btn');
gradBtn.addEventListener ('click' , () => {
  grad.style.display = 'inline';
});


const openButton = document.getElementById('open-toogle-page');
const tooglePage = document.getElementById('toogle-page');
const tooglePage2 = document.getElementById('toogle-page-second');
const tooglePage3 = document.getElementById('toogle-page-third');
const tooglePage4 = document.getElementById('toogle-page-fourth');


function openTooglePage1() {
  const openButton = document.getElementById('open-toogle-page');
  tooglePage.style.display = 'block';
}
function openTooglePage2() {
  const openButton = document.getElementById('open-toogle-page');
  tooglePage2.style.display = 'block';
}

function openTooglePage3() {
  const openButton = document.getElementById('open-toogle-page');
  tooglePage3.style.display = 'block';
}
function openTooglePage4() {
  const openButton = document.getElementById('open-toogle-page');
  tooglePage4.style.display = 'block';
}

const closeButton = document.getElementById('close-btn');
closeButton.addEventListener('click', () => {
  tooglePage.style.display = 'none';
});
const closeButton2 = document.getElementById('close-btn2');
closeButton2.addEventListener('click', () => {
  tooglePage2.style.display = 'none';
});
const closeButton3 = document.getElementById('close-btn3');
closeButton3.addEventListener('click', () => {
  tooglePage3.style.display = 'none';
});
const closeButton4 = document.getElementById('close-btn4');
closeButton4.addEventListener('click', () => {
  tooglePage4.style.display = 'none';
});

function goToTop() {
  const scrollToTop = () => {
    if (document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -30);
      requestAnimationFrame(scrollToTop);
    }
  };
  scrollToTop();
}

window.onscroll = function () {
  const button = document.getElementById("gotoTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");
  var grad = document.getElementById("grad2");
  var trainingImg = document.getElementById('training-img');
  var hr = document.getElementById('hr3');

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    grad.style.display = "none";
    trainingImg.style.display = "none";
    hr.style.display = "block";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    hr.style.display = "none";
    grad.style.display = "block";
    trainingImg.style.display = "block";
  }
}