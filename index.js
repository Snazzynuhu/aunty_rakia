const toggle_btn = document.getElementById("toggle_btn");
const paragraph_content = document.querySelector(".content");
const slider = document.querySelector(".slider");
const light_instruct = document.querySelector(".light_instruct");
toggle_btn.addEventListener("click", () => {
  document.body.classList.toggle("light_mode");
  paragraph_content.classList.toggle("light_mode");
  slider.classList.toggle("move_slider");
  light_instruct.textContent = "Dark mode";
  light_instruct.classList.toggle("dark_struct");
});
