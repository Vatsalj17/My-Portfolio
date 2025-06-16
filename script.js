const form = document.getElementById("contact-form")
const response = document.getElementById("response")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("clicked")
    emailjs.sendform("service_246oou8", "template_kihjt91", this).then(
        () => {
            response.innerHTML = "Message sent successfully!"
            form.reset()
        },
        (error) => {
            response.innerHTML = "Failed to send: " + error.text
        }
    )
})
