const search = document.querySelector("#search");
const button = search.querySelector("#btn");
const input = search.querySelector("#search-input");

btn.addEventListener("click", toggleActiveClass);

function toggleActiveClass() {
    search.classList.toggle("active");
    input.focus();
}
