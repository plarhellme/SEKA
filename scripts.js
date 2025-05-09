document.addEventListener("DOMContentLoaded", function () {
    // Fade-in functionality for text and divs
    const fadeInElements = document.querySelectorAll(".fade-in-text, .fade-in-div");

    // Intersection Observer for fade-in elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    fadeInElements.forEach((el) => observer.observe(el));

    // New fade-in functionality for opposite directions
    const fadeInLeftElements = document.querySelectorAll(".fade-in-left");
    const fadeInRightElements = document.querySelectorAll(".fade-in-right");

    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const oppositeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry.target, entry.isIntersecting); // Debugging log
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    fadeInLeftElements.forEach((el) => oppositeObserver.observe(el));
    fadeInRightElements.forEach((el) => oppositeObserver.observe(el));
});