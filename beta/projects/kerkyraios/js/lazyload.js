(function (w, d) {
  var b = d.getElementsByTagName('body')[0];
  var s = d.createElement("script");
  var v = !("IntersectionObserver" in w) ? "8.15.0" : "10.17.0";
  s.async = true; // This includes the script as async. See the "recipes" section for more information about async loading of LazyLoad.
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/" + v + "/lazyload.min.js";
  w.lazyLoadOptions = { /* Your options here */ };
  b.appendChild(s);

}(window, document));

window.addEventListener('LazyLoad::Initialized', function (e) {
  // Get the instance and puts it in the lazyLoadInstance variable
  lazyLoadInstance = e.detail.instance;
}, false);