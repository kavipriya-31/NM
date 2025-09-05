document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.getElementById("header");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.querySelectorAll(".nav-links a, #mobileMenu a");
    const sections = document.querySelectorAll("section");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        darkModeToggle.querySelector("i").classList.replace("bxs-moon", "bxs-sun");
    }

    // Dark mode toggle
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const icon = darkModeToggle.querySelector("i");
        icon.classList.toggle("bxs-moon");
        icon.classList.toggle("bxs-sun");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Mobile menu toggle
    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
        mobileMenu.innerHTML = document.querySelector(".nav-links").innerHTML;
    });

    // Header shadow on scroll
    window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 50));

    // Reveal animation
    const reveal = () => document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add("active");
    });
    window.addEventListener("scroll", reveal);
    reveal();

    // Highlight active nav
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(sec => {
            if (pageYOffset >= sec.offsetTop - 80) current = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) link.classList.add("active");
        });
    });

    // Contact form alert
    const contactForm = document.getElementById("contactForm");
    if (contactForm) contactForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Thank you for your message!");
        e.target.reset();
    });
});

