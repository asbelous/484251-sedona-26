var search = document.querySelector(".search");
var modal = document.querySelector(".search-form .wrap");
var arrivalDate = modal.querySelector("#arrival-date");
var departureDate = modal.querySelector("#departure-date");
var numberOfAdults = modal.querySelector("#number-of-adults");
var numberOfChildren = modal.querySelector("#number-of-children");
var storageNumberOfAdults = localStorage.getItem("numberOfAdults");
var storageNumberOfChildren = localStorage.getItem("numberOfChildren");

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
      localStorage.setItem("numberOfAdults". staorageNumberOfAdults.value);
      localStorage.setItem("numberOfChildre", storageNumberOfChildren.value);
    }
  }
});
