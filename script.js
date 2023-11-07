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