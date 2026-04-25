// Window Events

// 1. load event
// The load event is fired when the whole page has loaded,
//  including all dependent resources such as stylesheets and images.
window.addEventListener("load", function () {
  console.log("Page fully loaded");
});

// 2. resize event
// The resize event is fired when the document view (window) has been resized.
window.addEventListener("resize", function () {
  console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);
});

// 3. scroll event
// The scroll event is fired when the document view or an element has been scrolled.
window.addEventListener("scroll", function () {
  console.log("Window scrolled to:", window.scrollX, "x", window.scrollY);
});

// 4. beforeunload event
// The beforeunload event is fired when the window, the document and its resources are about to be unloaded.
window.addEventListener("beforeunload", function (event) {
  console.log("Page is about to be unloaded");
});

// 5. unload event
// The unload event is fired when the document or a child resource is being unloaded.
window.addEventListener("unload", function () {
  console.log("Page is being unloaded");
});
