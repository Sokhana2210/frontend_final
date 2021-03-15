function bookClient() {
  const inputs = document.getElementsByTagName("input");

  fetch("https://pearls2210.herokuapp.com//insert/", {
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
// if (log.length > 0) {
//   alert(uname + " has successfully logged in");
//   window.location.href = "bookings.html";
// } else {
//   alert("Please Sign-In or Register to make a BOOKING");
// }
