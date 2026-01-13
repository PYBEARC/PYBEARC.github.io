// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function closeMenu() {
  mobileNav.style.display = "none";
  mobileNav.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
}

function openMenu() {
  mobileNav.style.display = "block";
  mobileNav.setAttribute("aria-hidden", "false");
  menuBtn.setAttribute("aria-expanded", "true");
}

menuBtn?.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

mobileNav?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.tagName === "A") closeMenu();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
