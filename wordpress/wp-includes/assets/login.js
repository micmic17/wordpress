window.addEventListener("DOMContentLoaded", login, false)


function login(e) {
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