const countdown = () => {
    const launchDate = new Date("December 31, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

setInterval(countdown, 1000);

// hide loader when page fully loads
window.addEventListener("load", () => {
    document.getElementById("loader").classList.add("hidden");
});

const generateStars = (count) => {
    const starsContainer = document.querySelector(".stars");

    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
};

generateStars(100);

const generateShootingStars = (count) => {
    const shootingStarsContainer = document.querySelector(".shooting-stars");

    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("shooting-star");
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        shootingStarsContainer.appendChild(star);
    }
};

generateShootingStars(5);

// parallax effect on stars
document.addEventListener("mousemove", (e) => {
    const stars = document.querySelectorAll(".star");
    let xOffset = (e.clientX / window.innerWidth - 0.5) * 20;
    let yOffset = (e.clientY / window.innerHeight - 0.5) * 20;

    stars.forEach((star, index) => {
        let depth = (index % 5) + 1;
        star.style.transform = `translate(${xOffset * depth * 0.1}px, ${yOffset * depth * 0.1}px)`;
    });
});
