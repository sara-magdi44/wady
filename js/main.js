$(document).click(function (event) {
    if (!$(event.target).is('.navbar-collapse *')) {
      $('.navbar-collapse').collapse('hide');
    }
  });
  const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav-link').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})

window.transitionToPage = function(href) {
  document.querySelector('body').style.opacity = 0.8
  setTimeout(function() { 
      window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1
})

function Copy() {
  var dummy = document.createElement('input'),
  text = window.location.href;
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}