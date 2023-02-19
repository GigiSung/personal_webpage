var form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.querySelector("#name");
  var email = document.querySelector("#email");
  var message = document.querySelector("#message");

  if (name.value === "") {
    document.querySelector("#nameError").innerHTML = "Name is required";
  } else {
    document.querySelector("#nameError").innerHTML = "";
  }

  if (email.value === "") {
    document.querySelector("#emailError").innerHTML = "Email is required";
  } else {
    document.querySelector("#emailError").innerHTML = "";
  }

  if (message.value === "") {
    document.querySelector("#messageError").innerHTML = "Message is required";
  } else {
    document.querySelector("#messageError").innerHTML = "";
  }

  if (name.value !== "" && email.value !== "" && message.value !== "") {
    form.submit();
    // redirect to thank you page
    window.location.replace("thank-you.html");
  }
});
