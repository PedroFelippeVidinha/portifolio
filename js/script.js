// Menu Icon Navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


// Scroll Sections Active Link
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active')
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active')
            })
        }
    })

    // Stick Navbar
    let header = document.querySelector('.header')
    header.classList.toggle('sticky', window.scrollY > 100)


    // Remove menu icon navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}


// Dark light mode
let darkModeIcon = document.querySelector("#darkMode-icon")

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun')
    document.body.classList.toggle('dark-mode')
}

// Check if is night and set dark mode
const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20
if(!isDayTime) {
    darkModeIcon.classList.toggle('bx-sun')
    document.body.classList.toggle('dark-mode')
}



// Scroll Reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading, .header', {origin: 'top'})
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', {origin: 'bottom'})

ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'})

ScrollReveal().reveal('.home-content h2, .home-content h3, .home-content p, .about-content, .profession-container', {origin: 'right'})


// envio das mensagens

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const number = document.getElementById("number").value
    const subject = document.getElementById("subject").value

    const message = document.getElementById("message").value

    const content = `
    Mensagem recebida de ${name} - ${email} - ${number}
    Assunto: ${subject}

    Mensagem : ${message}
    `
    fetch("https://discord.com/api/webhooks/1187192432606060624/Bx0ZDpIhaQthJZH-rk1ZXlitwe12NpSz8ACOuQbzQCxCZgsL9aiMVN53wPzmygB3oOUR", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content
        })
    }).then(()=> {
        window.scroll(0, 0)
        
        alert("Mensagem recebida, Entrarei em contato o mais breve possivel, Obrigado")

    })
})