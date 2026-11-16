console.log("%c[SYSTEM INITIALIZED] Connection established.", "color: #00ffcc; font-size: 14px; font-family: monospace; font-weight: bold;");
console.log("%cHello! I'm Gabriel. If you're reading this, you probably inspect code like I do. Let's build something awesome!", "color: #e0e0e0; font-size: 12px; font-family: monospace;");

// Smooth Scrolling para sa mga In-Page Links (tulad ng 'View My Projects' button)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Pinipigilan nito ang default na biglaang pagtalon ng webpage
        e.preventDefault(); 
        
        // Kinukuha ang id ng section na pupuntahan (hal. #projects)
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Inuutusan ang browser na mag-scroll nang banayad papunta sa target section
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});