function sendMail(event, contactForm) {
    event.preventDefault()

    const data = {
        from_name: event.target.fullname.value,
        from_email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
    }

    // console.log(data)

    emailjs.send("service_2r9e394", "Tour_NYC", data)
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );

}