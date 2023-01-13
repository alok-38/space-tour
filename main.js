const fields = {};

document.addEventListener("DOMContentLoaded", function () {
  fields.fullName = document.getElementById("fullName");
  fields.email = document.getElementById("email");
  fields.message = document.getElementById("message");
});

function isNotEmpty(value) {
  if (value === null || typeof value === "undefined") return false;
  return value.length > 0;
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}

function isValid() {
  var valid = true;

  valid &= fieldValidation(fields.fullName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  return valid;
}

class User {
  constructor(fullName, email, message) {
    this.fullName = fullName;
    this.email = email;
    this.message = message;
  }
}

// Sending the contact form data with JavaScript
function sendContact() {
  if (isValid()) {
    let user = new User(fullName.value, email.value, message.value);
    alert(`${user.fullName} thanks for your message`);
  } else {
    alert(`Stay wherever you are`);
  }
}
