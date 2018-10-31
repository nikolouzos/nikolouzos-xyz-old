var slideshowStarted = false;
var typingStarted = false;

window.addEventListener('load', () => {
  new HamburgerMenu;
  new NewsletterForm;
  new ContactForm;
});

// Starts the slideshow once the bottom of the window is at the top of the work section
// Starts typing once the bottom of the window is at the top of the info section
window.addEventListener('scroll', () => {
  var info = document.getElementById('info');
  var work = document.getElementById('work');

  var workPos = work.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
  var infoPos = info.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

  if (window.scrollY + window.innerHeight >= workPos && !slideshowStarted) {
    startSlideshow();
    slideshowStarted = true;
  } else if (window.scrollY + window.innerHeight >= infoPos && !typingStarted) {
    startTyping();
    typingStarted = true;
  }
});

// Starts typing the titles of the window
function startTyping() {
  var options = {
    strings: [
      "mobile applications",
      "websites",
      "electronics",
      "your life easier"
    ],
    typeSpeed: 35,
    backSpeed: 35,
    startDelay: 1000,
    backDelay: 1000
  };

  new Typed("#what-i-do span", options);
}

// Starts the slideshows
function startSlideshow() {
  var slideTimer = 5000;

  // Options for the 1st slideshow
  var slide1Selector = '#work-1 .slideshow';
  var slide1Files = [
    'kerkyraios-1.jpg',
    'kerkyraios-2.jpg',
    'kerkyraios-3.jpg',
    'kerkyraios-4.jpg',
    'kerkyraios-m.jpg'
  ];
  var slide1AltStrings = [
    'The landing page of kerkyraios.gr',
    'The services of kerkyraios.gr',
    'The offers of kerkyraios.gr',
    'The contact form of kerkyraios.gr',
    'The mobile version of kerkyraios.gr'
  ];

  // Start the 1st slideshow
  new Slideshow(slide1Selector,
    slide1Files,
    slide1AltStrings,
    slideTimer);

  // Options for the 2nd slideshow
  var slide1Selector = '#work-2 .slideshow';
  var slide2Files = [
    'prassas-1.png',
    'prassas-2.png',
    'prassas-3.png',
    'prassas-mockup-optimized.gif'
  ];
  var slide2AltStrings = [
    'The landing page of kerkyraios.gr',
    'The services of kerkyraios.gr',
    'The offers of kerkyraios.gr',
    'The contact form of kerkyraios.gr'
  ];

  // Start the 2nd slideshow
  new Slideshow(slide1Selector,
    slide2Files,
    slide2AltStrings,
    slideTimer);
}

// Set the maximum height for the blogposts section as the height + margin of its 1st two children
window.addEventListener('load', () => {
  findBlogpostsHeight();
});
window.addEventListener('resize', () => {
  findBlogpostsHeight();
});

function findBlogpostsHeight() {
  var blogposts = document.getElementById('blogposts');
  if (blogposts.childElementCount >= 2) {
    var maxHeight =
      outerHeight(document.querySelector('#blog .blogpost:first-of-type')) +
      outerHeight(document.querySelector('#blog .blogpost:nth-of-type(2)'));

    blogposts.style.height = maxHeight + 'px';
  }

  // Finds the height of an element + its margin
  function outerHeight(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
  }
}

// Add smooth scroll to all a links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});