
function loginUser(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if(user === "admin" && pass === "admin") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Try admin/admin.");
  }
}

function showAlert() {
  alert("Button clicked! Add your custom action here.");
}
