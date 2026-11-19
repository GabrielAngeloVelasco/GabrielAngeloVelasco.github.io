document.addEventListener("DOMContentLoaded", () => {
    // 1. Cyberpunk Text Scramble Effect on Hover
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

    document.querySelectorAll(".scramble-hover").forEach((el) => {
        el.dataset.original = el.innerText;

        el.addEventListener("mouseenter", (event) => {
            let iteration = 0;
            const target = event.target;
            const originalText = target.dataset.original;

            clearInterval(target.scrambleInterval);

            target.scrambleInterval = setInterval(() => {
                target.innerText = originalText
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iteration) return originalText[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(target.scrambleInterval);
                }
                iteration += 1 / 2;
            }, 25);
        });
    });

    // 2. Smooth Card Reveal on Scroll
    const cards = document.querySelectorAll(".skill-module, .data-shard, .terminal-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(16px)";
        card.style.transition = "opacity 0.45s ease, transform 0.45s ease";
        observer.observe(card);
    });
});