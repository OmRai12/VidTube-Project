const menuicon = document.querySelector('.menu-icon-image');
const leftsidebar = document.querySelector('.left-sidebar');
const rightsidebar = document.querySelector('.right-sidebar');

menuicon.onclick = function() {
  leftsidebar.classList.toggle("small-sidebar");
  rightsidebar.classList.toggle("large-sidebar");
}