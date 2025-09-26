const users = [
  { username: "admin", password: "123" },
  { username: "gupendra", password: "456" }
];

function loginUser(event) {
  event.preventDefault();

  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();

  console.log("Entered:", user, pass); // Debug log

  let found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
    return true;
  } else {
    alert("Invalid Username or Password");
    return false;
  }
}