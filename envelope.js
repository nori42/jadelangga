const innerPolygon = document.getElementById("inner-polygon");
const outer = document.getElementById("outer");
const closeBtn = document.getElementById("close-btn");
const message2 = document.getElementById("message-2");
const heartsRow = document.querySelectorAll(".hearts-row");
const heartBtn = document.getElementById("heart-btn");
const flower = document.getElementById("flower");

function toggleEnvelope() {
  innerPolygon.classList.toggle("inner-open");
  outer.classList.toggle("outer-open");
  heartBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  message2.classList.toggle("show");
  flower.classList.toggle("hide");

  heartsRow.forEach((element) => element.classList.toggle("animated"));
}
