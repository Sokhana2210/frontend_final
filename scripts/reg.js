function createUser() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/place/", {
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
      alert("Client has been successfully registered");
      document.getElementById("reg-form").reset();
    });
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
