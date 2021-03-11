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