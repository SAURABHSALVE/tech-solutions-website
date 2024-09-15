
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');
    
    if (name.value === '' || email.value === '' || message.value === '') {
        e.preventDefault();
        alert('All fields are required!');
    } else if (!validateEmail(email.value)) {
        e.preventDefault();
        alert('Please enter a valid email address!');
    }
});


function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}


const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = 'Top';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);


window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});


scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
