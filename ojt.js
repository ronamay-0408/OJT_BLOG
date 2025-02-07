document.querySelector('.search-input').addEventListener('input', function () {
    let query = this.value.toLowerCase().replace(/\s+/g, '-'); // Convert spaces to hyphens
    let sections = document.querySelectorAll('section'); // Get all sections

    sections.forEach(section => {
        if (section.id.includes(query)) {
            section.style.display = 'block'; // Show matching sections
        } else {
            section.style.display = 'none'; // Hide non-matching sections
        }
    });
});