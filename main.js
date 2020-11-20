function validation() {
  var email = document.getElementById("username").value;
  var password = document.getElementsByClassName("user-input").value;
  var error = document.getElementById("error");
  var text;
  error.style.padding = "10px";

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "please enter valid email";
    error.innerHTML = text;
    return false;
  }

  if (password < 5) {
    text = "please enter a valid password";
    error.innerHTML = text;
    return false;
  }

  function call() {
    text = "form submitted successfully";
    error.innerHTML = text;
    error.style.backgroundColor = "green";
    return true;
  }

  call();
}
