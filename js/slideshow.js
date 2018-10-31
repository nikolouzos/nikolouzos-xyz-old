class Slideshow {
  constructor(slideshowSelector, files, altStrings, timer = 3000) {
    this.i;

    this.slideshow = document.querySelector(slideshowSelector);
    this.img = document.querySelector(slideshowSelector + ' img');

    this.files = files;
    this.altStrings = altStrings;
    this.timer = timer;

    this.leftButton = document.querySelector(slideshowSelector + " .slide-left");
    this.rightButton = document.querySelector(slideshowSelector + " .slide-right");

    this.projectPath = 'assets/images/work/' + this.slideshow.getAttribute('project');

    // Call the onCreate method
    this.onCreate();
  }

  onCreate() {
    // Initialize i
    this.i = 0;

    // Call the startSlideshow method @ a set interval
    this.startSlideshow();

    // Set up the right button click (next image)
    this.rightButton.addEventListener('click', () => {
      this.clearInterval();
      this.changeImage();
    });

    this.leftButton.addEventListener('click', () => {
      this.clearInterval();
      this.changeImage(false);
    });
  }

  startSlideshow() {
    this.changeImage();
    this.intervalID = setInterval(() => {
      this.changeImage();
    }, this.timer);
  }

  // !Keep in mind! i is offset by one (+1) to solve 2 problems:
  // 1. Starting from 0
  // 2. Going backwards without i being something else than what is shown 
  changeImage(forward = true) {
    if (forward) {
      this.i++;
    } else {
      this.i--;
    }

    // Restart from the 1st image when the end is reached and then stop
    if (this.i === this.files.length + 1) {
      this.i = 1;
      this.clearInterval();

    } else if (this.i === 0) {
      // If i becomes -1 go to the last image
      this.i = this.files.length;
    }

    // Select the img tag and set its src and alt attributes to the correct path
    this.img.setAttribute('src', `${this.projectPath}/${this.files[this.i - 1]}`);
    this.img.setAttribute('alt', this.altStrings[this.i - 1]);
  }

  clearInterval() {
    if (this.intervalID !== null) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    }
  }
}