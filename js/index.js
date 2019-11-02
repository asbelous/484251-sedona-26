var search = document.querySelector(".search");
var modal = document.querySelector(".search-form .wrap");

try {
  modal.classList.remove("modal");
  search.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.toggle("modal");
    arrival_date.focus();
  });
} catch (err) {
  modal.classList.remove("modal");
  search.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.toggle("modal");
    arrival_date.focus();
  });
}
