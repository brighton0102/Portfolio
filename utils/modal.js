/* eslint-disable func-names */
/* eslint-disable quotes */


/* eslint-disable linebreak-style */
const modal = document.getElementById('productModal');
const span = document.getElementsByClassName("close")[0];

window.addEventListener("load", function() { // when the page has loaded
  let buttons = document.querySelectorAll(".show-modal");
buttons.forEach((btn, index) => {// index will be current button index
  btn.addEventListener("click", function(e) {
    modal.style.display = "block";

    // Move creating of modal to this space
    
  });
})
  });

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
