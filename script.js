document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
      if (
        sidebar.classList.contains("open") &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        sidebar.classList.remove("open");
      }
    });
  }

  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.style.display = "none";
        successMessage.style.display = "block";
      } else {
        alert("Submission failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  });
});
