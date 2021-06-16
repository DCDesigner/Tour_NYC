// Code to email the completed form was found at https://www.emailjs.com/docs/
// Code for the alert message was found at https://sweetalert2.github.io/


(function() {
    emailjs.init("user_PisMKJDTsgwTMDGU6qDdp");
})();

function sendMail(contactForm) {
    emailjs
        .send("service_2r9e394", "Tour_NYC", {
            from_email: contactForm.emailaddress.value,
        })
        .then(
            function() {
                Swal.fire({
                    title: "Thanks for signing up!",
                    text: "You'll now start recieving our weekly newsletter",
                    icon: "success",
                    button: "Done",
                });
            },
            function(error) {
                Swal.fire({
                    title: "Oops, it looks like something went wrong.",
                    text: "Please try again",
                    icon: "error",
                    button: "Ok",
                });
            }
        );
    document.getElementById("contactForm").reset();
    return false;
}