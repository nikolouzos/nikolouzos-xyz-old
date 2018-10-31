class HamburgerMenu {

  constructor() {
    this.hamburgerMenuBtn = document.querySelector('#menu .hamburger-menu-button');
    this.menuIsShown = false;

    this.onCreate();
  }

  onCreate() {
    // When clicking the hamburger menu btn open or close the menu
    this.hamburgerMenuBtn.addEventListener('click', () => {
      var menuItems = document.querySelector('#menu .hamburger-menu');
      this.menuIsShown = !this.menuIsShown;

      if (this.menuIsShown) {
        menuItems.style.display = 'block';
        menuItems.style.transform = 'scale(1,1)';
      } else {
        menuItems.style.display = 'none';
        menuItems.style.transform = 'scale(1,0)';
      }
    });
  }
}