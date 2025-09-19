document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formMessage.innerHTML = `<p style="color:green;font-weight:bold;">Thank you! Your message has been submitted.</p>`;
      form.reset();
    });
  }
});
