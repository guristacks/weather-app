
const sec = document.querySelector("section");
const offBtn = document.querySelector("#offBtn");
const onBtn = document.querySelector("#onBtn");
const text = document.querySelector(".text");
const info = document.querySelectorAll(".info");

// DARK MODE
// OFF → ON
offBtn.addEventListener("click", () => {
  // Changes in section
  sec.classList.add("darkMode");
  sec.style.backgroundImage =
    "url('images/aerial-shot-forested-mountain-srouned-by-fog-great-fora-background-blog.jpg')";

  // Changes in boxes
  info.forEach((item) => {
    item.style.backgroundColor = "#00000042";
    item.style.color = "#fff";
  });

  // Changes in toggle btn's
  offBtn.style.display = "none";
  onBtn.style.display = "flex";
  onBtn.style.alignItems = "center";

  // Changes in P tag
  text.style.color = "#000";
});

// ON → OFF
onBtn.addEventListener("click", () => {
  // Changes in section
  sec.classList.remove("darkMode");
  sec.style.backgroundImage =
    "url('images/photorealistic-style-clouds-storm.jpg')";

  // Changes in boxes
  info.forEach((item) => {
    item.style.backgroundColor = "#ffffff17";
    item.style.color = "#fff";
  });

  // Changes in toggle btn's
  onBtn.style.display = "none";
  offBtn.style.display = "flex";

  // Changes in P tag
  text.style.color = "#fff";
});
