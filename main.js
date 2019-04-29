const cat = document.querySelector("img");
let counter = 0;
const click = document.querySelector("#click");

click.textContent = counter;
cat.addEventListener("click", () => {
  counter++;
  click.textContent = counter;
});


