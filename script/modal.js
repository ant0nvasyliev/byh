const modal = document.getElementById("modal");
const slidesContainer = document.getElementById("slides");
const closeModal = document.getElementById("closeModal");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

// 🔥 OPEN CARD -> BUILD SLIDER
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {

    const images = card.dataset.images
      .split(",")
      .map(img => img.trim())
      .filter(img => img !== "");

    slidesContainer.innerHTML = "";

    images.forEach(src => {
      const wrapper = document.createElement("div");
      wrapper.style.minWidth = "100%";
      wrapper.style.height = "100%";
      wrapper.style.flexShrink = "0";
      wrapper.style.position = "relative";

      const img = document.createElement("img");
      img.src = src;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";

      wrapper.appendChild(img);
      slidesContainer.appendChild(wrapper);
    });

    currentIndex = 0;
    updateSlider();

    modal.classList.add("active");
  });
});

// 🔥 CLOSE BUTTON
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// 🔥 CLOSE ON BACKDROP CLICK
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// 🔥 SLIDER CORE
function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// NEXT
next.addEventListener("click", () => {
  const total = slidesContainer.children.length;
  currentIndex = (currentIndex + 1) % total;
  updateSlider();
});


prev.addEventListener("click", () => {
  const total = slidesContainer.children.length;
  currentIndex = (currentIndex - 1 + total) % total;
  updateSlider();
});