var isshow = sessionStorage.getItem('isshow');
if (isshow== null) {
    localStorage.setItem('isshow', 1);

    function togglePopup() {
       document.getElementById("popup-1").classList.toggle("active");
       sessionStorage.setItem('isshow', true)
   }
   
    $('#jPopup').show();
}

window.onbeforeunload = popup;

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});