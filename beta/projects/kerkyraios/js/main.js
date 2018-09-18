var showcase = document.querySelector('#showcase');
var cleaning = document.querySelector('#cleaning');
var offers = document.querySelector('#offers');
var contact = document.querySelector('#contact');
var contactDetails = document.querySelector('#contact-details');

// Smooth scroll
document.querySelector('#showcase .content .btn').addEventListener('click',
  function () {
    window.scroll({
      top: showcase.scrollHeight,
      behavior: 'smooth'
    });
  });

document.querySelector('#showcase .content .btn-secondary').addEventListener('click', function () {
  window.scroll({
    top: showcase.scrollHeight + cleaning.scrollHeight,
    behavior: 'smooth'
  });
});

// Hamburger Menu
{
  var hamburgerMenuBtn = document.querySelector('#hamburger-menu-btn');
  var hamburgerMenu = document.querySelector('#hamburger-menu');

  // Hamburger menu show/hide
  hamburgerMenuBtn.addEventListener('click',
    function () {
      hamburgerMenu.classList.toggle('hamburger-shown');
    });

  // Hamburger Menu background click
  document.querySelector('body').addEventListener('click',
    function (e) {
      if (e.target !== hamburgerMenuBtn) {
        setTimeout(function () {
          hamburgerMenu.classList.remove('hamburger-shown');
        });
      }
    });

  // Links for the hamburger menu

  // Αρχική
  document.querySelector('#hamburger-menu li:first-of-type').addEventListener('click',
    function () {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    });

  // Υπηρεσίες
  document.querySelector('#hamburger-menu li:nth-of-type(2)').addEventListener('click',
    function () {
      window.scroll({
        top: showcase.scrollHeight,
        behavior: "smooth"
      });
    });

  // Προσφορές
  document.querySelector('#hamburger-menu li:nth-of-type(3)').addEventListener('click',
    function () {
      window.scroll({
        top: showcase.scrollHeight + cleaning.scrollHeight,
        behavior: "smooth"
      });
    });

  // Επικοινωνία
  document.querySelector('#hamburger-menu li:last-of-type').addEventListener('click',
    function () {
      window.scroll({
        top: showcase.scrollHeight + cleaning.scrollHeight + offers.scrollHeight + contact.scrollHeight - contactDetails.scrollHeight,
        behavior: "smooth"
      });
    });
}

// Offer popup content population
window.onload = function () {
  var popupTitle = document.querySelector('#offers .grid-3 div:nth-of-type(2) h3').innerHTML;
  var popupContent = document.querySelector('#offers .grid-3 div:nth-of-type(2) p').innerHTML;

  document.getElementById('popup-title').innerHTML = popupTitle;

  document.getElementById('popup-content').innerHTML = popupContent;
};

// Offer popup close button press
document.querySelector('#offer-popup .fas').addEventListener('click', closeFunction);


// Offer popup offers button press
document.querySelector('#offer-popup .btn').addEventListener('click', goToOffers);

// Offer background click
document.getElementById('offer-popup').addEventListener('click', function (e) {
  if (e.target.id === 'offer-popup') {
    closeFunction();
  }
});

// Go to the offers
function goToOffers() {
  closeFunction();

  window.scroll({
    top: showcase.scrollHeight + cleaning.scrollHeight,
    behavior: "smooth"
  });
}

// Close the popup
function closeFunction() {
  document.getElementById('offer-popup').style.display = 'none';
}