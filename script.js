document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");

  console.log("script loaded");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log("submit intercepted");

    try {
      const data = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
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
