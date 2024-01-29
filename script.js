const form = document.querySelector("form");
const email = document.querySelector("#mail");
const emailError = document.querySelector("#mail + span.error");

const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");

const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + span.error");

const pass = document.querySelector("#pass");
const passError = document.querySelector("#pass + span.error");

const passConf = document.querySelector("#pass-conf");
const passConfError = document.querySelector("#pass-conf + span.error");

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    emailError.textContent = "Entered value needs to be an email address";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters.`;
  }
}

country.addEventListener("input", (e) => {
  if (country.validity.valid) {
    countryError.textContent = "";
  } else {
    showCountryError();
  }
});

function showCountryError() {
  if (country.validity.valueMissing) {
    // If field is empty
    countryError.textContent = "You need to enter a country";
  } else if (country.validity.tooShort) {
    countryError.textContent = `Country should be at least ${country.minLength}`;
  }
}

zip.addEventListener("input", (e) => {
  if (zip.validity.valid) {
    zipError.textContent = "";
  } else {
    showZipError();
  }
});

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = "You need to enter a zip code";
  } else if (zip.validity.patternMismatch) {
    zipError.textContent = "Please enter 5 numbers only";
  }
}

pass.addEventListener("input", (e) => {
  if (pass.validity.valid) {
    passError.textContent = "";
  } else {
    showPassError();
  }
});

function showPassError() {
  if (pass.validity.valueMissing) {
    passError.textContent = "You need to enter a password";
  } else if (pass.validity.tooShort) {
    passError.textContent = `Pass should be of length ${pass.minLength}`;
  }
}

passConf.addEventListener("input", (e) => {
  if (passConf.value != pass.value) {
    passConfError.textContent = "Passwords do not match";
  } else if (passConf.validity.valid) {
    passConfError.textContent = "";
  } else {
    showPassConfError();
  }
});

function showPassConfError() {
  if (passConf.validity.valueMissing) {
    passConfError.textContent = "You need to enter the password confirmation";
  }
}
