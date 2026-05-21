const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const dots = [];
const DOT_COUNT = 80;
for (let i = 0; i < DOT_COUNT; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5
    });
}
function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();
    });
    requestAnimationFrame(drawParticles);
}
drawParticles();
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
const text = "KIM DONGGUN";
const target = document.getElementById("typing");
let index = 0;
function type() {
    if (index < text.length) {
        target.textContent = text.substring(0, index + 1);
        target.innerHTML += '<span class="cursor">|</span>';
        index++;
        setTimeout(type, 150);
    } else {
        document.querySelector("#hero p").classList.add("show");
    }
}
type();
document.querySelectorAll(".card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.15}s`;
});
document.querySelectorAll(".skill-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.15}s`;
});
document.querySelectorAll(".project-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.15}s`;
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {threshold: 0.3 });
document.querySelectorAll(".about-info, .skill-card, .project-card, .mil-info, .card, .mil-award, .cert-card").forEach(el => {
    observer.observe(el);
});
document.querySelectorAll(".cert-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.15}s`;
});

