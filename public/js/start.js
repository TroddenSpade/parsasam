function animate(elem, style, unit, from, to, time) {
  if (!elem) {
    return;
  }
  var start = new Date().getTime(),
    timer = setInterval(function () {
      var step = Math.min(1, (new Date().getTime() - start) / time);

      elem[style] = from + step * (to - from) + unit;

      if (step === 1) {
        clearInterval(timer);
      }
    }, 25);

  elem[style] = from + unit;
}

function changetoFullPage() {
  document.getElementById("middle-fade").style.display = "block";
  document.getElementById("top-sun").style.display = "block";

  document.getElementById("welcome-img").classList.add("fade");
  var element = document.getElementById("main-div");

  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 1000);

  animate(
    document.scrollingElement || document.documentElement,
    "scrollTop",
    "",
    document.body.scrollHeight,
    0,
    1000
  );

  setTimeout(() => {
    element.classList.remove("main-class");
    document.getElementById("welcome-img").remove();
    quit();
    document.getElementById("middle-fade").remove();
    document.getElementById("top-sun").remove();
    document.getElementById("fullpage").style.display = "block";
    new fullpage("#fullpage", {
      autoscrolling: true,
      anchors: ["logo", "about", "edu"],
    });
  }, 1200);
  window.dispatchEvent(new Event("resize"));
}
