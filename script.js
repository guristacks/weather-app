const sec = document.querySelector("section");
const offBtn = document.querySelector("#offBtn");
const onBtn = document.querySelector("#onBtn");
const text = document.querySelector(".text")

// OFF → ON
offBtn.addEventListener("click", () => {
  sec.classList.add("darkMode");
   sec.style.backgroundImage = "url('images/aerial-shot-forested-mountain-srouned-by-fog-great-fora-background-blog.jpg')"
  offBtn.style.display = "none";
  onBtn.style.display = "flex";
  text.style.color = "#000";
});

// ON → OFF
onBtn.addEventListener("click", () => {
  sec.classList.remove("darkMode");
  sec.style.backgroundImage = "url('images/photorealistic-style-clouds-storm.jpg')"
  onBtn.style.display = "none";
  offBtn.style.display = "flex";
  text.style.color = "#ffff";
});