// Make the nav fixed as you scroll
{
  var nav = document.getElementById('main-nav');
  var navPos = nav.getBoundingClientRect().top;

  window.onscroll = function () {
    var width = window.innerWidth;
    var scrollPos = window.scrollY;

    if (width >= 960) {
      if (scrollPos >= navPos) {
        nav.classList.add('fixed');
      } else {
        nav.classList.remove('fixed');
      }
    }
  };

  // Changes the navPos when the window is resized
  window.onresize = function () {
    navPos = nav.getBoundingClientRect().top;
  };
}