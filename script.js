function toggleMenu() {
    const tabs = document.querySelector('.tabs');
    tabs.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function() {
    let currentSection = 0;

    function moveToSection(sectionIndex) {
        const sections = document.querySelector('.sections');
        currentSection = sectionIndex;
        sections.style.transform = `translateY(-${sectionIndex * 100}vh)`;
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown' && currentSection < 4) {
            moveToSection(currentSection + 1);
        } else if (event.key === 'ArrowUp' && currentSection > 0) {
            moveToSection(currentSection - 1);
        }
    });
});
