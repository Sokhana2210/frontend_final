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
