const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const btnnext = document.getElementById("showartbtn");
const btnprev = document.getElementById("closeartbtn");

btnnext.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "box";
});
