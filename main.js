function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("vui long nhap username password");
    } else if (
      username == data.username &&
      password == data.password
    ) {
      window.location.href = "MainControl/index.html";
      alert("dang nhap thanh cong");
    } else {
      alert("dang nhap that bai");
    }
  }
  