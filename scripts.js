document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      document.getElementById("popup").style.display = "block";
      setTimeout(() => {
        document.getElementById("popup").style.display = "none";
        form.reset();
      }, 3000);
    } else {
      alert("Message failed to send. Try again.");
    }
  });
});
