const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const quoteForm = document.querySelector("#quoteForm");

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(quoteForm);
  const name = formData.get("name") || "";
  const phone = formData.get("phone") || "";
  const message = formData.get("message") || "";
  const text = `Hello, I am ${name}. Phone: ${phone}. Requirement: ${message}`;
  window.open(`https://wa.me/918690599990?text=${encodeURIComponent(text)}`, "_blank", "noreferrer");
  quoteForm.reset();
});
