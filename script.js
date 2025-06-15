function scrollToSection(id) {
const section = document.getElementById(id);
if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
}
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
e.preventDefault();
alert('Message sent successfully!');
this.reset();
});
