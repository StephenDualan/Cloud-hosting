// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send this data to your server

    document.getElementById('response').innerText = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById('contactForm').reset(); // Reset the form
});
