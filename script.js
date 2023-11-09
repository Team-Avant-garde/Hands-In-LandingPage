function toggleMenu() {
    const tabs = document.querySelector('.tabs');
    tabs.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function () {
    let currentSection = 0;

    function moveToSection(sectionIndex) {
        const sections = document.querySelector('.sections');
        currentSection = sectionIndex;
        sections.style.transform = `translateY(-${sectionIndex * 100}vh)`;
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown' && currentSection < 4) {
            moveToSection(currentSection + 1);
        } else if (event.key === 'ArrowUp' && currentSection > 0) {
            moveToSection(currentSection - 1);
        }
    });
});


const text1 = "The Mobile App to connect you with you helper.";
const text2 = "";

let charIndex1 = 0;
let charIndex2 = 0;

function type() {
    const typingText = document.getElementById('typing-text');

    if (charIndex1 < text1.length) {
        typingText.innerHTML = `${text1.slice(0, charIndex1++)}`;
    } else if (charIndex2 < text2.length) {
        typingText.innerHTML = `${text1}<br>${text2.slice(0, charIndex2++)}`;
    }

    if (charIndex1 <= text1.length || charIndex2 <= text2.length) {
        setTimeout(type, 100);
    }
}

type();


const mobile = document.getElementById('tilting-mobile');

mobile.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    mobile.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

mobile.addEventListener('mouseleave', () => {
    mobile.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
