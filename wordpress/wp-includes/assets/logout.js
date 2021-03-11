window.addEventListener("DOMContentLoaded", logout, false)


function logout(e) {
  if (checkCookie('token')) {
    let token = getCookie('token');

    fetch('http://172.118.18.62:8008/api/logout', {
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        }),
        method: 'POST',
      })
      .then((response) => response.json())
      .then((response) => {
        delete_cookie('token');
      });
  }
};

function delete_cookie(name) {
  document.cookie = name + '=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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