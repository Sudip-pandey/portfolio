// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Custom Cursor Logic
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(cursorBlur, { x: e.clientX, y: e.clientY, duration: 0.8 });
});

document.querySelectorAll('a, button, .project-card, .social-icon').forEach(el => {
    el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 1.5, borderColor: '#58a6ff', backgroundColor: 'rgba(88, 166, 255, 0.1)' }));
    el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, borderColor: '#58a6ff', backgroundColor: 'transparent' }));
});


// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active'); // For hamburger animation
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});

// JSON Content to Type
const jsonProfile = [
    '<span class="bracket">{</span>',
    '  <span class="key">"Full Name"</span><span class="colon">:</span> <span class="string">"Pandey Sudip"</span>,',
    '  <span class="key">"username"</span><span class="colon">:</span> <span class="string">"@whiospandey"</span>,',
    '  <span class="key">"Date Of Birth"</span><span class="colon">:</span> <span class="string">"2004-04-11"</span>,',
    '  <span class="key">"Pronouns"</span><span class="colon">:</span> <span class="string">"He | Him"</span>,',
    '  <span class="key">"Age"</span><span class="colon">:</span> <span class="number">22</span>,',
    '  <span class="key">"Education"</span><span class="colon">:</span> <span class="string">"High School Completed"</span>,',
    '  <span class="key">"Languages"</span><span class="colon">:</span> <span class="bracket">[</span> <span class="string">"C"</span>, <span class="string">"C++"</span>, <span class="string">"Py"</span>, <span class="string">"JS"</span> <span class="bracket">]</span>,',
    '  <span class="key">"Frameworks"</span><span class="colon">:</span> <span class="bracket">[</span> <span class="string">"Django"</span>, <span class="string">"Laravel"</span>, <span class="string">"React"</span> <span class="bracket">]</span>,',
    '  <span class="key">"Hobbies"</span><span class="colon">:</span> <span class="bracket">[</span> <span class="string">"Coding"</span>, <span class="string">"Coffee"</span>, <span class="string">"Research"</span> <span class="bracket">]</span>,',
    '  <span class="key">"Needs"</span><span class="colon">:</span> <span class="bracket">[</span>',
    '    <span class="bracket">{</span> <span class="key">"coffee"</span><span class="colon">:</span> <span class="string">"^1.0.0"</span> <span class="bracket">}</span>,',
    '    <span class="bracket">{</span> <span class="key">"music"</span><span class="colon">:</span> <span class="string">"Lo-Fi"</span> <span class="bracket">}</span>,',
    '    <span class="bracket">{</span> <span class="key">"internet"</span><span class="colon">:</span> <span class="string">"100mbps"</span> <span class="bracket">}</span>',
    '  <span class="bracket">]</span>',
    '<span class="bracket">}</span>'
];

// Populate Line Numbers
const lineNumbersContainer = document.querySelector('.line-numbers');
jsonProfile.forEach((_, index) => {
    lineNumbersContainer.innerHTML += `<div>${index + 1}</div>`;
});

// Typing Animation
const typeTarget = document.getElementById('typewriter-target');
let lineIndex = 0;
let charIndex = 0;
let currentLine = '';
let isTag = false;

function typeLine() {
    if (lineIndex < jsonProfile.length) {
        // Just append the full HTML line at once for cleaner code syntax coloring animation 
        // Real-time character typing with syntax highlighting is complex and buggy without a heavy library.
        // Instead, we will "type" the line by revealing it.
        // Actually, let's just append the HTML string with a small delay for each line to simulate "fast coding"

        const line = document.createElement('div');
        line.innerHTML = jsonProfile[lineIndex];
        line.style.opacity = 0;
        line.style.transform = 'translateY(10px)';
        typeTarget.appendChild(line);

        gsap.to(line, {
            opacity: 1,
            y: 0,
            duration: 0.1, // Fast typing effect per line
            ease: "power1.out",
            onComplete: () => {
                lineIndex++;
                setTimeout(typeLine, 50); // Delay between lines
            }
        });
    }
}

// Initial Animation Sequence
const tl = gsap.timeline();

tl.from(".terminal-window", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
})
    .add(typeLine)
    .from(".scroll-indicator", {
        opacity: 0,
        y: 20,
        duration: 1
    }, "+=2");

// Scroll Animations
gsap.utils.toArray('.glass, .section-title').forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Staggered Animations for lists - REMOVED to prevent visibility issues
// The parent .skill-category (which has .glass class) already animates in.
// If we want staggered children, we should chain it or use a single timeline, but for robustness we rely on parent entry.

