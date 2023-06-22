$(document).ready(function () {
//   cards scroll animation/////////////////////
  AOS.init({
    duration: 2000,
    });

    //    variables

    let accommodation = ['HOTEL', 'HOTEL with BREAKFAST', 'MOTEL', 'MOTEL WITH BREAKFAST', 'HOSTEL', 'HOSTEL WITH BREAKFAST', 'HOUSE', 'HOUSE WITH BREAKFAST'];
    let accomImages = ["images/hotel.png", "images/motel.png", "images/hostel.png", "images/house.png"];
    let unitPrice = [157, 177, 90, 110, 30, 50, 240, 260];
    let choice = document.getElementById("yourChoice");
    let choiceSum = document.getElementById("choiceSum");
    let nopSum = document.getElementById("peopleSum");
    let nightSum = document.getElementById("number-of-nights");
    let peopelNum = document.getElementById("peopleNum");
    let peopleWarn = document.getElementById("people-warn");
    let nightNum = document.getElementById("nightNum");
    let nightWarn = document.getElementById("night-warn");
    let price = document.getElementById("price");

    document.getElementById("hotel").addEventListener("click", function () {
        choice.textContent = accommodation[0];
        // accommodation summary
        choiceSum.textContent = accommodation[0];
        // image summary
        document.getElementById("summary-img").src = accomImages[0];
        // number of people
        peopelNum.addEventListener('keyup', function () {
            if (peopelNum.value > 2) {
                peopleWarn.innerText = 'The maximum number for hotel is 2.';
                peopleWarn.style.color = "red";
            } else {
                peopleWarn.innerText = peopelNum.value + ' people are staying';
                peopleWarn.style.color = "#568f47";
            }
            nopSum.innerText = peopelNum.value + '    people(person)';
        });

        $("#nightNum").keyup(function () {
            if (nightNum.value > 5) {
                nightWarn.innerText = 'The maximum number of nights is 5.';
                nightWarn.style.color = "red";
            } else {
                nightWarn.innerText = 'You are staying ' + nightNum.value + ' nights';
                nightWarn.style.color = "#568f47";
            }
            nightSum.innerHTML = nightNum.value + '   nights';
            price.innerText = 'Total : ' + ' NZ$' + unitPrice[0] * nightNum.value;
        });
    });

    document.getElementById("hotel-brf").addEventListener("click", function () {
        choice.textContent = accommodation[1];
        choiceSum.textContent = accommodation[1];
        document.getElementById("summary-img").src = accomImages[0];
        peopelNum.addEventListener('keyup', function () {
            if (peopelNum.value > 2) {
                peopleWarn.innerText = 'The maximum number for hotel is 2.';
                peopleWarn.style.color = "red";
            } else {
                peopleWarn.innerText = peopelNum.value + ' people are staying';
                peopleWarn.style.color = "#568f47";
            }

            nopSum.innerText = peopelNum.value + '    people(person)';
        });
        $("#nightNum").keyup(function () {
            if (nightNum.value > 5) {
                nightWarn.innerText = 'The maximum number of nights is 5.';
                nightWarn.style.color = "red";
            } else {
                nightWarn.innerText = 'You are staying ' + nightNum.value + ' nights';
                nightWarn.style.color = "#568f47";
            }

            nightSum.innerHTML = nightNum.value + '   nights';
            price.innerText = 'Total : ' + 'NZ$' + unitPrice[1] * nightNum.value;
        });
    });

    document.getElementById("motel").addEventListener("click", function () {
        choice.textContent = accommodation[2];
        choiceSum.textContent = accommodation[2];
        document.getElementById("summary-img").src = accomImages[1];

        peopelNum.addEventListener('keyup', function () {
            if ((peopelNum.value < 2) || (peopelNum.value > 4)) {
                peopleWarn.innerText = 'Motel is for 2-4 people.';
                peopleWarn.style.color = "red";
            } else {
                peopleWarn.innerText = peopelNum.value +  'people are staying';
                peopleWarn.style.color = "#568f47";
            }

            nopSum.innerText = peopelNum.value + '    people(person)';
        });

        $("#nightNum").keyup(function () {
            if (nightNum.value < 3) {
                nightWarn.innerText = 'The minimum number of nights is 3.';
                nightWarn.style.color = "red";
            } else if (nightNum.value > 10) {
                nightWarn.innerText = 'The maximum number of nights is 10.';
                nightWarn.style.color = "red";
            } else {
                nightWarn.innerText = 'You are staying ' + nightNum.value + ' nights';
                nightWarn.style.color = "#568f47";
            }

            nightSum.innerHTML = nightNum.value + '   nights';
            price.innerText = 'Total : ' + ' NZ$' + unitPrice[2] * nightNum.value;
        });
    });

    document.getElementById("motel-brf").addEventListener("click", function () {
        choice.textContent = accommodation[3];
        choiceSum.textContent = accommodation[3];
        document.getElementById("summary-img").src = accomImages[1];

        peopelNum.addEventListener('keyup', function () {
            if ((peopelNum.value < 2) || (peopelNum.value > 4)) {
                peopleWarn.innerText = 'Motel is for 2-4 people.';
                peopleWarn.style.color = "red";
            } else {
                peopleWarn.innerText = peopelNum.value + ' people are staying';
                peopleWarn.style.color = "#568f47";

            }

            nopSum.innerText = peopelNum.value + '    people(person)';
        });

        $("#nightNum").keyup(function () {
            if (nightNum.value < 3) {
                nightWarn.innerText = 'The minimum number of nights is 3.';
                nightWarn.style.color = "red";
            } else if (nightNum.value > 10) {
                nightWarn.innerText = 'The maximum number of nights is 10.';
                nightWarn.style.color = "red";
            } else {
                nightWarn.innerText = 'You are staying ' + nightNum.value + ' nights';
                nightWarn.style.color = "#568f47";
            }

            nightSum.innerHTML = nightNum.value + '   nights';
            price.innerText = 'Total : ' + ' NZ$' + unitPrice[3] * nightNum.value;
        });
    });

    document.getElementById("hostel").addEventListener("click", function () {
        choice.textContent = accommodation[4];
        choiceSum.textContent = accommodation[4];
        document.getElementById("summary-img").src = accomImages[2];

        peopelNum.addEventListener('keyup', function () {
            if (peopelNum.value > 1) {
                peopleWarn.innerText = 'Hostel is for 1 person.';
                peopleWarn.style.color = "red";
            } else {
                peopleWarn.innerText = peopelNum.value + ' person is staying';
                peopleWarn.style.color = "#568f47";
            }

            nopSum.innerText = peopelNum.value + '    people(person)';
        });

        $("#nightNum").keyup(function () {
            if (nightNum.value > 10) {
                nightWarn.innerText = 'The maximum number of nights is 10.';
                nightWarn.style.color = "red";
            } else {
                nightWarn.innerText = 'You are staying ' + nightNum.value + ' nights';
                nightWarn.style.color = "#568f47";

            }
            nightSum.innerHTML = nightNum.value + '   nights';
            price.innerText = 'Total : ' + ' NZ$' + unitPrice[4] * nightNum.value;
        });
    });


    document.getElementById("hostel-brf").addEventListener("click", function () {
        choice.textContent = accommodation[5];
        choiceSum.textContent = accommodation[5];
        document.getElementById("summary-img").src = accomImages[2];

        peopelNum.addEventListener('keyup', function () {
            if (peopelNum.value > 1) {
                peopleWarn.innerText = 'Hostel is for 1 person.';
                peopleWarn.style.color = "red";
            } else {
                peopleWarn.innerText = peopelNum.value + ' person is staying';
                peopleWarn.style.color = "#568f47";
            }

            nopSum.innerText = peopelNum.value + '    people(person)';
         });

        $("#nightNum").keyup(function () {
            if (nightNum.value > 10) {
                nightWarn.innerText = 'The maximum number of nights is 10.';
                nightWarn.style.color = "red";
            } else {
                nightWarn.innerText = 'You are staying ' + nightNum.value + ' nights';
                nightWarn.style.color = "#568f47";
            }
            nightSum.innerHTML = nightNum.value + '   nights';
            price.innerText = 'Total : ' + ' NZ$' + unitPrice[5] * nightNum.value;
        });
    }
    );

    document.getElementById("house").addEventListener("click", function () {
        choice.textContent = accommodation[6];
        choiceSum.textContent = accommodation[6];
        document.getElementById("summary-img").src = accomImages[3];

        peopelNum.addEventListener('keyup', function () {
            if (peopelNum.value > 4) {
                peopleWarn.innerText = 'House is for 1-4 people.';
                peopleWarn.style.color = "red";
            } else {
                peopleWarn.innerText = peopelNum.value + ' people are staying.';
                peopleWarn.style.color = "#568f47";
            }
            nopSum.innerText = peopelNum.value + '    people(person)';
        });

        $("#nightNum").keyup(function () {
            if (nightNum.value < 2) {
                nightWarn.innerText = 'The minimum number of nights is 2.';
                nightWarn.style.color = "red";
            } else if (nightNum.value > 15) {
                nightWarn.innerText = 'The maximum number of nights is 15.';
                nightWarn.style.color = "red";

            } else {
                nightWarn.innerText = 'You are staying ' + nightNum.value + ' nights';
                nightWarn.style.color = "#568f47";
            }
            nightSum.innerHTML = nightNum.value + '   nights';
            price.innerText = 'Total : ' + ' NZ$' + unitPrice[6] * nightNum.value;
        }
        );

    });

    document.getElementById("house-brf").addEventListener("click", function () {
        choice.textContent = accommodation[7];
        choiceSum.textContent = accommodation[7];
        document.getElementById("summary-img").src = accomImages[3];

        peopelNum.addEventListener('keyup', function () {
            if (peopelNum.value > 4) {
                peopleWarn.innerText = 'House is for 1-4 people.';
                peopleWarn.style.color = "red";
            } else {
                peopleWarn.innerText = peopelNum.value + ' people are staying.';
                peopleWarn.style.color = "#568f47";

            }
            nopSum.innerText = peopelNum.value + '    people(person)';
        });

        $("#nightNum").keyup(function () {
            if (nightNum.value < 2) {
                nightWarn.innerText = 'The minimum number of nights is 2.';
                nightWarn.style.color = "red";
            } else if (nightNum.value > 15) {
                nightWarn.innerText = 'The maximum number of nights is 15.';
                nightWarn.style.color = "red";

            } else {
                nightWarn.innerText = 'You are staying ' + nightNum.value + ' nights';
                nightWarn.style.color = "#568f47";
            }
            nightSum.innerHTML = nightNum.value + '   nights';
            price.innerText = 'Total : ' + ' NZ$' + unitPrice[7] * nightNum.value;
        }
        );
    });

    $(".submit").click(function () {
        $("#confirm").fadeIn(3000);
    });

    // form validation
    $("#bookingForm").validate();
    rules: {
        phoneNumber: { phoneUS: true; }
    }

});


