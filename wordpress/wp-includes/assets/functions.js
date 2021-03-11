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

function delete_cookie(name) {
  document.cookie = name + '=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}