//-----Register Data-----//
function createUser() {
  const form = document.getElementById("create-user");
  const inputs = form.getElementsByTagName("input");

  fetch("https://pearls2210.herokuapp.com/place/", {
    method: "POST",
    body: JSON.stringify({
      firstname: inputs[0].value,
      lastname: inputs[1].value,
      username: inputs[2].value,
      phone_no: inputs[3].value,
      password: inputs[4].value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Client has successfully registered");
      window.location.href = "bookings.html";
      console.log(json);
      document.getElementById("reg-form").reset();
    });
}
//----END----//

//-----LOGIN DATA-----//
let Users = [];
fetch("https://pearls2210.herokuapp.com/show_registered_users/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    Users = data;
  });

function login() {
  let inputs = document.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;
  let log = Users.filter((users) => {
    return users.username == username && users.password == password
      ? true
      : false;
    console.log(log);
  });

  console.log(Users);

  if (log.length > 0) {
    alert(username + " has successfully logged in");
    window.location.href = "bookings.html";
  } else {
    alert("Please enter a valid username and password");
  }
}

// func to switch login to reg
function switchReg() {
  let login = document.getElementById("login");
  let reg = document.getElementById("reg");

  login.style.display = "none";
  reg.style.display = "grid";
}
//jquery stuff for modal
$(document).ready(function () {
  $("#account").on("click", function () {
    $("#login").addClass("hide");
    $("#login").removeClass("show");
    $("#register").addClass("show");
    $("#register").removeClass("hide");
    $(".content").addClass("high");
  });

  $("#back").on("click", function () {
    $("#login").addClass("show");
    $("#login").removeClass("hide");
    $("#register").addClass("hide");
    $("#register").removeClass("show");
    $(".content").removeClass("high");
  });
});

function store() {
  localStorage.setItem(JSON.stringify("firstname1", firstname.value));
  localStorage.setItem(JSON.stringify("lastname1", lastname.value));
  localStorage.setItem(JSON.stringify("username1", username.value));
  localStorage.setItem(JSON.stringify("phone_number1", phone_number.value));
  localStorage.setItem(JSON.stringify("password1", password.value));
}
//CHECK IF DATA IS STORED
function check() {
  let storedFirstName = localStorage.getItem("firstname1");
  let storedLastname = localStorage.getItem("lastname1");
  let storedUsername = localStorage.getItem("username1");
  let storedPhone_Number = localStorage.getItem("phonenumber1");
  let storedPassword = localStorage.getItem("password1");

  let username = document.getElementById("username");
  let userpassword = document.getElementById("password");

  if (
    username.value == storedUsername &&
    userpassword.value == storedPassword
  ) {
    alert("You ar logged in");
  } else {
    alert("ERROR");
  }
}
// let username = document.getElementById("username").value;
// localStorage.setItem("currentloggedin", JSON.stringify(username));
