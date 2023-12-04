function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("menu").style.display = "none";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("menu").style.display = "flex";
}

const openButton = document.getElementById('open-toogle-page');
const tooglePage = document.getElementById('toogle-page');


function openTooglePage() {
  const openButton = document.getElementById('open-toogle-page');
  tooglePage.style.display = 'block';
}


const closeButton = document.getElementById('close-btn');
closeButton.addEventListener('click', () => {
  tooglePage.style.display = 'none';
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

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}