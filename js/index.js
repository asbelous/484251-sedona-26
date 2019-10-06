var search = document.querySelector(".search");
var modal = document.querySelector(".search-form .wrap");
var form = document.querySelector("form");
var form = modal.querySelector("form");
var arrivalDate = modal.querySelector("#arrival-date");
var departureDate = modal.querySelector("#departure-date");
var numberOfAdults = modal.querySelector("#number-of-adults");
var numberOfChildren = modal.querySelector("#number-of-children");
var storageNumberOfAdults = localStorage.getItem("number-of-adults");
var storageNumberOfChildren = localStorage.getItem("number-of-children");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("number-of-adults");
} catch (err) {
  isStorageSupport = false;
}


search.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal");
  // form.classList.add("modal");
  arrival_date.focus();
  if (storageNumberOfAdults) {
    numberOfAdults.value = storageNumberOfAdults;
  }
  if (storage_number_of_children) {
    numberOfChildren.value = storageNumberOfChildren;
  }
});

form.addEventListener("submit", function (evt) {
  if (arrivalDate.value || departureDate.value) {
    if (isStorageSupport) {
      localStorage.setItem("number-of-adults". numberOfAdults.value);
      localStorage.setItem("number-of-children", numberOfChildren.value);
    }
  }
});
