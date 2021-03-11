window.addEventListener("DOMContentLoaded", login, false)


function login(e) {
  /**
   * Login then prepare all functions
   */
  fetch('http://172.118.18.62:8008/api/login', {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: 'POST',
      body: JSON.stringify({
        email: "admin@admin.com",
        password: "password"
      })
    })
    .then((response) => response.json())
    .then((response) => {
      let token = response.data.token;

      setCookie('token', token, 365);
    });
};

function setCookie(cookie, value, duration) {
  var d = new Date();
  d.setTime(d.getTime() + (duration * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookie + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cookie) {
  var name = cookie + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

function checkCookie(cookie) {
  var user = getCookie(cookie);
  if (user != "") {
    return true;
  } else {
    return false;
  }
}