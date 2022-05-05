const switcher = document.querySelector(".dark-theme-switcher-checkbox");

console.log(switcher);

switcher.addEventListener("input", () => {
  document.body.classList.toggle("dark");
  console.log(212);
});
