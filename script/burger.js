
  const burger = document.getElementById("burger");
  const nav = document.getElementById("navMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // закривати меню при кліку на лінк
  document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("active");
    });
  });