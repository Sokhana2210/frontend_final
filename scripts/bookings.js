function bookClient() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/insert/", {
    method: "POST",
    body: JSON.stringify({
      firstname: inputs[0].value,
      lastname: inputs[1].value,
      phone_number: inputs[2].value,
      category: inputs[3].value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Booking has been successfully made");
      let bookingForm = document.getElementById("bookingForm");
      bookingForm.reset();
    });
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
