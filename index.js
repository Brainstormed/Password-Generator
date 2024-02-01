function generate() {
  function random() {
    return Math.floor(Math.random() * 89);
  }

  function animation() {
    output.style.animation = "none";
    setTimeout(function () {
      output.style.animation = "error 0.3s forwards ease-in-out";
    });
  }

  let length = document.getElementById("length").value;
  let output = document.getElementById("output");
  let passwdStrength = document.getElementById("passwdStrength");
  let mapRef =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()`~[]/<>,.:;\"'{}\\?";
  let mapIn = [];
  let passOut = [];
  let passStr = "";

  if (length > 0) {
    for (let i = 0; i < length; i++) {
      mapIn.push(random());
    }

    for (let i = 0; i < length; i++) {
      passOut[i] = mapRef[mapIn[i]];
    }

    for (let i = 0; i < length; i++) {
      passStr = passStr.concat(passOut[i]);
    }

    output.textContent = passStr;
    output.style.opacity = 1;
    output.style.userSelect = "all";

    if (length < 5) {
      passwdStrength.textContent = "Very Weak";
      passwdStrength.style.background = "#f0781d";
      passwdStrength.style.color = "#e4e4e4";
    } else if (length < 8) {
      passwdStrength.textContent = "Weak";
      passwdStrength.style.background = "#e6cf3e";
      passwdStrength.style.color = "#21201c";
    } else if (length < 10) {
      passwdStrength.textContent = "Good";
      passwdStrength.style.background = "#e9f582";
      passwdStrength.style.color = "#21201c";
    } else if (length < 12) {
      passwdStrength.textContent = "Strong";
      passwdStrength.style.background = "#bee04f";
      passwdStrength.style.color = "#21201c";
    } else {
      passwdStrength.textContent = "Very Strong";
      passwdStrength.style.background = "#6df54e";
      passwdStrength.style.color = "#21201c";
    }
  } else {
    output.textContent = "Please enter an proper number!";
    animation();
    output.style.opacity = 0.6;
    output.style.userSelect = "none";
    passwdStrength.textContent = "";
  }
}
