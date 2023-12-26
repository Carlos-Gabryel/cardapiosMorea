document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("topBtn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  mybutton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let backButton = document.getElementById("backBtn");

  backButton.addEventListener("click", function () {
    window.location.href = "../index.html";
  });
});
