document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.querySelector('form');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = reservationForm.querySelector('input[type="text"]');
            const emailInput = reservationForm.querySelector('input[type="email"]');

            if (nameInput && emailInput) {
                const userName = nameInput.value.trim();
                
                if (userName !== "") {
                    alert("Congratulations " + userName + "! Your table at The Fries Hub has been successfully booked.");
                    reservationForm.reset();
                } else {
                    alert("Please enter your name correctly.");
                }
            }
        });
    }
});